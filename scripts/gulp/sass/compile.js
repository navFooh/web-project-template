const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

module.exports = {

	dep: ['sass:clean'],

	fn: function(gulp, options) {

		return gulp.src(options.sass.src)
			.pipe(sass(options.sass.options).on('error', sass.logError))
			.pipe(autoprefixer(options.sass.autoprefixer))
			.pipe(gulp.dest(options.sass.dest));
	}
};
