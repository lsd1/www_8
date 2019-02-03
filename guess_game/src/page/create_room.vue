<template>
    <div id="create_game">
        <NavSubpage></NavSubpage>
        <div class="all_amount" :style="{'background-image':'url(' + $t('imgSrc.createRoomBg1') + ')' }">
            <div v-for="(item,index) in amountArr">
                <Setting @choose="choose(item,index)" :choose="item==amount?1:0" :amount="item"></Setting>
            </div>
        </div>

        <div class="choose_type" :style="{'background-image':'url(' + $t('imgSrc.createRoomBg2')  + ')' }">
            <div v-for="(item,index) in types" @click="changeType(index)" class="type_outer">
                <img :src="item" class="type_one">
                <img src="../images/resourse/createroom_content_title2_choice2x.png" v-if="index==srcIndex"
                     class="choose_one">
            </div>
        </div>

        <div class="room_btn">
            <img :src="$t('imgSrc.cancelRoom')" alt="" class="cancel" @click="cancelRoom">
            <img :src="$t('imgSrc.confirmBtn')" alt="" class="confirm" @click="createRoom">
        </div>

        <!--已取消对局弹窗-->
        <Popup @hidePopup="hidePopup" :modalContent="hasCancelHtml" :btns="['cancel']" v-if="hasCancelHtmlShow"></Popup>
        <!--对局已结束-->
        <Popup @hidePopup="hidePopup" :modalContent="hasOverHtml" :btns="['ok']" v-if="hasOverHtmlShow"></Popup>
        <!--确认支付竞猜额-->
        <Popup @hidePopup="hidePopup" @showPsw="showPsw" :modalContent='payHtml' :btns="['cancel','confirm']"
               v-if="payHtmlShow"></Popup>
        <!--余额不足-->
        <Popup @hidePopup="hidePopup" @chargeDiamonds="chargeDiamonds" :modalContent='hasBalanceHtml'
               :btns="['cancel','charge']" v-if="hasBalanceHtmlShow"></Popup>
        <!--创建房间失败-->
        <Popup @hidePopup="hidePopup" :modalContent='createFailMsg' :btns="['ok']" v-if="createFailMsgShow"></Popup>

        <!--输入密码-->
        <PswInput v-if="inputStatus" @inputHide="inputHide" @setPwd="setPwd"></PswInput>
    </div>
</template>

