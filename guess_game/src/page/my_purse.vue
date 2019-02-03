<template>
    <div style="height: 100%;">
        <div class="purse">
            <div class="mui-bar mui-bar-nav mui-bar-nav-bg">
                <div class="back" @click="goBack"><img src="../images/resourse/hone_navigation_return2x.png" alt="">
                </div>
                <div class="diamond-component">
                    <router-link tag="div" to="/walletRecord">
                        <img src="../images/cn/wallet_record_cn.png" alt="">
                    </router-link>
                </div>
            </div>
            <div class="my-purse-box" >
                <div class="my-record-title" :style="{'background-image':'url(' + $t('imgSrc.myWallet') + ')' }"> </div>
                <div class="purse-list">
                    <div class="purse-num"><Diamond></Diamond></div>
                    <div class="recharge-box">
                        <div class="top-input">
                            <div class=" vsc-box">
                                <input type="number" class=""  v-model="numFromDia"  placeholder="VSC">
                            </div>
                            <div class=" diamond-box">
                                <input type="number" class="" :value="fromDia" disabled :placeholder="$t('purse.diamonds')">
                            </div>
                        </div>
                        <div :class="['btn-recharge', clickStatusDia ? 'canClick' : 'noClick']" v-html="$t('purse.charge')" @click="confirmShow(1)"></div>
                    </div>
                    <div class="extract-box">
                        <div class="top-input">
                            <div class=" diamond-box">
                                <input type="number" class=""  v-model="numFromVSC" :placeholder="$t('purse.diamonds')">
                            </div>
                            <div class=" vsc-box">
                                <input type="number" class="" disabled :value="fromVSC" placeholder="VSC">
                            </div>
                        </div>
                        <div :class="['btn-extract', clickStatusVSC ? 'canClick': 'noClick']" @click="confirmShow(2)" v-html="$t('purse.withdrawal')"></div>
                    </div>
                    <div class="status-text">{{statusTxt}}</div>
                    <div class="remarks-box">
                        <div class="zhu">{{ $t('purse.zhu')}}</div>
                        <div class="list">
                            <div class="list1">
                                <span class="li">1、</span><span class="li">{{ $t('purse.list1')}}</span>
                            </div>
                            <div class="list1">
                                <span class="li">2、</span><span class="li">{{ $t('purse.list2')}}</span>
                            </div>
                            <div class="list1">
                                <span class="li">3、</span><span class="li">{{ $t('purse.list3')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PswInput v-if="inputStatus" @inputHide="inputHide" @setPwd="setPwd"></PswInput>
        <div class="mui-backdrop full-mask" @click.self="cancelBtn" v-if="confirmStatus">
            <div class="full-box">
                <div class="confirm-txt">{{$t('purse.confirmPay')}}{{confirmType}}:</div>
                <div class="num-box">{{confirmNum}}</div>
                <div class="btn-box">
                    <div class="btn-cancel" @click="cancelBtn"></div>
                    <div class="btn-confirm" @click="confirmBtn"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PswInput from '../components/PswInput.vue';
    import Diamond from '../components/Diamond.vue';
    import Bus from '../components/bus';
    import { Toast } from 'mint-ui';

    export default {
        name: "my_purse",
        data() {
            return {
                inputStatus: false,
                inputFrom: null,
                cookieUid: 5,
                numFromVSC: null,//兑换vsc
                fromVSC: "",
                numFromDia: null,//兑换钻石
                fromDia: "",
                confirmStatus: false,//确认支付界面
                confirmNum: null,//确认金额
                confirmType: null,//确认类型
                balance: localStorage.getItem("diamond") || null,
                clickStatusDia: false,
                clickStatusVSC: false,
                statusTxt: '',
                exchangeRate: localStorage.getItem("exchangeRate"),
            }
        },
        mounted() {

        },
        methods: {
            goBack() {
                this.$router.push({path:'/index'});
            },
            inputHide() {
                this.inputStatus = false;
            },
            confirmShow(f) {
                if(f === 1) {
                    this.confirmType = 'VSC';
                    this.confirmNum = this.numFromDia;
                }else {
                    this.confirmType = this.$t('purse.diamonds');
                    this.confirmNum = this.numFromVSC;
                }
                this.inputFrom = f;
                this.confirmStatus = true;
            },
            setPwd(i) {
                if(this.inputFrom === 1) {
                    //兑换钻石
                    this.getDia(this.$md5(i));
                }else {
                    //兑换vsc
                    this.getVsc(this.$md5(i));
                }
            },
            //兑换vsc
            getVsc(pwd) {
                var params = this.parmis.initParams('member/exchangeVsc',{
                    pwd: pwd,
                    num: this.numFromVSC,
                });
                this.$http.post(params.postUrl,params.data).then(res =>{
                    if (res.status === 200) {
                        if(res.body.code === 0) {
                            if(res.body.data && res.body.data.diamond !== -1){
                                Bus.$emit('updateDiamond', res.body.data.diamond);
                            }
                            Toast({
                                message: this.$t('purse.withdraw_succ'),
                                duration: 1000
                            });
                        }else {
                            if(res.body.data && res.body.data.diamond !== -1){
                                Bus.$emit('updateDiamond', res.body.data.diamond);
                            }
                            Toast({
                                message: res.body.msg,
                                duration: 2000
                            })

                        }
                    } else {
                        Toast({
                            message: this.$t('purse.withdraw_faild'),
                            duration: 2000
                        })
                    }
                    this.numFromVSC = '';
                    this.fromVSC = '';
                })
            },
            //兑换钻石
            getDia(pwd) {
                var params = this.parmis.initParams('member/exchangeDiamond', {
                    pwd: pwd,
                    num: this.numFromDia,
                    uid: localStorage.getItem("uid")
                });
                this.$http.post(params.postUrl,params.data ).then(res =>{
                    if (res.status === 200) {
                        if(res.body.code === 0) {
                            if(res.body.data && res.body.data.diamond !== -1){
                                Bus.$emit('updateDiamond', res.body.data.diamond);
                            }
                            Toast({
                                message: this.$t('purse.recharge_succ'),
                                duration: 2000
                            });
                        }else {

                            if(res.body.data && res.body.data.diamond !== -1){
                                Bus.$emit('updateDiamond', res.body.data.diamond);
                            }
                            Toast({
                                message: res.body.msg,
                                duration: 2000
                            })
                        }
                    } else {
                        Toast({
                            message: this.$t('purse.recharge_faild'),
                            duration: 2000
                        })
                    }
                    this.numFromDia = '';
                    this.fromDia = "";
                })
            },
            cancelBtn() {
                this.confirmStatus = false;
            },
            confirmBtn() {
                this.inputStatus = true;
                this.confirmStatus = false;
            }

        },
        components: {
            PswInput,
            Diamond
        },
        watch: {
            numFromDia(newVal) {
                if(!/^[1-9]\d*$/.test(Number(newVal)) && newVal !== '' ){
                    this.clickStatusDia = false;
                    this.statusTxt = this.$t('purse.pleaseLoad');
                }else {
                    this.clickStatusDia = true;
                    this.statusTxt = ''
                }

                this.fromDia = newVal / this.exchangeRate;
            },
            numFromVSC(newVal) {
                if (!/^[1-9]\d*$/.test(Number(newVal)) && newVal !== '') {
                    this.clickStatusVSC = false;
                    this.statusTxt = this.$t('purse.pleaseLoad');
                } else {
                    this.clickStatusVSC = true;
                    this.statusTxt = ''
                }
                this.fromVSC = newVal * this.exchangeRate;
            }
        },
        filters: {
            getNum(value) {
                let val = String(value);
                console.log(val);
                if(!val) return '0.00';
                var intPart =  Number(val)|0; //获取整数部分
                var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
                var floatPart = ".00"; //预定义小数部分
                var value2Array = val.split(".");
                //=2表示数据有小数位
                if(value2Array.length == 2) {
                    floatPart = value2Array[1].toString(); //拿到小数部分
                    if(floatPart.length == 1) { //补0,实际上用不着
                        return intPartFormat + "." + floatPart + '0';
                    } else {
                        return sym + intPartFormat + "." + floatPart;
                    }
                } else {
                    // return intPartFormat + floatPart;
                    return intPartFormat;
                }
            }
        }

    }
</script>

<style scoped>
    .mui-backdrop {
        background-color: rgba(0, 0, 0, .7);
    }
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
    }

    .purse {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: stretch;
        padding-top: 1.2rem;
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

    .status-text {
        padding-left: 5%;
        text-align: left;
        font-size: 0.24rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #ff0000;
    }

    .diamond-component {
        width: 85%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .diamond-component div {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .diamond-component div img {
        width: 100%;
    }

    .my-purse-box {
        width: 100%;
        margin: 0 5%;
        position: relative;
        padding-top: 1.2rem;
    }

    .my-record-title {
        height: 1.2rem;
        width: 100%;
        /*background-image: url(../images/cn/my_wallet_title_cn.png);*/
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        top: 0;

    }

    .purse-list {
        background-color: rgba(99, 46, 202, .8);
        text-align: center;
        height: 100%;
    }
    .top-input:before {
        content: "";
        position: absolute;
        background-image: url(../images/resourse/my_wallet_to2x.png);
        width: .16rem;
        background-size: cover;
        height: .24rem;
        left: 50%;
        margin-left: -0.2rem;
    }

    .purse-num {
        font-size: 0.72rem;
        font-family: JiaLiChaoCuYuanJ;
        height: 1.7rem;
        line-height: 1.7rem;
        font-weight: 900;
        color: rgba(255, 162, 0, 1);
        -webkit-text-stroke: 1px #FFFEDC;
        text-stroke: 1px #FFFEDC;
        position: relative;
        display: block;
    }

    .purse-num:before {
        content: '';
        position: absolute;
        bottom: -.2rem;
        left: 50%;
        margin-left: -.27rem;
        width: .54rem;
        height: .54rem;
        background-image: url(../images/resourse/icon_dia_whiet.png);
        -webkit-background-size: cover;
        background-size: cover;
    }

    .recharge-box, .extract-box {
        -webkit-background-size: cover;
        background-size: cover;
        height: 2.4rem;
        width: 90%;
        margin: auto;
        margin-top: .6rem;
        border-radius: .2rem;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 10px 20px 0px rgba(63, 45, 176, .4);
    }
    .remarks-box {
        display: flex;
        padding-left: 5%;
        padding-top: 5%;
        color: #CFC9FB;
        font-size:0.24rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
    }
    .list {
        text-align: left;
        width: 80%;
    }
    .list .list1 {
        display: flex;
    }
    .zhu {
        margin-right: .2rem;
    }

    .top-input {
        height: 1.5rem;
    }
    .btn-recharge, .btn-extract {
        -webkit-background-size: cover;
        background-size: cover;
        height: .82rem;
        font-size: 0.36rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: .82rem;
        text-align: center;
    }
    .btn-recharge {
        background-image: url(../images/resourse/my_wallet_recharge2x.png);
    }
    .noClick {
        pointer-events: none;
        color: #e4e4e4;
    }
    .canClick {
        pointer-events: auto;
        color: rgba(255, 255, 255, 1);
    }

    .btn-extract {
        background-image: url(../images/resourse/my_wallet_signout_propose2x.png);
    }

    .top-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e7e4ff;
    }

    .diamond-box, .vsc-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 15%;
        position: relative;
    }

    input[type='number'] {
        border: none;
        width: 80%;
        margin: 0;
        padding: 0;
        height: .7rem;
        padding-left: 10px;
    }

    input:-moz-placeholder {
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(169, 187, 255, 1);
    }

    input::-moz-placeholder {
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(169, 187, 255, 1);
    }

    input:-ms-input-placeholder {
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(169, 187, 255, 1);
    }

    input::-webkit-input-placeholder {
        font-size: 0.3rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(169, 187, 255, 1);
    }

    .vsc-box:after {
        background-image: url(../images/resourse/my_wallet_vsc2x.png);
    }

    .diamond-box:after {
        background-image: url(../images/resourse/my_wallet_diamonds2x.png);
    }

    .vsc-box:after, .diamond-box:after {
        content: '';
        position: absolute;
        width: .5rem;
        height: .5rem;
        -webkit-background-size: cover;
        background-size: cover;
        left: .2rem;
    }

    .full-mask {
        display: flex;
        justify-content: center;
        padding-top: 40%;
    }
    .full-box{
        background-color: #9559F8;
        border-radius: .2rem;
        width: 6rem;
        height: 4rem;
        padding-top: .1rem;
    }
    .confirm-txt {
        text-align: center;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:0.36rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .num-box {
        height: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        margin: auto ;
        border-radius: .2rem;
        background-color: #E7E4FF;
        font-size:0.9rem;
        font-family:Tensentype-JiaLiChaoCuYuanJ;
        font-weight:800;
        color:rgba(255,162,0,1);
        line-height:1.71rem;
        /*padding-left: 15%;*/
        position: relative;
    }
    /*.num-box:after {*/
        /*content: '';*/
        /*position: absolute;*/
        /*left: .4rem;*/
        /*width: .56rem;*/
        /*height: .54rem;*/
        /*background-image: url(../images/resourse/home_content_diamonds2x.png);*/
        /*-webkit-background-size: cover;*/
        /*background-size: cover;*/
    /*}*/
    .btn-box {
        height: 1.1rem;
        width: 4.3rem;
        margin: auto;
        margin-top: .2rem;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
    }
    .btn-cancel,.btn-confirm {
        flex: 1;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .btn-confirm {
        background-image: url(../images/cn/confirm_cn.png);
    }
    .btn-cancel {
        background-image: url(../images/cn/cancel_btn_cn.png);
    }


</style>
