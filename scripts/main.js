require.config({

	paths: {
		// require.js
		'require-lib':          '../node_modules/requirejs/require',
		'text':                 '../node_modules/requirejs-plugins/lib/text',
		'json':                 '../node_modules/requirejs-plugins/src/json',
		// vendor
		'jquery':               '../node_modules/jquery/dist/jquery.slim',
		'underscore':           '../node_modules/underscore/underscore',
		'backbone':             '../node_modules/backbone/backbone',
		'handlebars':           '../node_modules/handlebars/dist/handlebars.runtime',
		'TweenLite':            '../node_modules/gsap/src/uncompressed/TweenLite',
		'TweenMax':             '../node_modules/gsap/src/uncompressed/TweenMax',
		'TimelineLite':         '../node_modules/gsap/src/uncompressed/TimelineLite',
		'TimelineMax':          '../node_modules/gsap/src/uncompressed/TimelineMax',
		// directories
		'model':                'app/model',
		'view':                 'app/view'
	}
});

require(['app/app-main'], function (App) {
	new App();
});
