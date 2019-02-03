<template>
    <div id="gaming">
        <div class="left">
            <div class="header_outer">
                <img class="header" src="../images/createsuccess_default_portrait2x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gaming",
        methods: {},
        props: []
    }
</script>

<style scoped>
    #gaming {
        wdth: 6.72rem;
        height: 3.6rem;
        background: rgba(95, 39, 196, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(111, 99, 209, 0.4);
        opacity: 0.7;
        border-radius: 0.04rem;
    }

    .header_outer {
        width: 0.9rem;
        height: 0.9rem;
        border: 0.05rem solid #fff;
        position: relative;
        margin: 0.16rem 0 0.16rem 0.91rem;
        overflow: hidden;
    }

    .header {
        width: 100%;
        height: 100%;
    }
</style>
