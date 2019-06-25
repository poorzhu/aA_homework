const path = require('path');

module.exports = {
    entry: "./frontend/widgets.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: "./dist/bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                // determines included/excluded -> filetypes/folders for transpiling
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    // determines filetypes that will be bundle
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};