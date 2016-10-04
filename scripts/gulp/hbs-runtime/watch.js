const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');

module.exports = {

	fn: function(gulp, options) {

		return watch(options.hbsRuntime.src, {
				events: ['add', 'change']
			})
			.pipe(plumber())
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(options.hbsRuntime.dest));
	}
};
