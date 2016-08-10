define([
	'backbone',
	'templates/footer'
], function(Backbone, template) {

	return Backbone.View.extend({

		render: function($parent) {
			this.setElement(template());
			this.$el.appendTo($parent);
		}
	});
});
