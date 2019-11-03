
webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        application: "./assets/js/main.js"
    },
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            Vue: ["vue/dist/vue.esm.js", "default"]
        })
    ]
} 