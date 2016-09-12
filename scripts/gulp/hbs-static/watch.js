const compileHbs = require('gulp-compile-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

module.exports = {

	dep: ['hbs-static:compile'],

	fn: function (gulp, options) {

		return watch(options.hbsStatic.watch)
			.pipe(plumber())
			.pipe(compileHbs(options))
			.pipe(rename(options.hbsStatic.name))
			.pipe(gulp.dest(options.hbsStatic.dest));
	}
};
