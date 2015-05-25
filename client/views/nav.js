getCats = function(){
  return Categories.find();
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
