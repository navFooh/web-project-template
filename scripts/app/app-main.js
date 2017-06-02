define([
	'app/app-base',
	'view/example'
], function (AppBase, Example) {

	return AppBase.extend({

		createViews: function () {
			new Example().render('body');
		}
	});
});
