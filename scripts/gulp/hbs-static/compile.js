const compileHbs = require('gulp-compile-handlebars');
const data = require('gulp-data');
const rename = require('gulp-rename');

module.exports = {

	fn: function (gulp, options) {

		return gulp.src(options.hbsStatic.src)
			.pipe(data(options.pkg))
			.pipe(data(options.meta))
			.pipe(compileHbs({ dev: options.dev }))
			.pipe(rename(options.hbsStatic.name))
			.pipe(gulp.dest(options.hbsStatic.dest));
	}
};
