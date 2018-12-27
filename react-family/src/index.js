/**是用es6箭头函数 */
var func = str => {
    document.getElementById("app").innerHTML = str;
}
func("我现在在使用Babel!");