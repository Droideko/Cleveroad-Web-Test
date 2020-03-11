const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src') + '/index.js',

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },

   devtool: 'source-map',

   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         }
      ]
   }
}