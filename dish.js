function Dish(name) {
  this.name = name;
  this.description = "";
  this.ingredients = [];
  this.image = "";

  this.toString = function () {
    return (
      "Dish: " +
      this.name +
      "\n" +
      "Description: " +
      this.description +
      "\n" +
      "Ingredients:\n" +
      this.ingredients.join("\n") +
      "\n" +
      "Image:" +
      this.image
    );
  };
}
Dish.prototype.getName = function () {
  return this.name;
};

Dish.prototype.setName = function (name) {
  this.name = name;
};

Dish.prototype.getDescription = function () {
  return this.description;
};

Dish.prototype.setDescription = function (description) {
  this.description = description;
};

Dish.prototype.getIngredients = function () {
  return this.ingredients;
};

Dish.prototype.getImage = function () {
  return this.image;
};

Dish.prototype.setImage = function (image) {
  this.image = image;
};

// Método para agregar ingredientes al plato
Dish.prototype.addIngredient = function (ingredient) {
  this.ingredients.push(ingredient);
};
