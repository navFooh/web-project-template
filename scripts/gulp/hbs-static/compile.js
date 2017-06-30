const compileHbs = require('gulp-compile-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const config = require('../../../gulpconfig');

module.exports = {

	fn: function (gulp) {

		return gulp.src(config.hbsStatic.src)
			.pipe(plumber())
			.pipe(compileHbs(config))
			.pipe(rename(config.hbsStatic.name))
			.pipe(gulp.dest(config.hbsStatic.dest))
			.pipe(global.browserSyncInstance.stream());
	}
};
