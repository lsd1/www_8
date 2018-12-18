/*
 * @Author: Administrator
 * @Date:   2018-09-04 00:29:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-26 16:23:08
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'dva',
            'dva-loading',
            'classnames',
            'js-cookie',
            'react-intl-universal',
            'mathjs/core',
            'mathjs/lib/type/bignumber',
            'mathjs/lib/function/arithmetic',
            'mathjs/lib/function/string/format',
            'mathjs/lib/expression/function/parser',
            'stompjs/lib/stomp.min',
            'sockjs-client/dist/sockjs.min'
        ]
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, '../src/assets/js/dll'), //放在项目的static/js目录下面
        filename: '[name].dll.js', //打包文件的名字
        library: '[name]_library' //可选 暴露出的全局变量名
            // vendor.dll.js中暴露出的全局变量名。
            // 主要是给DllPlugin中的name使用，
            // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
    },
    //压缩 只是为了包更小一点 
    optimization: {
        minimize: true //取代 new UglifyJsPlugin(/* ... */)
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'), //生成上文说到清单文件，放在当前build文件下面，这个看你自己想放哪里了。
            name: "[name]_library"
        })

    ]
};
