const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {

        bundle: './src/bundle.js',
        selector: './src/app.js',
        theme: './src/theme.js'

    },

    output: {

        filename: '[name].js',
        path: path.resolve(__dirname, './dist')

    },

    module: {

        rules: [

            {

                // Transpile JS
                test: /\.js$/,
                include: [ path.resolve(__dirname, './src') ],
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }

                ]

            },

            {

                // Transpile Sass to CSS
                test: /\.sass$/,
                include: [ path.resolve(__dirname, './css') ],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]

            },

            {
                // SVG
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }

        ]

    },

    plugins: [

        new webpack.optimize.UglifyJsPlugin({

            output: {
                comments: false,
                beautify: false
            }

        })

    ]

};