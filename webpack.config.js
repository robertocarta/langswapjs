
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/content_script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': `${__dirname}/src`,
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // to read the css files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // to read the sass style block in vue files.
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // to read the scss style block in vue files. 
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
};
