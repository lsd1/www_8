<template>
    <div class="app-container ">
        <!--顶部导航-->
        <Nav></Nav>

        <!--列表-->
        <div class="room-title mui-bar mui-bar-nav mui-bar-nav-bg"></div>

        <div class="room-box" v-if="hasList">
            <transition-group  tag="div" class="room-lists"
                              enter-active-class="animated bounceInUp"
                              leave-active-class="animated bounceOut"
            >
                <div class="room-list" v-for="(list,index) in roomArr" :key="list.id">
                    <div @click="isGameOn(list, index)" class="room room0" v-if="list.shape == 0"><div class="room-num">{{list.amount}}</div></div>
                    <div @click="isGameOn(list, index)" class="room room1" v-else-if="list.shape == 1"><div class="room-num">{{list.amount}}</div></div>
                    <div @click="isGameOn(list, index)" class="room room2" v-else-if="list.shape == 2"><div class="room-num">{{list.amount}}</div></div>
                </div>
            </transition-group>

        </div>
        <div class="no-list" v-else="hasList">
            <img src="../images/resourse/my_record_blank_icon2x.png" alt="">
            <div class="no-list-text">{{ myRoomTxt }}</div>
            <!--<div class="no-list-text">暂无房间</div>-->
        </div>
    </div>
</template>

<script>
    import Nav from '../components/NavSubpage.vue';
    import { Toast } from 'mint-ui';

    import animated from 'animate.css';
    export default {
        name: 'myRoom',
        data() {
            return {
                hasList:true,
                roomArr: [],
                myRoomTxt: null
            }
        },
        created() {},
        mounted: function () {
            this.loadList();
        },
        methods: {
            isGameOn(room, index){
                socket.emit('isGameOn',{
                    id: room.id,
                    index:index
                });
            },
            isGameOnRes(msg){
                //这里要做房间是否还在的处理,有房间则进入,无房间则删除
                if (msg.code === 0) {
                    if (msg.data.status === 0) {
                        this.delRoom(msg.data.index);
                    }else {
                        this.toRoom(msg.data.index);
                    }
                } else {
                    Toast({
                        message: msg.msg,
                        duration: 2000
                    });
                }
            },
            toRoom(index){
                this.$router.push({
                    name: 'gameRoom',
                    params: {
                        amount: this.roomArr[index].amount,
                        grade: this.roomArr[index].grade,
                        roomOwner: true,
                        srcIndex: this.roomArr[index].shape,
                        id: this.roomArr[index].id
                    }
                })
            },
            delRoom(index){
                console.log('index:',index);
                Toast({
                    message: '对局已结束',
                    duration: 1000
                });
                this.roomArr.splice(index, 1);

                // this.roomArr = [];
            },
            loadList() {
                    var params = this.parmis.initParams('orderMora/getRoomListByUid');
                    this.$http.get(params.getUrl).then(res => {
                        if (res.status === 200) {
                            //请求成功
                            var data = res.body.data;
                            if(res.body.code === 0) {
                                if(data.length === 0) {
                                    //没数据
                                    this.myRoomTxt = this.$t('myRoom.noRoom');
                                    this.hasList = false;
                                }else {
                                    //有数据
                                    this.roomArr = data;
                                }
                            }else {
                                //请求出错
                                this.myRoomTxt = this.$t('myRoom.netErr');
                                this.hasList = false;
                            }
                        } else {
                            this.myRoomTxt = this.$t('myRoom.netErr');
                            this.hasList = false;
                        }
                    })
            }
        },
        filters: {
            imgSta: value => {
                console.log(value)
                var imgUrl = '';
                switch (value) {
                    case 0 :
                        imgUrl = require('../images/cn/my_room_stone_cn.png');
                        break;
                    case 1 :
                        imgUrl = require('../images/cn/my_room_scissors_cn.png');
                        break;
                    case 2 :
                        imgUrl = require('../images/cn/my_room_cloth_cn.png');
                        break;
                }
                console.log(imgUrl);

                return imgUrl;
            }
        },
        watch: {
            roomArr(val) {
                console.log(val);
            }
            // topStatus(val) {
            //     switch (val) {
            //         case 'pull':
            //             this.topText = this.topPullText;
            //             break;
            //         case 'drop':
            //             this.topText = this.topDropText;
            //             break;
            //         case 'loading':
            //             this.topText = this.topLoadingText;
            //             break;
            //     }
            // },
            // bottomStatus(val) {
            //     switch (val) {
            //         case 'pull':
            //             this.bottomText = this.bottomPullText;
            //             break;
            //         case 'drop':
            //             this.bottomText = this.bottomDropText;
            //             break;
            //         case 'loading':
            //             this.bottomText = this.bottomLoadingText;
            //             break;
            //     }
            // }

        },
        components: {
            Nav
        }
    }


    // export default {
    //     data() {
    //         return {
    //             id: '',
    //         }
    //     },
    //     mounted() {
    //         this.$socket.emit('connect', connectMsg);       //触发connect事件
    //     },
    //     sockets: {
    //         connect() {
    //             this.id = this.$socket.id;
    //             this.$socket.emit('connect', emitData);      //监听connect事件
    //         },
    //         message(data) {                                 //监听message事件，方法是后台定义和提供的
    //             console.log(data);
    //         }
    //     },
    //
    //
    //     methods: {
    //         clickButton: function (val) {                       //添加按钮事件向服务端发送数据
    //             this.$socket.emit('emit_method', val);
    //         }
    //     }