<script>
    import Setting from '../components/SetAmount.vue';
    import NavSubpage from '../components/NavSubpage.vue';
    import Popup from '../components/Popup.vue';
    import PswInput from '../components/PswInput.vue';
    import Bus from '../components/bus';
    import { Toast } from 'mint-ui';
    // var socket = io('http://192.168.1.238:666');


    export default {
        name: "createGame",
        data() {
            // let ammout = 10;
            return {
                inputStatus: false,//密码框
                createSucOrFail: false,// 是否创建成功
                amountArr: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000],// 所有的数目
                amount: 10, // 默认数目
                grade: 0, // 等级
                types: [
                    require('../images/resourse/createroom_content_title2_stone2x.png'),
                    require('../images/resourse/createroom_content_title2_scissors2x.png'),
                    require('../images/resourse/createroom_content_title2_cloth2x.png')
                ],// 石、头布、剪刀
                // types: [
                //     this.$t('imgSrc.cloth'),
                //     this.$t('imgSrc.scissor'),
                //     this.$t('imgSrc.stone')
                // ],// 布、剪刀、石头
                srcIndex: 0,// 默认出
                imgsrc: require('../images/resourse/home_content_diamonds2x.png'),
                hasCancelHtml: `<div style="height: 2.72rem;padding:1rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">${this.$t('popup.hasCancelGame')}</div><div style="font-size:0.24rem; font-family:PingFang-SC-Bold;line-height: 1;">${this.$t('popup.otherRoom')}</div></div>`,
                hasCancelHtmlShow: false,
                hasOverHtml: `<div style="height: 2.72rem;padding:0.81rem 1rem 0.69rem;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem; "}">${this.$t('popup.otherFinished')}</div><div style="font-size:0.24rem; font-family:PingFang-SC-Bold;margin-top: 0.41rem;color: #D9D4FF;">${this.$t('popup.hasFinished')}</div></div>`,
                hasOverHtmlShow: false,
                // payHtml: '<div style="height: 2.72rem;padding:0.4rem 1rem 0"><div style="font-size:0.36rem; font-family:PingFang-SC-Bold;font-weight:bold;">确认支付竞猜额</div><div style="margin-top: 0.29rem;width: 4rem;height: 1.4rem;background:rgba(231,228,255,1);border-radius:0.08rem;position: relative;"><img src="' + imgsrc + '" style="width:0.54rem;height:0.51rem;position: absolute;left: 0.4rem;top:0.48rem;" alt=""><div style="position: absolute;left: 1.41rem;top: 0;height: 1.4rem;line-height: 1.4rem;">' + a + '</div></div></div>',
                payHtml: '',
                payHtmlShow: false,
                hasBalanceHtml: `<div style="height: 2.72rem;padding:1.33rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">${this.$t('popup.balance')}</div></div>`,
                // hasBalanceHtml: '<div style="height: 2.72rem;padding:1.33rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;"><div style="font-size:0.36rem; font-family:PingFang-SC-Bold;font-weight:bold;">余额不足，请充值！</div></div>',
                hasBalanceHtmlShow: false,
                createFailMsg:``,
                createFailMsgShow: false,
            }
        },
        components: {
            Setting,
            NavSubpage,
            Popup,
            PswInput,
        },
        methods: {
            choose(i, j) {//调整数目
                this.amount = i;
                this.grade = j;
            },
            changeType(i) {//调整出的什么
                this.srcIndex = i;
            },
            inputHide() { // 隐藏输入密码框
                this.inputStatus = false;
            },
            setPwd(i) { // 密码输入后
                this.payHtmlShow = false;
                this.payForRoom(this.$md5(i))
            },
            hidePopup() {
                this.hasCancelHtmlShow = false;
                this.hasOverHtmlShow = false;
                this.payHtmlShow = false;
                this.hasBalanceHtmlShow = false;
                this.createFailMsgShow = false;
            },
            payForGame() { // 后台请求，查询是否通过请求

                return 'yes';
                // return 'no';
            },
            createRoom() { // 创建房间
                var balance = this.payForGame();
                console.log(balance)
                if (balance == 'yes') {
                    this.payHtml = `
                        <div style="height: 2.72rem;padding:0.4rem 1rem 0">
                            <div style="font-size:0.36rem; font-family:PingFang-SC-Bold;font-weight:bold;">${this.$t("popup.payForRoom")}</div>
                            <div style="margin-top: 0.29rem;width: 4rem;height: 1.4rem;background:rgba(231,228,255,1);border-radius:0.08rem;position: relative;display: flex;justify-content: center;align-items: center;">
                                <img src="${this.imgsrc}" style="width:0.54rem;height:0.51rem;position: absolute;left: 0.4rem;top:0.48rem;" alt="">
                                <div style="position: absolute;left: 1.41rem;line-height: normal;font-family: JiaLiChaoCuYuanJ;font-weight: 900;color: rgba(255, 162, 0, 1);-webkit-text-stroke: 1px #FFFEDC;text-stroke: 1px #FFFEDC;font-size: 0.9rem;font-weight: 900;">${this.amount}</div>
                            </div>
                        </div>`;
                    this.payHtmlShow = true;

                } else if (balance == 'no') {// 余额不足
                    console.log("********余额不足******")
                    this.payHtmlShow = false;
                    this.hasBalanceHtmlShow = true;
                } else {
                    console.log('Error...')
                }
            },
            cancelRoom() { // 取消对局,返回首页
                this.$router.replace({
                    name: 'index'
                });

                // console.log("------取消对局-----");
                // socket.on('delGame', msg=> {
                //     if(msg.code === 0) {
                //         localStorage.setItem("diamond", msg.diamond);
                //         this.$router.replace({
                //             name: 'index'
                //         })
                //     }else {
                //         Toast({
                //             message: '房间已取消',
                //             duration: 2000
                //         })
                //     }
                // });
            },
            showPsw(){
                this.hidePopup()
                this.inputStatus = true;
            },
            payForRoom(i) { // 支付并创建房间
                this.createSucOrFail = true; //支付是否成功
                console.log('******支付并创建房间******')
                if (this.createSucOrFail) {
                    var self = this;
                    var parmis = this.parmis.initParams('createRoom',{
                        uid: uid,
                        grade: self.grade,
                        shape: self.srcIndex,
                        pwd: i
                    });
                    socket.emit('createRoom', parmis.data);
                }
            },
            chargeDiamonds() { // 充值
                alert('充值')
                this.$router.push({
                    name: 'my_purse'
                })
            },
            createRoomRes(msg) {
                if(msg.code == 0){//创建失败
                    console.log('*********创建房间成功*******')
                    Bus.$emit('updateDiamond', msg.data.diamond);
                    this.$router.replace({
                        name: 'gameRoom',
                        params: {
                            roomOwner: true,
                            grade: msg.data.grade,
                            amount: msg.data.amount,
                            srcIndex: msg.data.shape,
                            id : msg.data.id
                        }
                    });
                }else{
                    this.createFailMsgShow = true;
                    this.createFailMsg = `<div style="height: 2.72rem;padding:0.81rem 1rem 0.69rem;"><div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem; "}">${this.$t('createRoom.createFail')}</div><div style="font-size:0.24rem; font-family:PingFang-SC-Bold;margin-top: 0.41rem;color: #D9D4FF;">${msg.msg}</div></div>`
                }
            }
        },
        mounted() {
            var self = this;
        },
        watch: {
            // createSucOrFail(){
            //     this.payForRoom();
            // }
        },
        computed: {},

    }
</script>

<style scoped>
    #create_game {
        padding-top: 1.2rem;
    }

    .all_amount {
        /*background-image: url(../images/cn/createroom_content_title1_bg2x.png);*/
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 1.58rem 0.57rem 0.68rem;
        width: 7.06rem;
        height: 5.26rem;
        border-radius: 0.08rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .all_amount > div {
        display: inline-block;
    }

    .choose_type {
        /*background-image: url(../images/cn/createroom_content_title2_bg2x.png);*/
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

    .room_btn {
        position: absolute;
        bottom: 0.42rem;
        /*left: 0.27rem;*/
        /*right: 0.27rem;*/
        margin: 0 0.22rem;
        width: 7.06rem;
        height: 1.76rem;
        /*padding: 0 0.22rem;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
    }

    .room_btn img {
        width: 3.46rem;
    }

    .cancel {
        float: left;
    }

    .confirm {
        float: right;
    }
</style>
