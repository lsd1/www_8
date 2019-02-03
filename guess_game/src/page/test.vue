<template>
    <div class="wallet-record">
        <Nav></Nav>

        <div class="my-record-title" :style="{'background-image':'url(' + $t('imgSrc.record_list_title') + ')' }"></div>

        <div class="my-record-box" v-if="hasList" ref="wrapper" >
            <mt-spinner v-show="recordList<1 && InitialLoading" color="#26a2ff" class="center"></mt-spinner>
            <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
                         :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                         :bottom-all-loaded="allLoaded" :autoFill="true" ref="loadmore">
                <transition-group class="record-lists" tag="div" ref="listbox"
                                  enter-active-class="animated bounceInUp"
                                  leave-active-class="animated bounceOut">

                    <div class="record-list" v-for="list in recordList" :key="list.id">
                        <!--内容区-->
                        <div class="top-box">
                            <div class="user-info">
                                <div class="head-box">
                                    <div class="user-head">
                                        <div class="user-img" :style="{backgroundImage: 'url('+ ownImg +')'}"></div>
                                        <div class="user-name">{{ ownName }}</div>
                                    </div>
                                    <div class="owner"></div>
                                    <div class="roomer" v-if="list.roomOwner === ownId"></div>
                                </div>
                                <div class="head-box">
                                    <div class="user-head">
                                        <div class="user-img" :style="{backgroundImage: 'url('+ list.target_user_avatar +')'}"></div>
                                        <div class="user-name">{{ list.target_user_name }}</div>
                                    </div>
                                    <div class="roomer" v-if="list.roomOwner !== ownId"></div>
                                </div>
                            </div>
                            <div class="game-detail">
                                <div class="detail-me"><img :src="list.shape | ownRoom" alt=""/></div>
                                <div class="detail-other"><img :src="list.target_shape | ownRoom" alt=""/></div>
                            </div>
                            <div class="game-result"><img :src="list.status | listImg" alt=""></div>
                        </div>
                        <!--页脚，放置补充信息或支持的操作-->
                        <div class="bottom-box">
                            <div class="diamond-box">{{ list.status === 4 ? "-" : ""}}<Num tag="span" :num="list.amount"></Num></div>
                            <div class="time-box">{{list.updated_at |  timeString}}</div>
                        </div>
                    </div>
                </transition-group>


                <div slot="top" class="mint-loadmore-top" style="text-align:center">
                    <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                    <mt-spinner v-show="topStatus == 'loading'" color="#26a2ff"></mt-spinner>
                    <span class="mint-loadmore-text">{{ topText }}</span>
                </div>
                <div v-if="allLoaded" style="text-align:center;" class="data-none">没有更多数据了</div>

                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <mt-spinner v-show="bottomStatus == 'loading'" color="#26a2ff"></mt-spinner>
                    <span class="mint-loadmore-text">{{ bottomText }}</span>
                </div>
            </mt-loadmore>
        </div>
        <div class="no-list" v-else="hasList">
            <img src="../images/resourse/my_record_blank_icon2x.png" alt="">
            <div class="no-list-text">暂时没有记录噢！</div>
        </div>


    </div>
</template>

