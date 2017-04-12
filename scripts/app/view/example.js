define([
	'backbone',
	'templates/example',
	'model/example-model',
	'model/singleton/display-model'
], function (Backbone, template, ExampleModel, DisplayModel) {

	return Backbone.View.extend({

		initialize: function () {
			this.model = new ExampleModel();
		},

		render: function ($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);

			this.$windowWidth = this.$('.window-width');
			this.$windowHeight = this.$('.window-height');

			this.onResize();
			this.listenTo(DisplayModel, 'resize', this.onResize);
		},

		onResize: function () {
			this.$windowWidth.html(DisplayModel.get('width'));
			this.$windowHeight.html(DisplayModel.get('height'));
		}
	});
});
