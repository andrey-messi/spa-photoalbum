define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({tagName:"div id='photoDiv'",template:t.template(e("#photo-template").html()),render:function(){var n=this.model.toJSON();n.keywords=n.keywords.split(",");var r=t.template(e("#tooltip-item-template").html());return n.html=r({title:n.title,description:n.description}),this.$el.html(this.template(n)),this}});return r});