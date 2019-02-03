<template>
    <div :class="hasData?room1:room2">
        <div v-text="amount" class="amount"></div>
    </div>
</template>

<script>
    export default {
        name: "SmallRome",
        data() {
            return {
                room1: 'room1',
                room2: 'room2',
            }
        },
        props: ['amount', 'hasData'],
        methods:{

        }
    }
</script>

<style scoped>
    .room1 {
        background-image: url(../images/cn/hone_content_brand_bottom_bg2x.png);
        -webkit-background-size: cover;
        background-size: cover;
        width: 2.38rem;
        height: 3.18rem;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        margin-top: -8px;
    }

    .room2 {
        background-image: url(../images/cn/hone_content_nothing_bg2x.png);
        -webkit-background-size: cover;
        background-size: cover;
        width: 2.38rem;
        height: 3.18rem;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        margin-top: -8px;
        /*float: left;*/
    }

    .amount {
        position: absolute;
        bottom: 0.65rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-family: JiaLiChaoCuYuanJ;
        font-weight: 900;
        color: rgba(255, 162, 0, 1);
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
        font-size: 0.72rem;
    }
</style>
