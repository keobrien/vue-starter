'use strict';

const argv = require('yargs').argv;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

console.info(path.resolve('./' + process.env.npm_package_config_paths_source + '/modules'));

module.exports = (function () {
	let config = {
		entry : './' + process.env.npm_package_config_paths_source + '/main.js',
		output: {
			filename: 'main.js'
		},
		watch : !!argv.watch,
		vue   : {
			loaders: {
				js: 'babel-loader'
				// Create separate CSS file to prevent unstyled content
				, sass: ExtractTextPlugin.extract("css!sass?sourceMap") // requires `devtool: "#source-map"`
			}
		},
		module: {
			loaders: [
				{
					test   : /\.js$/,
					loader : 'babel-loader',
					exclude: '/node_modules/'
				},
				{
					test  : /\.vue$/,
					loader: 'vue-loader',
					options: {
						loaders: {
							'scss': 'vue-style-loader!css-loader!sass-loader',
							'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
						},
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					npm_package_config_paths_source: '"' + process.env.npm_package_config_paths_source + '"'
				}
			}),
			new ExtractTextPlugin("style.css"),
			new WebpackNotifierPlugin({alwaysNotify: true}),
		],
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.common.js'
			},
			root: path.resolve('./' + process.env.npm_package_config_paths_local_modules)
		},
		babel: {
			"presets": ["es2015", "stage-2"],
			"comments": false,
			"env": {
				"test": {
					"plugins": [
						[
							"__coverage__",
							{
								"only": process.env.npm_package_config_paths_source + "/**/!(*spec|*mock).*"
							}
						]
					]
				}
			}
		},
		devtool: "#source-map" // #eval-source-map is faster but not compatible with ExtractTextPlugin
	};

	if (process.env.NODE_ENV === 'production') {
		config.plugins = [
			// short-circuits all Vue.js warning code
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"',
					npm_package_config_paths_source: '"' + process.env.npm_package_config_paths_source + '"'
				}
			}),
			// minify with dead-code elimination
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			// optimize module ids by occurence count
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.DedupePlugin(),
			new ExtractTextPlugin("style.css")
		];
		config.devtool = "#source-map";
	}

	return config;
})();