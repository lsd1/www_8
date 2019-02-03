<template>
    <div @click='clickOne' class="setting">
        <p v-text="amount"></p>
        <img src="../images/resourse/home_content_diamonds2x.png" alt="">
        <div :class="[ choose == 1?'choosed':'']"></div>
    </div>
</template>

<script>
    export default {
        name: "SetAmount",
        data() {
            return {
                // choose: false
            }
        },
        props: ['choose', 'amount'],
        methods: {
            clickOne() {
                this.$emit('choose', this.amount)
            }
        }
    }
</script>

<style scoped>

    .setting {
        width: 1.8rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #fff;
        border-radius: 0.04em;
        display: inline-block;
        border-radius: 0.1rem;
        position: relative;
        padding-left: 0.6rem;

    }

    p {
        font-size: 0.44rem;
        font-family: Tensentype-JiaLiChaoCuYuanJ;
        font-weight: 800;
        color: rgba(255, 162, 0, 1);
        margin-bottom: 0!important;
    }

    .choosed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0.05rem solid #FFA200;
        border-radius: 0.1rem;
    }

    img {
        width: 0.36rem;
        height: 0.34rem;
        position: absolute;
        left: 0.14rem;
        top: 50%;
        margin-top: -0.17rem;
    }
</style>
