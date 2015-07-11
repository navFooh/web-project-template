define([
	'view/HeaderView',
	'view/ContentView',
	'view/FooterView'
], function (HeaderView, ContentView, FooterView) {

	return new function() {

		this.initialize = function() {

			new HeaderView().render('body');
			new ContentView().render('body');
			new FooterView().render('body');
		}
	};
});
