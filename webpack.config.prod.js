var webpack = require('webpack'); // node commonJS syntax here
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/build');
var APP_DIR = path.resolve(__dirname + '/app');

module.exports = {
    entry: APP_DIR + '/index.js', // a single file, the root
    output: {
        path: BUILD_DIR, // the path to build files
        filename: 'app.js', // giant built file, unless you use code-split
        publicPath: '/'
    },
    /*production config*/
    plugins: [ // plugins works on the entire webpack bundles
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({ // if you use node js
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // turn off third party libs warnings
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    /*end production*/
    module: {
        // loader works on individual files
        loaders: [{ // test determin if the files shall be include
            test: /\.jsx?/,
            include: APP_DIR, // path to test the files
            loader: 'babel', // loader is use to scan all js/ jsx files
            query: {
                presets: ['es2015'] // this can be put into babel.rc files
            }
        }]
    }
};