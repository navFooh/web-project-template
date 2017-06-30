const rename = require('gulp-rename');
const requirejsOptimize = require('gulp-requirejs-optimize');
const config = require('../../../gulpconfig');

module.exports = {

	deps: ['requirejs:clean', 'hbs-runtime:compile'],

	fn: function (gulp) {

		return gulp.src(config.requirejs.src)
			.pipe(requirejsOptimize(config.requirejs.options))
			.pipe(rename(config.requirejs.name))
			.pipe(gulp.dest(config.requirejs.dest));
	}
};
