import core from 'mathjs/core';
import bignumber from 'mathjs/lib/type/bignumber';
import arithmetic from 'mathjs/lib/function/arithmetic';
import format from 'mathjs/lib/function/string/format';
import parser from 'mathjs/lib/expression/function/parser';
const math = core.create();

math.import(bignumber);
math.import(arithmetic);
math.import(format);
math.import(parser);



math.config({
    number: 'BigNumber' // Default type of number: 
        // 'number' (default), 'BigNumber', or 'Fraction'
});
/**
 * [截取小数]
 * @param  {[type]} val [值]
 * @param  {[type]} num [截取几位小数]
 * @return {[type]}     [description]
 */
export const toFixed = (val, num) => {

    const num2 = val + '';
    let param = 0;
    if (num2.includes('.')) {
        param = num2.substring(0, (num2.lastIndexOf('.') + (num + 1)));
        if (param.split('.')[1].length !== num) {
            param = parseFloat(param).toFixed(num);
        }
    } else {
        param = parseFloat(num2).toFixed(num);
    }

    return param;
};

/**
 * [小数过长的科学计算法转换]
 * @param  {[type]} parms [description]
 * @return {[type]}       [description]
 */
export const scientificToNumber = (parms) => {
    let num=String(parms);
    if (num.indexOf('e-') >= 0) {
        num = '0' + String(Number(num) + 1).substr(1);
    }
    return num;
};
/**
 * [计算]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
export const mul = (parms) => {
    
    return parseFloat(math.format(math.parser().eval(parms)));
};



/**
 * [延迟时间]
 * @param  {[type]} timeout [时间]
 * @return {[type]}         [description]
 */
export const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
/**
 * [格式化金额]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export const formatNumber = (value) => {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

/**
 * [替换手机号]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const replacePhone=(name)=>{
    if(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(name)){
        return name.replace(/^(\w{3})\w{4}(.*)$/, '$1****$2');
    }
   return name;
};

//获取字符串长度（汉字算两个字符，字母数字算一个）
 export const   getByteLen=(val)=>{
      let len = 0;
      for (let i = 0; i < val.length; i++) {
          let a = val.charAt(i);
          if (a.match(/[^\x00-\xff]/ig) != null) {//\x00-\xff→GBK双字节编码范围
              len += 2;
          }
          else {
              len += 1;
          }
      }
      return len;
  };

//验证 isNaN,Infinity
export const validNumber=(val)=>{
    if(isNaN(val)||val==='Infinity'){
           return 0;
    }
    return val;
};

//验证 是否是手机
export const  isMobile=()=>{
            let ua = navigator.userAgent;
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                isAndroid = ua.match(/(Android)\s+([\d.]+)/);
               return (isIphone || isAndroid);

};


export const fileUpload=(e,errCallBack,sizeCallBack) =>{
  // 检查图片类型
    // 只能上传三种图片格式
    const isJPEG = e.file.type === 'image/jpeg';
    const isPNG = e.file.type === 'image/png';
    const isJPG = e.file.type === 'image/jpg';
    const isPic = isJPG || isPNG || isJPEG;
    const size=e.file.size;
    if (!isPic) {
      errCallBack&&errCallBack();
      return e.fileList.filter((fileItem)=> e.file.uid !== fileItem.uid);
    }else if(size>5242880){
      sizeCallBack&&sizeCallBack();
      return e.fileList.filter((fileItem)=> e.file.uid !== fileItem.uid);
    } else {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

};
