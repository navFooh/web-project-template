define([
	// models
	'app/model/DisplayModel',
	'app/model/HeaderModel',
	'app/model/ContentModel',
	'app/model/FooterModel',
	// views
	'app/view/HeaderView',
	'app/view/ContentView',
	'app/view/FooterView'
], function (
	// models
	DisplayModel,
	HeaderModel,
	ContentModel,
	FooterModel,
	// views
	HeaderView,
	ContentView,
	FooterView
	) {

	return new function() {

		var injectorInstance = new injector.Injector();

		this.initialize = function() {

			injectorInstance.map('displayModel').toSingleton(DisplayModel);

			var headerModel = new HeaderModel(),
				contentModel = new ContentModel(),
				footerModel = new FooterModel(),

				headerView = new HeaderView({ injector: injectorInstance, model: headerModel }),
				contentView = new ContentView({ injector: injectorInstance, model: contentModel }),
				footerView = new FooterView({ injector: injectorInstance, model: footerModel });

			headerView.render('body');
			contentView.render('body');
			footerView.render('body');
		}

	};
});