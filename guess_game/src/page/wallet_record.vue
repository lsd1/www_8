<template>
    <div class="wallet-record">
        <Nav></Nav>

        <div class="my-record-title" :style="{'background-image':'url(' + $t('imgSrc.myRecordTitle') + ')' }">
            <div class="record-icon" @click="filSele">{{ filTxt }}<span
                    :class="filterShow ? 'filShow' : 'filHide'"></span></div>
            <div class="icon-list" v-if="filterShow">
                <p @click.prevent="filTxtShow($event)" class="all">全部</p>
                <p @click.prevent="filTxtShow($event)" class="add">增加</p>
                <p @click.prevent="filTxtShow($event)" class="cut">减少</p>
            </div>
        </div>

        <div class="my-record-box" v-if="hasList" ref="wrapper" >
            <mt-spinner v-show="recordList<1 && InitialLoading" color="#26a2ff" class="center"></mt-spinner>
            <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
                         :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                         :bottom-all-loaded="allLoaded" :autoFill="true" ref="loadmore">
                <transition-group class="record-lists" tag="div" ref="listbox"
                                  enter-active-class="animated bounceInUp"
                                  leave-active-class="animated bounceOut">

                    <div class="list" v-for="list in recordList" :key="list.id">
                        <div class="record-for-ones">
                            <div class="record-status">
                                <div class="status-img"><img :src="list.source| imgStatus" alt=""></div>
                                <div class="status-txt">{{ list.content }}</div>
                                <div class="status-num"
                                     :style="{color:((list.source===0||list.source===2||list.source===5)?'#FFA302':'#F25167')}">{{list.type === "1" ? '+' : ''}}
                                    <Num tag="span" :num="list.after_change - list.before_change"></Num>
                                </div>
                            </div>
                            <div class="time-box">
                                <div class="status-time">{{ list.updated_at|timerList }}</div>
                                <div class="status-vsc" v-if="list.source === 0 || list.source === 1">{{ list.type ===
                                    0?
                                    '' : '+' }}
                                    <Num tag="span" :num="list.vsc"></Num>
                                    VSC
                                </div>
                            </div>
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
            <div class="no-list-text">{{myListTxt}}</div>
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
                filTxt: '筛选',
                recordList: [],
                lastId: null,
                type: null,
                myListTxt: null,
                //上拉下拉加载所用参数
                num:0,//可删除//测试用
                autoFill: true,//是否充满框
                examplename: 'Loadmore',
                pageNum: 1,//页码//可删除
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
        filters: {
            imgStatus: value => {
                var imgUrl = '';
                switch (value) {
                    case  0 :
                        imgUrl = require('../images/resourse/icon_in.png');
                        break;
                    case  1 :
                        imgUrl = require('../images/resourse/icon_out.png');
                        break;
                    case  2 :
                        imgUrl = require('../images/resourse/icon_win.png');
                        break;
                    case  3 :
                        imgUrl = require('../images/resourse/icon_lose.png');
                        break;
                    case  4 :
                        imgUrl = require('../images/resourse/icon_dia_out.png');
                        break;
                    case  5 :
                        imgUrl = require('../images/resourse/icon_dia_in.png');
                        break;
                }
                return imgUrl;

            },
            timerList: time => {
                // console.log(time);
                if (!time) {
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
                hour = hour >= 12 ? hour - 12 : hour;
                hour = formatFunc(hour);
                var min = formatFunc(date2.getMinutes());
                var dateStr = year + '-' + mon + '-' + day + ' ' + ' ' + hour + ':' + min;
                return dateStr;
            }
        },
        methods: {
            filSele() {
                this.filterShow = !this.filterShow;
                this.filTxt = '筛选';
            },
            filTxtShow(el) {
                // console.log(el)
                this.filterShow = !this.filterShow;
                console.log(event.toElement.innerText);
                this.filTxt = event.toElement.innerText;
                console.log(event.toElement.className)
                if(event.toElement.className === "add") {
                    this.type = 1;
                }else if(event.toElement.className === "cut"){
                    this.type = 0;
                }else {
                    this.type = null;
                }
                console.log(this.type);
                this.loadTop();
            },
            getList() {

            },
            loadTop() {
                this.handleTopChange("loading");//下拉时 改变状态码
                this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
                this.lastId = null;//清空lastId
                var params = this.parmis.initParams('diamondLog/getLogList',{
                    type: String(this.type),
                });
                this.$http.get(params.getUrl).then(res =>{
                    if (res.status === 200) {
                        //请求成功
                        if(res.body.code === 0) {
                            var list = res.body.data;
                            console.log(res.status);
                            console.log(res.body);
                            if(list.length === 0) {
                                console.log("暂无列表");
                                this.myListTxt = this.$t('record.noRecord');
                                this.hasList = false;
                            }else {
                                this.recordList = list;
                                this.hasList = true;
                                this.lastId = list[list.length - 1].id;
                            }
                            this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
                            this.$refs.loadmore.onTopLoaded();
                            console.log(String(this.hasList));
                        }else {
                            console.log("加载失败");
                            this.myListTxt = this.$t('myRoom.netErr');
                            this.hasList = false;
                        }
                        console.log(this.lastId);
                    } else {
                        this.myListTxt = this.$t('myRoom.netErr');
                        console.log("加载失败");
                        this.hasList = false;
                    }
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
                var params = this.parmis.initParams('diamondLog/getLogList',{
                    type: String(this.type),
                    lastId: Number(this.lastId)
                });
                this.$http.get(params.getUrl).then(res =>{
                    if (res.status === 200) {
                        if(res.body.code === 0) {
                            var list = res.body.data;
                            if(list.length === 0) {
                                if(this.lastId === null) {
                                    this.myListTxt = this.$t('record.noRecord');
                                    this.hasList = false;
                                    console.log("暂无数据");
                                }else {
                                    this.allLoaded = true;
                                }
                            }else {
                                console.log(this.$refs.listbox);
                                this.hasList = true;
                                for(var i = 0; i < list.length; i++ ) {
                                    console.log(list[i]);
                                    this.recordList.push(list[i]);
                                }
                                // console.log(list[list.length - 1].id);
                                this.lastId = list[list.length - 1].id;
                                console.log(this.lastId);
                            }
                            this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                            this.$refs.loadmore.onBottomLoaded();
                        }else {
                            console.log("加载失败");
                            this.myListTxt = this.$t('myRoom.netErr');
                            this.hasList = false;
                        }
                    } else {
                        console.log("加载失败");
                        this.myListTxt = this.$t('myRoom.netErr');
                        this.hasList = false;
                    }

                })
                console.log("ok")
                // setTimeout(() => {//上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
                //     this.getList();
                //     if (this.recordList.length > 50) {
                //         this.allLoaded = true;//模拟数据加载完毕 启用上拉加载
                //     }
                //     this.repatedBottomLoading = false;//解锁
                //     this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                //     this.$refs.loadmore.onBottomLoaded();
                // }, 3000);
                // console.log("ok")
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
    .mint-spinner-snake{
        border-top-color: rgb(38, 162, 255);
        border-left-color: rgb(38, 162, 255);
        border-bottom-color: rgb(38, 162, 255);
    }




    .filHide {
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
        -ms-transform: rotateX(0deg);
        -o-transform: rotateX(0deg);
        transform: rotateX(0deg);
    }

    .filShow {
        -webkit-transform: rotateX(180deg);
        -moz-transform: rotateX(180deg);
        -ms-transform: rotateX(180deg);
        -o-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }

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
        padding: 5% 5% 0 5%;
        display: flex;
        flex-direction: column;
        /*top: 0;*/
        /*overflow: scroll;*/
    }

    .list {
        margin-bottom: 4%;
    }

    .record-for-ones {
        /*width: 590px;*/
        height: 1.4rem;
        border-radius: .2rem;
        overflow: hidden;
    }

    .record-status {
        background-color: #E7E4FF;
        height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .status-img {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .status-img img {
        width: 55%;
    }

    .status-txt {
        width: 45%;
        text-align: left;
        font-size: 0.3rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
    }

    .status-num {
        width: 40%;
        text-align: right;
        font-size: 0.48rem;
        font-family: JiaLiChaoCuYuanJ;
        font-weight: 800;
        color: rgba(255, 163, 2, 1);
        line-height: normal;
        padding-right: 3%;
    }

    .time-box {
        height: .6rem;
        background-image: url(../images/resourse/my_record_bg2x.png);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: rgba(169, 187, 255, 1);
        padding-left: 15%;
        padding-right: 3%;
    }

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
        height: 2rem;
        background: rgba(255, 255, 255, 1);
        border-radius: .1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        z-index: 1;
        box-shadow: 0px 10px 20px 0px rgba(63, 45, 176, .4);
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

    .icon-list p {
        border-bottom: #E7E4FF solid 1px;
    }
    .icon-list p:last-child {
        border-bottom: none;
    }
</style>
