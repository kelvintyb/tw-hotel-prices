let HotelList = require("../HotelList");
let Hotel = require("../Hotel");

describe("HotelList", function () {
  let hotelList, Lakewood, Bridgewood, Ridgewood;
  beforeEach(function () {
    hotelList = new HotelList();
    Lakewood = new Hotel("Lakewood", 3, { "regular": {"weekday": 110, "weekend": 90}, "rewards": {"weekday": 80, "weekend": 80}});
    Bridgewood = new Hotel("Bridgewood", 4, { "regular": {"weekday": 160, "weekend": 60}, "rewards": {"weekday": 110, "weekend": 50}});
    Ridgewood = new Hotel("Ridgewood", 5, { "regular": {"weekday": 220, "weekend": 150}, "rewards": {"weekday": 100, "weekend": 40}});
  });
  it("can add a hotel", function () {
    hotelList.addHotel(Lakewood)
    let firstHotel = hotelList.list[0]
    expect(firstHotel.name).toEqual(Lakewood.name);
    expect(firstHotel.rating).toEqual(Lakewood.rating);
    expect(firstHotel.priceData).toEqual(Lakewood.priceData);
  });
  it("can add multiple hotels", function () {
    hotelList.addHotel(Lakewood, Bridgewood, Ridgewood);
    let mockHotelList = [Lakewood,Bridgewood,Ridgewood]
    expect(hotelList.list.length).toEqual(3);
    hotelList.list.forEach((hotel, index) => {
        expect(hotel.name).toEqual(mockHotelList[index].name);
        expect(hotel.rating).toEqual(mockHotelList[index].rating);
        expect(hotel.priceData).toEqual(mockHotelList[index].priceData);
    })
  });
});
