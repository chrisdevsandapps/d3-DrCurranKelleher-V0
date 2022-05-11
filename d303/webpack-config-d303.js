

// ####################################################
//  WEBPACK CONFIG FILE FOR ./D303
// ####################################################

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPluginConfig = {
    title: 'd3.js - 03',
    filename: 'index.html',
    template: 'd303/HtmlTemplate03.html',
}

const babelOptionsPresets = {
    // presets: ['@babel/preset-env', { targets: "defaults" }],
    presets: ['@babel/preset-env'],
}

const inputDir = 'index-d303.js'
const outputDir = '../dist03'

// ####################################################
// ####################################################

module.exports = {
    entry: {
        main: path.resolve(__dirname, inputDir)
    },


    module: {
        rules: [
            {test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader', options: babelOptionsPresets}},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
        ],
    },


    plugins: [
        new HtmlWebpackPlugin(htmlWebpackPluginConfig)
    ],


    devtool: 'source-map',


    devServer: {
        static: {
          directory: path.resolve(__dirname, outputDir),
        },
        compress: true,
        port: 3588,
        open: true,
        hot: true,
        historyApiFallback: true
    },

    
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, outputDir),
        clean: true,
        assetModuleFilename: '[name][ext]'
    }
}