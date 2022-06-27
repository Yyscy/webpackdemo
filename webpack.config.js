const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

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
        new VueLoaderPlugin()
    ],
    // 服务器
    devServer: {
        port: 2017, // 端口号
        open: false,//开启是否跳转到浏览器
    },
    // 加载器 
    module: {
        rules: [ // loader的规则
            // css配置
            {
                test: /\.css$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行s
                use: ["style-loader", "css-loader"]
            },
            // less配置
            {
                test: /\.less$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行s
                use: ["style-loader", "css-loader", "less-loader"]
            },
            // {// webpack 4
            //     test: /\.(png|jpg|gif|jpeg)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
            //             // file-loader 直接复制图片
            //             // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
            //             options: {
            //                 limit: 8 * 1024,
            //             },
            //         },
            //     ],
            // },
            { // 图片文件的配置(仅适用于webpack5版本)
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
                // 如果你设置的是asset模式
                // 以8KB大小区分图片文件
                // 小于8KB的, 把图片文件转base64, 打包进js中
                // 大于8KB的, 直接把图片文件输出到dist下

                // type: 'asset/resource' // 发送一个单独的文件并导出 URL
                // type: 'asset/inline' // 导出一个资源的 data URI
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },
            {
                test: /\.vue$/,
                use:{
                    loader: 'vue-loader'
                }
                
            }
        ]
    },



}