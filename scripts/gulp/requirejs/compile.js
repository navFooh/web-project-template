const rename = require('gulp-rename');
const requirejsOptimize = require('gulp-requirejs-optimize');

module.exports = {

	dep: ['requirejs:clean', 'hbs-runtime:compile'],

	fn: function(gulp, options) {

		return gulp.src(options.requirejs.src)
			.pipe(requirejsOptimize(options.requirejs.options))
			.pipe(rename(options.requirejs.name))
			.pipe(gulp.dest(options.requirejs.dest));
	}
};
