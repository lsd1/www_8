import orderMoraService from '../service/orderMoraService';
import orderMoraModel from '../model/orderMoraModel';
import moraConfigService from '../service/moraConfigService';
import memberService from '../service/memberService';
import diamondLogService from '../service/diamondLogService';
import externalService from '../service/externalService';
import recordLogService from '../service/recordLogService';
import noticService from '../service/noticService';
import taskService from '../service/taskService';
import {trans} from '../translate/index';
import {sequelize} from '../config/db.js';
import empty from 'is-empty';
import {errLog} from '../config/log.js';
global.userSids = {};
//定时回收占坑却未开始游戏的房间到房间列表
setInterval(()=>{
    let timeStamp = new Date().getTime();
    let newArr = [];
    let oldData = {};
    oldData.oldGlobalUserSids = global.userSids;
    oldData.oldGlobalRoomData = global.roomData;
    oldData.oldGlobalRoomNumData = global.roomNumData;
    oldData.oldGlobalNewRoomData = global.newRoomData;
    oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;
    global.roomDataOnGame.forEach((item, index) => {
        if((item[2] + 30000) < timeStamp){
            delete global.roomDataOnGame[index];
            try {
                if(global.userSids[item[3]]){
                    global.io.to(global.userSids[item[3]]['sid']).emit('cancelGame', {code:0, data:{id:item[1], uid:item[3]}});
                }
                if(global.userSids[global.newRoomData[item[1]]['uid']]){
                    global.io.to(global.userSids[global.newRoomData[item[1]]['uid']]['sid']).emit('cancelGame', {code: 0, data: {id: item[1], uid: item[3]}});
                }
                addRoom(item[0], item[1]);
            }catch (e) {
                oldData.item = item;
                writeLog('autoCancel', 'no msg', e, oldData);
            }
        }else{
            newArr.push(item);
        }
    });
    global.roomDataOnGame = newArr;
}, 60000);

//定时监听task
setInterval(async ()=>{
    let noticeUid = await taskService.autolistenTaskService(memberService, noticService);
    if(!empty(noticeUid)){
        setSystemNotice(noticeUid);
    }
}, 10000);

//给用户发送系统消息
async function setSystemNotice(noticeUid){
    for (let i in noticeUid) {
        let msgData = await noticService.baseFindByFilter({exclude: ['updated_at', 'created_at']}, {
            uid: i,
            status: 0
        });
        let memberInfo = await memberService.getMemberInfoByIdService(i);
        let msgArr = [];

        //5.如有消息则推送消息
        if (msgData) {
            msgData.forEach(item => {
                switch (item.type) {
                    case 0:
                        msgArr.push({
                            msg_id: item.id,
                            msg_content: trans(item.content, 2),
                            diamond: memberInfo.diamond
                        });
                        break;
                    default:
                        msgArr.push({msg_id: item.id, msg_content: trans(item.content, 2)});
                }
            });
            if(global.userSids[i]){
                global.io.to(global.userSids[i]['sid']).emit('getMsg', {code: 0, data: msgArr});
            }
        }
    }
}

//初始化所有房间信息
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
    return [roomNumArr, roomArr, shapeArr, rateData[0]['value'], exchangeUidData[0]['value'], gradeConfigData];
}

