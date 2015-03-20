define(function () {

	var DisplayModel = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			scrollTop: 0
		},

		initialize: function () {
			this.autoBind();

			this.onResize();
			this.onScroll();

			$(window).on('resize', this.onResize);
			$(window).on('scroll', this.onScroll);
		},

		onResize: function () {
			this.set({
				width: window.innerWidth,
				height: window.innerHeight
			});
		},

		onScroll: function () {
			this.set({
				scrollTop: $(window).scrollTop()
			});
		}
	});

	return new DisplayModel();
});