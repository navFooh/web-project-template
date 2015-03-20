define([
	'model/singleton/DisplayModel',
	'model/ContentModel',
	'templates/content'
], function(DisplayModel, ContentModel, template) {

	return Backbone.View.extend({

		model: new ContentModel(),

		$displayValues: null,

		initialize: function () {
			this.autoBind();
		},

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);

			this.$displayValues = this.$('.display-values');

			this.onChangeDisplayValues();

			this.listenTo(DisplayModel, 'change', this.onChangeDisplayValues);
		},

		onChangeDisplayValues: function() {
			var windowWidth = DisplayModel.get('width'),
				windowHeight = DisplayModel.get('height'),
				scrollTop = DisplayModel.get('scrollTop'),
				displayValues = '';
			displayValues += 'Window width: ' + windowWidth + '<br />';
			displayValues += 'Window height: ' + windowHeight + '<br />';
			displayValues += 'Window scroll: ' + scrollTop;
			this.$displayValues.html(displayValues);
		}
	});
});