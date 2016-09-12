const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');

module.exports = {

	dep: ['hbs-runtime:clean'],

	fn: function(gulp, options) {

		return gulp.src(options.hbsRuntime.src)
			.pipe(plumber())
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(options.hbsRuntime.dest));
	}
};
