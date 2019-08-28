const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizer = require('optimize-css-assets-webpack-plugin');
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: prod ? 'main.[hash].js' : 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.(sass|scss|css)$/i,
                use: [
                    !prod ?
                        'style-loader' :
                        MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new BabelMinifyWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: prod ? '[name].[hash].css' : '[name].css',
            chunkFilename: prod ? '[id].[hash].css' : '[id].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
        index: 'index.html',
        proxy: {
            '/': 'http://localhost:3003'
        }
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [new CssMinimizer()]
    }
};