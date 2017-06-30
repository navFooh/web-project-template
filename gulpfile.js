const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');
const config = require('./gulpconfig');

global.browserSyncInstance = browserSync.create();

const devBuild = ['hbs-runtime:compile', 'hbs-static:compile', 'requirejs:clean', 'sass:compile'];
const distBuild = ['hbs-runtime:compile', 'hbs-static:compile', 'requirejs:compile', 'sass:compile'];
const watchTasks = ['hbs-runtime:watch', 'hbs-static:watch', 'sass:watch'];

gulpRequireTasks({ path: __dirname + '/scripts/gulp' });

gulp.task('default', function (callback) {
	config.dev
		? runSequence(devBuild, 'serve', watchTasks, callback)
		: runSequence(distBuild, callback);
});

gulp.task('serve', function (callback) {
	global.browserSyncInstance.init({
		files: 'scripts/app/**/*.js',
		server: true,
		startPath: 'public'
	});
	callback();
});
