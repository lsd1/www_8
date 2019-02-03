<template>
    <div id="game_room">
        <NavSubpage :uid="uid" :id="id" :roomOwner="roomOwner"></NavSubpage>
        <div class="amount" :style="{'background-image':'url(' + $t('imgSrc.amount') + ')' }">
            <p class="amount_detail">{{amount}}</p>
        </div>

        <div class="pk">
            <div class="left">
                <div class="user_header">
                    <!--<img class="de_header" src="../images/resourse/createsuccess_default_portrait2x.png" alt="">-->

                    <img v-if="roomOwner" class="de_header" :src="myHeadImg" alt="">
                    <img v-if="!roomOwner&&!GameOver" class="de_header"
                         src="../images/resourse/createsuccess_portrait12x.png" alt="">
                    <img v-if="!roomOwner&&GameOver" class="de_header" :src="otherHeadImg" alt="">
                    <div class="owner">
                        <img src="../images/resourse/createsuccess_owner_icon@2x.png" alt="">
                    </div>
                    <img v-if="roomOwner" class="post" src="../images/resourse/createsuccess_triangle_icon@2x.png"
                         alt="">

                </div>
                <!--<div>{{this.roomOwner}}-----{{this.srcIndex==0}}</div>-->
                <!--<img class="user_pk" src="../images/resourse/hone_content_cards2x.png" alt="">-->
                <img v-if="roomOwner&&srcIndex==2" class="user_pk"
                     src="../images/resourse/createroom_content_title2_cloth2x.png" alt="">
                <img v-if="roomOwner&&srcIndex==1" class="user_pk"
                     src="../images/resourse/createroom_content_title2_scissors2x.png" alt="">
                <img v-if="roomOwner&&srcIndex==0" class="user_pk"
                     src="../images/resourse/createroom_content_title2_stone2x.png" alt="">
                <img v-if="!roomOwner&&otherSrcIndex==-1" class="user_pk"
                     src="../images/resourse/hone_content_cards2x.png" alt="">
                <img v-if="!roomOwner&&otherSrcIndex==2" class="user_pk"
                     src="../images/resourse/createroom_content_title2_cloth2x.png" alt="">
                <img v-if="!roomOwner&&otherSrcIndex==1" class="user_pk"
                     src="../images/resourse/createroom_content_title2_scissors2x.png" alt="">
                <img v-if="!roomOwner&&otherSrcIndex==0" class="user_pk"
                     src="../images/resourse/createroom_content_title2_stone2x.png" alt="">
            </div>
            <img class="pk_img" src="../images/resourse/pk.png" alt="">
            <div class="right">
                <div class="user_header">
                    <img v-if="!roomOwner" class="de_header" :src="myHeadImg" alt="">
                    <img v-if="roomOwner&&!isGaming" class="de_header"
                         src="../images/resourse/createsuccess_default_portrait2x.png" alt="">
                    <img v-if="roomOwner&&isGaming&&!GameOver" class="de_header"
                         src="../images/resourse/createsuccess_portrait12x.png" alt="">
                    <img v-if="roomOwner&&isGaming&&GameOver" class="de_header" :src="otherHeadImg" alt="">
                    <!--<div class="owner">-->
                    <!--<img src="../images/resourse/createsuccess_owner_icon@2x.png" alt="">-->
                    <!--</div>-->
                    <img v-if="!roomOwner" class="post" src="../images/resourse/createsuccess_triangle_icon@2x.png"
                         alt="">
                </div>
                <img v-if="!roomOwner&&srcIndex==2" class="user_pk"
                     src="../images/resourse/createroom_content_title2_cloth2x.png" alt="">
                <img v-if="!roomOwner&&srcIndex==1" class="user_pk"
                     src="../images/resourse/createroom_content_title2_scissors2x.png" alt="">
                <img v-if="!roomOwner&&srcIndex==0" class="user_pk"
                     src="../images/resourse/createroom_content_title2_stone2x.png" alt="">
                <img v-if="!roomOwner&&srcIndex == -1" class="user_pk" src="../images/resourse/hone_content_cards2x.png"
                     alt="">
                <img v-if="roomOwner&&otherSrcIndex==-1" class="user_pk"
                     src="../images/resourse/hone_content_cards2x.png" alt="">
                <img v-if="roomOwner&&otherSrcIndex==2" class="user_pk"
                     src="../images/resourse/createroom_content_title2_cloth2x.png" alt="">
                <img v-if="roomOwner&&otherSrcIndex==1" class="user_pk"
                     src="../images/resourse/createroom_content_title2_scissors2x.png" alt="">
                <img v-if="roomOwner&&otherSrcIndex==0" class="user_pk"
                     src="../images/resourse/createroom_content_title2_stone2x.png" alt="">
            </div>
        </div>

        <!--游客选择猜拳-->
        <div class="choose_type" v-if="!this.$route.params.roomOwner&&!GameOver">
            <div v-for="(item,index) in types" @click="changeType(index)" class="type_outer">
                <img :src="item" class="type_one">
                <img src="../images/resourse/createroom_content_title2_choice2x.png" v-if="index==srcIndex"
                     class="choose_one">
            </div>
        </div>

        <!--房主等待他人进房-->
        <div class="pk_status" v-if="roomOwner">
            <div v-if="!GameOver&&isGaming">{{$t('gameRoom.waiting')}}</div>
            <div v-if="!GameOver&&!isGaming">{{$t('gameRoom.waitingOthers')}}</div>
        </div>

        <!--最后得结果-->
        <div class="pk_status" v-if="GameOver">
            <div v-if="GameOver">
                <div v-if="result==4">
                    <div class="result">{{$t('gameRoom.lose')}}</div>
                    <div class="result_content">{{$t('gameRoom.loseDetail')}} <i>{{resultAmount}}</i></div>
                </div>
                <div v-else-if="result == 3">
                    <div class="result"> {{$t('gameRoom.win')}}</div>
                    <div class="result_content">{{$t('gameRoom.winDetail')}} <i>{{resultAmount}}</i></div>
                </div>
                <div v-else-if="result == 2">
                    <div class="result"> {{$t('gameRoom.tim')}}</div>
                    <div class="result_content">{{$t('gameRoom.timDetail')}} <i>{{resultAmount}}</i></div>
                </div>
            </div>
        </div>


        <!--房主所在房间-->
        <div class="btns" v-if="roomOwner">
            <img v-if="GameOver" :src="$t('imgSrc.cancelIng')" alt="">
            <img v-else :src="$t('imgSrc.cancel')" alt="" @click="delGame">

            <img :src="$t('imgSrc.backRoom')" alt="" @click="backHome">
        </div>

        <!--游客进入房间-->
        <div class="btns" v-if="!roomOwner && !isGaming && !GameOver">
            <img :src="$t('imgSrc.exit')" alt="" @click="cancelGame">
            <img :src="$t('imgSrc.confirmGuess')" alt="" @click="showPay">
        </div>

        <!--游客结束游戏-->
        <div class="btn_one" v-if="!roomOwner && GameOver">
            <img :src="$t('imgSrc.backRoom')" alt="" @click="backHome">
        </div>

        <!--進入房间失败-->
        <Popup @hidePopup="hidePopup" :modalContent='enterFailMsg' :btns="['ok']" v-if="enterFailMsgShow"></Popup>

        <!--确认取消对局-->
        <Popup @hidePopup="hidePopup" @sureCancelGame="sureCancelGame" :modalContent="hasCancelHtml"
               :btns="['cancel','sureCancelGame']" v-if="hasCancelHtmlShow"></Popup>

        <!--游客确认退出对局-->
        <Popup @hidePopup="hidePopup" @sureBack="sureBack" :modalContent="sureBackHtml"
               :btns="['cancel','sureBack']" v-if="sureBackHtmlShow"></Popup>

        <!--余额不足-->
        <Popup @hidePopup="hidePopup" @chargeDiamonds="chargeDiamonds" :modalContent='hasBalanceHtml'
               :btns="['cancel','charge']" v-if="hasBalanceHtmlShow"></Popup>

        <!--确认支付竞猜额-->
        <Popup @hidePopup="hidePopup" @showPsw="showPsw" :modalContent='payHtml' :btns="['cancel','confirm']"
               v-if="payHtmlShow"></Popup>

        <!--输入密码-->
        <PswInput v-if="inputStatus" @inputHide="inputHide" @setPwd="setPwd"></PswInput>

    </div>
