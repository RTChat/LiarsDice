
var app = GameFrameRTC.app;

app.WelcomePanel = Backbone.View.extend({
	template: '<h2>Welcome To LiarsDice!</h2>\
		built using <a href="https://thann.github.com/GameFrameRTC">GameFrameRTC</a>!\
		<br><br>\
		<a class="btn btn-default" href="#global-chat">Go To global chat</a>\
	',
	render: function(){
		this.$el.html(this.template);
		return this;
	}
})
