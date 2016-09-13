define([
	'app/AppBase',
	'view/Content'
], function (AppBase, Content) {

	return AppBase.extend({

		createViews: function() {
			new Content().render('body');
		}
	});
});
