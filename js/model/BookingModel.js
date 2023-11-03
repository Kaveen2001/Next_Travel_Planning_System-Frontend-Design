function BookingModel(bookingID, bookingDate, bookingTime, paidValue, paymentStatus, hotelID, vehicleID, guideID, travelID, customer) {
    var __bookingID = bookingID;
    var __bookingDate = bookingDate;
    var __bookingTime = bookingTime;
    var __paidValue = paidValue;
    var __paymentStatus = paymentStatus;
    var __hotelID = hotelID;
    var __vehicleID = vehicleID;
    var __guideID = guideID;
    var __travelID = travelID;
    var __customer = customer;

    this.getBookingID = function (){
        return __bookingID;
    }
    this.setBookingID = function (newBookingID) {
        __bookingID = newBookingID;
    }
    this.getBookingDate = function (){
        return __bookingDate;
    }
    this.setBookingDate = function (newBookingDate) {
        __bookingDate = newBookingDate;
    }
    this.getBookingTime = function (){
        return __bookingTime;
    }
    this.setBookingTime = function (newBookingTime) {
        __bookingTime = newBookingTime;
    }
    this.getPaidValue = function (){
        return __paidValue;
    }
    this.setPaidValue = function (newPaidValue) {
        __paidValue = newPaidValue;
    }
    this.getPaymentStatus = function (){
        return __paymentStatus;
    }
    this.setPaymentStatus = function (newPaymentStatus) {
        __paymentStatus = newPaymentStatus;
    }
    this.getHotelID = function (){
        return __hotelID;
    }
    this.setHotelID = function (newHotelID) {
        __hotelID = newHotelID;
    }
    this.getVehicleID = function (){
        return __vehicleID;
    }
    this.setVehicleID = function (newVehicleID) {
        __vehicleID = newVehicleID;
    }
    this.getGuideID = function (){
        return __guideID;
    }
    this.setGuideID = function (newGuideID) {
        __guideID = newGuideID;
    }
    this.getTravelID = function (){
        return __travelID;
    }
    this.setTravelID = function (newTravelID) {
        __travelID = newTravelID;
    }
    this.getCustomer = function (){
        return __customer;
    }
    this.setCustomer = function (newCustomer) {
        __customer = newCustomer;
    }
}
