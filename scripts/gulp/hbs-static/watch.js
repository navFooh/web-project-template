const _ = require('underscore');
const watch = require('gulp-watch');

module.exports = {

	fn: function(gulp, options) {

		return watch(options.hbsStatic.watch, {
			ignoreInitial: false,
			read: false
		}, _.debounce(function() {
			gulp.start('hbs-static:compile');
		}, 100));
	}
};
