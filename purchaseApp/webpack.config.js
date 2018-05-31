var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // minimization plugin
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),     // path to out directory
       publicPath: '/public/',
       filename: "[name].js"       // name of the created file
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   // type script loader
           {
               test: /\.ts$/, // define file types
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            },{
              test: /\.html$/,
              loader: 'html-loader'
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname,'src/app'),
                loader: 'raw-loader'
              }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // source files directory
      {} // path map
    ),
    new UglifyJSPlugin()
  ]
}