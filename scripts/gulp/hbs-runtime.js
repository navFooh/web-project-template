const { src, dest, series, task, watch } = require('gulp');
const gulpDefineModule = require('gulp-define-module');
const gulpHandlebars = require('gulp-handlebars');
const gulpPlumber = require('gulp-plumber');
const handlebars = require('handlebars');
const del = require('del');

const hbsRuntimeSrc = './templates/runtime/**/*.hbs';
const hbsRuntimeDest = './scripts/templates';

task('hbs-runtime:clean', callback => {
	del(hbsRuntimeDest);
	callback();
});

task('hbs-runtime:compile', () => src(hbsRuntimeSrc)
	.pipe(gulpPlumber())
	.pipe(gulpHandlebars({ handlebars }))
	.pipe(gulpDefineModule('amd'))
	.pipe(dest(hbsRuntimeDest))
	.pipe(global.browserSyncInstance.stream())
);

task('hbs-runtime:watch', () => watch(hbsRuntimeSrc, series('hbs-runtime:compile')));
