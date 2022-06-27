const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            // 模板html地址
            template: './public/index.html',
            // 生成的新的
            filename: 'index.html'
        })
    ]
}