const compileHbs = require('gulp-compile-handlebars');
const data = require('gulp-data');
const rename = require('gulp-rename');

module.exports = {

	fn: function (gulp, options) {

		return gulp.src(options.paths.hbsStatic.src)
			.pipe(data(options.pkg))
			.pipe(data(options.meta))
			.pipe(compileHbs({ dev: options.dev }))
			.pipe(rename(options.paths.hbsStatic.name))
			.pipe(gulp.dest(options.paths.hbsStatic.dest));
	}
};
