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
		'handlebars':           'vendor/handlebars/handlebars.runtime',
		'TweenLite':            'vendor/greensock/src/uncompressed/TweenLite',
		'TweenMax':             'vendor/greensock/src/uncompressed/TweenMax',
		'TimelineLite':         'vendor/greensock/src/uncompressed/TimelineLite',
		'TimelineMax':          'vendor/greensock/src/uncompressed/TimelineMax',
		// directories
		'model':                'app/model',
		'view':                 'app/view'
	}
});

require(['app/app-main'], function (App) {
	new App();
});
