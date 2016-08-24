const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

module.exports = {

	dep: ['sass:compile'],

	fn: function(gulp, options) {

		return watch(options.sass.src)
			.pipe(sass(options.sass.options).on('error', sass.logError))
			.pipe(autoprefixer(options.sass.autoprefixer))
			.pipe(gulp.dest(options.sass.dest));
	}
};
