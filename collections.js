DB = {};
DB.Categories = new Mongo.Collection('categories');
DB.Browsers = new Mongo.Collection('browsers');
DB.Camera_Photo = new Mongo.Collection('camera_photo');
DB.Carrier = new Mongo.Collection('carrier');
DB.Cloud_Storage = new Mongo.Collection('cloud_storage');
DB.Ebooks_Magazines = new Mongo.Collection('ebooks_magazines');
DB.Finance = new Mongo.Collection('finance');
DB.Flashlights = new Mongo.Collection('flashlights');
DB.Games = new Mongo.Collection('games');
DB.Google = new Mongo.Collection('google');
DB.Health = new Mongo.Collection('health');
DB.Keyboards = new Mongo.Collection('keyboards');
DB.Launchers = new Mongo.Collection('launchers');
DB.Lifestyle = new Mongo.Collection('lifestyle');
DB.Media = new Mongo.Collection('media');
DB.Navigation = new Mongo.Collection('navigation');
DB.News = new Mongo.Collection('news');
DB.Personalization = new Mongo.Collection('personalization');
DB.Shopping = new Mongo.Collection('shopping');
DB.Social_Media = new Mongo.Collection('social_media');
DB.Utilities = new Mongo.Collection('utilities');
DB.Weather = new Mongo.Collection('weather');

// A simple solution is to create a global variable and attach all collections to it when they're defined. As in:
// Collections = {};
// Collections.posts = new Meteor.Collection("posts");
//
// then something like:
//
// App.doSomethingWithCollection = function (collection) {
//   allDocs = Collections[collection].find({});
