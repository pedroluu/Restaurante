function Restaurant(name) {
  this.name = name;
  this.description = "";
  this.location = new Coordinate();

  this.toString = function () {
    return (
      "Category(" +
      this.name +
      ") \n " +
      "description: " +
      this.description +
      "\n" +
      "location: " +
      this.location.toString()
    );
  };
}

Restaurant.prototype.getName = function () {
  return this.name;
};

Restaurant.prototype.setName = function (name) {
  this.name = name;
};

Restaurant.prototype.getDescription = function () {
  return this.description;
};

Restaurant.prototype.setDescription = function (description) {
  this.description = description;
};

Restaurant.prototype.getLocation = function () {
  return this.location;
};
Restaurant.prototype.setLocation = function (latitude, longitude) {
  this.location.setLatitude(latitude);
  this.location.setLongitude(longitude);
};
