// Template.tableRow.events({
//   path: function(){
//     return Iron.controller().params.category.capFirst();
//   },
//   checked: function(value){
//     return (value == true ? 'checked' : '');
//   },
//   'click .check': function(){
//   }
// })
//
// UI.registerHelper('checkedIf', function(val) {
//   return val ? 'checked' : '';
// });

Template.tableRow.events({
  "click .toggle-checked": function () {
    var path = Iron.controller().params.category.capFirst();
    // Set the checked property to the opposite of its current value
    console.log(path +" "+ this._id);
    //DB[path].update(this._id, {$set: {checked: ! this.checked}});
  },
});
