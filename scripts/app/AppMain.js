define([
	'app/AppBase',
	'view/Header',
	'view/Content'
], function (AppBase, Header, Content) {

	return AppBase.extend({

		createViews: function() {
			new Header().render('body');
			new Content().render('body');
		}
	});
});
