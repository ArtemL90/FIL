// basic vars
const path = require('path');
const webpack = require('webpack');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var isProduction = (process.env.NODE_ENV === 'production');
// module settings
module.exports = {
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

    // devServer config
   //devServer: {
   //    contentBase: './app',
   //    writeToDisk: true,
   //},
    
    devtool: (isProduction) ? '' : 'inline-source-map',

    module: {
        rules:[
            // babel
            {
                test: /\.js$/,
                exclude:  /(node_modules|bower_components)/,
                loader: 'babel-loader'
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
            // image
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    },
                    'img-loader',
                ]
            },
            // fonts
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    
                ]
            },
            // svg
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },

            // php 
            {
                test: /\.php$/,
                loaders: [
                  'html-minify',
                  'php-loader'
                ]
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
        }),

        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
        }),

        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: './img', to: 'img',  
                    globOptions: {
                        ignore: ['svg/*'],
                        
                    }
                }
           ],
            
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            proxy: 'fil.loc',
            reloadDelay: 500,
            files: [
              {
                match: ["**/*.php", "**/*.css", "**/*.js"],
                fn: function(event, file) {
                  if (event === "change") {
                    const bs = require("browser-sync").get("bs-webpack-plugin");
                    bs.reload();
                  }
                }
              }
            ],
          })
      
    ],

}

// PRODUCTION ONLY
if(isProduction) {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            sourceMap: true
        }),

    );
    module.exports.plugins.push(
        new ImageMinPlugin({
            test: /\.(png|gif|jpe?g|svg)$/i,
            plugins: [
                imageminMozjpeg({
                  quality: 80,
                  progressive: true
                })
            ]
        }),

    );
}