//首次链接校验信息
async function loginCheck(msg, socket) {
    //1.校验uid,token
    if(msg.uid == undefined || msg.token == undefined || msg.lang == undefined){
        socket.emit('outLine',{code:111, msg:trans('params_err', msg.lang)});
        return false;
    }else{
        let userData = await memberService.getMemberInfoByIdService(msg.uid);
        if(msg.token != userData.token){
            socket.emit('outLine',{code:111, msg:trans('signature_verification_failed', msg.lang)});
            return false;
        }
    }

    //2.判断uid连接是否已存在
    if(global.userSids.hasOwnProperty(msg.uid)){
        global.io.to(global.userSids[msg.uid]['sid']).emit('outLine');
    }

    //3.储存/更新 uid,sid
    global.userSids[msg.uid] = {uid:msg.uid, sid:socket.id};
    //4.查询是否存在未完成任务
    await taskService.listenTaskService(msg.uid, memberService, noticService);
    let msgData = await noticService.baseFindByFilter({exclude: ['updated_at', 'created_at']}, {
        uid: msg.uid,
        status: 0
    });
    let memberInfo = await memberService.getMemberInfoByIdService(msg.uid);
    let msgArr = [];

    //5.如有消息则推送消息
    if (msgData) {
        msgData.forEach(item => {
            switch (item.type) {
                case 0:
                    msgArr.push({
                        msg_id: item.id,
                        msg_content: trans(item.content, msg.lang),
                        diamond: memberInfo.diamond
                    });
                    break;
                default:
                    msgArr.push({msg_id: item.id, msg_content: trans(item.content, msg.lang)});
            }
        });
        socket.emit('getMsg', {code: 0, data: msgArr});
    }
    return true;
}

//验证用户uid、sid是否匹配
async function checkSid(msg, socket) {
    if(global.userSids[msg.uid]['sid'] != socket.id){
        socket.emit('outLine', {code:111, msg:trans('signature_verification_failed', msg.lang)});
        return false;
    }
    return true;
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
function getStatus(combineShape, lang){
    let status;
    let targetStatus;
    let msg;
    let targetMsg;
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
        case '0-2':
            status = '4';
            targetStatus = '3';
            msg = 'lose';
            targetMsg = 'win';
            break;
        case '1-0':
            status = '4';
            targetStatus = '3';
            msg = 'lose';
            targetMsg = 'win';
            break;
        case '1-2':
            status = '4';
            targetStatus = '3';
            msg = 'lose';
            targetMsg = 'win';
            break;
        case '2-1':
            status = '4';
            targetStatus = '3';
            msg = 'lose';
            targetMsg = 'win';
            break;
        default:
        return {code:110, msg: trans('params_err', lang)};
    }
    return {status:status,targetStatus:targetStatus, msg:msg, targetMsg:targetMsg};
}

function transRerurn(data, lang){
    if(data.msg){
        data.msg = trans(data.msg, lang);
    }
    return data;
}

function writeLog(type, msg, e, oldData){
    let log = {};
    log.type = type;
    log.msg = msg;
    log.error = e.message;
    log.time = new Date().toLocaleString();
    for(let i in oldData) {
        log[i] = oldData[i];
    }
    log.LastGlobalUserSids = global.userSids;
    log.LastGlobalRoomData = global.RoomData;
    log.LastGlobalRoomNumData = global.RoomNumData;
    log.LastGlobalNewRoomData = global.NewRoomData;
    log.LastGlobalRoomDataOnGame = global.RoomDataOnGame;
    errLog(JSON.stringify(log));
}

