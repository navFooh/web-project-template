const del = require('del');

module.exports = {

	fn: function(gulp, options) {
		return del(options.paths.hbsRuntime.dest);
	}
};
