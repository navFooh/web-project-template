define(function () {

	return Backbone.Model.extend({

		defaults: {
			text: "Header goes here"
		},

		initialize: function () {
			this.autoBind();
		}
	});
});