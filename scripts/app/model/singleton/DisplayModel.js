define(function () {

	var debounce = 250,
		DisplayModel = Backbone.Model.extend({

			defaults: {
				width: 0,
				height: 0,
				scrollTop: 0
			},

			initialize: function () {
				_.bindAll(this, 'onScroll', 'onResize');

				this.onScroll();
				this.onResize();

				$(window).on('scroll', this.onScroll);
				$(window).on('resize', this.onResize);
				this.on('resize', this.onResizeStart);
				this.on('resize', this.onResizeEnd);
			},

			onScroll: function () {
				this.set({
					scrollTop: $(window).scrollTop()
				});
			},

			onResize: function () {
				this.set({
					width: window.innerWidth,
					height: window.innerHeight
				}).trigger('resize');
			},

			onResizeStart: _.debounce(function() {
				this.trigger('resizeStart');
			}, debounce, true),

			onResizeEnd: _.debounce(function() {
				this.trigger('resizeEnd');
			}, debounce)
		});

	return new DisplayModel();
});
