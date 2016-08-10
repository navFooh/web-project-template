define([
	'app/AppBase',
	'view/Header',
	'view/Content',
	'view/Footer'
], function (AppBase, Header, Content, Footer) {

	return AppBase.extend({

		createViews: function() {
			new Header().render('body');
			new Content().render('body');
			new Footer().render('body');
		}
	});
});
