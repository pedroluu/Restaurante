function Category(name) {
  this.name = name;
  this.description = "";

  this.toString = function () {
    return (
      "Category(" + this.name + ") \n " + "description: " + this.description
    );
  };
}

Category.prototype.getName = function () {
  return this.name;
};

Category.prototype.setName = function (name) {
  this.name = name;
};

Category.prototype.getDescription = function () {
  return this.description;
};
Category.prototype.setDescription = function (description) {
  this.description = description;
};
