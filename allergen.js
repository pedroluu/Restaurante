function Allergen(name) {
  this.name = name;
  this.description = "";

  this.toString = function () {
    return (
      "Category(" + this.name + ") \n " + "description: " + this.description
    );
  };
}

Allergen.prototype.getName = function () {
  return this.name;
};

Allergen.prototype.setName = function (name) {
  this.name = name;
};

Allergen.prototype.getDescription = function () {
  return this.description;
};
Allergen.prototype.setDescription = function (description) {
  this.description = description;
};
