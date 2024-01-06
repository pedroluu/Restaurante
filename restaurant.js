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
