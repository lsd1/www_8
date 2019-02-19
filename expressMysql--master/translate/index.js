const fs = require('fs');
//加载所有翻译文件
const langPath = './translate/lang/';
const files = fs.readdirSync(langPath);
const tran = {};

var lang = {'0':'cn', '01':'en', '11':'tcn', '1':'en', '2':'tcn'};

files.forEach(i => {
    let keyName = i.split('.')[0];
    tran[keyName] = require("./lang/" + i);
});

function trans(name, lan) {
    try {
        return tran[lang[String(lan)]][name];
    }catch (e) {
        console.log('name:', name);
        console.log('lan:', String(lan));
        console.log('lang:', lang);
        console.log('tran:', tran);
    }
}

export {trans}

