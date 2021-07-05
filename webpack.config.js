const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.ts'
  },
  devtool: 'source-map', // Generate separate source map files
  devServer: {
    contentBase: './dist',
    overlay: true // Show errors in overlay on the website
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/, // All Knockout.js component HTML templates
        use: 'html-loader' // Adds the component templates to the bundle
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|svg|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
