const compileHbs = require('gulp-compile-handlebars');
const data = require('gulp-data');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

module.exports = {

	dep: ['hbs-static:compile'],

	fn: function (gulp, options) {

		return watch(options.hbsStatic.watch)
			.pipe(data(options.pkg))
			.pipe(data(options.meta))
			.pipe(compileHbs({ dev: options.dev }))
			.pipe(rename(options.hbsStatic.name))
			.pipe(gulp.dest(options.hbsStatic.dest));
	}
};
