/** Get All Travel Booking Details */
getAllTravelBookingDetails();

$('#tbl>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Travel Booking Details */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Travel Booking Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Travel Booking Details */
function saveTravelBooking() {

    /** Save Customer Details */
    let customerID = $("customerID").val();
    let customerNICNo = $("customerNICNo").val();
    let customerFullName = $("customerFullName").val();
    let customerEmailAddress = $("customerEmailAddress").val();
    let customerPassword = $("customerPassword").val();
    let customerContactAddress = $("customerContactAddress").val();
    let customerContactNo = $("customerContactNo").val();
    let customerImage = $("customerImage").val();

    /** Save Booking Details */
    let travelID = $("travelID").val();
    let hotelID = $("hotelID").val();
    let vehicleID = $("vehicleID").val();
    let guideID = $("guideID").val();
    let travelBookDate = $("travelBookDate").val();
    let travelBookTime = $("travelBookTime").val();
    let packagePaidValue = $("packagePaidValue").val();
    let paymentsState = $("paymentsState").val();

    /** Save Payments Details */
    let paymentCardAccepted = $("paymentCardAccepted").val();
    let nameOfCard = $("nameOfCard").val();
    let creditCardNo = $("creditCardNo").val();
    let creditCardExpMonth = $("creditCardExpMonth").val();
    let creditCardExpYear = $("creditCardExpYear").val();
    let CWNo = $("CWNo").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8084/Travel_Service/api/v1/travel/saveTravel",
        async:true,
        data:JSON.stringify({
            "customerID":customerID,
            "customerNICNo":customerNICNo,
            "customerFullName":customerFullName,
            "customerEmailAddress":customerEmailAddress,
            "customerPassword":customerPassword,
            "customerContactAddress":customerContactAddress,
            "customerContactNo":customerContactNo,
            "customerImage":customerImage,

            "travelID":travelID,
            "hotelID":hotelID,
            "vehicleID":vehicleID,
            "guideID":guideID,
            "travelBookDate":travelBookDate,
            "travelBookTime":travelBookTime,
            "packagePaidValue":packagePaidValue,
            "paymentsState":paymentsState,

            "paymentCardAccepted":paymentCardAccepted,
            "nameOfCard":nameOfCard,
            "creditCardNo":creditCardNo,
            "creditCardExpMonth":creditCardExpMonth,
            "creditCardExpYear":creditCardExpYear,
            "CWNo":CWNo
        }),

        success:function (resp) {
            confirm("Do you want Add this Travel Booking ?");
            console.log(resp);
            alertSs();
            /*alert("Travel Booking Added Successful..!");*/
            getAllTravelBookingDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Travel Booking Details */
function updateTravelBooking() {

    /** Save Customer Details */
    let customerID = $("customerID").val();
    let customerNICNo = $("customerNICNo").val();
    let customerFullName = $("customerFullName").val();
    let customerEmailAddress = $("customerEmailAddress").val();
    let customerPassword = $("customerPassword").val();
    let customerContactAddress = $("customerContactAddress").val();
    let customerContactNo = $("customerContactNo").val();
    let customerImage = $("customerImage").val();

    /** Save Booking Details */
    let travelID = $("travelID").val();
    let hotelID = $("hotelID").val();
    let vehicleID = $("vehicleID").val();
    let guideID = $("guideID").val();
    let travelBookDate = $("travelBookDate").val();
    let travelBookTime = $("travelBookTime").val();
    let packagePaidValue = $("packagePaidValue").val();
    let paymentsState = $("paymentsState").val();

    /** Save Payments Details */
    let paymentCardAccepted = $("paymentCardAccepted").val();
    let nameOfCard = $("nameOfCard").val();
    let creditCardNo = $("creditCardNo").val();
    let creditCardExpMonth = $("creditCardExpMonth").val();
    let creditCardExpYear = $("creditCardExpYear").val();
    let CWNo = $("CWNo").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8084/Travel_Service/api/v1/travel/updateTravel",
        async:true,
        data:JSON.stringify({
            "customerID":customerID,
            "customerNICNo":customerNICNo,
            "customerFullName":customerFullName,
            "customerEmailAddress":customerEmailAddress,
            "customerPassword":customerPassword,
            "customerContactAddress":customerContactAddress,
            "customerContactNo":customerContactNo,
            "customerImage":customerImage,

            "travelID":travelID,
            "hotelID":hotelID,
            "vehicleID":vehicleID,
            "guideID":guideID,
            "travelBookDate":travelBookDate,
            "travelBookTime":travelBookTime,
            "packagePaidValue":packagePaidValue,
            "paymentsState":paymentsState,

            "paymentCardAccepted":paymentCardAccepted,
            "nameOfCard":nameOfCard,
            "creditCardNo":creditCardNo,
            "creditCardExpMonth":creditCardExpMonth,
            "creditCardExpYear":creditCardExpYear,
            "CWNo":CWNo
        }),

        success:function (resp) {
            confirm("Do you want Update this Travel Booking ?");
            console.log(resp);
            alert("Travel Booking Updated Successful..!");
            getAllTravelBookingDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Travel Booking Details */
function deleteTravelBooking() {

    let travelID = $("travelID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8084/Travel_Service/api/v1/travel/deleteTravel"+travelID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Travel Booking ?");
            console.log(resp);
            alert("Travel Booking Deleted Successful..!");
            getAllTravelBookingDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Travel Booking Details */
function getAllTravelBookingDetails() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8084/Travel_Service/api/v1/travel/getAllTravels",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblVehicleDetails").empty();
                for (let travel of resp.content) {

                    let vehicleID = vehicle.vehicleID;
                    let vehicleBrand = vehicle.vehicleBrand;
                    let vehicleCategory = vehicle.vehicleCategory;
                    let fuelType = vehicle.fuelType;
                    let hybridOrNonHybrid = vehicle.hybridOrNonHybrid;
                    let fuelUsage = vehicle.fuelUsage;
                    let vehicleImage = vehicle.vehicleImage;
                    let vehicleSeatCapacity = vehicle.vehicleSeatCapacity;
                    let vehicleType = vehicle.vehicleType;
                    let transmissionType = vehicle.transmissionType;
                    let guideName = vehicle.guideName;
                    let guideContactNo = vehicle.guideContactNo;
                    let guideLicenseScannedImage = vehicle.guideLicenseScannedImage;
                    let vehicleRemarks = vehicle.vehicleRemarks;

                    let row = `<tr><td>${vehicleID}</td>,<td>${vehicleBrand}</td>,<td>${vehicleCategory}</td>,<td>${fuelType}</td>,<td>${hybridOrNonHybrid}</td>,<td>${fuelUsage}</td>,<td>${vehicleImage}</td>,<td>${vehicleSeatCapacity}</td>,<td>${vehicleType}</td>,<td>${transmissionType}</td>,<td>${guideName}</td>,<td>${guideContactNo}</td>,<td>${guideLicenseScannedImage}</td>,<td>${vehicleRemarks}</td></tr>`;
                    $('#tblVehicleDetails').append(row);
                }
            }
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Bind Click Events to the table rows */
$(document).ready(function () {
    $(document).on('click', '#tblVehicleDetails tr', function () {

        /** Get values from the select row */
        var vehicleID = $(this).find('td:eq(0)').text();
        var vehicleBrand = $(this).find('td:eq(1)').text();
        var vehicleCategory = $(this).find('td:eq(2)').text();
        var fuelType = $(this).find('td:eq(3)').text();
        var hybridOrNonHybrid = $(this).find('td:eq(4)').text();
        var fuelUsage = $(this).find('td:eq(5)').text();
        var vehicleImage = $(this).find('td:eq(6)').text();
        var vehicleSeatCapacity = $(this).find('td:eq(7)').text();
        var vehicleType = $(this).find('td:eq(8)').text();
        var transmissionType = $(this).find('td:eq(9)').text();
        var guideName = $(this).find('td:eq(10)').text();
        var guideContactNo = $(this).find('td:eq(11)').text();
        var guideLicenseScannedImage = $(this).find('td:eq(12)').text();
        var vehicleRemarks = $(this).find('td:eq(13)').text();

        /** Set values to the text-fields */
        $('#txtVehicleId').val(vehicleID);
        $('#txtVehicleBrand').val(vehicleBrand);
        $('#txtVehicleCategory').val(vehicleCategory);
        $('#txtvehi').val(fuelType);
        $('#txtvehi').val(hybridOrNonHybrid);
        $('#txtFuelUsage').val(fuelUsage);
        $('#txtVehicleImage').val(vehicleImage);
        $('#txtvehi').val(vehicleSeatCapacity);
        $('#txtVehicleType').val(vehicleType);
        $('#txtvehi').val(transmissionType);
        $('#txtGuideName').val(guideName);
        $('#txtGuideContactNo').val(guideContactNo);
        $('#txtGuideNICImage').val(guideLicenseScannedImage);
        $('#txtVehicleRemarks').val(vehicleRemarks);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtVehicleId').val("");
    $('#txtVehicleBrand').val("");
    $('#txtVehicleCategory').val("");
    $('#txtvehi').val("");
    $('#txtvehi').val("");
    $('#txtFuelUsage').val("");
    $('#txtVehicleImage').val("");
    $('#txtvehi').val("");
    $('#txtVehicleType').val("");
    $('#txtvehi').val("");
    $('#txtGuideName').val("");
    $('#txtGuideContactNo').val("");
    $('#txtGuideNICImage').val("");
    $('#txtVehicleRemarks').val("");

    $('#txtVehicleId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkVehicleID() {
    if (/^(V00-)[0-9]{1,3}$/.test($('#txtVehicleId').val())) {
        $('#txtVehicleId').css('border', '2px solid green');
        $("#lblVehicleID").text(" ");
        return true;
    } else {
        $('#txtVehicleId').css('border', '2px solid red');
        $("#lblVehicleID").text("Your Input Vehicle ID Pattern is Wrong : V00-001").css('color','red');
    }
    return false;
}

function checkVehicleBrand() {
    if (/^[A-z ]{1,}$/.test($('#txtVehicleBrand').val())) {
        $('#txtVehicleBrand').css('border', '2px solid green');
        $("#lblVehicleBrand").text(" ");
        return true;
    } else {
        $('#txtVehicleBrand').css('border', '2px solid red');
        $("#lblVehicleBrand").text("Your Input Vehicle Brand Pattern is Wrong : Toyota").css('color','red');
    }
    return false;
}

function checkDuplicteVehicleID(id) {
    let allVehicles = getAllVehicles();
    for (let i in allVehicles) {
        if (id == allVehicles[i].getVehicleId()) {
            return true;
        }
        return false;
    }
}

function genarateVehicleID() {
    let LastId = vehicleArray[vehicleArray.length - 1].getVehicleId();
    $('#txtVehicleId').val('V00-00' + (parseInt(LastId.split('V00-00')[1]) + 1));
}

$('#txtVehicleId').val('V00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Guide */
    $('#tblVehicleDetails>tr').on('dblclick', function () {
        let vehicleID = $("#txtVehicleId").val();
        let option = confirm(`Do you want to Delete this Vehicle Details ? ${vehicleID}`);
        if (option) {
            $(this).remove();
            let res = deleteVehicle(vehicleID);
            if (res) {
                alert("Vehicle Details Deleted Successfully..!");
                clearAllVehicleText();
            } else {
                alert("Vehicle Details Deleted Failed..!");
            }
        }
    });
}

/** Clear All Vehicle Test */
function clearAllVehicleText() {
    $('#txtVehicleId').val(genarateVehicleID());
    $('#txtVehicleBrand').val("");
    $('#txtVehicleCategory').val("");
    $('#txtvehi').val("");
    $('#txtvehi').val("");
    $('#txtFuelUsage').val("");
    $('#txtVehicleImage').val("");
    $('#txtvehi').val("");
    $('#txtVehicleType').val("");
    $('#txtvehi').val("");
    $('#txtGuideName').val("");
    $('#txtGuideContactNo').val("");
    $('#txtGuideNICImage').val("");
    $('#txtVehicleRemarks').val("");
}