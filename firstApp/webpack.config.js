var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // plugin for minimization
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),     // path to out files - public
       publicPath: '/public/',
       filename: "[name].js"       // name of generated file
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   // loader for ts
           {
               test: /\.ts$/, // define file types
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // directory with source code
      {} // paths map
    ),
    new UglifyJSPlugin()
  ]
}