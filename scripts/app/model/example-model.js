define(['backbone'], function (Backbone) {

	return Backbone.Model.extend({

		defaults: {
			title: 'This is an Example',
			content: 'The example.js view renders the text from example-model.js into example.hbs'
		}
	});
});
