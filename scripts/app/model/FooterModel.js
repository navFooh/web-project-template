define(function () {

	return Backbone.Model.extend({

		defaults: {
			text: "Footer goes here"
		},

		initialize: function () {
			this.autoBind();
		}

	});
});