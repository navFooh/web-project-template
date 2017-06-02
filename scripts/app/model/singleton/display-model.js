define([
	'backbone',
	'underscore'
], function (Backbone, _) {

	var DisplayModel = Backbone.Model.extend({

		defaults: {
			width: null,
			height: null,
			scrollX: null,
			scrollY: null
		},

		initialize: function () {
			this.onResize();
			this.onScroll();

			window.addEventListener('resize', this.onResize.bind(this));
			window.addEventListener('scroll', this.onScroll.bind(this));

			var debounce = 250;
			this.on('resize', _.debounce(_.partial(this.trigger, 'resizeStart'), debounce, true));
			this.on('resize', _.debounce(_.partial(this.trigger, 'resizeEnd'), debounce));
		},

		onResize: function () {
			this.set({
				width: window.innerWidth,
				height: window.innerHeight
			}).trigger('resize');
		},

		onScroll: function () {
			this.set({
				scrollX: window.scrollX || document.documentElement.scrollLeft,
				scrollY: window.scrollY || document.documentElement.scrollTop
			}).trigger('scroll');
		}
	});

	return new DisplayModel();
});
