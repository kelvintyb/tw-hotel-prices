function Hotel(name, rating, priceData) {
  this.name = name;
  this.rating = rating;
  this.priceData = priceData;
}

Hotel.prototype.getPriceFor = function(customerType, dateType) {
  let priceData = this.priceData[customerType];
  let price = priceData[dateType];
  return price;
}
Hotel.prototype.getTotalPriceForDates = function(customerType,dateTypeArr) {
  let priceArr = dateTypeArr.map((dateType) => this.getPriceFor(customerType,dateType))
  return priceArr.reduce((a,b) => a + b);
}

module.exports = Hotel
