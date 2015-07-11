define([
	'templates/content',
	'model/ContentModel',
	'model/singleton/DisplayModel'
], function(template, ContentModel, DisplayModel) {

	return Backbone.View.extend({

		model: new ContentModel(),

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);

			this.$windowWidth = this.$('.window-width');
			this.$windowHeight = this.$('.window-height');
			this.$windowScroll = this.$('.window-scroll');

			this.onChangeDisplayValues();
			this.listenTo(DisplayModel, 'change', this.onChangeDisplayValues);
		},

		onChangeDisplayValues: function() {
			this.$windowWidth.html(DisplayModel.get('width'));
			this.$windowHeight.html(DisplayModel.get('height'));
			this.$windowScroll.html(DisplayModel.get('scrollTop'));
		}
	});
});
