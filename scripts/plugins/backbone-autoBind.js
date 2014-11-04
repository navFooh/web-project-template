define(['backbone', 'underscore'], function(Backbone, _) {
	'use strict';

	var autoBind = function() {
		var self = this;
		var funcs = _.functions(this.constructor.prototype);
		var protoFuncs = ['autoBind', 'constructor'].concat(
			_.functions(Backbone.Collection.prototype),
			_.functions(Backbone.Model.prototype),
			_.functions(Backbone.View.prototype),
			_.functions(Backbone.Router.prototype));

		protoFuncs = _.without(protoFuncs, 'render');
		_.each(funcs, function(f) {
			if (f.charAt(0) !== '_' && _.indexOf(protoFuncs, f) === -1) {
				self[f] = _.bind(self[f], self);
			}
		});
	};

	_.extend(Backbone.Collection.prototype, { autoBind: autoBind });
	_.extend(Backbone.Model.prototype, { autoBind: autoBind });
	_.extend(Backbone.View.prototype, { autoBind: autoBind });
	_.extend(Backbone.Router.prototype, { autoBind: autoBind });

	return {};
});