function HotelModel(HotelId, HotelName, HotelCategory, HotelLocation) {
    var __hotelId = HotelId;
    var __hotelName = HotelName;
    var __hotelCategory = HotelCategory;
    var __hotelLocation = HotelLocation;

    this.getHotelId = function (){
        return __hotelId;
    }
    this.setHotelId = function (newHotelId) {
        __hotelId = newHotelId;
    }
    this.getHotelName = function (){
        return __hotelName;
    }
    this.setHotelName = function (newHotelName) {
        __hotelName = newHotelName;
    }
}
