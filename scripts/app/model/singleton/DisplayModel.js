define(['backbone'], function (Backbone) {

	var $window = $(window),
		DisplayModel = Backbone.Model.extend({

			defaults: {
				width: 0,
				height: 0,
				scrollTop: 0
			},

			initialize: function () {
				_.bindAll(this, 'onResize', 'onScroll');

				this.onResize();
				this.onScroll();

				$window.on('resize', this.onResize);
				$window.on('scroll', this.onScroll);

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
					scrollTop: $window.scrollTop()
				});
			}
		});

	return new DisplayModel();
});
