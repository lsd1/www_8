<template>
    <span>{{diamondNum | NumFormat}}</span>
</template>

<script>
    import Bus from './bus';
    export default {
        data() {
            return {
                diamondNum: localStorage.getItem('diamond') || 0,
            }
        },
        created(){
            var self = this;
            Bus.$on('updateDiamond', (newDiamon) => {
                if(newDiamon >= 0){
                    localStorage.setItem('diamond',newDiamon);
                    self.diamondNum = newDiamon;
                }

            });
        },
        methods: {

        },
        filters:{
            NumFormat: value => {
                var sym = '';
                // if(value > 0) {
                //     sym = '+';
                // }else {
                //     sym = ''
                // }
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
                    return sym + intPartFormat;
                }
            }
        },
        watch:{
            // diamondNum(newVal) {
            //     this.diamondNum = newVal;
            // }
        }
    }
</script>
