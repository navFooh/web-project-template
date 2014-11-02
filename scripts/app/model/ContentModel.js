define(function () {

	return Backbone.Model.extend({

		defaults: {
			text: "Content goes here"
		},

		initialize: function () {
			this.autoBind();
		}

	});
});