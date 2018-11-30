const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
    mode: 'development',
    entry: [
        './client/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/server/public/js/'),
        filename: 'bundle.js',
        publicPath: 'server/public/js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}