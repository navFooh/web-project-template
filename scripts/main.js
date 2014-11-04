require.config({

	paths: {
		// vendor
		'jquery':               'vendor/jquery/dist/jquery',
		'underscore':           'vendor/underscore/underscore',
		'backbone':             'vendor/backbone/backbone',
		'backbone-super':       'vendor/backbone-super/backbone-super/backbone-super',
		'handlebars.runtime':   'vendor/handlebars/handlebars.runtime',
		'injector':             'vendor/injector.js/injector-js',
		'tweenmax':             'vendor/greensock/src/uncompressed/TweenMax',
		// plugins
		'backbone-autoBind':    'plugins/backbone-autoBind',
		'backbone-injector':    'plugins/backbone-injector',
		// directories
		'templates':            'build/templates'
	}
});

require([
	// vendor
	'jquery',
	'underscore',
	'backbone',
	'backbone-super',
	'handlebars.runtime',
	'injector',
	'tweenmax',
	// plugins
	'backbone-autoBind',
	'backbone-injector'
], function() {

	require(['app/app'], function(app) {
		app.initialize();
	});
});