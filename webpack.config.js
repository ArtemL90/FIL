// basic vars
const path = require('path');
const webpack = require('webpack');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// module settings
module.exports = {
    mode: 'development',
    // base path to the project
    context: path.resolve(__dirname, 'src'),
    // entry points of js
    entry: {
        app: [
            './js/index.js',
            './scss/style.scss'
        ],
    },
    
    // output path to the project
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'../'
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            // babel
            {
                test: /\.js$/,
                exclude:  /(node_modules|bower_components)/,
                loaders: ['cache-loader', 'babel-loader']
            },
            //scss
            {
                test:/\.scss$/,
                use: [  
                       {
                            loader: MiniCssExtractPlugin.loader,
                            options: { minimize: true },
                       }, 
                       {
                            loader: "css-loader",
                            options: { sourceMap: true },  
                       },
                       {
                            loader: "postcss-loader",
                            options: { sourceMap: true },  
                       },
                       {
                            loader: "sass-loader",
                            options: { sourceMap: true },   
                       },
                  ],
                 
            },
            // fonts
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: [
    
                    {
                        loader: 'file-loader',
                        options: {
                            bypassOnDebug: true,
                            name: '[path][name].[ext]'
                        }
                    },
                    
                ]
            },
            // image
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            bypassOnDebug: true,
                            name: '[path][name].[ext]',
                        }
                    },
                    'img-loader',
                ]
            },
            // svg
            {
                test: /\.svg$/,
                loaders: ['cache-loader', 'svg-url-loader'],
            },
            // php 
            {
                test: /\.php$/,
                loaders: ['cache-loader','html-minify', 'php-loader']    
            },

        ],
    },
    plugins: [
        
        new webpack.ProvidePlugin({
            'window.Swiper': 'swiper/bundle',
            Swiper: 'swiper/bundle'
        }),
        new MiniCssExtractPlugin({
          filename: './css/[name].css',
          disable: false, 
          allChunks: true
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            proxy: 'fil.loc',
            files: [
                {
                  match: ['**/*.css', './src/**/*.js', '**/*.php'],
                  fn: (event, file) => {
                    if (event == 'change') {
                      const bs = require("browser-sync").get("bs-webpack-plugin");
                      if (file.split('.').pop()=='php' ) {
                        bs.reload();
                      };
                      if(file.split('.').pop()=='css')  {
                        bs.reload("*.css");
                      };
                      if(file.split('.').pop()=='js')  {
                        bs.reload();
                      };
                    }
                  }
                }
            ]
          },{
            reload: false,
            name: 'bs-webpack-plugin'
          })
      
    ],

}

