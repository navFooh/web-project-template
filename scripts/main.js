require.config({

	paths: {
		// require.js
		'requireLib':           'vendor/requirejs/require',
		'text':                 'vendor/requirejs-plugins/lib/text',
		'json':                 'vendor/requirejs-plugins/src/json',
		// vendor
		'jquery':               'vendor/jquery/dist/jquery',
		'underscore':           'vendor/underscore/underscore',
		'backbone':             'vendor/backbone/backbone',
		'backbone-super':       'vendor/backbone-super/backbone-super/backbone-super',
		'handlebars.runtime':   'vendor/handlebars/handlebars.runtime',
		'TweenLite':            'vendor/greensock/src/uncompressed/TweenLite',
		'TweenMax':             'vendor/greensock/src/uncompressed/TweenMax',
		'TimelineLite':         'vendor/greensock/src/uncompressed/TimelineLite',
		'TimelineMax':          'vendor/greensock/src/uncompressed/TimelineMax',
		// directories
		'model':                'app/model',
		'view':                 'app/view',
		'templates':            '../templates/build'
	},

	shim: {
		// this makes sure TimelineMax does not include
		// TweenLite when already loading TweenMax
		'TimelineMax': { deps: ['TweenMax'] }
	}
});

require([
	// this will make sure that backbone.js, jQuery
	// and underscore.js are globally available
	'backbone-super'
], function() {

	require(['app/app'], function(app) {
		app.initialize();
	});
});