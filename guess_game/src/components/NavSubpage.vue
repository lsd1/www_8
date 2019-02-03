<template>
    <div class="mui-bar mui-bar-nav mui-bar-nav-bg" >
        <div class="back" @click="goBack"><img src="../images/resourse/hone_navigation_return2x.png" alt=""></div>
        <div class="diamond-component">
            <router-link tag="div" class="right-box" to="/myPurse">
                <Diamond class="diamond-num"></Diamond>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Diamond from './Diamond.vue';

    export default {
        data() {
            return {

            }
        },
        methods: {
            goBack() {
                if (uid && this.id && !this.roomOwner) {//游客退出房间
                    socket.emit('cancelGame', {
                        id: this.id,
                        uid: uid
                    });
                } else {
                    this.$router.go(-1);
                }
            }
        },
        watch: {

        },
        components: {
            Diamond
        },
        props: [ "id", "roomOwner"]
    }
</script>

<style scoped>
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

    .back {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back img {
        width: 50%;
    }

    .diamond-component {
        width: 85%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 5%;
    }

    .diamond-component .right-box {
        background-image: url(../images/resourse/createroom_navigation_recharge2x.png);
        background-size: cover;
        width: 3.2rem;
        height: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .diamond-component .right-box .diamond-num {
        font-size: 0.3rem;
        font-family: JiaLiChaoCuYuanJ;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        height: .6rem;
        line-height: .6rem;
    }

</style>