</template>

<script>

    import NavSubpage from '../components/NavSubpage.vue'
    import PswInput from '../components/PswInput.vue';
    import Popup from '../components/Popup.vue';
    import Bus from '../components/bus';
    export default {
        name: "gameRoom",
        data() {
            return {
                resultAmount: this.$route.params.amount,
                amount: this.$route.params.amount || '',
                roomOwner: this.$route.params.roomOwner || '', // 是否是房主
                srcIndex: this.$route.params.srcIndex || '',// 我的出拳
                otherHeadImg: this.$route.params.otherAvatar || '',// 别人的真实头像
                id: this.$route.params.id || '',//房间id
                grade: this.$route.params.grade || '',//房间等级

                uid: uid,

                inputStatus: false,//密码框
                isGaming: false, // 游戏开始与否
                GameOver: false, // 游戏结束
                result: 0,//输赢结果 1--赢 、0--输、 2--平

                imgsrc: require('../images/resourse/home_content_diamonds2x.png'),
                types: [
                    require('../images/resourse/createroom_content_title2_stone2x.png'),
                    require('../images/resourse/createroom_content_title2_scissors2x.png'),
                    require('../images/resourse/createroom_content_title2_cloth2x.png')
                ],// 布、剪刀、石头
                myHeadImg: localStorage.getItem('avatar'), // 自己的真实头像
                twoPerson: require("../images/resourse/createsuccess_portrait12x.png"),//两个人再房间的时候，对方的头像
                otherSrcIndex: -1, //别人的出拳

                enterFailMsg: '',
                enterFailMsgShow: false, //输入错误
                hasCancelHtml: `<div style="height: 2.72rem;padding:1rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">${this.$t('popup.sureCancelGame')}</div><div style="font-size:0.24rem; font-family:PingFang-SC-Bold;line-height: 1;">${this.$t('popup.sureCancelGameDetail')}</div></div>`,
                hasCancelHtmlShow: false, //已取消房间

                roomId: null,
                hasBalanceHtmlShow: false, //余额不足
                hasBalanceHtml: `<div style="height: 2.72rem;padding:1.33rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">${this.$t('popup.balance')}</div></div>`,
                sureBackHtmlShow: false, // 确认返回
                sureBackHtml: `<div style="height: 2.72rem;padding:1.33rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">${this.$t('popup.sureBackHtml')}</div></div>`,
                payHtml: '',
                payHtmlShow: false,// 游客支付

            }
        },
        methods: {
            submitRes(i) {// 游客开始对局
                console.log(this.srcIndex)
                let self = this;
                var parmis = this.parmis.initParams('submitRes',{
                    id: Number(self.id),
                    uid: Number(uid),
                    shape: Number(self.srcIndex),
                    pwd: i
                });
                socket.emit('submitRes', parmis.data);
            },
            submitResRes(msg){
                if (msg.code == 0) {//進入對局成功
                    if (msg.data.id == this.id) {
                        this.result = msg.data.status;
                        this.isGaming = true;
                        this.resultAmount = msg.data.amount;
                        this.GameOver = true;
                        this.otherSrcIndex = msg.data.other_shape;
                        //更新钻石结果
                        Bus.$emit('updateDiamond', msg.data.diamond);
                    }
                } else { //開始對局失败
                    console.log('開始對局失败！！！')
                    this.enterFailMsgShow = true;
                    this.enterFailMsg = `<div style="height: 2.72rem;padding:0.81rem 1rem 0.69rem;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem; "}">${this.$t('createRoom.playFail')}</div><div style="font-size:0.24rem; font-family:PingFang-SC-Bold;margin-top: 0.41rem;color: #D9D4FF;">${msg.msg}</div></div>`
                }
            },
            delGame() { // 取消房间
                let self = this;
                socket.emit('delGame', {
                    id: self.id,
                    uid: uid
                });
            },
            delGameRes(msg){
                if(msg.code == 0){
                    localStorage.setItem('diamond',msg.data.diamond);
                    this.$refs.child.backHome();
                }else{
                    Toast({
                        message: msg.msg,
                        duration: 2000
                    });
                }
            },
            cancelGame() { // 取消对局
                if (this.roomOwner) {
                    this.hasCancelHtmlShow = true;
                } else {
                    this.sureBackHtmlShow = true;
                }
            },
            cancelGameRes(msg){
                if (msg.data.id == this.id) { // 房间号是自己的话
                    if (msg.data.uid === uid) {
                        this.isGaming = false;
                        this.$router.replace({
                            name: 'index'
                        });
                    }else{//房主
                        this.isGaming = false; // 证明人离开了
                    }
                }
            },
            enterRoomRes(msg){
                if (msg.data.id == this.id) { // 房间号是自己的话
                    if (this.roomOwner && msg.data.uid !== uid) {//房主
                        this.isGaming = true; // 证明人进来了
                    }
                }
            },
            setPwd(i) { // 密码输入后
                console.log(this.$md5(i))
                this.submitRes(this.$md5(i))
            },
            showPay() {
                if (this.srcIndex == -1) {// 没有选择shape
                    return false
                } else {
                    this.payHtml = `
                        <div style="height: 2.72rem;padding:0.4rem 1rem 0">
                            <div style="font-size:0.36rem; font-family:PingFang-SC-Bold;font-weight:bold;">${this.$t("popup.payForRoom")}</div>
                            <div style="margin-top: 0.29rem;width: 4rem;height: 1.4rem;background:rgba(231,228,255,1);border-radius:0.08rem;position: relative;">
                                <img src="${this.imgsrc}" style="width:0.54rem;height:0.51rem;position: absolute;left: 0.4rem;top:0.48rem;" alt="">
                                <div style="position: absolute;left: 1.41rem;top: 0;height: 1.4rem;line-height: 1.4rem;font-family: JiaLiChaoCuYuanJ;font-weight: 900;color: rgba(255, 162, 0, 1);-webkit-text-stroke: 1px #FFFEDC;text-stroke: 1px #FFFEDC;font-size: 0.9rem;font-weight: 900;">${this.amount}</div>
                            </div>
                        </div>`;
                    this.payHtmlShow = true;
                }
            },
            showPsw() { // 显示出密码框
                if (this.srcIndex == -1) {// 没有选择shape
                    return false
                } else {
                    this.payHtmlShow = false;
                    this.inputStatus = true;
                }
            },
            inputHide() { // 隐藏输入密码框
                this.inputStatus = false;

            },
            sureCancelGame() { // 取消房间
                let self = this;
                socket.emit('cancelGame', {
                    id: self.id,
                    uid: uid
                });
            },
            backHome(fromSystem) { // 返回大厅
                if(fromSystem){
                    this.$router.replace({
                        name: 'index'
                    });
                    return false;
                }

                let self = this;
                if (this.roomOwner) {
                    this.$router.replace({
                        name: 'index'
                    })
                } else {
                    socket.emit('cancelGame', {
                        id: self.id,
                        uid: uid
                    });
                }
            },
            changeType(i) {//调整出的什么
                console.log(i)
                this.srcIndex = i;
            },
            hidePopup() { // 隐藏弹窗
                this.enterFailMsgShow = false;
                this.hasCancelHtmlShow = false;
                this.hasBalanceHtmlShow = false;
                this.sureBackHtmlShow = false;
                this.payHtmlShow = false;
            },
            chargeDiamonds() { // 充值
                console.log('充值')
                this.$router.push({
                    name: 'my_purse'
                })
            },
            sureBack() {// 游客未开始游戏，点击退出弹窗
                var self = this;
                socket.emit('cancelGame', {
                    id: self.id,
                    uid: uid
                });
            }
        },
        mounted() {},
        components: {
            NavSubpage,
            PswInput,
            Popup
        }
    }
