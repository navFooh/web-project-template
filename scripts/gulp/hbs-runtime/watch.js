const defineModule = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const config = require('../../../gulpconfig');

module.exports = {

	fn: function (gulp) {

		return watch(config.hbsRuntime.src, {
				base: config.hbsRuntime.base,
				events: ['add', 'change']
			})
			.pipe(plumber())
			.pipe(handlebars({ handlebars: require('handlebars') }))
			.pipe(defineModule('amd'))
			.pipe(gulp.dest(config.hbsRuntime.dest))
			.pipe(global.browserSyncInstance.stream());
	}
};
