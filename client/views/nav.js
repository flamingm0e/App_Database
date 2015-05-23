getCats = function(){
  return Categories.find({}, {sort: {category: 1 }});
};

Template.nav.helpers({
  categories: function () {
    return getCats();
  }
});

Template.sidenav.helpers({
  categories: function(){
    return getCats();
  }
});

Template.addApp.helpers({
  categories: function(){
    return getCats();
  }
});
