function Menu(name) {
  this.name = name;
  this.description = "";

  this.toString = function () {
    return (
      "Category(" + this.name + ") \n " + "description: " + this.description
    );
  };
}

Menu.prototype.setDescription = function (description) {
  this.description = description;
};
