function CategoryError(message) {
  this.message = message;
  this.name = "CategoryException";
}
CategoryError.prototype = Object.create(Error.prototype);
CategoryError.prototype.constructor = CategoryError;
function MenuError(message) {
  this.message = message;
  this.name = "MenuException";
}

MenuError.prototype = Object.create(Error.prototype);
MenuError.prototype.constructor = MenuError;
function DishError(message) {
  this.message = message;
  this.name = "DishException";
}
DishError.prototype = Object.create(Error.prototype);
DishErrorError.prototype.constructor = DishError;
function AllergenError(message) {
  this.message = message;
  this.name = "AllergenException";
}
AllergenError.prototype = Object.create(Error.prototype);
AllergenError.prototype.constructor = AllergenError;
