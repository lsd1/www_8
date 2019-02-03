<template>
    <div class="app-container">
        <!--顶部导航-->
        <div class="home-nav mui-bar mui-bar-nav mui-bar-nav-bg">
            <div id="GoApp" @click="GoApp" class="go-back"><img src="../images/resourse/hone_navigation_return2x.png"></div>
            <div class="home-title"><img :src="$t('imgSrc.gameHall')"></div>
            <div @click="showRule" class="navigation"><img src="../images/resourse/hone_navigation_explain2x.png"></div>
        </div>

        <!--列表-->
        <div class="rooms">
            <!--中间内容-->

            <div v-for="item in amountArrAll" style="float: left" @click="enterRoom(item)">
                <SmallRome :amount="item.amount" :hasData="item.number == 0?false:true"></SmallRome>
            </div>

        </div>

        <!--底部tab栏-->
        <div class="footer-nav mui-bar mui-bar-tab">
            <router-link to="/create_room" class="toroom">
                <img :src="$t('imgSrc.createRoom')" alt="">
            </router-link>
            <router-link to="/record" class="toroom">
                <img :src="$t('imgSrc.myRecord')" alt="">
            </router-link>
            <router-link to="/MyRoom" class="toroom">
                <img :src="$t('imgSrc.myRoom')" alt="">
            </router-link>
        </div>

        <!--我的房间按钮-->
        <!--<div class="my_room" v-if="owner" @click="backToMyRoom">-->
            <!--<img src="../images/cn/home_room_icon2x.png" alt="">-->
        <!--</div>-->

        <!--玩法说明-->
        <!--<Popup @hidePopup="hidePopup" :modalContent="wayHtml" :btns="['ok']" v-if="hasWayHtmlShow" class="rule"></Popup>-->
        <div class="rule mui-backdrop" v-if="hasWayHtmlShow" @click.self="closeRule">
            <div class="rule-box">
                <div class="title-rule"></div>
                <div class="content-rule">
                    <p> {{$t('index.rule1')}}
                        <br><br>
                        {{$t('index.rule2')}}
                        <br><br>
                        {{$t('index.rule3')}}
                        <br><br>
                        {{$t('index.rule4')}}
                    </p>
                </div>
                <div class="button-rule">
                    <div class="confirm-btn" @click="closeRule"></div>
                </div>
            </div>
        </div>
        <Popup @hidePopup="hidePopup" :modalContent="hasRoomHtml" :btns="['ok']" v-if="hasRoomHtmlShow"></Popup>
        <!--<Popup @hidePopup="hidePopup" :modalContent="noRoomHtml" :btns="['ok']" v-if="noRoomHtmlShow"></Popup>-->
        <Popup @hidePopup="hidePopup" @goCreateRoom="goCreateRoom" :modalContent="noRoomEnoughHtml" :btns="['cancel','goCreateRoom']" v-if="noRoomEnough"></Popup>
        <FullMask v-if="fullMask"></FullMask>
    </div>
</template>

