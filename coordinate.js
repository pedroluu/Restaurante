function Coordinate(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;

  this.toString = function () {
    return "latitude: " + this.latitude + " longitude: " + this.longitude;
  };
}
Coordinate.prototype.getLatitude = function () {
  return this.latitude;
};

Coordinate.prototype.setLatitude = function (latitude) {
  this.latitude = latitude;
};

Coordinate.prototype.getLongitude = function () {
  return this.longitude;
};

Coordinate.prototype.setLongitude = function (longitude) {
  this.longitude = longitude;
};
