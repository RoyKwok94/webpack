const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

const webpack = require('webpack')


module.exports = {
    entry: './src/main.js',
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                    "presets": [["@babel/preset-env",{
                        useBuiltIns:'usage'
                    }]]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),

        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true
    }
};