<script>
    import storage from "../storage.js";

    import back from "../back.js"

    import Popup from '../components/Popup.vue';
    import SmallRome from '../components/SmallRome.vue';
    import FullMask from '../components/loading.vue';
    export default {
        name: 'index',
        data() {
            return {
                // socket: null,
                // owner: storage.get('owner'),
                amountArrAll: [],// 所有的数目
                imgsrc: require('../images/cn/popup_title_cn.png'),
                wayHtml: '',
                hasWayHtmlShow: false,
                hasRoomHtml: '<div style="margin-top:1.11rem;color:#fff;text-align: center;font-family:PingFang-SC-Bold;font-weight: bold;"><div style="font-size: 0.36rem;margin-bottom: 0.2rem;">您创建的游戏还未结束</div><div style="font-size: 0.24rem;color:#D9D4FF;">请游戏结束后再创建新的房间</div></div>',
                hasRoomHtmlShow: false,
                fullMask: false,
                noRoomEnoughHtml: `<div style="height: 2.72rem;padding:1.2rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;">
                            <div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">
                                ${this.$t('index.noroom')}
                            </div>
                        </div>`,//没有多余的房间
                noRoomEnough:false,
                amount: 0, // 进入房间的数量
                goGame: true,//首页去其他页面
            }
        },
        // props:['all'],
        mounted: function () {
            this.socket= socket;
            // console.log(1)
            // console.log(this.$i18n.locale)
            // console.log( this.socket)
            var self = this;
            socket.emit('getAllRoom');


            // try {
            //     android.callAndroid('调用成功，耶！！！')
            // } catch (e) {
            //     alert('出现错误, 如果在非android环境下访问, 出现该警告是正常的.')
            //     window.maiguoer.goBack();
            // }
        },
        methods: {
            enterRoom(res) {// 游客进入房间时,数量应该时发送请求，并获取到的数量
                console.log("--------------")
                console.log(res)
                if (res.number == 0) {// 进入的类型没有多余的房间可以进入，提示用户要不要创建房间
                    console.log('没得房间拉！！！')
                    // this.noRoomEnoughHtml =
                    //     `<div style="height: 2.72rem;padding:1.2rem 1rem 0.78rem;display: flex;flex-direction: column;justify-content: space-between;">
                    //         <div style="font-family:PingFang-SC-Bold;font-weight:bold;${this.$i18n.locale == "en" ? "line-height:1.5;font-size:0.3rem;" : "font-size:0.36rem;"}">
                    //             ${this.$t('index.noroom')}
                    //         </div>
                    //     </div>`;
                    this.noRoomEnough = true;
                    return false;
                }else{
                    // alert("grade:"+res.grade)
                    // alert("uid:"+uid)
                    var self = this;
                    this.amount = res.amount;
                    socket.emit('enterRoom', {grade: res.grade, uid: uid});
                }
            },
            enterRoomRes(msg){
                console.log('index.get.msg:', msg);
                if(msg.code == 0){
                    if (msg.data.uid === uid) { // uid是自己则跳转
                        this.$router.push({
                            name: 'gameRoom',
                            params: {
                                roomOwner: false,
                                grade: JSON.stringify(msg.data.grade),
                                amount: msg.data.amount,
                                srcIndex: 0,//-1代表没出
                                // otherName:msg.data.user_name,//对方名字
                                otherAvatar: msg.data.user_avatar,//对方头像
                                id: msg.data.id,//房间id
                            }
                        })
                        console.log("3:"+msg.data)
                    }
                }else{
                    this.noRoomEnough = true;
                }
            },
            updateRoomInfo(allRoom){
                this.amountArrAll = allRoom;
            },
            GoApp() {
                try{
                    window.maiguoer.goApp();
                }catch (e) {
                    this.cookie.setCookie('app_method', '{"type":"goApp"}', 10);
                    this.cookie.setCookie('app_method', '{"type":"goBack"}', 10);
                }
            },
            closeRule() {
                this.hasWayHtmlShow = false
            },
            hidePopup() {
                this.hasWayHtmlShow = false;
                this.noRoomEnough = false;
            },
            showRule() {
                this.hasWayHtmlShow = true;
            },
            backToMyRoom() {
                this.$router.push({
                    name: 'gameRoom'
                })
            },
            goCreateRoom(){
                this.$router.push({
                    name: 'createRoom'
                })
            },
        },
        watch: {

        },
        created() {

        },

        components: {
            Popup,
            SmallRome,
            FullMask
        }
    }


</script>

