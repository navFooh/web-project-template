require.config({

	paths: {
		// vendor
		'jquery':               'vendor/jquery/dist/jquery',
		'injector':             'vendor/injector.js/injector-js',
		'underscore':           'vendor/underscore/underscore',
		'backbone':             'vendor/backbone/backbone',
		'backbone-super':       'vendor/backbone-super/backbone-super/backbone-super',
		'handlebars.runtime':   'vendor/handlebars/handlebars.runtime',
		'tweenmax':             'vendor/greensock/src/uncompressed/TweenMax',
		// plugins
		'backboneAutoBind':     'plugins/backboneAutoBind',
		'backboneInjector':     'plugins/backboneInjector',
		// directories
		'templates':            'build/templates'
	}
});

require([
	// vendor
	'jquery',
	'injector',
	'underscore',
	'backbone',
	'backbone-super',
	'tweenmax',
	// plugins
	'backboneInjector',
	'backboneAutoBind'
], function() {

	require(['app/app'], function(app) {
		app.initialize();
	});
});