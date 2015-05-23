Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/addApp', {name: 'addApp', controller: 'AddAppController'});

AddAppController = RouteController.extend({
	action: function() {
		this.render('addApp', {
			data: function () {
				return Categories.find({}, {sort: {category: 1 }});
			}
		})
	}
});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});
