const changed = require('gulp-changed');
const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const watch = require('gulp-watch');

module.exports = {

	dep: ['hbs-runtime:compile'],

	fn: function(gulp, options) {

		return watch(options.paths.hbsRuntime.src)
			.pipe(changed(options.paths.hbsRuntime.dest, { extension: '.js' }))
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(options.paths.hbsRuntime.dest));
	}
};
