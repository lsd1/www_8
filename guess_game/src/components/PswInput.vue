<template>

<div  >
    <div class="theFullMask mui-backdrop" @touchstart.self="closeInput" id="theFullMask">
        <div></div>
    </div>
    <div id="keyboard" class="keyboard">
        <div class="secondPwd">
            <div id="close" class="close" @touchstart.prevent="closeInput">X</div>
            <div class="title">{{ $t('PswInput.please') }}</div>
            <div class="tips">{{ $t('PswInput.please1') }}</div>
            <div class="pwd_content"  v-model="pwdArr">
                <div class="pwd" v-for="(item, index) in 6">{{ pwdArr[index] }}</div>
            </div>
        </div>
        <div class="keyboard_bg">
            <div class="keyboard_content" @touchstart.prevent="onInput($event)">
                <div class="number"><div class="cell" data-num="1">1</div></div>
                <div class="number"><div class="cell" data-num="2">2</div></div>
                <div class="number"><div class="cell" data-num="3">3</div></div>
                <div class="number"><div class="cell" data-num="4">4</div></div>
                <div class="number"><div class="cell" data-num="5">5</div></div>
                <div class="number"><div class="cell" data-num="6">6</div></div>
                <div class="number"><div class="cell" data-num="7">7</div></div>
                <div class="number"><div class="cell" data-num="8">8</div></div>
                <div class="number"><div class="cell" data-num="9">9</div></div>
                <div class="number"><div class="cell" data-num="C">{{ $t('PswInput.clean') }}</div></div>
                <div class="number"><div class="cell" data-num="0">0</div></div>
                <div class="number"><div class="cell" data-num="D">{{ $t('PswInput.deleted') }}</div></div>
            </div>
        </div>

    </div>
</div>

</template>

<script>

    export default {
        name: "PswInput",
        data() {
            return {
                pwdArr:[],
                pwdString: '',
            }
        },
        methods: {
            closeInput() {
                this.$emit('inputHide');
            },
            addNum(n) {
                if(this.pwdArr.length > 6 )return false;
                this.pwdString += n;
                this.pwdArr.push('•');

            },
            deleteNum() {
                if(this.pwdString === "")return false;
                this.pwdArr.splice(this.pwdArr.length -1, 1);
                this.pwdString = this.pwdString.split( "", this.pwdString.length -1).join("");
            },
            cleanNum() {
                this.pwdArr = [];
                this.pwdString = '';

            },
            onInput(e) {
                if(e.target.className === 'cell') {
                    let num = e.target.dataset.num;
                    if(num === 'C'){
                        this.cleanNum();
                    }else if(num === 'D') {
                        this.deleteNum();
                    }else {
                        this.addNum(num);
                    }
                    if(this.pwdString.length === 6 ) {
                        this.secondSend();
                        this.$emit('inputHide');
                    }
                }else {
                    // alert(3)
                    console.log("??");
                }
            },
            secondSend() {
                //密码输入完成后的回调
                console.log('ok');

                this.$emit('setPwd',this.pwdString)
            }
        },
        props: ['from']
    }
</script>

<style scoped>
    /*虚拟数字键盘样式*/
    .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #00000012;
        z-index: 1;
    }
    .keyboard{
        width: 100%;
        padding-top: 1%;
        position: fixed;
        bottom: 0;
        display: block;
        z-index: 99;
    }
    .number {
        width: 30.66%;
        height: 1rem;
        margin-left: 2%;
        margin-bottom: 2%;
        background-color: white;
        float: left;
        cursor:pointer;
    }
    .cell{
        border-radius: 0.1rem;
        width: 100%;
        height: 100%;
        border: 1px solid #d8d8d8;
        text-align: center;
        line-height: 1rem;
        box-shadow: 4px 4px 4px #d8d8d8;
        cursor:pointer;
    }
    .cell_hover{
        box-shadow: 0px 0px 0px #d8d8d8;
        color: white;
        background-color: #d8d8d8;
    }

    .cell_click{
        box-shadow: 0px 0px 0px #d8d8d8;
        color: white;
        background-color: #d8d8d8;
    }
    .secondPwd{
        width: 6rem;
        position: absolute;
        background-color: #f7f7f7;
        height: 3rem;
        margin-top: -50%;
        margin-left: 10%;
        text-align: center;
        border-radius: 0.1rem;
        padding-top: .2rem;
    }
    .title {
        width: 100%;
        text-align: center;
        padding-top: .2rem;
    }
    .tips {
        width: 100%;
        text-align: center;
        margin-top: .2rem;
    }
    .pwd {
        width: 16%;
        height: .9rem;
        border: 1px solid #d8d8d8;
        float: left;
        text-align: center;
        line-height: .8rem;
        font-size: .9rem;
    }
    .pwd:first-of-type{
        border-left: 1px solid #d8d8d8;
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
    }
    .pwd:last-of-type{
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
    }
    .pwd_content {
        margin-top: .2rem;
        margin-left: .2rem;
    }
    .pwd_main{
        width: 100%;
        height: 50%;
        position: absolute;
    }
    .keyboard_content {
        margin: 0 auto;
        height: 5rem;
        padding-top: .2rem;
        cursor:pointer;
    }
    .keyboard_bg {
        background-color: white;
    }
    .disabled {
        /*pointer-events: none;*/
    }
    .close{
        display: inline-block;
        width: .8rem;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
        position: absolute;
        right: -.3rem;
        background-color: #FFF;
        font-size: .4rem;
        border-radius: 50%;
        position: absolute;
        top: -.3rem;

    }
    .theFullMask {
        z-index: 20 ;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        pointer-events:auto
    }
</style>
