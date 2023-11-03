/** Get All Travel Booking */
getAllTravelBooking();

$('#tblTravelBooking>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Travel Booking */
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

/** Save Booking */
function saveBooking() {

    let bookingID = $("bookingID").val();
    let bookingDate = $("bookingDate").val();
    let bookingTime = $("bookingTime").val();
    let paidValue = $("paidValue").val();
    let paymentStatus = $("paymentStatus").val();
    let hotelID = $("hotelID").val();
    let vehicleID = $("vehicleID").val();
    let guideID = $("guideID").val();
    let travelID = $("travelID").val();
    let customerID = $("customerID").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8082/Booking_Service/api/v1/apigateway/booking/saveBooking",
        async:true,
        data:JSON.stringify({
            "bookingID":bookingID,
            "bookingDate":bookingDate,
            "bookingTime":bookingTime,
            "paidValue":paidValue,
            "paymentStatus":paymentStatus,
            "hotelID":hotelID,
            "vehicleID":vehicleID,
            "guideID":guideID,
            "travelID":travelID,
            "customerID":customerID
        }),

        success:function (resp) {
            confirm("Do you want Add this Travel Booking ?");
            console.log(resp);
            alertSs();
            /*alert("Travel Booking Added Successful..!");*/
            getAllTravelBooking();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Booking */
function updateBooking() {

    let bookingID = $("bookingID").val();
    let bookingDate = $("bookingDate").val();
    let bookingTime = $("bookingTime").val();
    let paidValue = $("paidValue").val();
    let paymentStatus = $("paymentStatus").val();
    let hotelID = $("hotelID").val();
    let vehicleID = $("vehicleID").val();
    let guideID = $("guideID").val();
    let travelID = $("travelID").val();
    let customerID = $("customerID").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8082/Booking_Service/api/v1/apigateway/booking/updateBooking",
        async:true,
        data:JSON.stringify({
            "bookingID":bookingID,
            "bookingDate":bookingDate,
            "bookingTime":bookingTime,
            "paidValue":paidValue,
            "paymentStatus":paymentStatus,
            "hotelID":hotelID,
            "vehicleID":vehicleID,
            "guideID":guideID,
            "travelID":travelID,
            "customerID":customerID
        }),

        success:function (resp) {
            confirm("Do you want Update this Travel Booking ?");
            console.log(resp);
            alert("Travel Booking Updated Successful..!");
            getAllTravelBooking();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Booking */
function deleteBooking() {

    let bookingID = $("bookingID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8082/Booking_Service/api/v1/apigateway/booking/deleteBooking"+bookingID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Travel Booking ?");
            console.log(resp);
            alert("Travel Booking Deleted Successful..!");
            get();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Travel Booking */
function getAllTravelBooking() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8082/Booking_Service/api/v1/apigateway/booking/getAllTravelBookings",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblTravelBooking").empty();
                for (let booking of resp.content) {

                    let bookingID = booking.bookingID;
                    let bookingDate = booking.bookingDate;
                    let bookingTime = booking.bookingTime;
                    let paidValue = booking.paidValue;
                    let paymentStatus = booking.paymentStatus;
                    let hotelID = booking.hotelID;
                    let vehicleID = booking.vehicleID;
                    let guideID = booking.guideID;
                    let travelID = booking.travelID;
                    let customerID = booking.customerID;

                    let row = `<tr><td>${bookingID}</td>,<td>${bookingDate}</td>,<td>${bookingTime}</td>,<td>${paidValue}</td>,<td>${paymentStatus}</td>,<td>${hotelID}</td>,<td>${vehicleID}</td>,<td>${guideID}</td>,<td>${travelID}</td>,<td>${customerID}</td></tr>`;
                    $('#tblTravelBooking').append(row);
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
    $(document).on('click', '#tblTravelBooking tr', function () {

        /** Get values from the select row */
        var bookingID = $(this).find('td:eq(0)').text();
        var bookingDate = $(this).find('td:eq(1)').text();
        var bookingTime = $(this).find('td:eq(2)').text();
        var paidValue = $(this).find('td:eq(3)').text();
        var paymentStatus = $(this).find('td:eq(4)').text();
        var hotelID = $(this).find('td:eq(5)').text();
        var vehicleID = $(this).find('td:eq(6)').text();
        var guideID = $(this).find('td:eq(7)').text();
        var travelID = $(this).find('td:eq(8)').text();
        var customerID = $(this).find('td:eq(9)').text();

        /** Set values to the text-fields */
        $('#txtBookingId').val(bookingID);
        $('#txtBookingDate').val(bookingDate);
        $('#txtBookingTime').val(bookingTime);
        $('#txtPaidValue').val(paidValue);
        $('#txtPaymentStatus').val(paymentStatus);
        $('#txtHotelId').val(hotelID);
        $('#txtVehicleId').val(vehicleID);
        $('#txtGuideId').val(guideID);
        $('#txtTravelId').val(travelID);
        $('#txtCustomerId').val(customerID);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtBookingId').val("");
    $('#txtBookingDate').val("");
    $('#txtBookingTime').val("");
    $('#txtPaidValue').val("");
    $('#txtPaymentStatus').val("");
    $('#txtHotelId').val("");
    $('#txtVehicleId').val("");
    $('#txtGuideId').val("");
    $('#txtTravelId').val("");
    $('#txtCustomerId').val("");

    $('#txtBookingId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkBookingID() {
    if (/^(B00-)[0-9]{1,3}$/.test($('#txtCustomerId').val())) {
        $('#txtBookingId').css('border', '2px solid green');
        $("#lblBookingId").text(" ");
        return true;
    } else {
        $('#txtBookingId').css('border', '2px solid red');
        $("#lblBookingId").text("Your Input Travel Booking ID Pattern is Wrong : B00-001").css('color','red');
    }
    return false;
}

function checkDuplicteBookingID(id) {
    let allBooking = getAllTravelBooking();
    for (let i in allBooking) {
        if (id == allBooking[i].getBookingID()) {
            return true;
        }
        return false;
    }
}

function genarateBookingID() {
    let LastId = travelBookingArray[travelBookingArray.length - 1].getBookingID();
    $('#txtBookingId').val('B00-00' + (parseInt(LastId.split('B00-00')[1]) + 1));
}

$('#txtBookingId').val('B00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Customer */
    $('#tblTravelBooking>tr').on('dblclick', function () {
        let bookingID = $("#txtBookingId").val();
        let option = confirm(`Do you want to Delete this Travel Booking ? ${bookingID}`);
        if (option) {
            $(this).remove();
            let res = deleteBooking(bookingID);
            if (res) {
                alert("Travel Booking Deleted Successfully..!");
                clearAllBookingText();
            } else {
                alert("Travel Booking Deleted Failed..!");
            }
        }
    });
}

/** Clear All Travel Booking Test */
function clearAllBookingText() {
    $('#txtBookingId').val(genarateBookingID());
    $('#txtBookingDate').val("");
    $('#txtBookingTime').val("");
    $('#txtPaidValue').val("");
    $('#txtPaymentStatus').val("");
    $('#txtHotelId').val("");
    $('#txtVehicleId').val("");
    $('#txtGuideId').val("");
    $('#txtTravelId').val("");
    $('#txtCustomerId').val("");
}