<style scoped>
    .mui-bar {
        background-color: rgba(0, 0, 0, 0);
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .mui-backdrop {
        background-color: rgba(0, 0, 0, .7);
    }
    .rule {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rule-box {
        width: 6rem;
        border-radius: .2rem;
        overflow: hidden;
        /*height: 8rem;*/
    }
    .title-rule {
        height: 1.2rem;
        background-image: url(../images/cn/popup_title_cn.png);
        -webkit-background-size: cover;
        background-size: cover;
    }
    .content-rule{
        height: 5.7rem;
        background-color: #9559F8;
        padding: 0 8%;
        overflow-y: scroll;
    }
    .content-rule .p-box {

        height: 100%;
    }
     .content-rule::-webkit-scrollbar {
        width: 8px;
    }
     .content-rule::-webkit-scrollbar-track {
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
     .content-rule::-webkit-scrollbar-thumb {
        background-color:#5F27C4;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius:2em;
    }
    .content-rule p {
        font-size:0.3rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .button-rule {
        height: 1.5rem;
        padding-top: .2rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: #9559F8;
    }
    .confirm-btn {
        width: 2.2rem;
        height: 1.2rem;
        background-image: url(../images/cn/confirm_cn.png);
        -webkit-background-size: cover;
        background-size: cover;

    }


    .app-container .home-nav {

        display: flex;
        height: 1.2rem;
        justify-content: space-between;
        align-items: stretch;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 2%;
        background: #9559F8 url(../images/resourse/home_navigation_bg2x.png);
        -webkit-background-size: cover;
        background-size: cover;
    }

    .app-container .home-nav .go-back {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .go-back img, .navigation img {
        width: 50%;
    }

    .home-title img {
        width: 2.02rem;
        height: 0.52rem;
    }

    .app-container .home-nav .home-title {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app-container .home-nav .navigation {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app-container .room-box {
        padding: 1.5rem 3%;
        padding-bottom: 2rem;
    }

    .room-list {
        background-image: url(../images/cn/hone_content_bg_cn.png);
        background-size: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        padding: 2% 10% 4% 10%;
        margin-top: -6%;
    }

    .room-list .quiz-detali {
        width: 55%;
        text-align: right;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding-top: 5%;
        padding-right: 15%;
    }

    .quiz-detali .quiz-num {
        width: 100%;
        height: .9rem;
        line-height: normal;
        font-size: 0.9rem;
        font-family: JiaLiChaoCuYuanJ;
        font-weight: 900;
        color: rgba(255, 162, 0, 1);
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .quiz-num span {
        display: inline-block;
        width: .6rem;
        height: .6rem;
        background-image: url(../images/resourse/home_content_diamonds2x.png);
        -webkit-background-size: cover;
        background-size: cover;
    }

    .app-container .footer-nav {
        height: 2.86rem;
        width: 100%;
        background-image: url(../images/resourse/hone_Label_bg2x.png);
        -webkit-background-size: cover;
        background-size: cover;
        display: flex;
        justify-content: space-around;
        align-items: stretch;
        padding: 0 0.71rem 0.37rem 0.68rem;
        align-items: flex-end;
    }

    .footer-nav .toroom {
        width: 1.64rem;
        height: 1.84rem;
    }

    .toroom img {
        width: 100%;
        height: 100%;
    }

    .my_room {
        width: 1.48rem;
        height: 1.58rem;
        position: absolute;
        bottom: 2.2rem;
        right: 0.26rem;
    }

    .my_room img {
        width: 100%;
        height: 100%;
    }

    .rule >>> .rule_title {
        width: 6rem;
        height: 1.23rem;
        position: absolute;
        left: -0.59rem;
        top: -1.23rem;
    }

    .rule >>> .rule_div {
        position: relative;
        font-size: 0.3rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 0.5rem;
        text-align: left;
    }

    .rule >>> .modal {
        height: 6.9rem !important;
        border-radius: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        padding: 0.21rem 0.59rem;
    }

    .no-list {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
        position: relative;
    }

    .no-list img {
        width: 70%;
    }

    .no-list .no-list-text {
        position: absolute;
        bottom: .5rem;
        font-size: 0.24rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(207, 201, 251, 1);
    }

    .rooms {
        padding: 1.41rem 0.18rem 0;
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*justify-content: space-between;*/
    }
</style>
