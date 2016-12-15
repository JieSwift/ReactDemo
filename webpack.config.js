var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.jsx'),
        path.resolve(__dirname, 'app/app.jsx')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader?modules!postcss-loader' },
            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.js', '.jsx', 'css'],
        alias: {
            // app:path.resolve(__dirname,'app/js'),
            // 以前你可能这样引用 import { Nav } from '../../components'
            // 现在你可以这样引用 import { Nav } from 'app/components'

            // components:path.resolve(app,'components')
            // 以前你可能这样引用 @import "../../../styles/mixins.scss"
            // 现在你可以这样引用 @import "style/mixins.scss"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        // 允许错误不打断程序，,仅开发模式需要
        new webpack.NoErrorsPlugin()
    ],
    postcss: function() {
        return [precss, autoprefixer];
    },
};
