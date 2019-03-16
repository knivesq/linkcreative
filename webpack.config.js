const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');
let sw = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(scss|css)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
        }),
        // new MiniCssExtractPlugin({
        //     filename: "style.css",
        // }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json', // Not to confuse with manifest.json
        }),
        // new BundleAnalyzerPlugin(),

        // new sw({
        //     // By default, a cache-busting query parameter is appended to requests
        //     // used to populate the caches, to ensure the responses are fresh.
        //     // If a URL is already hashed by Webpack, then there is no concern
        //     // about it being stale, and the cache-busting can be skipped.
        //     dontCacheBustUrlsMatching: /\.\w{8}\./,
        //     cacheId: 'pwa',
        //     filename: 'service-worker.js',
        //     staticFileGlobs: ['public/**/*.{png,jpg,gif,css,eot,svg,ttf,woff,woff2,js,html}'],
        //     minify: true,
        //     stripPrefix: 'public/',
        //     handleFetch: true,
        //     dynamicUrlToDependencies: {
        //         '/': ['public/index.html'],
        //     },
        //     staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
        //     runtimeCaching: [
        //         {
        //             urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
        //             handler: 'cacheFirst'
        //         },
        //         {
        //             urlPattern: /^https:\/\/www\.thecocktaildb\.com\/images\/media\/drink\/(\w+)\.jpg/,
        //             handler: 'cacheFirst'
        //         }
        //     ],
        //     logger(message) {
        //         if (message.indexOf('Total precache size is') === 0) {
        //             // This message occurs for every build and is a bit too noisy.
        //             return;
        //         }
        //         console.log(message);
        //     },
        //     navigateFallback: '/',
        // }),
        new CopyWebpackPlugin([
            { from: 'src/pwa' }, // define the path of the files to be copied
        ]),
        ],
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'), //cria pasta public
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [' ', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                loader: ["postcss-loader"]

            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    devtool: 'source-map'
}