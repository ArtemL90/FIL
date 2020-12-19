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
const CssnanoPlugin = require('cssnano-webpack-plugin');

// module settings
module.exports = {
    mode: 'production',
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
    devtool: 'source-map',
    module: {
        rules:[
            // babel
            {
                test: /\.js$/,
                exclude:  /(node_modules|bower_components)/,
                loaders: [
                    'cache-loader', 
                    {
                        loader: 'babel-loader',
                        options: {
                           presets: ["@babel/preset-env"] 
                        }
                    }
                ]
            },
            //scss
            {
                test:/\.scss$/,
                use: [  
                       {
                            loader: MiniCssExtractPlugin.loader,
                            
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
        new ImageMinPlugin({
            test: /\.(png|gif|jpe?g|svg)$/i,
            plugins: [
                imageminMozjpeg({
                  quality: 80,
                  progressive: true
                })
            ]
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                parallel: true,
                uglifyOptions: {
                    include:'./dist/js/[name].js',
                    sourceMap: true,
                    cashe: true,
                    parallel: true,
                    mangle: true,
                    compress: {
                      pure_getters: true,
                      unsafe: true,
                      unsafe_comps: true,
                      conditionals: true,
                      unused: true,
                      comparisons: true,
                      sequences: true,
                      dead_code: true,
                      evaluate: true,
                      if_return: true,
                      join_vars: true
                    }
                },
            }),
            new CssnanoPlugin({
                sourceMap: true,
            }),
        ],
    }, 
}
