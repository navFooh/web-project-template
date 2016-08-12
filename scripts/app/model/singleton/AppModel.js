define([
	'backbone',
	'json!../../../../metadata.json'
], function (Backbone, metadata) {

	var AppModel = Backbone.Model.extend({

		defaults: {
			metadata: metadata,
			dev: $('body').data('dev')
		}
	});

	return new AppModel();
});
