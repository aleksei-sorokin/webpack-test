const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
		library: 'webpack-test',
		libraryExport: 'default',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'typeof self  === \'undefined\' ? this : self'
  },
	// resolve: {
	// 	extentions: ['.js', '.ts']
	// },
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
};