</script>

<style scoped>
    /*.v-enter,*/
    /*.v-leave-to{*/
        /*opacity: 0;*/
        /*transform: translateY(200px);*/
        /*margin-top: -15px;*/
    /*}*/
    /*.v-enter-active,*/
    /*.v-leave-active{*/
        /*transition: all 1s ease;*/
    /*}*/
    /*!*移除时的动画*!*/
    /*!*.v-move与.v-leave-active配合使用，能够实现后续的元素，渐渐飘下去的效果*!*/
    /*.v-move{*/
        /*transition: all .6s ease;*/
    /*}*/
    /*.v-leave-active{*/
        /*position: absolute;*/
    /*}*/
    .mui-bar {
        background-color: rgba(0, 0, 0, 0);
        -webkit-box-shadow: none;
        box-shadow: none;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: stretch;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 2%;
        background-color: #9559F8;
    }
    .app-container {
        width: 100%;
        height: 100%;
        padding-top: 1.2rem;
        display: flex;
        flex-wrap: wrap;
    }
    .room-box {
        width: 100%;
        height: 100%;
        margin: 0 5%;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        position: relative;
        padding-top: 1.2rem;
        overflow: hidden;
        background-color: rgba(99, 46, 202, .8);

    }
    .room-lists {
        width: 100%;
        overflow: scroll;
    }
    .room-lists .room-list:first-child {
        margin-top: 0;
    }
    .room-title {
        width: 90%;
        height: 1.2rem;
        margin: 1.2rem 5% 0 5%;
        background-image: url(../images/cn/my_room_title_cn.png);
        -webkit-background-size: cover;
        background-size: cover;
        /*position: absolute;*/
        top: 0;
    }
    .room-list {
        width: 100%;
        padding: 0 5%;
    }
    .room {
        width: 6rem;
        height: 2.06rem;
        -webkit-background-size: cover;
        background-size: cover;
        position: relative;
    }
    .room0 {
        background-image: url(../images/cn/my_room_stone_cn.png);
    }
    .room1 {
        background-image: url(../images/cn/my_room_scissors_cn.png);
    }
    .room2 {
        background-image: url(../images/cn/my_room_cloth_cn.png);
    }

    .room-num {
        position: absolute;
        right: 1rem;
        bottom: .48rem;
        font-size:0.9rem;
        font-family:Tensentype-JiaLiChaoCuYuanJ;
        font-weight:800;
        color:rgba(255,162,0,1);
        line-height: normal;
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
    }
    .no-list {
        width: 90%;
        margin: 1.2rem 5% 0 5%;
        padding-top: 2rem;
        text-align: center;
        position: relative;
        background-color: rgba(99, 46, 202, .8);
    }
    .no-list img {
        width: 70%;
    }
    .no-list .no-list-text {
        position: absolute;
        top: 4.6rem;
        left: 2.8rem;
        font-size:0.24rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(207,201,251,1);
    }
</style>
