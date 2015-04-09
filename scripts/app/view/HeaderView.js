define([
	'model/HeaderModel',
	'templates/header'
], function(HeaderModel, template) {

	return Backbone.View.extend({

		model: new HeaderModel(),

		initialize: function () {

		},

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);
		}
	});
});