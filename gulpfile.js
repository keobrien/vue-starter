'use strict';

const argv = require('yargs').argv;
const clean = require('gulp-clean');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const print = require('gulp-print');
const webpack = require('gulp-webpack');
const webpackConfigPath = './config/webpack.config.js';
const webpackConfig = require(webpackConfigPath);

gulp.task('default', ['clean'], defaultTask);
gulp.task('syncInit', ['copyHtml'], syncInitTask);
gulp.task('copyHtml', copyHtml);
gulp.task('serve', serveTask);
gulp.task('clean', cleanTask);
gulp.task('webpack', webpackTask);

//////////

function defaultTask () {
	return gulp.start('webpack', 'serve', 'syncInit');
}

function syncInitTask() {
	if(!!argv.watch) {
		gulp.watch(process.env.npm_package_config_paths_source + '/**/*.html', ['copyHtml'])
	}else {
		return gulp.start('copyHtml');
	}
}

function cleanTask() {
	return gulp.src(process.env.npm_package_config_paths_output, {read: false})
		.pipe(clean());
}

function copyHtml() {
	return gulp.src(process.env.npm_package_config_paths_source + '/**/*.html')
		.pipe(print(function (filepath) {
			return 'sync: ' + filepath;
		}))
		.pipe(gulp.dest(process.env.npm_package_config_paths_output));
}

function serveTask () {
	let stream =  nodemon({
		"script": "./config/server.js",
		"verbose": false,
		"watch": [
			"./config"
		]
	});

	stream.on('restart', function () {
		console.log('restarted!')
	});

	return stream;
}

function webpackTask () {
	return gulp.src(webpackConfigPath)
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(process.env.npm_package_config_paths_output));
}