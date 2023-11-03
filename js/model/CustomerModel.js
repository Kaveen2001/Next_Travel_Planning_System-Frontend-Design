function CustomerModel(cusId, cusName, cusNICNo, cusNICImage, cusAge, cusGender, cusAddress, cusEmailAddress, cusMobileNo, cusImage, cusRemarks) {
    var __cusId = cusId;
    var __cusName = cusName;
    var __cusNICNo = cusNICNo;
    var __cusNICImage = cusNICImage;
    var __cusAge = cusAge;
    var __cusGender = cusGender;
    var __cusAddress = cusAddress;
    var __cusEmailAddress = cusEmailAddress;
    var __cusMobileNo = cusMobileNo;
    var __cusImage = cusImage;
    var __cusRemarks = cusRemarks;

    this.getCustomerID = function (){
        return __cusId;
    }
    this.setCustomerID = function (newCusId) {
        __cusId = newCusId;
    }
    this.getCustomerName = function (){
        return __cusName;
    }
    this.setCustomerName = function (newCusName) {
        __cusName = newCusName;
    }
    this.getCustomerNICNo = function (){
        return __cusNICNo;
    }
    this.setCustomerNICNo = function (newCusNICNo) {
        __cusNICNo = newCusNICNo;
    }
    this.getCustomerNICImage = function (){
        return __cusNICImage;
    }
    this.setCustomerNICImage = function (newCusNICImage) {
        __cusNICImage = newCusNICImage;
    }
    this.getCustomerAge = function (){
        return __cusAge;
    }
    this.setCustomerAge = function (newCusAge) {
        __cusAge = newCusAge;
    }
    this.getCustomerGender = function (){
        return __cusGender;
    }
    this.setCustomerGender = function (newCusGender) {
        __cusGender = newCusGender;
    }
    this.getCustomerAddress = function (){
        return __cusAddress;
    }
    this.setCustomerAddress = function (newCusAddress) {
        __cusAddress = newCusAddress;
    }
    this.getCustomerEmailAddress = function (){
        return __cusEmailAddress;
    }
    this.setCustomerEmailAddress = function (newCusEmailAddress) {
        __cusEmailAddress = newCusEmailAddress;
    }
    this.getCustomerMobileNo = function (){
        return __cusMobileNo;
    }
    this.setCustomerMobileNo =function (newCusMobileNo) {
        __cusMobileNo = newCusMobileNo;
    }
    this.getCustomerImage = function (){
        return __cusImage;
    }
    this.setCustomerImage =function (newCusImage) {
        __cusImage = newCusImage;
    }
    this.getCustomerRemarks = function (){
        return __cusRemarks;
    }
    this.setCustomerRemarks =function (newCusRemarks) {
        __cusRemarks = newCusRemarks;
    }
}
