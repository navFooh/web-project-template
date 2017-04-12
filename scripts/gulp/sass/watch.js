const _ = require('underscore');
const watch = require('gulp-watch');

module.exports = {

	fn: function (gulp, options) {

		return watch(options.sass.src, {
			read: false
		}, _.debounce(function () {
			gulp.start('sass:compile');
		}, 100));
	}
};
