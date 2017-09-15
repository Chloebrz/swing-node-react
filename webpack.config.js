// Dependencies
const path = require("path");

var config = {
    name: "browser",
    // The entry point of the bundle
    entry: "./app/index.js",
    output: {
        // The output directory as absolute path
        path: path.join(__dirname, "public", "assets"),
        // The filename of the entry chunk as relative path inside the output.path directory
        filename: "bundle.js",
        // The output path from the view of the Javascript
        publicPath: "assets/"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader" },
            { test: /\.png$|\.jpg$/, loader: "url-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.js$|\.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                },
                exclude: path.join(__dirname, "..", "node_modules")
            },
            {
                test: /\.html$/,
                loader: "html-loader?attrs[]=video:src"
            },
            {
                test: /\.(webm|mp4)$/,
                loader: "url-loader?limit=10000&mimetype=video/mp4"
            },
            {
                test: /\.(gif|svg)$/i,
                loader: "url-loader?name=/public/icons/[name].[ext]"
            }
        ]
    }
};

module.exports = config;
