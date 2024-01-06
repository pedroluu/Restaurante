function Menu(name) {
  this.name = name;
  this.description = "";

  this.toString = function () {
    return (
      "Category(" + this.name + ") \n " + "description: " + this.description
    );
  };
}

Menu.prototype.getName = function () {
  return this.name;
};

Menu.prototype.setName = function (name) {
  this.name = name;
};

Menu.prototype.getDescription = function () {
  return this.description;
};
Menu.prototype.setDescription = function (description) {
  this.description = description;
};
