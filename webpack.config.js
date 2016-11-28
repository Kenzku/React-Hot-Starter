var webpack = require('webpack'); // node commonJS syntax here
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/build');
var APP_DIR = path.resolve(__dirname + '/app');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'babel-polyfill',
        APP_DIR + '/index.js'], // a single file, the root
    output: {
        path: BUILD_DIR, // the path to build files
        filename: 'app.js', // giant built file, unless you use code-split
        publicPath: '/'
    },
    /*webpack-dev-server config*/
    devtool: 'source-map', // see the source code when debug
    devServer: {
        contentBase: BUILD_DIR,
        port: 3000,
        hot: true,
        colors: true,
        historyApiFallback: true,
        inline: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    /*end webpack-dev-server*/
    module: {
        loaders: [{ // test determin if the files shall be include
            test: /\.jsx?/,
            include: APP_DIR, // path to test the files
            loader: 'babel', // loader is use to scan all js/ jsx files
            query: {
                presets: ['es2015', 'react'], // this can be put into babel.rc files
                plugins: ['react-hot-loader/babel']
            }
        }]
    }
};