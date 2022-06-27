const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    mode: 'development' || 'production' || 'none',
    // 入口
    entry: "./src/index.js",
    output: {
        // 出口路径 绝对路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js" // 出口文件名
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 模板html地址
            template: './public/index.html',
            // 生成的新的
            filename: 'index.html'
        }),
        // 默认情况下dist
        // 删除的是ouput path 里配置的那个输出文件的文件夹
        new CleanWebpackPlugin(),
    ]
}