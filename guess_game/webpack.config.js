

const path = require('path');
//在内存中根据指定模板页面生成内存中的首页,同时自动把打包好的bundle注入页面底部
//要配置插件,则需要在导出对象中,配置plugins节点
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const cleanWebPlugin = require('clean-webpack-plugin');
//配置文件
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    output: {//输出选项
        path: path.join(__dirname, './dist'),//输出路径
        filename: 'bundle.js'    //输出文件名
    },
    // devServer: {
    //     host:'127.0.0.1',
    //     port:8888
    // },
    plugins: [//所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板文件路径
            filename: 'index.html'//设置生成的内存页面
        }),
        new VueLoaderPlugin(),
        // new cleanWebPlugin(['dist/*'], 　 //匹配删除的文件
        //     {
        //         root: path.join(__dirname, '/'),
        //         //根目录
        //         verbose: true,
        //         //开启在控制台输出信息
        //         dry: false　　　　　　　　　　 //启用删除文件
        //     }),
    ],
    module: {//配置所有第三方loader模块
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},//匹配css文件loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            //配置资源文件匹配规则
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            //添加name前面的hash是避免资源重名导致显示问题
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1029739&name=[hash:8]-[name].[ext]'},//图片路径
            {test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'url-loader'}, //字体匹配
            {test: /\.js$/,  use: 'babel-loader', exclude: /node_modules/},//排除node_modules文件
            {test: /\.vue$/, use: 'vue-loader'}//处理vue文件
        ]
    },
    resolve: {
        alias: {//修改vue引入的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
};
