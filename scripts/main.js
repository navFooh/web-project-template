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
		'backboneInjector':     'plugins/backboneInjector',
		'backboneAutoBind':     'plugins/backboneAutoBind',
		// directories
		'templates':            'build/templates'
	},

	deps: [
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
	]
});

require(['app/app'], function(App) {
	App.initialize();
});