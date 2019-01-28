import orderMoraService from '../service/orderMoraService.js';
import moraConfigService from '../service/moraConfigService.js';
import memberService from '../service/memberService.js';
import diamondLogService from '../service/diamondLogService.js';
import externalService from '../service/externalService.js'
import recordLogService from '../service/recordLogService.js'
import  BaseCtroller from './baseCtroller'
import {sequelize} from '../config/db.js';

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
    let gradeData = JSON.parse(JSON.stringify(await moraConfigService.getAllGradeConfig()));//竞猜等级配置详情
    let shapeData = JSON.parse(JSON.stringify(await moraConfigService.getAllShapeConfig()));//竞猜出拳类型配置详情
    let rateData = JSON.parse(JSON.stringify(await moraConfigService.getRateConfig()));//竞猜手续费配置详情
    let exchangeUidData = JSON.parse(JSON.stringify(await moraConfigService.getExchangeUidConfig()));//竞猜扣除的费率结算到这个uid类型配置详情
    let shapeArr = [];
    shapeData.forEach(item => {
        shapeArr.push(Number(item['value']));
    });
    let roomData = JSON.parse(JSON.stringify(await orderMoraService.baseFindByFilter(['id', 'uid', 'grade', 'diamond_number', 'shape', 'status'], {status:'0'})));
    let roomNumArr = {};
    let roomArr = {};
    let gradeConfigData = [];
    gradeData.forEach(item1 => {
        let number = 0;
        let ids = {};
        roomData.forEach(item2 => {
            if(item1.index == item2.grade){
                number ++;
                ids[item2.id] = item2.id;
                global.newRoomData[item2.id] = {shape:item2.shape, status:item2.status, diamond:item2.diamond_number,grade:item2.grade, uid:item2.uid};
            }
        });
        roomNumArr[item1.index] = {grade:item1.index, amount:item1.value, number:number};
        roomArr[item1.index] = ids;
        gradeConfigData[item1.index] = item1.value;
    });
    console.log('newRoomData:', global.newRoomData);
    return [roomNumArr, roomArr, shapeArr, rateData[0]['value'], exchangeUidData[0]['value'], gradeConfigData];
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
            res = obj[key];
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
    socket.on('getAllRoom',  (msg) => {
        socket.emit('getAllRoom', {code:0, data:global.roomNumData});
    });
    setTimeout(function () {
        socket.emit('newConnect', {code:0,msg:'new_connect'});
    }, 2000);
    //监听：用户提交比赛结果，判断胜负
    socket.on('submitRes', async (msg) => {
        if(msg.shape === undefined || msg.uid === undefined || msg.pwd === undefined || msg.shape === undefined || msg.id === undefined ){
            socket.emit('submitRes', {code:301, msg:'params_error'});
            return false;
        }

        //判断游戏是在进行中
        let isOnGame = false;
        global.roomDataOnGame.forEach((item, index) => {
            if(item[1] == msg.id && item[3] == msg.uid) {
                isOnGame = true;
            }
        });

        if(!isOnGame){
            socket.emit('submitRes', {code:101, msg:'game_cancel'});
            return false;
        }

        //判断房间是否存在
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

        //判断钻石是否足够
        let diamondData = await memberService.getMemberInfoByIdService(msg.uid, ['diamond']);
        let diamondNum = global.newRoomData[msg.id]['diamond'];
        console.log('roomInfo:', global.newRoomData[msg.id]);
        console.log('roomId:', msg.id);
        if(diamondData['diamond'] <  diamondNum){
            socket.emit('submitRes', {code: 110, msg: 'diamond_not_enough'});
            return false;
        }

        //判断胜负
        let shape = global.newRoomData[msg.id]['shape'];
        let grade = global.newRoomData[msg.id]['grade'];
        console.log(grade);
        let calDiamond;
        let calTargetDiamond;
        let statusRes = getStatus(shape + '-' + msg.shape);
        let updateData = {
            target_uid:msg.uid,
            target_shape:msg.shape,
            status:statusRes.status
        };
        sequelize.transaction(async (t)=>{
                //更新房间信息
                orderMoraService.baseUpdate(updateData, {id: msg.id});
                //结算双方钻石
                let logArr = [];
                let diamondRate =  diamondNum * global.rate * 2;
                console.log('diamondRate:', diamondRate);
                let msgArr = ['svc兑换钻石', '钻石兑换svc', '竞猜胜出获得', '竞猜失败损失', '创建房间冻结钻石', '返还押金钻石', '费率账户入账'];
                switch(updateData.status){
                    case '2'://双方平：1.返还房主押金
                        let calRes1 = await memberService.unfreezeDiamondService(global.newRoomData[msg.id]['uid'], diamondNum);
                        calDiamond = 0;
                        calTargetDiamond = 0;
                        calRes1.source = 5;
                        calRes1.content = msgArr[5];
                        logArr.push(calRes1);
                        break;
                    case '3'://房主胜：1.解冻房主押金，2.结算手续费，3.扣除我的钻石，3.给房主增加钻石
                        //1.返还房主押金
                        let calRes2 = await memberService.unfreezeDiamondService(global.newRoomData[msg.id]['uid'], diamondNum);
                        calDiamond = diamondNum * 2 - diamondRate;
                        calTargetDiamond = - diamondNum;
                        calRes2.source = 5;
                        calRes2.content = msgArr[5];
                        logArr.push(calRes2);
                        //2.结算手续费到费率账户
                        let calRes3 = await memberService.diamondIncrementService(global.exchangeUid, diamondRate);
                        calRes3.source = 6;
                        calRes3.content = msgArr[6];
                        logArr.push(calRes3);
                        //3.扣除我的钻石
                        let calRes4 = await memberService.diamondDecrementService(msg.uid, diamondNum);
                        calRes4.source = 3;
                        calRes4.content = msgArr[3];
                        logArr.push(calRes4);
                        //4.给房主增加钻石
                        let calRes5 = await memberService.diamondIncrementService(global.newRoomData[msg.id]['uid'], (diamondNum - diamondRate));
                        calRes5.source = 2;
                        calRes5.content = msgArr[2];
                        logArr.push(calRes5);
                        break;
                    case '4'://房主败：1.扣除房主押金，2.结算手续费，3.给自己增加钻石
                        calDiamond = - diamondNum;
                        calTargetDiamond = diamondNum * 2 - diamondRate;
                        //1.扣除房主押金
                        await memberService.freezeDiamondDecrementService(global.newRoomData[msg.id]['uid'], diamondNum);
                        //2.结算手续费到费率账户
                        let calRes6 = await memberService.diamondIncrementService(global.exchangeUid, diamondRate);
                        calRes6.source = 6;
                        calRes6.content = msgArr[6];
                        logArr.push(calRes6);
                        //3.给自己增加钻石
                        let calRes7 = await memberService.diamondIncrementService(msg.uid, (diamondNum - diamondRate));
                        calRes7.source = 2;
                        calRes7.content = msgArr[2];
                        logArr.push(calRes7);
                        break;
                }

                //插入双方资产变更
                logArr.forEach( item =>{
                    diamondLogService.baseCreate(item);
                });

                //插入我的对战日志
                recordLogService.baseCreate({
                    order_id:Number(msg.id),
                    room_owner_id:Number(global.newRoomData[msg.id]['uid']),
                    uid:Number(msg.uid),
                    target_uid:Number(global.newRoomData[msg.id]['uid']),
                    grade:Number(grade),
                    diamond_number:diamondNum,
                    res_diamond:calTargetDiamond,
                    shape:Number(msg.shape),
                    target_shape:shape,
                    status:statusRes.targetStatus
                });

                //插入房主对战日志
                recordLogService.baseCreate({
                    order_id:Number(msg.id),
                    room_owner_id:Number(global.newRoomData[msg.id]['uid']),
                    uid:Number(global.newRoomData[msg.id]['uid']),
                    target_uid:Number(msg.uid),
                    grade:Number(grade),
                    diamond_number:diamondNum,
                    res_diamond:calDiamond,
                    shape:shape,
                    target_shape:Number(msg.shape),
                    status:statusRes.status
                });

        }).then(()=>{
            //从 新游戏 列表删除
            delete global.newRoomData[msg.id];
            //从 正在游戏中 列表删除
            global.roomDataOnGame.forEach((item, index) => {
                if(item[1] == msg.id) {
                    delete global.roomDataOnGame[index];
                }
            });
            socket.emit('submitRes', {code:0, data:{id:msg.id,status:statusRes.targetStatus, other_shape:shape}, msg:statusRes.targetMsg});
            socket.broadcast.emit('submitRes', {code:0, data:{id:msg.id,status:statusRes.status, other_shape:msg.shape}, msg:statusRes.msg});
        }).catch(function (err) {
            console.log(err);
            socket.emit('submitRes', {code: 110, msg: err.message});
            return false;
        })
    });

    //监听：取消比赛，退出房间
    socket.on('cancelGame', (msg) => {
        if(msg['uid'] === undefined || msg['id'] === undefined){
            socket.emit('cancelGame', {code:301, msg:'params_error'});
            return false;
        }
        receiveRoom(msg['id']);
        emitAll('cancelGame', {code:0, data:{id:msg['id'], uid:msg['uid']}});
    });

    //监听：获取一个房间,开始竞猜
    socket.on('enterRoom', async (msg) => {
        if(msg.uid !== undefined && msg.grade !== undefined ){
            let id = getObjItem(global.roomData[msg.grade], msg.uid);
            if(id){
                changeRoom(msg.grade, id, msg.uid);
                try{

                    let roomInfo = await orderMoraService.getRoomInfoByIdService(id);
                    let targetInfo = await memberService.getMemberInfoByIdService(msg.uid, ['user_name', 'user_avatar']);
                    console.log('roomInfo:', roomInfo);
                    socket.broadcast.emit('enterRoom', {
                        id:roomInfo.id,
                        uid:msg.uid,
                        grade:roomInfo.grade,
                        amount:roomInfo.amount,
                        user_name:targetInfo.user_name,
                        user_avatar:targetInfo.user_avatar
                    });

                    socket.emit('enterRoom', {
                        id:roomInfo.id,
                        uid:msg.uid,
                        grade:roomInfo.grade,
                        amount:roomInfo.amount,
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
    socket.on('createRoom', async (msg) => {
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


        //判断钻石是否足够
        let diamondData = await memberService.getMemberInfoByIdService(msg.uid, ['diamond']);
        let diamondNum = global.gradeConfigData[msg.shape];
        if(diamondData['diamond'] <  diamondNum){
            socket.emit('createRoom', {code: 110, msg: 'diamond_not_enough'});
            return false;
        }


        let createRoom = {
            uid: msg.uid,
            shape: msg.shape,
            grade: msg.grade,
            status: '0',
            diamond_number: global.roomNumData[msg.grade]['amount']
        };

        sequelize.transaction(async (t) => {
            //创建房间
            let createRes = await orderMoraService.baseCreate(createRoom);
            //冻结钻石
            let delRes = await memberService.freezeDiamond(createRes.uid, createRes.diamond_number);
            //添加日志
            delRes.uid = msg.uid;
            delRes.source = 4;
            delRes.content = '创建房间冻结钻石';
            await diamondLogService.baseCreate(delRes);
            return createRes;
        }).then((createRes) => {
            addRoom(createRes.grade, createRes.id);
            global.newRoomData[createRes.id] = {shape: createRes.shape, status: createRes.status, diamond:createRes.diamond_number, grade:createRes.grade, uid:createRes.uid};
            socket.emit('createRoom', {
                code: 0,
                data: {
                    id: createRes.id,
                    grade: createRes.grade,
                    amount: createRes.diamond_number,
                    shape: msg.shape
                }
            });
        }).catch((err)=>{
            socket.emit('createRoom', {code:110, msg:err.message});
            return false;
        });
    });

    //判断房间是否还在
    socket.on('isGameOn', async (msg) => {
        let status = 0;
        if(global.newRoomData[msg.id]) status = 1;
        socket.emit('isGameOn', {code: 0, data:{status:status}});
        return false;

    });

    //判断玩家是否还在游戏中
    socket.on('isPlaying', async (msg) => {
        let status = 0;
        console.log('msg:',msg);
        console.log('roomDataOnGame:',global.roomDataOnGame);
        global.roomDataOnGame.forEach((item, index) => {
            if(item[3] == msg.uid){
                status = 1;
                return;
            }
        });
        socket.emit('isPlaying', {code: 0, data:{status:status}});
        return false;
    });


}

export {onConnect, getRoomData} ;