import orderMoraService from '../service/orderMoraService.js';
import moraConfigService from '../service/moraConfigService.js';
import memberService from '../service/memberService.js';
import diamondLogService from '../service/diamondLogService.js';
import {sequelize} from '../config/db.js';
var selSocket;

//定时回收占坑却未开始游戏的房间到房间列表
setInterval(()=>{
    let timeStamp = new Date().getTime();
    let newArr = [];
    global.roomDataOnGame.forEach((item, index) => {
        console.log(item[2] + 30000, timeStamp);
        if((item[2] + 30000) < timeStamp){
            delete global.roomDataOnGame[index];
            emitAll('cancelGame', {id:item[1]});
            addRoom(item[0], item[1]);
        }else{
            newArr.push(item);
        }
    });
    global.roomDataOnGame = newArr;
}, 60000);

async function getRoomData(){
    let gradeData = JSON.parse(JSON.stringify(await moraConfigService.getAllGradeConfig()));
    let shapeData = JSON.parse(JSON.stringify(await moraConfigService.getAllShapeConfig()));
    console.log(shapeData);
    let shapeArr = [];
    shapeData.forEach(item => {
        shapeArr.push(Number(item['value']));
    });
    let roomData = JSON.parse(JSON.stringify(await orderMoraService.baseFindByFilter(['id', 'grade', 'shape', 'status'], {status:'0'})));
    let roomNumArr = {};
    let roomArr = {};
    gradeData.forEach(item1 => {
        let number = 0;
        let ids = {};
        roomData.forEach(item2 => {
            if(item1.index == item2.grade){
                number ++;
                ids[item2.id] = item2.id;
                global.newRoomData[item2.id] = {shape:item2.shape, status:item2.status};
            }
        });
        roomNumArr[item1.index] = {grade:item1.index, amount:item1.value, number:number};
        roomArr[item1.index] = ids;
    });
    return [roomNumArr, roomArr, shapeArr];
}


//添加房间到列表
function addRoom(grade, id){
    global.roomData[grade][id] = id;
    global.roomNumData[grade]['number'] = Object.keys(global.roomData[grade]).length;
    // emitAll('getAllRoom', JSON.stringify(global.roomData));
    emitAll('getAllRoom', global.roomNumData);
    // emitAll('getAllRoom', JSON.stringify(global.roomDataOnGame));
}

//从列表删除房间
function delRoom(grade, id){
    delete global.roomData[grade][id];
    global.roomNumData[grade]['number'] = Object.keys(global.roomData[grade]).length;
    // emitAll('getAllRoom', JSON.stringify(global.roomData));
    emitAll('getAllRoom', global.roomNumData);
    // emitAll('getAllRoom', JSON.stringify(global.roomDataOnGame));
}

//给所有人发消息
function emitAll(listen, msg) {
    global.io.local.emit(listen, msg);
}

//给自己发消息
function emitSelf(listen, msg) {
    selSocket.emit(listen, msg);
}

//给其他人发消息
function emitOther(listen, msg) {
    selSocket.broadcast.emit(listen, msg);
}


//对游戏超时的房间回收，返回到正常房间列表
function receiveRoom(id) {
    global.roomDataOnGame.forEach((item, index) => {
        if(item[1] == id){
            delete global.roomDataOnGame[index];
            addRoom(item[0], item[1]);
        }
    });
}

//房间状态由未开始变成游戏中
function changeRoom(grade, id){
    let timeStamp = new Date().getTime();
    global.roomDataOnGame.push([grade, id, timeStamp]);
    delRoom(grade, id);
}

function getObjItem(obj){
    for (var key in obj){
        return obj[key];
    }
}

//判断比赛胜负
function getStatus(combineShape){
    let status = '4';
    let msg = 'win';
    switch(combineShape){
        case '0-0':
            status = '2';
            msg = 'draw';
            break;
        case '1-1':
            status = '2';
            msg = 'draw';
            break;
        case '2-2':
            status =  '2';
            msg = 'draw';
            break;
        case '0-1':
            status = '3';
            msg = 'lose';
            break;
        case '1-2':
            status = '3';
            msg = 'lose';
            break;
        case '2-0':
            status = '3';
            msg = 'lose';
            break;
    }
    return {status:status, msg:msg};
}

