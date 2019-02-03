<template>
    <div class="mui-backdrop">
        <div class="load-box">
            <img src="../images/resourse/loading-img.gif" alt="">
        </div>
        <div>{{$t('loading.load')}}</div>

    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .mui-backdrop {
        padding-top: 2rem;
    }
    .mui-backdrop img {
        width: 27px;
    }
    .load-box {
        width: 100%;
    }
    .mui-backdrop div {
        color: #cec9fb;
        font-size: .24rem;
        text-align: center;
    }
</style>