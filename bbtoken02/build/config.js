/*
 * @Author: syyws
 * @Date:   2018-01-08 14:13:21
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-28 10:29:34
 */
var webpack = require('webpack');
var utils = require("./build-util");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length-2 });

const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var config = {
    entry: {
        main: [
            utils.resolve('src/main.js')
        ]
    },
    cache: true,
    output: {
        path: utils.resolve('dist/'),
        filename: "js/[name].[hash:5].js",
        publicPath: '/', //给require.ensure用*/
        chunkFilename: 'js/[name].[hash:5].chunk.js' //给require.ensure用
    },
    //各种加载器，即让各种文件格式可用require引用
    module: {
        rules: [

        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=jsx']
        }, {
            //文件加载器，处理文件静态资源
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 1000,
                    name: "./fonts/[name].[ext]"
                }
            }]
        }, {
            //正则匹配后缀.png、.jpg、.gif图片文件;
            test: /\.(png|jpg|gif)$/i,
            use: [{
                    //加载url-loader 同时安装 file-loader;
                    loader: 'url-loader',
                    options: {
                        //小于10000K的图片文件转base64到css里,当然css文件体积更大;
                        limit: 1000,
                        //设置最终img路径;
                        name: 'images/[name].[ext]'
                    }
                }
                //  {
                //     //压缩图片(另一个压缩图片：image-webpack-loader);
                //     loader: 'img-loader?minimize&optimizationLevel=5&progressive=true'
                // },

            ]
        }]
    },

    resolve: {
        extensions: ['.js', ".jsx"],
        //别名配置
        alias: {
            '@': utils.resolve('src'),
            jquery: utils.resolve('src/assets/js/lib/jquery'),
            utils: utils.resolve('src/utils/utils'),
            router: utils.resolve('src/routers/router'),
            oAuth: utils.resolve('src/utils/oAuth'),
           // Socket:utils.resolve('src/assets/js/soket/sockjs.min'),
            tradingview: utils.resolve('src/assets/js/charting_library')
        }
    },
    plugins: [
            //无需引入jquery
            new webpack.ProvidePlugin({
                $: "jquery"
            }),
            
            new HappyPack({
                //用id来标识 happypack处理那里类文件
                id: 'jsx',
                //如何处理  用法和loader 的配置一样
                loaders: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel']
                    }
                }],
                //共享进程池
                threadPool: happyThreadPool,
                //允许 HappyPack 输出日志
                verbose: true
            }),
             //dll使用
             new webpack.DllReferencePlugin({
                //context: path.join(__dirname),
                manifest:utils.resolve('build/vendor-manifest.json')
            }),

            new HtmlWebpackPlugin({
                filename: 'index.html', //会生成index.html在根目录下,并注入脚本
                template: './src/index.html',
                minify: {
                    removeComments: true, //去注释
                    collapseWhitespace: true, //压缩空格
                    removeAttributeQuotes: true //去除属性引用
                },
                inject: true //此参数必须加上，不加不注入
            }),
             new HtmlWebpackIncludeAssetsPlugin({
                assets: ['js/vendor.dll.js'],
                append: false,
                publicPath: '/'
              }),
            // copy custom static assets
            new CopyWebpackPlugin([{
                from: utils.resolve('src/assets/js/dll/'),
                to: utils.resolve('dist/js'),
                ignore: ['.js']
            },{
                from: utils.resolve('src/assets/js/charting_library/static'),
                to: utils.resolve('dist/js/charting_library/static'),
                ignore: ['.*']
            },{
                from: utils.resolve('src/locales'),
                to: utils.resolve('dist/locales'),
                ignore: ['.*']
            }])
        ]
        //  ,externals: { //使用后react需要在页面上单独引入
        //     "Socket": "SockJS"
        // }
};

exports.config = config;
