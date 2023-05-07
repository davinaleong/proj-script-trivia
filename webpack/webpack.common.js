const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/images/logo-blue-svg.svg',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new Webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SHOW_TEST_UI: 'no',
      API_URL: 'https://davinas-cms.herokuapp.com/api/',
      APP_SLUG: 'script-trivia',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: './src/assets', to: './dist' }],
    // }),
  ],
  stats: 'errors-only',
}
