Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function () {
	this.route('home', {path: '/', name: 'home', controller: 'HomeCtrl'});
	this.route('addApp', {name: 'addApp', controller: 'AddAppController'});
	this.route('categories', {name: 'ListCats', controller: 'ListCatsCtrl'});
	this.route('/:category', {name: 'dashboard', controller: 'CatCtrl'});
});

ListCatsCtrl = RouteController.extend({
	action: function () {
    this.render('ListCats', {
			data: function () {
				return { categories: DB.Categories.find() };
			}
		});
	}
});

CatCtrl = RouteController.extend({
	subscriptions: function () {
		return Meteor.subscribe('singleCat', this.params.category);
	},
	action: function () {
		this.render('dashboard');
	}
});

AddAppController = RouteController.extend({
	action: function() {
		this.render('addApp', {
			data: function () {
				return { categories: DB.Categories.find({}, {sort: {category: 1}})}
			}
		})
	}
});

HomeCtrl = RouteController.extend({
  action: function() {
  	this.render('home', {
			data: function () {
				return { categories: DB.Categories.find({}, {sort: {category: 1}})}
			}
  	});
  }
});
