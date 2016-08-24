const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');

module.exports = {

	dep: ['hbs-runtime:clean'],

	fn: function(gulp, options) {

		return gulp.src(options.hbsRuntime.src)
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(options.hbsRuntime.dest));
	}
};
