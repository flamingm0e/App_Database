//function getCat(cat){
//  var category = cat.toLowerCase();
//  switch (cat) {
//    case "browsers":
//      return browsers.find({}, {sort: {appName: 1 }});
//      break;
//    case "games":
//      return games.find({}, {sort: {appName: 1 }});
//      break;
//    default:
//      return null;
//  }
//}

Template.tableWrapper.helpers({
  pageTitle: function(){
    var path = Iron.controller().params.category;
    return path.capFirst();
  }
});


Template.dashboard.helpers({
  pageTitle: function() {
    return Iron.controller().params.category.capFirst();
  },
  applications: function () {
    var path = Iron.controller().params.category;
    //return path.find();
    switch (path){
     case "Browsers":
        return Browsers.find();
     break;
     case "Games":
       return Games.find();
     break;
     case "categories":
       return Applications.find();
     break;
    }
  }
});

//Template.dashboard.helpers({
//  category: function () {
//    return Iron.controller().data();
//  }
//});
//Template.tableRow.helpers({
//  layout: function () {
//    return {
//      class: ""
//    }
//  }
//})
