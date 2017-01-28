const webpack = require('webpack');
const argv = require('yargs').argv;

let webpackConfig = require('./webpack.config');

webpackConfig.devtool = '#inline-source-map';
delete webpackConfig.vue.loaders.sass;
delete webpackConfig.entry;

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