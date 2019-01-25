import {sequelize} from './config/db';
import orderMoraService from "./service/orderMoraService";
// import memberService from "./service/memberService";
const memberModel = require('./model/memberModel');

async function getInfo(){
    // let mServicenew = new memberService(memberService);
    let a = await memberModel.model.findByPk(2, {attributes:['user_name']});
    // console.log(a[0]['user_name']);
    console.log(a.user_name);
}
getInfo();











// sequelize.transaction(async function () {
//     let createRoom = {uid:3,shape:1,grade:2,diamond_number:50};
//     let createRoom2 = {uid:3,shape:1,grade:2,diamond_number:10};
//     let aa;
//     await orderMoraService.baseCreate(createRoom2)
//        .then(async () => {
//            await orderMoraService.baseCreate(createRoom);
//         }).then(async (updateData) => {
//             //TODO:结算双方钻石
//             let calRes;
//             switch(updateData){
//                 case '2'://双方平：1.解冻房主押金
//                     //calRes = await memberService.cancelMoraService(msg.uid, updateRes);
//                     break;
//                 case '3'://房主胜：1.扣除我的钻石，2.结算手续费，3.解冻房主押金，3.给房主增加钻石
//
//                     break;
//                 case '4'://房主败：1.扣除房主押金，2.结算手续费，3.给自己增加钻石
//
//                     break;
//             }
//         }).then(async ()=>{
//             //TODO:插入双方资产变更
//             //await
//         }).then(async ()=>{
//             //TODO:插入双方对战日志
//             //await
//        });
//     // await orderMoraService.baseCreate(createRoom,{transaction: t});
// }).catch(function (err) {
//     console.log(err);
//     // 事务已被回滚
//     // err 是拒绝 promise 链返回到事务回调的错误
// });



