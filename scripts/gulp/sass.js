const { src, dest, series, task, watch } = require('gulp');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
const del = require('del');

gulpSass.compiler = require('node-sass');

const sassSrc = './styles/**/*.scss';
const sassDest = './public/css';
const sassOptions = {
	outputStyle: global.dev ? 'nested' : 'compressed'
};
const autoprefixerOptions = {
	cascade: false
};

task('sass:clean', callback => {
	del(sassDest);
	callback();
});

task('sass:compile', () => src(sassSrc)
	.pipe(gulpSass(sassOptions).on('error', gulpSass.logError))
	.pipe(gulpAutoprefixer(autoprefixerOptions))
	.pipe(dest(sassDest))
	.pipe(global.browserSyncInstance.stream())
);

task('sass:watch', () => watch(sassSrc, series('sass:compile')));
