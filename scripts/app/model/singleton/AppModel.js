define([
	'json!../../../../metadata.json'
], function (metadata) {

	var AppModel = Backbone.Model.extend({

		defaults: {
			metadata: metadata,
			dev: $('body').hasClass('dev')
		},

		initialize: function () {
			this.autoBind();
		}
	});

	return new AppModel();
});