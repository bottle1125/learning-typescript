var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '/', dir)
}

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(css|less)$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}