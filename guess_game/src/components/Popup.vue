<template>
    <div id="popup" @click.self='okHandle'>
        <div class="modal">
            <!--<div class="modal-header" v-if="modalTitle">-->
            <!--<h4 v-text="modalTitle"></h4>-->
            <!--</div>-->
            <div class="modal-content">
                <div v-html="modalContent"></div>
            </div>
            <div class="modal-footer">
                <div v-for="btn in btns">
                    <img class="btn" v-if="btn == 'ok'" :src="$t('imgSrc.confirm')" alt="" @click="okHandle">
                    <img class="btn" v-if="btn == 'sureBack'" :src="$t('imgSrc.confirm')" alt="" @click="sureBack">
                    <img class="btn" v-if="btn == 'confirm'" :src="$t('imgSrc.confirm')" alt=""
                         @click="confirmHandle">
                    <img class="btn" v-if="btn == 'cancel'" :src="$t('imgSrc.cancelBtn')" alt=""
                         @click="cancelHandle">
                    <img class="btn" v-if="btn == 'charge'" :src="$t('imgSrc.chargeBtn')" alt=""
                         @click="chargeHandle">
                    <img class="btn" v-if="btn == 'forget'" :src="$t('imgSrc.forgetBtn')" alt=""
                         @click="forgetHandle">
                    <img class="btn" v-if="btn == 'goCreateRoom'" :src="$t('imgSrc.confirm')" alt=""
                         @click="goCreateRoom">
                    <img class="btn" v-if="btn == 'sureCancelGame'" :src="$t('imgSrc.confirm')" alt=""
                         @click="sureCancelGame">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // const clickoutside = {
    //     // 初始化指令
    //     bind(el, binding, vnode) {
    //         function documentHandler(e) {
    //             // 这里判断点击的元素是否是本身，是本身，则返回
    //             if (el.contains(e.target)) {
    //                 return false;
    //             }
    //             // 判断指令中是否绑定了函数
    //             if (binding.expression) {
    //                 // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
    //                 binding.value(e);
    //             }
    //         }
    //         // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    //         el.__vueClickOutside__ = documentHandler;
    //         document.addEventListener('click', documentHandler);
    //     },
    //     update() {},
    //     unbind(el, binding) {
    //         // 解除事件监听
    //         document.removeEventListener('click', el.__vueClickOutside__);
    //         delete el.__vueClickOutside__;
    //     },
    // };

    export default {
        name: "Popup",
        data() {
            return {
                // modalTitle: '',
                // modalContent: '',
                // okHandle: '',
                // cancelHandle: '',
            }
        },
        props: ['modalContent', 'cancel', 'ok', 'charge', 'forget', 'confirm', 'btns'],
        methods: {
            cancelHandle() { // 取消
                console.log('cancel')
                this.$emit('hidePopup')
            },
            confirmHandle() { // 确认支付创建房间
                console.log('确认')
                this.$emit('showPsw')
            },
            okHandle() { // 确认（跟取消的效果差不多）
                this.$emit('hidePopup')
            },
            chargeHandle() { // 余额不足，充值
                alert('充值')
                this.$emit('chargeDiamonds')
            },
            forgetHandle() {
                console.log('算了')
            },
            handleClose(e) {
                this.$emit('hidePopup')
            },
            goCreateRoom() {
                this.$emit('goCreateRoom')
            },
            sureCancelGame() {
                this.$emit('sureCancelGame')
            },
            sureBack() {
                this.$emit('sureBack')
            }
        },
        mounted() {

        },
        // directives:{clickoutside}
    }
</script>

<style scoped>

    #popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);
        z-index: 11;
    }

    .modal {
        width: 6rem;
        height: 4rem;
        position: absolute;
        top: 3.28rem;
        left: 0.75rem;
        background: rgba(149, 89, 248, 1);
        border-radius: 0.2rem;
    }

    .modal-content {
        text-align: center;
        color: #fff;
        height: 2.85rem;
    }

    .modal-footer {
        position: absolute;
        bottom: 0.12rem;
        left: 1rem;
        right: 1rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .modal-footer > div {
        width: 2.16rem;
        height: 1.16rem;
    }

    .btn {
        width: 100%;
        height: 100%;
    }
</style>
