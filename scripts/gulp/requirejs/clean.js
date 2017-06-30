const del = require('del');
const config = require('../../../gulpconfig');

module.exports = {

	fn: function () {
		return del(config.requirejs.dest);
	}
};
