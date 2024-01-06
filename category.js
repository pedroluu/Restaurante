function Category(name) {
  this.name = name;
  this.description = "";

  this.toString = function () {
    return (
      "Category(" + this.name + ") \n " + "description: " + this.description
    );
  };
}

Category.prototype.setDescription = function (description) {
  this.description = description;
};
