const webpack = require('webpack');

const Express = require('express')

const app = new Express()

const WebPackDevMiddleWare = require('webpack-dev-middleware')

const webpackConfig = require('./webpack.config')

const complier = webpack(webpackConfig)

app.use(WebPackDevMiddleWare(complier,{
    publicPath:webpackConfig.output.publicPath
}))

app.listen(3000,()=>{
console.log('1');
})