async function onConnect(socket){
    selSocket = socket;
    selSocket.on('getAllRoom',  (msg) => {
        // selSocket.emit('getAllRoom', JSON.stringify(global.roomData));
        emitSelf('getAllRoom', global.roomNumData);
        // selSocket.emit('getAllRoom', JSON.stringify(global.roomDataOnGame));
    });

    selSocket.on('send', (msg) => {
        emitSelf('get', global.roomData);
    });

    //监听：用户提交比赛结果，判断胜负
    selSocket.on('submitRes', async (msg) => {
        let updateData = {};
        if(msg['uno']){
            updateData.target_uno = msg['uno'];
            //todo
        }

        if(msg['shape'] !== undefined){
            updateData.target_shape = msg['shape'];
            let shape = global.newRoomData[msg['id']]['shape'];
            var statusRes = getStatus(shape + '-' + msg['shape']);
            updateData.status = statusRes.status
            //todo
        }

        try {
            let updateRes = await orderMoraService.baseUpdate(updateData, {id: msg['id']});
            console.log(updateRes);
            // //从房间列表删除。
            // delRoom(updateRes.grade, updateRes.id);
            //从游戏中列表删除
            global.roomDataOnGame.forEach((item, index) => {
                if(item[1] == msg['id']){
                    delete global.roomDataOnGame[index];
                }
            });
            console.log(global.roomDataOnGame);
            selSocket.emit('getRes', statusRes);
        }catch (err) {
            selSocket.emit('err', {status:'110',msg:err['errors'][0]['message']});
        }
    });

    //监听：取消比赛，退出房间
    selSocket.on('cancelGame', (msg) => {
        if(msg['uno']!==undefined && msg['id']!==undefined){
            receiveRoom(msg['id']);
            emitSelf('cancelGame', {id:msg['id'], msg:'cancel_game'});
        }else{
            emitSelf('err', {status:'110', msg:'request_err'});
        }
    });

    //监听：获取一个房间,开始竞猜
    selSocket.on('getRoomId', async (msg) => {
        if(msg['uno'] !== undefined && msg['grade'] !== undefined ){
            let id = getObjItem(global.roomData[msg['grade']]);
            if(id){
                changeRoom(msg['grade'], id);
                let roomInfo =  await orderMoraService.getRoomInfoByIdService(id);
                emitSelf('getRoomId', {
                    id:roomInfo.id,
                    grade:roomInfo.grade,
                    amount:roomInfo.diamond_number,
                    user_name:roomInfo.user_name,
                    user_avatar:roomInfo.user_avatar
                });
            }
        }else{
            selSocket.emit('err', {status:'110', msg:'request_err'});
        }
    });

    //新建一个房间
    selSocket.on('createRoom', async (msg) => {
        let createRoom = {};
        if(msg.uno !== undefined){
            createRoom.uno = msg.uno;
        }else{
            selSocket.emit('err', {status:'110',msg:'uno_is_empty'});
        }
        if(msg.shape !== undefined){
            if(global.shapeArr.indexOf(Number(msg.shape)) > -1){
                createRoom.shape = msg.shape;
            }else{
                selSocket.emit('err', {status:'110',msg:'shape_is_err'});
            }
        }else{
            selSocket.emit('err', {status:'110',msg:'shape_is_empty'});
        }

        if(msg.grade !== undefined){
           createRoom.grade = msg.grade;
        }else{
            selSocket.emit('err', {status:'110',msg:'grade_is_empty'});
        }
        createRoom.status = '0';
        createRoom.diamond_number = global.roomNumData[msg.grade]['amount'];
        try {
            return sequelize.transaction( async function (t) {
                //创建房间
                let createRes = await orderMoraService.baseCreate(createRoom);
                //扣除钻石
                let delRes = await memberService.participateMoraService(createRes.uno, createRes.diamond_number);
                delRes.uno = msg.uno;
                delRes.source = 4;
                delRes.content = '创建竞猜冻结钻石';
                //添加日志
                let logRes =  await diamondLogService.baseCreate(delRes);
                return createRes;
            }).then(createRes => {
                addRoom(createRes.grade, createRes.id);
                global.newRoomData[createRes.id] = {shape:createRes.shape, status:createRes.status};
                selSocket.emit('createRoom', {status:'0',msg:'create_succ'});
            }).catch(function (err) {
                console.log('err1:', err);
                selSocket.emit('err', {status:'110',msg:'create_faild'});
            });
        }catch (err) {
            console.log('err2:', err);
            selSocket.emit('err', {status:'110',msg:'create_faild'});
        }
    });
}

export {onConnect, getRoomData} ;