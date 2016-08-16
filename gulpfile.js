var fs = require('fs'),
	argv = require('yargs').argv,
	gulp = require('gulp'),
	data = require('gulp-data'),
	util = require('gulp-util'),
	sass = require('gulp-sass'),
	hbsStatic = require('gulp-compile-handlebars'),
	hbsRuntime = require('gulp-handlebars'),
	requirejsOptimize = require('gulp-requirejs-optimize'),
	autoprefixer = require('gulp-autoprefixer'),
	defineModule = require('gulp-define-module'),
	changed = require('gulp-changed'),
	rename = require('gulp-rename');

/*
 * Compile index.hbs to index.html for static serving
 */

gulp.task('hbs-static', function () {

	return gulp.src('./templates/static/index.hbs')
		.pipe(data(JSON.parse(fs.readFileSync('./package.json'))))
		.pipe(data(JSON.parse(fs.readFileSync('./metadata.json'))))
		.pipe(hbsStatic({ dev: !argv.dist }))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./public'));
});

/*
 * Compile runtime .hbs templates for use in Javascript
 */

gulp.task('hbs-runtime', function() {

	return gulp.src('./templates/runtime/**/*.hbs')
		.pipe(changed('./templates/build', { extension: '.js' }))
		.pipe(hbsRuntime({ handlebars: require('handlebars') }))
		.pipe(defineModule('amd'))
		.pipe(gulp.dest('./templates/build'));
});

/*
 * Compile runtime .scss to .css
 */

gulp.task('sass', function() {

	var sassOptions = { outputStyle: argv.dist ? 'compressed' : 'nested' },
		autoprefixerOptions = { browsers: ['last 2 versions'], cascade: false };

	return gulp.src('./styles/**/*.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest('./public/css'));
});

/*
 * Concatenate and minify all Javascript to main.min.js
 */

gulp.task('requirejs', ['hbs-runtime'], function() {

	var options = {
		mainConfigFile: 'scripts/main.js',
		include: ['requireLib'],
		stubModules : ['json', 'text'],
		preserveLicenseComments: false,
		findNestedDependencies: false,
		generateSourceMaps: false,
		optimize: 'uglify2'
	};

	return gulp.src('./scripts/main.js')
		.pipe(requirejsOptimize(options))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./public/js'));
});

/*
 * Setup watchers (automatically run by default "gulp" task)
 */

gulp.task('watch', ['hbs-static', 'hbs-runtime', 'sass'], function() {

	gulp.watch('./templates/static/**/*.hbs', ['hbs-static']);
	gulp.watch('./templates/runtime/**/*.hbs', ['hbs-runtime']);
	gulp.watch('./styles/**/*.scss', ['sass']);
});

/*
 * Setup main tasks to run from CLI, "gulp" and "gulp --dist"
 */

var defaultTasks = ['hbs-static', 'hbs-runtime', 'sass'];
defaultTasks.push(argv.dist ? 'requirejs' : 'watch');

gulp.task('default', defaultTasks, function() {
	var message = argv.dist
		? 'Created distribution build'
		: 'Created development build and start watching';
	util.log(util.colors.green(message));
});
