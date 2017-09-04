var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

/**
 * 标识开发环境和生产环境
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './build',
        port: 8080,
        stats: {colors: true}
    },
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'app/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        // 提高webpack搜索的速度
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
        }
    },
    devtool: 'cheap-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        definePlugin,
        new HtmlWebpackPlugin({
            title: '整体概览',
            template: './app/index.html',
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080'}),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
    ]
};
