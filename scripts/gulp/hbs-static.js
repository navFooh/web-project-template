const { src, dest, series, task, watch } = require('gulp');
const gulpCompileHbs = require('gulp-compile-handlebars');
const gulpPlumber = require('gulp-plumber');
const gulpRename = require('gulp-rename');

const hbsStaticSrc = './templates/static/index.hbs';
const hbsStaticDest = './public';
const hbsStaticName = 'index.html';
const hbsStaticData = {
	dev: global.dev,
	pkg: require('../../package.json'),
	meta: require('../../metadata.json')
};

task('hbs-static:compile', () => src(hbsStaticSrc)
	.pipe(gulpPlumber())
	.pipe(gulpCompileHbs(hbsStaticData))
	.pipe(gulpRename(hbsStaticName))
	.pipe(dest(hbsStaticDest))
	.pipe(global.browserSyncInstance.stream())
);

task('hbs-static:watch', () => watch(hbsStaticSrc, series('hbs-static:compile')));
