define(['backbone'], function(Backbone) {
	'use strict';

	Backbone.View = (function(View) {

		return View.extend({

			injector: 'inject',

			constructor: function(options) {
				if (options.injector) {
					options.injector.injectInto(this);
				}
				View.apply(this, arguments);
			}

		});

	})(Backbone.View);

	return {};
});