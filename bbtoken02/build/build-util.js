/*
* @Author: syyws
* @Date:   2018-01-08 14:46:08
* @Last Modified by:   syyws
* @Last Modified time: 2018-01-08 15:12:42
*/
var path = require("path");
var deepClone=function(obj){
	var newObj=new obj.constructor;
	for (let i in obj) {
        newObj[i] = ((typeof obj[i]).toString() === "object" || (typeof obj[i]).toString() === "array") ? deepClone(obj[i]) : obj[i];
    }
    return newObj;
}
var resolve=function(dir) {
  return path.join(__dirname, '..', dir)
}
exports.resolve=resolve;
exports.deepClone=deepClone;