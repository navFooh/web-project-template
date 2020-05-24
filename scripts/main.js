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
		'gsap':            		'../node_modules/gsap/dist/gsap',
		// directories
		'model':                'app/model',
		'view':                 'app/view'
	}
});

require(['app/app-main'], function (App) {
	new App();
});
