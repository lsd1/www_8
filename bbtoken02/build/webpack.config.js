var webpack = require('webpack');
var conf=require("./config");
var utils=require("./build-util");


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩CSS模块;
var cleanWebPlugin = require('clean-webpack-plugin');
var merge = require('webpack-merge');

var config =merge(conf.config,{
      module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader?importLoaders=1',
                'postcss-loader'
            ]
        },
        //  {
        //     test: /\.less/,
        //     exclude: utils.resolve('src/assets/css/less/styles.less'),
        //     use: [
        //         'style-loader',
        //         'css-loader?importLoaders=1',
        //         'postcss-loader',
        //         //加载less-loader同时也得安装less;
        //         { loader: 'less-loader', options: { javascriptEnabled: true,"modifyVars":{ "@primary-color": "#f5c549"}} }

        //     ]
        // }, 
        {
            test: /\.less/,
           // include: utils.resolve('src/assets/css/less/styles.less'),
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader?importLoaders=1',
                'postcss-loader',
                //加载less-loader同时也得安装less;
                { loader: 'less-loader', options: { javascriptEnabled: true,"modifyVars":{ "@primary-color": "#f5c549"}} }

            ]
        }]
    },
     mode:'production',
      //compression:true,
     optimization: {

        minimize: true, //取代 new UglifyJsPlugin(/* ... */)
        providedExports: true,
        usedExports: true,
        //识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
        //依赖于optimization.providedExports和optimization.usedExports
        sideEffects: true,
        //取代 new webpack.optimize.ModuleConcatenationPlugin()
        concatenateModules: true,
        //取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
        noEmitOnErrors: true,
        splitChunks: {
             chunks: "async",
              minSize: 30000, //模块大于30k会被抽离到公共模块
              minChunks: 1, //模块出现3次就会被抽离到公共模块
              maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
              maxInitialRequests: 3, //入口模块最多只能加载3个
              name: true,
            cacheGroups: {
                common: {
                    name    : 'common',
                    test    : /node_modules/,
                    chunks  : 'initial',
                    priority: -10,
                    enforce : true
                }
            }
        }
    },
    plugins: [
       
        
        new webpack.DefinePlugin({
            'process.env': {
                state: true
            }
        }),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({　　
            filename: 'css/[name].css',
            allChunks: true　
        }), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
        new OptimizeCssAssetsPlugin(),
            
         //gzip 压缩
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',   // 目标文件名
            algorithm: 'gzip',   // 使用gzip压缩
            test: new RegExp(
                '\\.(js|css)$'    // 压缩 js 与 css
            ),
            threshold: 10240,   // 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8  // 最小压缩比达到0.8时才会被压缩
        }),
        new cleanWebPlugin(['dist/*'], 　 //匹配删除的文件
            {
                root: utils.resolve('/'),
                　　　　　　　　　　 //根目录
                verbose: true,
                　　　　　　　　　　 //开启在控制台输出信息
                dry: false　　　　　　　　　　 //启用删除文件
            })
    ]
});

module.exports = config;