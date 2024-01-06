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

Dish.prototype.setDescription = function (description) {
  this.description = description;
};
// Método para agregar ingredientes al plato
Dish.prototype.addIngredient = function (ingredient) {
  this.ingredients.push(ingredient);
};

// Método para establecer la imagen del plato
Dish.prototype.setImage = function (image) {
  this.image = image;
};
