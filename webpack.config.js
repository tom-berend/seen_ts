const path = require('path');

module.exports = {
  entry: './demo.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts' ],
  },
  output: {
    filename: 'seen_ts.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map"
};