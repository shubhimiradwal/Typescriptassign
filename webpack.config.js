module.exports = {
  entry: './Person.ts',
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'myCompiledOutput'
  },
  devServer: {
    inline: false
  }
};
