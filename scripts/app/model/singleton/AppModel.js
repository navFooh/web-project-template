define([
	'json!../../../../metadata.json'
], function (metadata) {

	var AppModel = Backbone.Model.extend({

		defaults: {
			url: metadata.url,
			title: metadata.title,
			description: metadata.description,
			author: metadata.author,
			dev: $('body').hasClass('dev')
		},

		initialize: function () {
			this.autoBind();
		}
	});

	return new AppModel();
});