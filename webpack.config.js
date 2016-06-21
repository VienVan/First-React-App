module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname,
    filename: 'client.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react']}
      }
    ]
  }
};
