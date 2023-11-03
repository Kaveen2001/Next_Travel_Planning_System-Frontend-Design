function UserModel(userID, userName, userEmail, userPassword) {
    var __userID = userID;
    var __userName = userName;
    var __userEmail = userEmail;
    var __userPassword = userPassword;

    this.getUserID = function (){
        return __userID;
    }
    this.setUserID = function (newUserId) {
        __userID = newUserId;
    }
    this.getUserName = function (){
        return __userName;
    }
    this.setUserName = function (newUserName) {
        __userName = newUserName;
    }
    this.getUserEmail = function (){
        return __userEmail;
    }
    this.setUserEmail = function (newUserEmail) {
        __userEmail = newUserEmail;
    }
    this.getUserPassword = function (){
        return __userPassword;
    }
    this.setUserPassword = function (newUserPassword) {
        __userPassword = newUserPassword;
    }
}
