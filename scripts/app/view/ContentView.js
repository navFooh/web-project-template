define(['templates/content'], function(template) {

	return Backbone.View.extend({

		initialize: function () {
			this.autoBind();
		},

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);
		}

	});
});