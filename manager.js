let RestaurantsManager = (function () {
  let instance;

  function manager(name) {
    this.name = name;
    this.categories = [];
    this.allergens = [];
    this.dishes = [];
    this.menus = [];
    this.restaurants = [];

    return {
      getCategories: function () {
        var index = 0;
        var categories = this.categories;

        return {
          next: function () {
            return index < categories.length
              ? { value: categories[index++], done: false }
              : { done: true };
          },
        };
      },
      getMenus: function () {
        var index = 0;
        var menus = this.menus;

        return {
          next: function () {
            return index < menus.length
              ? { value: menus[index++], done: false }
              : { done: true };
          },
        };
      },
      getAllergens: function () {
        var index = 0;
        var allergens = this.allergens;
        return {
          next: function () {
            return index < allergens.length
              ? { value: allergens[index++], done: false }
              : { done: true };
          },
        };
      },
      getRestaurants: function () {
        var index = 0;
        var restaurants = this.restaurants;
        return {
          next: function () {
            return index < restaurants.length
              ? { value: restaurants[index++], done: false }
              : { done: true };
          },
        };
      },
    };
  }
  return {
    getInstance: function (name) {
      if (!instance) {
        instance = createInstance(name);
      }
      return instance;
    },
  };
})();
