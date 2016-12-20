function HotelList(){
  this.list = []
  this.addHotel = function(...hotelData){
    //shld also have case for null/invalid hotelData
    hotelData.forEach((hotel) => this.list.push(hotel))
  }
}

HotelList.prototype.findCheapest = function(customerType,dateTypeArr){
  if (this.list.length > 0){
      let hotelList = this.list;
      let cheapestHotel = hotelList[0];
      let cheapestPrice = hotelList[0].getTotalPriceForDates(customerType,dateTypeArr);
      for (let i = 0; i < hotelList.length; i++){
        let currHotel = hotelList[i];
        let currPrice = currHotel.getTotalPriceForDates(customerType,dateTypeArr);
        if (currPrice < cheapestPrice) {
          cheapestHotel = currHotel
        }
        else if (currPrice === cheapestPrice && currHotel.rating > cheapestHotel.rating){
          cheapestHotel = currHotel
        }
      }
      return cheapestHotel.name;
  }
  else{
      throw new Error("Your hotel list is empty!")
  }
}

module.exports = HotelList;
