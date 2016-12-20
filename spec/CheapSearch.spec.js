let cheapSearch = require("../CheapSearch");
let HotelList = require("../HotelList");
let Hotel = require("../Hotel");

describe("cheapSearch function", function () {
  let hotelList, Lakewood, Bridgewood, Ridgewood;

  beforeEach(function () {
    hotelList = new HotelList();
    Lakewood = new Hotel("Lakewood", 3, { "regular": {"weekday": 110, "weekend": 90}, "rewards": {"weekday": 80, "weekend": 80}});
    Bridgewood = new Hotel("Bridgewood", 4, { "regular": {"weekday": 160, "weekend": 60}, "rewards": {"weekday": 110, "weekend": 50}});
    Ridgewood = new Hotel("Ridgewood", 5, { "regular": {"weekday": 220, "weekend": 150}, "rewards": {"weekday": 100, "weekend": 40}});
    hotelList.addHotel(Lakewood);
    hotelList.addHotel(Bridgewood);
    hotelList.addHotel(Ridgewood);
  });

  it("can find the cheapest hotel", function () {
    expect(cheapSearch("Regular:16Mar2009(mon),17Mar2009(tues),18Mar2009(wed)",hotelList)).toEqual("Lakewood");
  });
  it("can find the cheapest hotel with highest ratings", function () {
    expect(cheapSearch("Rewards:26Mar2009(thur),27Mar2009(fri),28Mar2009(sat)",hotelList)).toEqual("Ridgewood");

  });
});