//SOCKET链接建立
async function onConnect(socket) {
    //监听：用户上线发送uid
    socket.on('online', async (msg) => {
        let checkRes = await loginCheck(msg, socket);
        if(checkRes){
            socket.emit('online');
        }
    });

    socket.on('reOnline', async (msg) => {
        let checkRes = await loginCheck(msg, socket);
        if(checkRes){
            socket.emit('online');
        }
    });

    //监听：用户请求所有房间信息
    socket.on('getAllRoom', (msg) => {
        if(msg.uid == undefined || msg.lang == undefined){
            socket.emit('getAllRoom', {code:111, msg:trans('params_err', msg.lang)});
            return false;
        }

        if(!checkSid(msg, socket)) return false;

        socket.emit('getAllRoom', {code: 0, data: global.roomNumData});
    });

    //监听：用户发送已读消息ID
    socket.on('getMsg', (msg) => {
        noticService.baseUpdate({status: 1}, {id: msg.msgId});
    });

    //监听：用户提交比赛结果，判断胜负
    socket.on('submitRes', async (msg) => {
        if (msg.lang == undefined || msg.shape == undefined || msg.uid == undefined || msg.pwd == undefined || msg.shape == undefined || msg.id == undefined) {
            socket.emit('submitRes', transRerurn({code: 301, msg: 'params_err'}, msg.lang));
            return false;
        }
        if(!checkSid(msg, socket)) return false;

        let oldData = {};
        oldData.oldGlobalUserSids = global.userSids;
        oldData.oldGlobalRoomData = global.roomData;
        oldData.oldGlobalRoomNumData = global.roomNumData;
        oldData.oldGlobalNewRoomData = global.newRoomData;
        oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;

        //判断游戏是在进行中
        let isOnGame = false;
        global.roomDataOnGame.forEach((item, index) => {
            if (item[1] == msg.id && item[3] == msg.uid) {
                isOnGame = true;
            }
        });

        if (!isOnGame) {
            socket.emit('submitRes', transRerurn({code: 101, msg: 'game_cancel'}, msg.lang));
            return false;
        }

        //判断房间是否存在
        if (!global.newRoomData[msg.id]) {
            socket.emit('submitRes', transRerurn({code: 110, msg: 'room_not_exist'}, msg.lang));
            return false;
        }

        //判断是否自己的房间
        if (global.newRoomData[msg.id]['uid'] == msg.uid) {
            socket.emit('submitRes', transRerurn({code: 110, msg: 'cannot_play_yourself'}, msg.lang));
            return false;
        }

        //校验二级密码。
        let checkRes = await externalService.postCheckSecondPwdService(msg);
        if (checkRes.code != 0) {
            socket.emit('submitRes', {code: checkRes.code, msg: checkRes.msg});
            return false;
        }

        //判断钻石是否足够
        let diamondData = await memberService.getMemberInfoByIdService(msg.uid, ['diamond']);
        let diamondNum = global.newRoomData[msg.id]['diamond'];
        if (diamondData['diamond'] < diamondNum) {
            socket.emit('submitRes', transRerurn({code: 113, msg: 'diamond_not_enough'}, msg.lang));
            return false;
        }

        //判断胜负
        let shape = global.newRoomData[msg.id]['shape'];
        let grade = global.newRoomData[msg.id]['grade'];
        let calDiamond;
        let calTargetDiamond;
        let resDiamond;
        let targetResDiamond;
        let statusRes = getStatus(shape + '-' + msg.shape, msg.lang);
        let updateData = {
            target_uid: msg.uid,
            target_shape: msg.shape,
            status: statusRes.status
        };
        sequelize.transaction(async (t) => {
            //更新房间信息
            await orderMoraModel.model.update(updateData, {where: {id: msg.id}, transaction: t});
            //结算双方钻石
            let logArr = [];
            let diamondRate = diamondNum * global.rate * 2;
            let msgArr = ['vsc_to_diamond', 'diamond_to_vsc', 'get_from_win', 'lose_from_fail', 'make_room_freeze_diamond', 'return_diamond', 'rate_account_credited'];
            switch (updateData.status) {
                case '2'://双方平：1.返还房主押金
                    let calRes1 = await memberService.unfreezeDiamondService(global.newRoomData[msg.id]['uid'], diamondNum, {transaction: t});
                    calDiamond = 0;
                    calTargetDiamond = 0;
                    calRes1.source = 5;
                    calRes1.content = msgArr[5];
                    logArr.push(calRes1);
                    resDiamond = calRes1.after_change;
                    targetResDiamond = -1;
                    break;
                case '3'://房主胜：1.解冻房主押金，2.结算手续费，3.扣除我的钻石，3.给房主增加钻石
                    //1.返还房主押金
                    let calRes2 = await memberService.unfreezeDiamondService(global.newRoomData[msg.id]['uid'], diamondNum, {transaction: t});
                    calDiamond = diamondNum - diamondRate;
                    calTargetDiamond = -diamondNum;
                    calRes2.source = 5;
                    calRes2.content = msgArr[5];
                    logArr.push(calRes2);
                    //2.结算手续费到费率账户
                    let calRes3 = await memberService.diamondIncrementService(global.exchangeUid, diamondRate, {transaction: t});
                    calRes3.source = 6;
                    calRes3.content = msgArr[6];
                    logArr.push(calRes3);
                    //3.扣除我的钻石
                    let calRes4 = await memberService.diamondDecrementService(msg.uid, diamondNum, {transaction: t});
                    calRes4.source = 3;
                    calRes4.content = msgArr[3];
                    targetResDiamond = calRes4.after_change;
                    logArr.push(calRes4);
                    //4.给房主增加钻石
                    let calRes5 = await memberService.diamondIncrementService(global.newRoomData[msg.id]['uid'], (diamondNum - diamondRate), {transaction: t});
                    calRes5.source = 2;
                    calRes5.content = msgArr[2];
                    resDiamond = calRes5.after_change;
                    logArr.push(calRes5);
                    break;
                case '4'://房主败：1.扣除房主押金，2.结算手续费，3.给自己增加钻石
                    calDiamond = -diamondNum;
                    calTargetDiamond = diamondNum - diamondRate;
                    //1.扣除房主押金
                    await memberService.freezeDiamondDecrementService(global.newRoomData[msg.id]['uid'], diamondNum, {transaction: t});
                    resDiamond = -1;
                    //2.结算手续费到费率账户
                    let calRes6 = await memberService.diamondIncrementService(global.exchangeUid, diamondRate, {transaction: t});
                    calRes6.source = 6;
                    calRes6.content = msgArr[6];
                    logArr.push(calRes6);
                    //3.给自己增加钻石
                    let calRes7 = await memberService.diamondIncrementService(msg.uid, (diamondNum - diamondRate), {transaction: t});
                    calRes7.source = 2;
                    calRes7.content = msgArr[2];
                    targetResDiamond = calRes7.after_change;
                    logArr.push(calRes7);
                    break;
            }

            //插入双方资产变更
            logArr.forEach(async item => {
                await diamondLogService.baseCreate(item, {transaction: t});
            });

            //插入我的对战日志
            await recordLogService.baseCreate({
                order_id: Number(msg.id),
                room_owner_id: Number(global.newRoomData[msg.id]['uid']),
                uid: Number(msg.uid),
                target_uid: Number(global.newRoomData[msg.id]['uid']),
                grade: Number(grade),
                diamond_number: diamondNum,
                res_diamond: calTargetDiamond,
                shape: Number(msg.shape),
                target_shape: shape,
                status: statusRes.targetStatus
            }, {transaction: t});

            //插入房主对战日志
            await recordLogService.baseCreate({
                order_id: Number(msg.id),
                room_owner_id: Number(global.newRoomData[msg.id]['uid']),
                uid: Number(global.newRoomData[msg.id]['uid']),
                target_uid: Number(msg.uid),
                grade: Number(grade),
                diamond_number: diamondNum,
                res_diamond: calDiamond,
                shape: shape,
                target_shape: Number(msg.shape),
                status: statusRes.status
            }, {transaction: t});

        }).then(() => {
            let ownerUid = global.newRoomData[msg.id]['uid'];
            //从 新游戏 列表删除
            delete global.newRoomData[msg.id];
            //从 正在游戏中 列表删除
            global.roomDataOnGame.forEach((item, index) => {
                if (item[1] == msg.id) {
                    delete global.roomDataOnGame[index];
                }
            });

            socket.emit('submitRes', {
                code: 0,
                data: {
                    id: msg.id,
                    uid: msg.uid,
                    status: statusRes.targetStatus,
                    other_shape: shape,
                    amount: calTargetDiamond,
                    diamond: targetResDiamond
                },
                msg: statusRes.targetMsg
            });
            if(global.userSids[ownerUid]){
                global.io.to(global.userSids[ownerUid]['sid']).emit('submitRes', {
                    code: 0,
                    data: {
                        id: msg.id,
                        uid: ownerUid,
                        status: statusRes.status,
                        other_shape: msg.shape,
                        amount: calDiamond,
                        diamond: resDiamond
                    },
                    msg: statusRes.msg
                });
            }
        }).catch(function (e) {
            let code = 110,errmsg = e.message;
            try{
                var errRes = JSON.parse(e.message);
                if(errRes.hasOwnProperty('code')){
                    code = errRes.code;
                }
                if(errRes.hasOwnProperty('msg')){
                    errmsg = errRes.msg;
                }
            }catch (err) {
                writeLog('submitRes', msg, err, oldData);
                // console.log('submitResErr', err);
            }
            socket.emit('submitRes', {code: code, msg: errmsg});
            return false;
        })
    });

    //监听：取消比赛，退出房间
    socket.on('cancelGame', (msg) => {
        if (msg['uid'] === undefined || msg['id'] === undefined || msg.lang === undefined) {
            socket.emit('cancelGame', transRerurn({code: 301, msg: 'params_err'}, msg.lang));
            return false;
        }
        let oldData = {};
        oldData.oldGlobalUserSids = global.userSids;
        oldData.oldGlobalRoomData = global.roomData;
        oldData.oldGlobalRoomNumData = global.roomNumData;
        oldData.oldGlobalNewRoomData = global.newRoomData;
        oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;

        receiveRoom(msg['id']);
        try {
            if(global.userSids[msg.uid]){
                global.io.to(global.userSids[msg.uid]['sid']).emit('cancelGame', {code: 0, data: {id: msg['id'], uid: msg['uid']}});
            }
            if(global.userSids[global.newRoomData[msg.id]['uid']]){
                global.io.to(global.userSids[global.newRoomData[msg.id]['uid']]['sid']).emit('cancelGame', {code: 0, data: {id: msg['id'], uid: msg['uid']}});
            }
        }catch (e) {
            // console.log('cancelGameErr:', e);
        }
    });

    //监听：获取一个房间,开始竞猜
    socket.on('enterRoom', async (msg) => {
        if (msg.uid == undefined || msg.grade == undefined || msg.lang === undefined){
            socket.emit('enterRoom', transRerurn({code: 301, msg: 'params_err'}, msg.lang));
            return false;
        }

        if(!checkSid(msg, socket)) return false;

        let oldData = {};
        oldData.oldGlobalUserSids = global.userSids;
        oldData.oldGlobalRoomData = global.roomData;
        oldData.oldGlobalRoomNumData = global.roomNumData;
        oldData.oldGlobalNewRoomData = global.newRoomData;
        oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;

        let id = getObjItem(global.roomData[msg.grade], msg.uid);
        if (id) {
            changeRoom(msg.grade, id, msg.uid);
            try {

                let roomInfo = await orderMoraService.getRoomInfoByIdService(id);
                let targetInfo = await memberService.getMemberInfoByIdService(msg.uid, ['user_name', 'user_avatar']);
                if(global.userSids[global.newRoomData[id]['uid']]){
                    global.io.to(global.userSids[global.newRoomData[id]['uid']]['sid']).emit('enterRoom', {
                        code: 0, data: {
                            id: roomInfo.id,
                            uid: msg.uid,
                            grade: roomInfo.grade,
                            amount: roomInfo.amount,
                            user_name: targetInfo.user_name,
                            user_avatar: targetInfo.user_avatar
                        }, msg: trans('succ', msg.lang)
                    });
                }
                socket.emit('enterRoom', transRerurn({
                    code: 0, data: {
                        id: roomInfo.id,
                        uid: msg.uid,
                        grade: roomInfo.grade,
                        amount: roomInfo.amount,
                        user_name: roomInfo.user_name,
                        user_avatar: roomInfo.user_avatar
                    }, msg: 'succ'
                }, msg.lang));
            } catch (e) {
                let code = 110,errmsg = e.message;
                try{
                    var errRes = JSON.parse(e.message);
                    if(errRes.hasOwnProperty('code')){
                        code = errRes.code;
                    }
                    if(errRes.hasOwnProperty('msg')){
                        errmsg = errRes.msg;
                    }
                }catch (err) {
                    // console.log('enterRoomErr:', err);
                    writeLog('enterRoom', msg, e, oldData);
                }
                socket.emit('enterRoom', {code: code, msg: errmsg});
                return false;
            }
        } else {
            socket.emit('enterRoom', transRerurn({code: 110, msg: 'room_not_exist'}, msg.lang));
            return false;
        }
    });

    //监听：新建一个房间
    socket.on('createRoom', async (msg) => {
        if (msg.uid === undefined || msg.shape === undefined || msg.grade === undefined || msg.pwd === undefined || msg.lang === undefined) {
            socket.emit('createRoom', transRerurn({code: 301, msg: 'params_err'}, msg.lang));
            return false;
        }
        let oldData = {};
        oldData.oldGlobalUserSids = global.userSids;
        oldData.oldGlobalRoomData = global.roomData;
        oldData.oldGlobalRoomNumData = global.roomNumData;
        oldData.oldGlobalNewRoomData = global.newRoomData;
        oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;
        if(!checkSid(msg, socket)) return false;

        //TODO:校验竞猜等级是否正确。
        if (global.shapeArr.indexOf(Number(msg.shape)) == -1) {
            socket.emit('createRoom', transRerurn({code: 110, msg: 'shape_is_err'}, msg.lang));
            return false;
        }

        //校验二级密码。
        let checkRes = await externalService.postCheckSecondPwdService(msg);
        if (checkRes.code != 0) {
            socket.emit('createRoom', {code: checkRes.code, msg: checkRes.msg});
            return false;
        }

        //判断钻石是否足够
        let diamondData = await memberService.getMemberInfoByIdService(msg.uid, ['diamond']);
        let diamondNum = global.gradeConfigData[msg.shape];
        if (diamondData['diamond'] < diamondNum) {
            socket.emit('createRoom', transRerurn({code: 113, msg: 'diamond_not_enough'}, msg.lang));
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
            let createRes = await orderMoraService.baseCreate(createRoom, {transaction: t});
            //冻结钻石
            let delRes = await memberService.freezeDiamond(createRes.uid, createRes.diamond_number, {transaction: t});
            //添加日志
            delRes.uid = msg.uid;
            delRes.source = 4;
            delRes.content = 'make_room_freeze_diamond';
            await diamondLogService.baseCreate(delRes, {transaction: t});
            return {
                uid: createRes.uid,
                shape: createRes.shape,
                id: createRes.id,
                status: createRes.status,
                diamond_number: createRes.diamond_number,
                grade: createRes.grade,
                diamond: delRes.after_change
            }
        }).then((res) => {
            addRoom(res.grade, res.id);
            global.newRoomData[res.id] = {
                shape: res.shape,
                status: res.status,
                diamond: res.diamond_number,
                grade: res.grade,
                uid: res.uid
            };
            socket.emit('createRoom', {
                code: 0,
                data: {
                    id: res.id,
                    grade: res.grade,
                    amount: res.diamond_number,
                    diamond: res.diamond,
                    shape: msg.shape
                }
            });
        }).catch((err) => {
            let code = 110,errmsg = err.message;
            try{
                var errRes = JSON.parse(err.message);
                if(errRes.hasOwnProperty('code')){
                    code = errRes.code;
                }
                if(errRes.hasOwnProperty('msg')){
                    errmsg = errRes.msg;
                }
            }catch (e) {
                writeLog('createRoom', msg, err, oldData);
                // console.log('createRoomErr:', e);
            }
            socket.emit('createRoom', {code: code, msg: errmsg});
            return false;
        });
    });

    //监听：房主取消对局
    socket.on('delGame', async (msg) => {
        if (msg.uid === undefined || msg.id === undefined || msg.lang === undefined) {
            socket.emit('createRoom', transRerurn({code: 301, msg: 'params_err'}, msg.lang));
            return false;
        }
        let oldData = {};
        oldData.oldGlobalUserSids = global.userSids;
        oldData.oldGlobalRoomData = global.roomData;
        oldData.oldGlobalRoomNumData = global.roomNumData;
        oldData.oldGlobalNewRoomData = global.newRoomData;
        oldData.oldGlobalRoomDataOnGame = global.roomDataOnGame;

        if(!checkSid(msg, socket)) return false;

        let roomId = msg.id;
        let uid = msg.uid;
        let status = 0;
        //判断对局是否存在
        if (!global.newRoomData[msg.id]) {
            socket.emit('delGame', transRerurn({code: 1, msg: 'game_over'}, msg.lang));
            return false;
        }
        //判断是否是自己的房间
        if (global.newRoomData[msg.id]['uid'] != msg.uid) {
            socket.emit('delGame', transRerurn({code: 2, msg: 'not_your_room'}, msg.lang));
            return false;
        }
        //判断对局是否认在进行中
        let isOnGame = false;
        global.roomDataOnGame.forEach(item => {
            if (item[1] == msg.id) {
                isOnGame = true;
                return;
            }
        });
        if (isOnGame) {
            socket.emit('delGame', transRerurn({code: 3, msg: 'canot_cancel_room'}, msg.lang));
            return false;
        }

        //取消对局
        let roomInfo = await orderMoraModel.model.findByPk(msg.id);
        if (roomInfo) {
            if (roomInfo.status != 0) {
                socket.emit('delGame', transRerurn({code: 1, msg: 'game_over'}, msg.lang));
                return false;
            }
        } else {
            socket.emit('delGame', transRerurn({code: 4, msg: 'room_not_exist'}, msg.lang));
            return false;
        }
        sequelize.transaction(async (t) => {
            await orderMoraService.baseDelete({id: msg.id});
            let unfreezeRes = await memberService.unfreezeDiamondService(msg.uid, roomInfo.diamond_number, {transaction: t});
            unfreezeRes.source = 5;
            unfreezeRes.content = 'cancel_game_return_diamond';
            await diamondLogService.baseCreate(unfreezeRes, {transaction: t});
            return unfreezeRes.after_change;
        }).then((diamond) => {
            let grade = global.newRoomData[msg.id]['grade'];
            delRoom(grade, msg.id);
            delete global.newRoomData[msg.id];
            socket.emit('delGame', transRerurn({
                code: 0,
                data: {diamond: diamond},
                msg: 'canot_cancel_room'
            }, msg.lang));
            return false;
        }).catch((e) => {
            writeLog('delGame', msg, e, oldData);
            // console.log('delGameErr:', e);
            socket.emit('delGame', transRerurn({code: 5, msg: 'cancel_faild'}, msg.lang));
            return false;
        });
    });

    //监听：判断房间是否还在
    socket.on('isGameOn', async (msg) => {
        let status = 0;
        if (global.newRoomData[msg.id]) status = 1;
        let isPlaying = false;
        let uid = 0;
        global.roomDataOnGame.forEach(async (item, index) => {
            if (item[1] == msg.id) {
                isPlaying = true;
                uid = item[3];
            }
        });
        let user_name = '',
            user_avatar = '';
        if (isPlaying) {
            let targetInfo = await memberService.getMemberInfoByIdService(uid, ['user_name', 'user_avatar']);
            user_name = targetInfo.user_name;
            user_avatar = targetInfo.user_avatar;
        }

        socket.emit('isGameOn', {
            code: 0,
            data: {status: status, index: msg.index, user_name: user_name, user_avatar: user_avatar}
        });
        return false;

    });

    //监听：判断玩家是否还在游戏中
    socket.on('isPlaying', async (msg) => {
        let status = 0;
        global.roomDataOnGame.forEach((item, index) => {
            if (item[3] == msg.uid) {
                status = 1;
                return;
            }
        });
        socket.emit('isPlaying', {code: 0, data: {status: status}});
        return false;
    });
}

export {onConnect, getRoomData}