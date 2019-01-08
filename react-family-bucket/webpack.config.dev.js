const path = require('path');
const srcRoot = './src';
module.exports = {
    // 输入配置
    entry: [
        path.resolve(srcRoot,'./page/index/index.js')
    ],
    // 输出配置
    output: {
        path: path.resolve(__dirname, './dev'),
        filename: 'bundle.min.js'
    },
    module: {
        // 加载器配置
        rules: [
            { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&npmname=images/[name].[hash].[ext]', include: path.resolve(srcRoot)}
        ]
    },
};