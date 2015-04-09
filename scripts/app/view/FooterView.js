define([
	'model/FooterModel',
	'templates/footer'
], function(FooterModel, template) {

	return Backbone.View.extend({

		model: new FooterModel(),

		initialize: function () {

		},

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);
		}
	});
});