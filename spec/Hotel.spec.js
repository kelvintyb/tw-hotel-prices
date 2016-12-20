let Hotel = require("../Hotel")

describe("Hotel", function () {
  let mockHotel;
  beforeEach(function () {
    mockHotel = new Hotel("Lakewood", 3, { "regular": {"weekday": 110, "weekend": 90}, "rewards": {"weekday": 90, "weekend": 80}});
  });
  it("can get the price for a regular customer on weekend", function () {
    expect(mockHotel.getPriceFor("regular","weekend")).toEqual(90);
  });
  it("can get the price for a regular customer on weekday", function () {
    expect(mockHotel.getPriceFor("regular","weekday")).toEqual(110);
  });
  it("can get the price for a rewards customer on weekend", function () {
    expect(mockHotel.getPriceFor("rewards","weekend")).toEqual(80);
  });
  it("can get the price for a rewards customer on weekday", function () {
    expect(mockHotel.getPriceFor("rewards","weekday")).toEqual(90);
  });
  it("can reduce the price of a price array to a single price based on customer type", function(){
    expect(mockHotel.priceReducer("regular", ["weekday","weekend","weekday"])).toEqual(310);
  });
});
