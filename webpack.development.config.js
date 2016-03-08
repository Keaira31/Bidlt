var webpack = require('webpack');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      "./src/js/index.js"
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
        { test: /\.css$/, loader: 'style!css'}
      ]
  },
  devServer: {hot: true},
  plugins: [new webpack.HotModuleReplacementPlugin() ],
  inline: true,
  progress: true,
  colors: true
};
