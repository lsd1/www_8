
var conf = require("./config");
var utils = require("./build-util");
var webpack = require('webpack');

var merge = require('webpack-merge');

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

//获取IP
function getIPAdress() {
    let address = 0;
    var interfaces = require('os').networkInterfaces();
    Object.keys(interfaces).forEach((devName) => {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                address = alias.address;
            }
        }
    });
    return address;
}



var config = merge(conf.config, {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'css-loader?importLoaders=1',
                'style-loader'
            ]
        }, {
            test: /\.less/,
            use: [
                'happypack/loader?id=styles'
            ]
        }]
    },
    mode: 'development',
    devtool: 'source-map', //调试*/
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: { // 将公共模块提取，生成名为`vendors`bundle
                    chunks: "initial",
                    minChunks: 3,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                }
                // vendor: {
                //     test: /node_modules/,
                //     chunks: "initial",
                //     name: "vendor",
                //     priority: 10,
                //     enforce: true
                // }
            }
        }
    },



    devServer: { //热更新配置
        contentBase: utils.resolve('./dist/'), //开发服务运行时的文件根目录
        publicPath: "", //以public为根目录提供文件
        inline: true, //打包后加入一个websocket客户端
        hot: true,
        port: 3333,
        host: getIPAdress(), //ip地址
        open: true,
        noInfo: false,
        disableHostCheck: true,
        historyApiFallback: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://api.abc136.cn/',
                changeOrigin: true,
                secure: false,
                pathRewrite: { //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
       new WebpackDeepScopeAnalysisPlugin(),
       new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'styles',
            //如何处理  用法和loader 的配置一样
            loaders: ['style-loader',
                'css-loader?importLoaders=1',
                'postcss-loader',
                //加载less-loader同时也得安装less;
                { loader: 'less-loader', options: { javascriptEnabled: true, "modifyVars": { "@primary-color": "#f5c549" } } }],
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true
        }),

        //无需引入jquery
        new webpack.NamedModulesPlugin(), // 新增
        new webpack.HotModuleReplacementPlugin(), //新增

        new webpack.DefinePlugin({
            'process.env': {
                state: false
            }
        })

    ]
});

module.exports = config;
