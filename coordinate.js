function Coordinate(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;

  this.toString = function () {
    return "latitude: " + this.latitude + " longitude: " + this.longitude;
  };
}
