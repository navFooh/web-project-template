define([
	'backbone',
	'underscore'
], function (Backbone, _) {

	var App = function () {
		this.createViews.apply(this, arguments);
		this.createModels.apply(this, arguments);
		this.createRouters.apply(this, arguments);
		this.addListeners.apply(this, arguments);
		this.start.apply(this, arguments);
	};

	_.extend(App.prototype, Backbone.Events, {
		createViews: function () {},
		createModels: function () {},
		createRouters: function () {},
		addListeners: function () {},
		start: function () {}
	});

	App.extend = Backbone.Model.extend;

	return App;
});
