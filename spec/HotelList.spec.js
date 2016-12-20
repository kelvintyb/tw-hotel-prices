let HotelList = require("../HotelList");
let Hotel = require("../Hotel");

xdescribe("HotelList", function () {
  let hotelList, Lakewood, Bridgewood, Ridgewood;
  beforeEach(function () {
    hotelList = new HotelList();
    Lakewood = new Hotel("Lakewood", 3, { "regular": {"weekday": 110, "weekend": 90}, "rewards": {"weekday": 80, "weekend": 80}});
    Bridgewood = new Hotel("Bridgewood", 4, { "regular": {"weekday": 160, "weekend": 60}, "rewards": {"weekday": 110, "weekend": 50}});
    Ridgewood = new Hotel("Ridgewood", 5, { "regular": {"weekday": 220, "weekend": 150}, "rewards": {"weekday": 100, "weekend": 40}});
  });
  xit("can add a hotel", function () {
    hotelList.addHotel(Lakewood)
    expect(hotelList.list).toEqual([{}]);
  });
});
