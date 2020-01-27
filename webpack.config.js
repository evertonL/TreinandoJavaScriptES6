module.exports = {
    entry: './src/main2.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
    },
    devServer: {
        contenBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};