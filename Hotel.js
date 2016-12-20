function Hotel(name, rating, priceData) {
  this.name = name;
  this.rating = rating;
  this.priceData = priceData; //{rewards: {weekday: 100, weekend: 120}}
}


Hotel.prototype.getPriceFor = function(customerType, dateType) {
  let priceData = this.priceData[customerType]; //{regular : {weekday : 110, weekend: 120}}
  let price = priceData[dateType];
  return price;
}
//change priceReducer to more semantic name
Hotel.prototype.priceReducer = function(customerType,dateTypeArr) {
  let priceArr = dateTypeArr.map((dateType) => this.getPriceFor(customerType,dateType))
  return priceArr.reduce((a,b) => a + b);
}

module.exports = Hotel
