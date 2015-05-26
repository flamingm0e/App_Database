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
    var status = {
      complete: $('input[name=_id]').prop('checked') ? true : false,
      stage: $('input[name=stage]:checked').val(),
      fix: $('input[name=fix]:checked').val()
    };
    console.log(status);
    // Set the checked property to the opposite of its current value
    //DB[path].update(this._id, {$set: {complete: ! this.complete}});
    // DB[path].update(this._id, {$set: status}, function(error) {
    //   if (error) {
    //     alert(error.reason);
    //   }
    // });
  },
});
