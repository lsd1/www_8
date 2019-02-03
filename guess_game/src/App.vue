<template>
    <div id="app">
        <router-view ref="child"></router-view>
        <!--<h1 @click="aaa">11111</h1>-->
    </div>
</template>

<script>
    import index from './page/index.vue';
    import createRoom from './page/create_room.vue';
    import gameRoom from './page/game_room.vue';
    import {Toast} from  "mint-ui";
    import {MessageBox} from  "mint-ui";
    import Bus from './components/bus.js'

    export default {
        name: "app",
        data() {
            return {
                iWasIn: 'index',//本人再什么页面
                loadStatus: null, //首页请求状态
                account: null,
                cc: 222,
                arr_content: null,//储存弹出消息框数组

            }
        },
        components: {
            index,
            // createRoom,
            // gameRoom,
            // record,
            // myPurse,
            // walletRecord,
            // myRoom
        },
        created() {
        },
        mounted() {
            var self = this;
            var parmis = this.parmis.initParams('member/getMemberInfo',{
                union_ck: decodeURIComponent(localStorage.getItem("union_ck")) || "",
                name: localStorage.getItem("name") || "",
                avatar: localStorage.getItem("avatar") || "",
            });
            this.$http.post(parmis.postUrl, parmis.data).then(res=> {
                if(res.status === 200) {
                    if(res.body.code === 0) {
                        localStorage.setItem("clientType", res.body.data.clientType);
                        localStorage.setItem("diamond", res.body.data.diamond);
                        localStorage.setItem("lang", res.body.data.lang);
                        localStorage.setItem("network", res.body.data.network);
                        localStorage.setItem("version",res.body.data.version);
                        localStorage.setItem("uid", res.body.data.uid);
                        localStorage.setItem("token", res.body.data.token);
                        localStorage.setItem("exchangeRate", res.body.data.exchangeRate);
                        localStorage.setItem("vscAmount", res.body.data.vscAmount);
                        window.uid = res.body.data.uid;
                        socket.emit('online',{uid:uid});
                    }else {
                        Toast({
                            message: this.$t('myRoom.netErr'),
                            duration: 1000,
                        });
                        this.cookie.setCookie('app_method', '{"type":"goApp"}', 10);
                    }
                } else {
                    Toast({
                        message: this.$t('myRoom.netErr'),
                        duration: 1000,
                    });
                    this.cookie.setCookie('app_method', '{"type":"goApp"}', 10);
                }
            });

            // 判断重新链接的情况
            // socket.on('newConnect', function (msg) {
            //     if (self.$route.name == 'gameRoom') { // 重连的过程中，还停留在游戏页面中
            //         if (self.$refs.child.roomOwner) { // 房主
            //             socket.emit('isGameOn', {
            //                 id: self.$refs.child.id
            //             });
            //         } else {// 不是房主
            //             socket.emit('isPlaying', {
            //                 uid: uid
            //             });
            //         }
            //     }
            // });

            // //监听房主在重连的时候还有房间没
            // socket.on('isGameOn', function (msg) {
            //     if (msg.code == 0) {
            //         if (msg.data.status != 1) {
            //             self.$router.replace({
            //                 name: 'index'
            //             })
            //         }
            //     } else {
            //
            //     }
            // })

            //监听游客在重连的时候还有房间没
            // socket.on('isPlaying', function (msg) {
            //     if (msg.code == 0) {
            //         if (msg.data.status != 1) {
            //             self.$router.replace({
            //                 name: 'index'
            //             });
            //         }
            //     }
            // });


            //获取所有的房间
            socket.on('getAllRoom', function (msg) {
                console.log('********getAllRoom********')
                if (self.$route.name == 'index') {
                    self.$refs.child.updateRoomInfo(msg.data);
                    console.log('更新房间信息成功！！！');
                }
            })

            //收到进入房间消息
            socket.on('enterRoom', function (msg) {
                console.log('enterRoom------');
                self.$refs.child.enterRoomRes(msg);
            })

            //收到创建房间消息
            socket.on('createRoom',  (msg) =>{
                console.log('********createRoom********');
                self.$refs.child.createRoomRes(msg);
            });

            //收到对局结果消息
            socket.on('submitRes', function (msg) {
                self.$refs.child.submitResRes(msg);
            });

            //收到判断房间是否存在消息
            socket.on('isGameOn', (msg)=> {
                self.$refs.child.isGameOnRes(msg);
            });

            //收到删除房间消息
            socket.on('delGame', (msg)=> {
                self.$refs.child.delGameRes(msg);
            });

            //收到取消房间
            socket.on('cancelGame', function (msg) {
                console.log('*********游客退出房间*******')
                try{
                    self.$refs.child.cancelGameRes(msg);
                }catch (e) {
                    console.log(e);
                }
            });

            //收到系统提醒消息
            socket.on('getMsg',(msg)=>{
                console.log("------getMsg------")
                if(msg.code === 0){
                    this.arr_content = msg.data;
                    if(this.arr_content.length > 0) {
                        this.alertMsg();
                    }
                }
            });
        },
        updated() {

        },
        methods:{
            alertMsg() {
                let msgOne = this.arr_content.shift();
                MessageBox.alert(msgOne.msg_content,this.$t('popup.message'), this.$t('popup.confirm')).then(() => {
                    console.log(msgOne);
                    if(msgOne.diamond){
                        Bus.$emit('updateDiamond', msgOne.diamond);
                    }
                    if(msgOne.msg_id){
                        socket.emit('getMsg',{
                            msgId: msgOne.msg_id
                        });
                    }
                    console.log(this.arr_content.length);
                    if(this.arr_content.length > 0){
                        setTimeout( this.alertMsg, 600);
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    #app {
        height: 100%;
    }
</style>
