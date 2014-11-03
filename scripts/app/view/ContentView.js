define(['templates/content'], function(template) {

	return Backbone.View.extend({

		displayModel: 'inject',
		$displayValues: null,

		initialize: function () {
			this.autoBind();
		},

		render: function($parent) {
			this.setElement(template(this.model.toJSON()));
			this.$el.appendTo($parent);

			this.$displayValues = this.$('.display-values');

			this.onChangeDisplayValues();

			this.listenTo(this.displayModel, 'change', this.onChangeDisplayValues);
		},

		onChangeDisplayValues: function() {
			var windowWidth = this.displayModel.get('windowWidth'),
				windowHeight = this.displayModel.get('windowHeight'),
				scrollTop = this.displayModel.get('scrollTop'),
				displayValues = '';
			displayValues += 'Window width: ' + windowWidth + '<br />';
			displayValues += 'Window height: ' + windowHeight + '<br />';
			displayValues += 'Window scroll: ' + scrollTop;
			this.$displayValues.html(displayValues);
		}

	});
});