<script>
    import Nav from '../components/NavSubpage.vue';
    import Num from '../components/NumProcess.vue';
    // import scroll from '../components/scroll.vue';


    export default {
        data() {
            return {
                hasList: true,
                filterShow: false,
                recordList: [],
                lastId: null,

                ownImg: require('../images/resourse/createsuccess_portrait12x.png'),
                ownName: '李四',
                ownId: '5',


                //上拉下拉加载所用参数
                num:0,//可删除//测试用
                autoFill: true,//是否充满框
                examplename: 'Loadmore',
                InitialLoading: true,//初始加载
                allLoaded: false,//数据是否加载完毕
                bottomStatus: '',//底部上拉加载状态
                wrapperHeight: 0,//容器高度
                topStatus: '',//顶部下拉加载状态
                topText: '',
                topPullText: '下拉刷新',
                topDropText: '释放更新',
                topLoadingText: '加载中...',
                bottomText: '',
                bottomPullText: '上拉刷新',
                bottomDropText: '释放更新',
                bottomLoadingText: '加载中...',
                repatedBottomLoading: false,//防止重复上拉加载//true为暂时不可请求加载,false为可请求加载
                reqatedTopLoading: false,//防止重复下拉刷新//true为暂时不可请求
            }
        },
        name: "wallet_record",
        components: {
            Nav,
            Num,
            // scroll
        },
        created() {
            // window.addEventListener('scroll', this.onScroll);
        },
        filters: {
            ownRoom: val=> {
                // console.log(typeof val);
                var newVal = String(val);
                var ownUrl = '';
                if(newVal){
                    switch (newVal) {
                        case '0':
                            console.log(newVal)
                            ownUrl = require("../images/resourse/createroom_content_title2_stone2x.png");
                            break;
                        case "1":
                            console.log(newVal)

                            ownUrl = require("../images/resourse/createroom_content_title2_scissors2x.png");
                            break;
                        case "2":
                            console.log(newVal)

                            ownUrl = require("../images/resourse/createroom_content_title2_cloth2x.png");
                            break;
                    }
                    // console.log(val);
                    return ownUrl;
                }else{
                    return null;
                }
            },
            timeString: time => {
                if(!time){
                    return '-';
                }
                function formatFunc(str) {    //格式化显示
                    return str > 9 ? str : '0' + str
                }
                var date2 = new Date(time);     //这步是关键
                var year = date2.getFullYear();
                var mon = formatFunc(date2.getMonth() + 1);
                var day = formatFunc(date2.getDate());
                var hour = date2.getHours();
                var noon = hour >= 12 ? 'PM' : 'AM';
                hour = hour>=12?hour-12:hour;
                hour = formatFunc(hour);
                var min = formatFunc(date2.getMinutes());
                var dateStr = year+'-'+mon+'-'+day+' ' + ' '+hour+':'+min;
                return dateStr;
            },
            listImg : sta => {
                var img = '';
                if (sta) {
                    switch (sta) {
                        case "2":
                            img = require('../images/cn/result_leave_cn.png');
                            break;
                        case "3":
                            img = require('../images/cn/result_win_cn.png');
                            break;
                        case "4":
                            img = require('../images/cn/result_lose_cn.png');
                            break;
                    }
                    return img;
                } else {
                    return null;
                }
            }
        },
        mounted() {
            // let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
            // console.log(windowWidth);
            // if (windowWidth >= 768) {//这里根据自己的实际情况设置容器的高度
            //     this.wrapperHeight = document.documentElement.clientHeight - 105;
            // } else {
            //     this.wrapperHeight = document.documentElement.clientHeight - 90;
            // }
            // console.log(this.wrapperHeight);
        },

        methods: {
            getList() {
                var params = this.parmis.initParams('recordLog/getRecordListByUid');
                this.$http.get(params.getUrl).then(res => {
                    if (res.status === 200) {
                        // console.log(res);
                        this.recordList = res.body.data;
                    } else {
                        // console.log("加载失败");
                        this.hasList = false;
                    }
                })
            },
            loadTop() {
                this.handleTopChange("loading");//下拉时 改变状态码
                this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
                var params = this.parmis.initParams('recordLog/getRecordListByUid');
                this.$http.get(params.getUrl).then(res =>{
                    if (res.status === 200) {
                        var list = res.body.data;
                        // console.log(res.status);
                        // console.log(res.body);
                        this.recordList = list;
                        if(list.length === 0) {
                            this.hasList = false;

                        }else {
                            this.hasList = true;
                        }
                        // console.log(String(this.hasList));
                    } else {
                        console.log("加载失败");
                        this.hasList = false;
                    }
                    this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
                    this.$refs.loadmore.onTopLoaded();
                    console.log("end")
                })
                // setTimeout(() => {
                //     // this.num = 0;
                //     this.reqatedTopLoading = false;//解锁
                //     this.getList();//下拉刷新 数据初始化
                //     this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
                //     this.$refs.loadmore.onTopLoaded();
                //     console.log('ok');
                // }, 3000);
            },
            loadBottom() {
                this.handleBottomChange("loading");//上拉时 改变状态码
                var params = this.parmis.initParams('recordLog/getRecordListByUid');
                this.$http.get(params.getUrl).then(res =>{
                    console.log(res);
                    if (res.status === 200) {
                        var list = res.body.data;
                        console.log(list)
                        if(list.length === 0) {
                            this.allLoaded = true;
                            this.hasList = false;
                        }else {
                            this.hasList = true;
                            for(var i = 0; i < list.length; i++ ) {
                                // console.log(list[i]);
                                this.recordList.push(list[i]);
                            }
                            // console.log(list[list.length - 1].id);
                            this.lastId = list[list.length - 1].id;
                            this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                            this.$refs.loadmore.onBottomLoaded();
                        }
                    } else {
                        console.log("加载失败");
                        this.hasList = false;
                    }

                })
                console.log("ok")
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            handleTopChange(status) {
                this.topStatus = status;
            },

        },
        watch: {
            topStatus(val) {
                switch (val) {
                    case 'pull':
                        this.topText = this.topPullText;
                        break;
                    case 'drop':
                        this.topText = this.topDropText;
                        break;
                    case 'loading':
                        this.topText = this.topLoadingText;
                        break;
                }
            },
            bottomStatus(val) {
                switch (val) {
                    case 'pull':
                        this.bottomText = this.bottomPullText;
                        break;
                    case 'drop':
                        this.bottomText = this.bottomDropText;
                        break;
                    case 'loading':
                        this.bottomText = this.bottomLoadingText;
                        break;
                }
            }
        }

    }
</script>

<style scoped>

    .mint-loadmore-top,.mint-loadmore-bottom,.data-none{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:0.24rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(207,201,251,1);
    }
    /*初始化加载*/
    .center{
        display: flex;
        justify-content: center;
    }
    /*.mint-spinner-snake{*/
        /*border-top-color: rgb(38, 162, 255);*/
        /*border-left-color: rgb(38, 162, 255);*/
        /*border-bottom-color: rgb(38, 162, 255);*/
    /*}*/




    /*.filHide {*/
        /*-webkit-transform: rotateX(0deg);*/
        /*-moz-transform: rotateX(0deg);*/
        /*-ms-transform: rotateX(0deg);*/
        /*-o-transform: rotateX(0deg);*/
        /*transform: rotateX(0deg);*/
    /*}*/

    /*.filShow {*/
        /*-webkit-transform: rotateX(180deg);*/
        /*-moz-transform: rotateX(180deg);*/
        /*-ms-transform: rotateX(180deg);*/
        /*-o-transform: rotateX(180deg);*/
        /*transform: rotateX(180deg);*/
    /*}*/

    .wallet-record {
        padding-top: 1.2rem;
        display: flex;
        height: 100%;
        align-items: stretch;
        position: absolute;
        width: 100%;
        padding: 1.2rem 5% 0 5%;
    }

    .my-record-box {
        width: 100%;
        /*margin: 0 5%;*/
        margin-top: 1.2rem;
        overflow: auto;
        background-color: rgba(99, 46, 202, .8);

    }

    .my-record-title {
        height: 1.2rem;
        width: 90%;
        /*background-image: url(../images/cn/record_top_title_cn.png);*/
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        top: 0;
        margin-top: 1.2rem;
    }

    .record-lists {
        /*background-color: rgba(99, 46, 202, .8);*/
        text-align: center;
        height: 100%;
        padding: 3% 5% 0 5%;
        display: flex;
        flex-direction: column;
        /*overflow: scroll;*/
    }



    /***/
    .record-list {
        margin: 0;
        box-shadow: none;
        height: 3rem;
        border-radius: .2rem;
        overflow: hidden;
        position: relative;
        margin-bottom: 4%;
    }
    .top-box {
        background-color: #E7E4FF;
        height: 2.4rem;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .user-info {
        width: 55%;
        position: relative;
    }

    .user-info:before {
        content: '';
        position: absolute;
        width: .7rem;
        height: .4rem;
        background-image: url(../images/resourse/pk.png);
        -webkit-background-size: cover;
        background-size: cover;
        right: 10px;
        top: 50%;
        margin-top: -.2rem;
    }

    .game-detail {
        width: 15%;
        display: flex;
        flex-wrap: wrap;
    }
    .detail-me, .detail-other {
        width: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .detail-me img, .detail-other img {
        width: 85%;
    }
    .game-result {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .game-result img {
        width: 65%;
    }
    .bottom-box{
        height: .6rem;
        background-image:url(../images/resourse/my_record_bg2x.png);
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .bottom-box:after {
        content: '';
        left: .3rem;
        bottom: 0;
        margin-bottom: .1rem;
        position: absolute;
        width: .4rem;
        height: 0.37rem;
        background-image: url(../images/resourse/home_content_diamonds2x.png);
        background-size: cover;
    }
    .diamond-box {
        width: 50%;
        padding-left: .8rem;
        font-size:0.48rem;
        font-family: JiaLiChaoCuYuanJ;
        font-weight:bold;
        color:rgba(255,162,0,1);
        line-height: normal;
        text-align: left;
    }
    .time-box {
        width: 50%;
        font-size:0.24rem;
        font-family:PingFang-SC-Medium;
        font-weight:bold;
        color:rgba(169,187,255,1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .head-box {
        position: relative;
    }
    .user-head{
        height: 1.2rem;
        padding-left: .3rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .user-img {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        /*background-color: #000;*/
        -webkit-background-size: cover;
        background-size: cover;
    }
    .user-name {
        padding-left: .1rem;
        font-size:0.24rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
    .owner {
        background-image: url(../images/resourse/createsuccess_triangle_icon@2x.png);
        -webkit-background-size: cover;
        background-size: cover;
        width: .24rem;
        height: .2rem;
        top: .1rem;
        left: .58rem;
        position: absolute;
    }
    .roomer{
        background-image: url(../images/resourse/createsuccess_owner_icon@2x.png);
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        width: .3rem;
        height: .3rem;
        bottom: .2rem;
        left: .8rem;
    }
    /***/

    /*.time-box {*/
        /*height: .6rem;*/
        /*background-image: url(../images/resourse/my_record_bg2x.png);*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
        /*font-size: 0.24rem;*/
        /*font-family: PingFang-SC-Medium;*/
        /*font-weight: bold;*/
        /*color: rgba(169, 187, 255, 1);*/
        /*padding-left: 15%;*/
        /*padding-right: 3%;*/
    /*}*/

    .record-icon {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: rgba(169, 187, 255, 1);
        line-height: 1.71rem;
        padding-right: 3%;
    }

    .record-icon span {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        border-top: 8px solid #86A0FF;
        margin-left: .1rem;
    }

    .no-list {
        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: .7rem;
        position: relative;
        margin: 1.2rem 0 0 0;
        background-color: rgba(99, 46, 202, .8);
    }

    .no-list img {
        width: 70%;
    }

    .no-list .no-list-text {
        position: absolute;
        top: 3.1rem;
        font-size: 0.24rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(207, 201, 251, 1);
        text-align: center;
    }

    .icon-list {
        position: absolute;
        right: 11px;
        top: 43px;
        width: 1rem;
        height: 1.27rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(63, 45, 176, 0.4);
        border-radius: .1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        z-index: 1;
    }

    .icon-list p {
        margin-bottom: 0;
        width: 100%;
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-list p:first-child {
        border-bottom: #E7E4FF solid 1px;
    }
</style>
