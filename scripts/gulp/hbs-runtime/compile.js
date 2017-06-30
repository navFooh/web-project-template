const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const config = require('../../../gulpconfig');

module.exports = {

	deps: ['hbs-runtime:clean'],

	fn: function (gulp) {

		return gulp.src(config.hbsRuntime.src)
			.pipe(plumber())
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(config.hbsRuntime.dest));
	}
};
