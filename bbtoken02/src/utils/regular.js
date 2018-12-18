
//身份证
export const IDcode=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/; 

//只能有英文和数字
export const passport=/^[a-z0-9]+$/i; 

//只匹配数字
export const numbers=/^\d+$/;
//验证码
export const codes=/^\d{6}$/;

//只匹配数字加4位小数
export const numberDecimal=/^\d+(\.\d{0,4})?$/;
//匹配正数和负数加4位小数
export const plusORminus=/^-?\d+(\.\d{0,4})?$/;

//只匹配数字加几位位小数
export const numberDecimalMax=(min=1,max=10)=>{
	return new RegExp(`^[0-9]+(.[0-9]{${min},${max===0?10:max}})?$`);
};






//只匹配大于0得数
export const pwNumber=/^\d+(\.)?\d*$/g;

//邮箱

export const email=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
//匹配昵称

export const nickName=/^[\u4e00-\u9fa5A-Za-z0-9_ ]*$/;


//密码
export const pwd=/^(?=.*[a-zA-Z])(?=.*\d)[^]{8,16}$/;


