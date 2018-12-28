const path = require('path');
const srcRoot = './src';
module.exports = {
    // 输入配置
    entry: [
      './app.js'
    ],
    // 输出配置
    output: {
        path: path.resolve(__dirname, './dev'),

        filename: 'bundle.min.js'
    },
};