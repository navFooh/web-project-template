define([
	'app/AppBase',
	'view/Example'
], function (AppBase, Example) {

	return AppBase.extend({

		createViews: function() {
			new Example().render('#content');
		}
	});
});
