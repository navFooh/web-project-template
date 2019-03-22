const { registry, parallel, series, task } = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const argv = require('yargs').argv;

global.dev = !argv.dist;
global.browserSyncInstance = browserSync.create();

registry(new HubRegistry(['scripts/gulp/*.js']));

task('serve', callback => {
	global.browserSyncInstance.init({
		files: 'scripts/app/**/*.js',
		server: true,
		startPath: 'public'
	});
	callback();
});

task('clean', parallel('hbs-runtime:clean', 'requirejs:clean', 'sass:clean'));
task('watch', parallel('hbs-runtime:watch', 'hbs-static:watch', 'sass:watch'));
task('compile:dev', parallel('hbs-runtime:compile', 'hbs-static:compile', 'sass:compile'));
task('compile:dist', parallel(series('hbs-runtime:compile', 'requirejs:compile'), 'hbs-static:compile', 'sass:compile'));

exports.default = global.dev
	? series('clean', 'compile:dev', 'serve', 'watch')
	: series('clean', 'compile:dist');
