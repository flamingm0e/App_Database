Meteor.publish('categories', function() {
  return Categories.find({}, {sort: {category: 1 }});
});

// Meteor.publish('browsers', function () {
//   return Browsers.find({}, {sort: {appName: 1 }});
// });
//
// Meteor.publish('games', function () {
//   return Games.find({}, {sort: {appName: 1 }});
// });

Meteor.publish('singleCat', function (cat) {
 check(cat, String);
 if(cat === 'Browsers')
 {
   var data = Browsers.find();
   if (data) {
     return data;
   }
 }
 if(cat === 'Games')
 {
   var data = Games.find();
   if (data) {
     return data;
   }
 }
 if(cat === 'categories')
 {
   var data = Applications.find();
   if (data) {
     return data;
   }
 }

 this.ready();
});
