module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  entry: './client/src/index.jsx',
  output: {
    path: './client/src',
    filename: 'bundle.js',
=======
  entry: './client/app.js',
=======
  entry: './client/src/index.jsx',
>>>>>>> chores/ update webpack to use jsx & correct filepath for index.jsx
  output: {
    path: './client/src',
    filename: 'bundle.js'
>>>>>>> (setup) Config webpack for client/app.js, set up webpack & webpack dev server as devDependencies
  },
  devServer: {
    inline: true,
    contentBase: './client',
<<<<<<< HEAD
    port: 8100,
=======
    port: 8100
>>>>>>> (setup) Config webpack for client/app.js, set up webpack & webpack dev server as devDependencies
  },
  module: {
    loaders: [
      {
<<<<<<< HEAD
<<<<<<< HEAD
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
=======
        test: /\.js$/,
=======
        test: /\.jsx$/,
>>>>>>> chores/ update webpack to use jsx & correct filepath for index.jsx
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
>>>>>>> (setup) Config webpack for client/app.js, set up webpack & webpack dev server as devDependencies
