import orderMoraService from '../service/orderMoraService.js';
import moraConfigService from '../service/moraConfigService.js';
import memberService from '../service/memberService.js';
import diamondLogService from '../service/diamondLogService.js';
import externalService from '../service/externalService.js'
import {sequelize} from '../config/db.js';
var selSocket;

//定时回收占坑却未开始游戏的房间到房间列表
setInterval(()=>{
    let timeStamp = new Date().getTime();
    let newArr = [];
    global.roomDataOnGame.forEach((item, index) => {
        if((item[2] + 30000) < timeStamp){
            delete global.roomDataOnGame[index];
            emitAll('cancelGame', {code:0, data:{id:item[1], uid:item[3]}});
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
    let shapeArr = [];
    shapeData.forEach(item => {
        shapeArr.push(Number(item['value']));
    });
    let roomData = JSON.parse(JSON.stringify(await orderMoraService.baseFindByFilter(['id', 'uid', 'grade', 'shape', 'status'], {status:'0'})));
    let roomNumArr = {};
    let roomArr = {};
    gradeData.forEach(item1 => {
        let number = 0;
        let ids = {};
        roomData.forEach(item2 => {
            if(item1.index == item2.grade){
                number ++;
                ids[item2.id] = item2.id;
                global.newRoomData[item2.id] = {shape:item2.shape, status:item2.status, uid:item2.uid};
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
    emitAll('getAllRoom', {code:0, data: global.roomNumData});
}

//从列表删除房间
function delRoom(grade, id){
    delete global.roomData[grade][id];
    global.roomNumData[grade]['number'] = Object.keys(global.roomData[grade]).length;
    emitAll('getAllRoom', {code:0, data: global.roomNumData});
}

//给所有人发消息
function emitAll(listen, msg) {
    global.io.local.emit(listen, msg);
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
function changeRoom(grade, id, uid){
    let timeStamp = new Date().getTime();
    global.roomDataOnGame.push([grade, id, timeStamp, uid]);
    delRoom(grade, id);
}

function getObjItem(obj, exclude){
    let res = 0;
    for (var key in obj){
        if(exclude == global.newRoomData[key]['uid']){
            continue;
        }else{
            res =  obj[key];
        }
    }
    return res;
}

//判断比赛胜负
function getStatus(combineShape){
    let status = '4';
    let targetStatus = '3';
    let msg = 'lose';
    let targetMsg = 'win';
    switch(combineShape){
        case '0-0':
            status = '2';
            targetStatus = '2';
            msg = 'draw';
            targetMsg = 'draw';
            break;
        case '1-1':
            status = '2';
            targetStatus = '2';
            msg = 'draw';
            targetMsg = 'draw';
            break;
        case '2-2':
            status =  '2';
            targetStatus =  '2';
            msg = 'draw';
            targetMsg = 'draw';
            break;
        case '0-1':
            status = '3';
            targetStatus = '4';
            msg = 'win';
            targetMsg = 'lose';
            break;
        case '1-2':
            status = '3';
            targetStatus = '4';
            msg = 'win';
            targetMsg = 'lose';
            break;
        case '2-0':
            status = '3';
            targetStatus = '4';
            msg = 'win';
            targetMsg = 'lose';
            break;
    }
    return {status:status,targetStatus:targetStatus, msg:msg, targetMsg:targetMsg};
}

async function onConnect(socket){
    selSocket = socket;
    socket.emit('send', global.roomData);
    selSocket.on('getAllRoom',  (msg) => {
        socket.emit('getAllRoom', {code:0, data:global.roomNumData});
    });

    //监听：用户提交比赛结果，判断胜负
    selSocket.on('submitRes', async (msg) => {
        if(msg.shape === undefined || msg.uid === undefined || msg.pwd === undefined){
            socket.emit('submitRes', {code:301, msg:'params_error'});
            return false;
        }

        if(!global.newRoomData[msg.id]){
            socket.emit('submitRes', {code:110, msg:'room_not_exist'});
            return false;
        }

        //校验二级密码。
        let checkRes = await externalService.checkSecondPwdService(msg.uid, msg.pwd);
        if(!checkRes){
            socket.emit('submitRes', {code: 110, msg: 'pwd_error'});
            return false;
        }
        //TODO:判断钻石是否足够
        //判断胜负
        let shape = global.newRoomData[msg.id]['shape'];
        let statusRes = getStatus(shape + '-' + msg.shape);
        let updateData = {
            target_uid:msg.uid,
            target_shape:msg.shape,
            status:statusRes.status
        };
        sequelize.transaction(async (t)=>{
                //更新房间信息
                await orderMoraService.baseUpdate(updateData, {id: msg.id}).then(async (updateRes) => {
                    //TODO:结算双方钻石
                    let calRes;
                    switch(updateData.status){
                        case '2'://双方平：1.解冻房主押金
                            calRes = await memberService.cancelMoraService(msg.uid, updateRes);
                            break;
                        case '3'://房主胜：1.扣除我的钻石，2.结算手续费，3.解冻房主押金，3.给房主增加钻石

                            break;
                        case '4'://房主败：1.扣除房主押金，2.结算手续费，3.给自己增加钻石

                            break;
                    }
                }).then(async ()=>{
                    //TODO:插入双方资产变更
                    //await
                }).then(async ()=>{
                    //TODO:插入双方对战日志
                    //await
                });

                //从游戏中列表删除
                global.roomDataOnGame.forEach((item, index) => {
                    if(item[1] == msg.id){
                        delete global.roomDataOnGame[index];
                    }
                });
            socket.emit('submitRes', {code:0, data:{status:statusRes.targetStatus, other_shape:shape}, msg:statusRes.targetMsg});
            socket.broadcast.emit('submitRes', {code:0, data:{status:statusRes.status, other_shape:msg.shape}, msg:statusRes.msg});
        }).catch(function (err) {
            socket.emit('submitRes', {code: 110, msg: err.message});
            return false;
        })

    });

    //监听：取消比赛，退出房间
    selSocket.on('cancelGame', (msg) => {
        if(msg['uid'] === undefined || msg['id'] === undefined){
            socket.emit('cancelGame', {code:301, msg:'params_error'});
            return false;
        }
        receiveRoom(msg['id']);
        socket.emit('cancelGame', {code:0, data:{id:msg['id'], uid:msg['uid']}});
    });

    //监听：获取一个房间,开始竞猜
    selSocket.on('enterRoom', async (msg) => {
        if(msg.uid !== undefined && msg.grade !== undefined ){
            let id = getObjItem(global.roomData[msg.grade], msg.uid);
            if(id){
                changeRoom(msg.grade, id, msg.uid);
                try{

                    let roomInfo = await orderMoraService.getRoomInfoByIdService(id);
                    let targetInfo = await memberService.getMemberInfoByIdService(msg.uid, ['user_name', 'user_avatar']);
                    socket.broadcast.emit('enterRoom', {
                        id:roomInfo.id,
                        grade:roomInfo.grade,
                        amount:roomInfo.diamond_number,
                        user_name:targetInfo.user_name,
                        user_avatar:targetInfo.user_avatar
                    });

                    socket.emit('enterRoom', {
                        id:roomInfo.id,
                        grade:roomInfo.grade,
                        amount:roomInfo.diamond_number,
                        user_name:roomInfo.user_name,
                        user_avatar:roomInfo.user_avatar
                    });
                }catch (e) {
                    socket.emit('enterRoom', {code:110, msg: e.message});
                    return false;
                }
            }else{
                socket.emit('enterRoom', {code:110, msg: 'room_not_found'});
                return false;
            }
        }else{
            socket.emit('enterRoom', {code:301, msg:'params_error'});
            return false;
        }
    });

    //监听：新建一个房间
    selSocket.on('createRoom', async (msg) => {
        if(msg.uid === undefined || msg.shape === undefined || msg.grade === undefined || msg.pwd === undefined ){
            socket.emit('createRoom', {code: 301, msg: 'params_error'});
            return false;
        }
        //TODO:校验竞猜等级是否正确。
        if(global.shapeArr.indexOf(Number(msg.shape)) == -1){
            socket.emit('createRoom', {code: 110, msg: 'shape_is_err'});
            return false;
        }

        //校验二级密码。
        let checkRes = await externalService.checkSecondPwdService(msg.uid, msg.pwd);
        if(!checkRes){
            socket.emit('createRoom', {code: 110, msg: 'pwd_error'});
            return false;
        }

        let createRoom = {
            uid: msg.uid,
            shape: msg.shape,
            grade: msg.grade,
            status: '0',
            diamond_number: global.roomNumData[msg.grade]['amount']
        };

        sequelize.transaction(async () => {
            let cRes;
            //创建房间
            await orderMoraService.baseCreate(createRoom).then(async (createRes) => {
                //冻结钻石
                cRes = createRes;
                return await memberService.participateMoraService(createRes.uid, createRes.diamond_number);
            }).then(async (delRes)=>{
                //添加日志
                delRes.uid = msg.uid;
                delRes.source = 4;
                delRes.content = '创建竞猜冻结钻石';
                await diamondLogService.baseCreate(delRes);
            });
            addRoom(cRes.grade, cRes.id);
            global.newRoomData[cRes.id] = {shape: cRes.shape, status: cRes.status};
            socket.emit('createRoom', {
                code: 0,
                data: {
                    id: cRes.id,
                    grade: cRes.grade,
                    amount: cRes.diamond_number
                },
            });
        }).catch((err)=>{
            socket.emit('createRoom', {code:110, msg:err.message});
            return false;
        });
    });
}

export {onConnect, getRoomData} ;