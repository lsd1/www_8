const fs = require('fs');
//加载所有翻译文件
const langPath = './translate/lang/';
const files = fs.readdirSync(langPath);
const tran = {};

var lang = 'tcn';

files.forEach(i => {
    let keyName = i.split('.')[0];
    tran[keyName] = require("./lang/" + i);
});

function trans(name, lan) {
    if(lan !== undefined){
        if(lan == 1){
            lang = 'en';
        }
    }

    return tran[lang][name];

}

export {trans}

