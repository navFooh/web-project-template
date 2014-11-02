define([
	// models
	'app/model/HeaderModel',
	'app/model/ContentModel',
	'app/model/FooterModel',
	// views
	'app/view/HeaderView',
	'app/view/ContentView',
	'app/view/FooterView'
], function (
	// models
	HeaderModel,
	ContentModel,
	FooterModel,
	// views
	HeaderView,
	ContentView,
	FooterView
	) {

	return new function() {

		this.initialize = function() {

			var injectorInstance = new injector.Injector(),
				// models
				headerModel = new HeaderModel(),
				contentModel = new ContentModel(),
				footerModel = new FooterModel(),
				// views
				headerView = new HeaderView({ injector: injectorInstance, model: headerModel }),
				contentView = new ContentView({ injector: injectorInstance, model: contentModel }),
				footerView = new FooterView({ injector: injectorInstance, model: footerModel });

			headerView.render('body');
			contentView.render('body');
			footerView.render('body');
		}
	};

});