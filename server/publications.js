Meteor.publish('categories', function() {
  return DB.Categories.find({}, {sort: {category: 1 }});
});

Meteor.publish('singleCat', function (cat) {
 check(cat, String);
 // if(cat === 'Browsers')
 // {
 //   var data = DB.Browsers.find({}, {sort: {appName: 1 }});
 //   if (data) {
 //     return data;
 //   }
 // }
 // options for handling cases
 // switch (cat) {
 //   case "Browsers":
 //   case "browsers":
 //     return DB.Browsers.find({}, {sort: {appName: 1 }});
 //   break;
 //   default:
 //
 // }
 var data = DB[cat].find({}, {sort: {appName: 1 }});
 if (data) {
   return data;
 }
 this.ready();
});
