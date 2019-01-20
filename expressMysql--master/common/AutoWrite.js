//模拟工厂模式，给每个target的原型上注入新属性
module.exports = {
    AutoWritedDiamondLogModel(target, key, descriptor){
		target.model = require('../model/diamondLog');
	}
};