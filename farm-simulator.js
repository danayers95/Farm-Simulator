function Item(name, type) {
  this.name = name;
  this.id = genId();
  this.type = type;
}
Item.prototype.getName = function() {
  return this.name;
};
