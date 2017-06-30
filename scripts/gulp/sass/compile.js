const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const config = require('../../../gulpconfig');

module.exports = {

	deps: ['sass:clean'],

	fn: function (gulp) {

		return gulp.src(config.sass.src)
			.pipe(sass(config.sass.options).on('error', sass.logError))
			.pipe(autoprefixer(config.sass.autoprefixer))
			.pipe(gulp.dest(config.sass.dest))
			.pipe(global.browserSyncInstance.stream());
	}
};
