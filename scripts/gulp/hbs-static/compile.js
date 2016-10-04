const compileHbs = require('gulp-compile-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

module.exports = {

	fn: function (gulp, options) {

		return gulp.src(options.hbsStatic.src)
			.pipe(plumber())
			.pipe(compileHbs(options))
			.pipe(rename(options.hbsStatic.name))
			.pipe(gulp.dest(options.hbsStatic.dest))
			.pipe(options.browserSync.stream());
	}
};
