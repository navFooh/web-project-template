require.config({

	paths: {
		// require.js
		'require-lib':          'vendor/requirejs/require',
		'text':                 'vendor/requirejs-plugins/lib/text',
		'json':                 'vendor/requirejs-plugins/src/json',
		// vendor
		'jquery':               'vendor/jquery/dist/jquery',
		'underscore':           'vendor/underscore/underscore',
		'backbone':             'vendor/backbone/backbone',
		'handlebars':           'vendor/handlebars/handlebars.runtime',
		'TweenLite':            'vendor/gsap/src/uncompressed/TweenLite',
		'TweenMax':             'vendor/gsap/src/uncompressed/TweenMax',
		'TimelineLite':         'vendor/gsap/src/uncompressed/TimelineLite',
		'TimelineMax':          'vendor/gsap/src/uncompressed/TimelineMax',
		// directories
		'model':                'app/model',
		'view':                 'app/view'
	}
});

require(['app/app-main'], function (App) {
	new App();
});
