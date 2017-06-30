const _ = require('underscore');
const watch = require('gulp-watch');
const config = require('../../../gulpconfig');

module.exports = {

	fn: function (gulp) {

		return watch(config.sass.src, {
			read: false
		}, _.debounce(function () {
			gulp.start('sass:compile');
		}, 100));
	}
};
