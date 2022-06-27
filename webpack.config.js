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
    ],
    // 服务器
    devServer: {
        port: 2017, // 端口号
        open: false,//开启是否跳转到浏览器
    },
    // 加载器 
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行s
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}