</script>

<style scoped>

    #game_room {
        padding-top: 1.2rem;
    }

    .amount {
        width: 2.76rem;
        height: 1.36rem;
        margin: 0 auto;
        position: relative;
        background-image: url(../images/cn/amount_cn.png);
        background-size: 100%;
    }

    .amount_detail {
        position: absolute;
        display: inline-block;
        left: 1.29rem;
        top: 0.56rem;
        width: 1.06rem;
        height: 0.37rem;
        font-size: 0.48rem;
        font-family: Tensentype-JiaLiChaoCuYuanJ;
        font-weight: 800;
        color: #FFA200;
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
    }

    .pk {
        display: flex;
        justify-content: center;
        width: 6.72rem;
        height: 3.6rem;
        background: rgba(95, 39, 196, 0.7);
        border-radius: 0.1rem;
        margin: 0 auto 0.3rem;
    }

    .left, .right {
        width: 2.64rem;
        text-align: center;
        padding: 0.16rem 0 0.24rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .pk_img {
        margin-top: 1.59rem;
        width: 1.44rem;
        height: 0.85rem;
    }

    .user_header {
        width: 0.95rem;
        height: 0.95rem;
        /*border: 0.05rem solid #fff;*/
        border-radius: 50%;
        position: relative;
    }

    .user_header .de_header {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .owner {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0.3rem;
        height: 0.3rem;
        /*border: 0.05rem solid #fff;*/
        border-radius: 50%;
    }

    .owner img {
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 0;
        top: 0;
    }

    .post {
        position: absolute;
        top: -0.1rem;
        left: 50%;
        width: 0.26rem;
        height: 0.18rem;
        margin-left: -0.13rem;
    }

    .user_pk {
        width: 1.8rem;
        height: 2.1rem;
    }

    .pk_status {
        margin-top: 0.8rem;
        text-align: center;
        font-size: 0.48rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #fff;
        text-shadow: 0 0 0.2rem #5F27C4, 0px 3px 3px #15FCFF;
        /*text-shadow: 0 0 0.2rem #5F27C4, 0px 3px 3px #15FCFF;*/
        /*text-stroke: 1px #5F27C4;*/
        /*-webkit-text-stroke: 1px #5F27C4;*/
    }

    .result {
        font-size: 0.48rem;
    }

    .result_content {
        font-size: 0.32rem;
        margin-top: 0.4rem;
    }

    .result_content i {
        font-size: 0.6rem;
        font-family: JiaLiChaoCuYuanJ;
        font-weight: 900;
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
    }

    .btns {
        position: absolute;
        bottom: 0.42rem;
        left: 0;
        width: 100%;
        height: 1.93rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.22rem;
    }

    .btns img {
        width: 3.46rem;
        height: 1.93rem;
    }

    .btn_one {
        position: absolute;
        bottom: 0.42rem;
        left: 0;
        width: 100%;
        height: 1.93rem;
        text-align: center;
        padding: 0 0.27rem;
    }

    .btn_one img {
        width: 3.46rem;
        height: 1.93rem;
    }

    .choose_type {
        background-image: url(../images/cn/createroom_content_title2_bg2x.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 1.58rem 0.57rem 0.68rem;
        width: 7.06rem;
        height: 4.63rem;
        border-radius: 0.08rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .type_one {
        width: 100%;
        height: 100%;
    }

    .type_outer {
        width: 1.8rem;
        height: 2.1rem;
        position: relative;
    }

    .choose_one {
        position: absolute;
        top: -0.04rem;
        left: -0.04rem;
        width: 1.88rem;
        height: 2.18rem;
    }
</style>
