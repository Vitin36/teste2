const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: [
            'regenerator-runtime/runtime',
            './src/index.jsx',
        ],
    },

    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },

    performance: {
        hints: false,
    },

    resolve: {
        alias: {
            containers: path.resolve(__dirname, './src/containers'),
            components: path.resolve(__dirname, './src/components'),
            assets: path.resolve(__dirname, './src/assets'),
            hooks: path.resolve(__dirname, './src/hooks'),
        },
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.jsx', '.js', '.mjs'],
    },

    module: {
        rules: [
            { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            },
            { test: /\.(js|jsx)?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lenovo LP',
            template: './src/index.ejs',
            // favicon: './src/core/asset/favicon.ico',
            // config: process.env.APP_ENV || 'config',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
}