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
    // var path = Iron.controller().params.category.capFirst();
    return Iron.controller().params.category.capFirst();
  }
});


Template.dashboard.helpers({
  pageTitle: function() {
    return Iron.controller().params.category.capFirst();
  },
  applications: function () {
    var path = Iron.controller().params.category.capFirst();
    return DB[path].find();
    // switch (path){
    //  case "Browsers":
    //     return DB[path].find();
    //  break;
    // }
  }
});
