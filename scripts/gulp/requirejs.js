const { src, dest, task } = require('gulp');
const gulpRequirejsOptimize = require('gulp-requirejs-optimize');
const del = require('del');

const requirejsSrc = './scripts/main.js';
const requirejsDest = './public/js';
const requirejsOptions = {
	mainConfigFile: 'scripts/main.js',
	out: 'main.min.js',
	name: 'main',
	include: ['require-lib'],
	stubModules: ['json', 'text'],
	optimize: 'uglify',
	wrapShim: true
};

task('requirejs:clean', callback => {
	del(requirejsDest);
	callback();
});

task('requirejs:compile', () => src(requirejsSrc)
	.pipe(gulpRequirejsOptimize(requirejsOptions))
	.pipe(dest(requirejsDest))
);
