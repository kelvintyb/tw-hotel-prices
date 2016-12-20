let Hotel = require("./Hotel");
let HotelList = require("./HotelList")
const helpers = require("./helpers");
const dateParser = helpers.dateParser;

module.exports = function cheapSearch(dataString,hotelList){
  let parsedDataStr = dataString.split("\:");
  let customerType = parsedDataStr[0].toLowerCase();
  let dateArr = parsedDataStr[1].split(",");
  let dateTypeArr = dateArr.map((date) => dateParser(date))
  return hotelList.findCheapest(customerType,dateTypeArr)
}
