const _ = require('underscore');
const watch = require('gulp-watch');
const config = require('../../../gulpconfig');

module.exports = {

	fn: function (gulp) {

		return watch(config.hbsStatic.watch, {
			read: false
		}, _.debounce(function () {
			gulp.start('hbs-static:compile');
		}, 100));
	}
};
