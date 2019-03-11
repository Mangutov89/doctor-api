const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },


  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {

    rules: [
      // configurations for loaders will go here!

      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        },

        {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),

    new HtmlWebpackPlugin({
      template: './src/example.html',
      filename: 'example.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new UglifyJsPlugin(),

    new CleanWebpackPlugin(['dist'])
  ]

};
