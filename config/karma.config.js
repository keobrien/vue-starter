// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const webpack = require('webpack');
const argv = require('yargs').argv;

let webpackConfig = merge(baseConfig, {
	devtool: '#inline-source-map'
});

delete webpackConfig.vue.loaders.sass;
delete webpackConfig.entry; // no need for app entry during tests

module.exports = function (config) {
	config.set({
		browsers         : ['PhantomJS'],
		frameworks       : ['jasmine'],
		reporters        : ['spec', 'coverage'],
		singleRun        : !argv.watch,
		files            : [
			'../node_modules/babel-polyfill/dist/polyfill.js',
			'./spec.js'
		],
		preprocessors    : {
			'./spec.js': ['webpack', 'sourcemap']
		},
		webpack          : webpackConfig,
		webpackMiddleware: {
			noInfo: true,
		},
		coverageReporter : {
			dir      : '../reports/coverage',
			reporters: [
				{type: 'lcov', subdir: '.'},
				{type: 'text-summary'},
			]
		},
	});
};