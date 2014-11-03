define(function () {

	return Backbone.Model.extend({

		defaults: {
			windowWidth: 0,
			windowHeight: 0,
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
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			});
		},

		onScroll: function () {
			this.set({
				scrollTop: $(window).scrollTop()
			});
		}

	});
});