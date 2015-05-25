String.prototype.capFirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.lcase = function(){
  return this.toLowerCase();
};
