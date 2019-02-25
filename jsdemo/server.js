var express = require('express');
var webpack = require('webpack');
var path = require('path');
var app = express();
var webpackMiddleware = require("webpack-dev-middleware");
var compiler = webpack({
    entry:
        [
            "./src/index.js",
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
        ],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename:'bundle.js',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
var options ={
    publicPath: "/",
};
app.use(webpackMiddleware(compiler, options));
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static('output'));
app.listen(8080, function () {
    console.log('Example app listening on!');
});