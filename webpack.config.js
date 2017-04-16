const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicFolder = path.resolve(__dirname, 'public/');
const distFolder = `${publicFolder}/dist`;

const env = process.env.NODE_ENV || 'development';
const apiUrl = process.env.LANDSWAR_API_URL || 'http://127.0.0.1:3000';

const webpackConfig = {
	entry: [
		'whatwg-fetch',
		'bootstrap-loader',
		'font-awesome-loader',
		`${publicFolder}/src/index.jsx`,
	],
	output: {
		path:     distFolder,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test:    /\.jsx?$/,
				exclude: /(node_modules)/,
				use:     [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.scss$/,
				use:  [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader:  'sass-resources-loader',
						options: {
							resources: './public/src/styles/sass-resources.scss',
						},
					},
				],
			},
			{
				test: /\.html$/,
				use:  [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:  'url-loader',
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				use:  'file-loader',
			},
		],
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			API_URL: apiUrl,
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(env),
			},
		}),
		new HtmlWebpackPlugin({
			title:    'LandsWar',
			template: `!!html-loader!${publicFolder}/index.html`,
		}),
	],
	devServer: {
		contentBase:        distFolder,
		compress:           true,
		port:               9000,
		historyApiFallback: true,
	},
	devtool: 'source-map',
};

if (env !== 'development') {
	webpackConfig.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			sourceMap: env !== 'production',
		})
	);
}

module.exports = webpackConfig;
