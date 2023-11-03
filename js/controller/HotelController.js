/** Get All Hotel Details */
getAllHotelDetails();

$('#tblHotelDetails>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Hotel Details */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Hotel Details Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Hotel Details */
function saveHotel() {

    let hotelID = $("hotelID").val();
    let hotelName = $("hotelName").val();
    let hotelCategory = $("hotelCategory").val();
    let hotelStarsRate = $("hotelStarsRate").val();
    let hotelRoomType = $("hotelRoomType").val();
    let hotelLocation = $("hotelLocation").val();
    let hotelLocationWithCoordinates = $("hotelLocationWithCoordinates").val();
    let hotelContactEmail = $("hotelContactEmail").val();
    let hotelContactNo1 = $("hotelContactNo1").val();
    let hotelContactNo2 = $("hotelContactNo2").val();
    let petsAllowedorNot = $("petsAllowedorNot").val();
    let hotelFee = $("hotelFee").val();
    let hotelCancellationCriteria = $("hotelCancellationCriteria").val();
    let hotelRemarks = $("hotelRemarks").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8084/Hotel_Service/api/v1/hotel/saveHotel",
        async:true,
        data:JSON.stringify({
            "hotelID":hotelID,
            "hotelName":hotelName,
            "hotelCategory":hotelCategory,
            "hotelStarsRate":hotelStarsRate,
            "hotelRoomType":hotelRoomType,
            "hotelLocation":hotelLocation,
            "hotelLocationWithCoordinates":hotelLocationWithCoordinates,
            "hotelContactEmail":hotelContactEmail,
            "hotelContactNo1":hotelContactNo1,
            "hotelContactNo2":hotelContactNo2,
            "petsAllowedorNot":petsAllowedorNot,
            "hotelFee":hotelFee,
            "hotelCancellationCriteria":hotelCancellationCriteria,
            "hotelRemarks":hotelRemarks
        }),

        success:function (resp) {
            confirm("Do you want Add this Hotel ?");
            console.log(resp);
            alertSs();
            /*alert("Hotel Added Successful..!");*/
            getAllHotelDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Hotel Details */
function updateHotel() {

    let hotelID = $("hotelID").val();
    let hotelName = $("hotelName").val();
    let hotelCategory = $("hotelCategory").val();
    let hotelRoomType = $("hotelRoomType").val();
    let hotelLocation = $("hotelLocation").val();
    let hotelLocationWithCoordinates = $("hotelLocationWithCoordinates").val();
    let hotelContactEmail = $("hotelContactEmail").val();
    let hotelContactNo1 = $("hotelContactNo1").val();
    let hotelContactNo2 = $("hotelContactNo2").val();
    let petsAllowedorNot = $("petsAllowedorNot").val();
    let hotelFee = $("hotelFee").val();
    let hotelCancellationCriteria = $("hotelCancellationCriteria").val();
    let hotelRemarks = $("hotelRemarks").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8084/Hotel_Service/api/v1/hotel/updateHotel",
        async:true,
        data:JSON.stringify({
            "hotelID":hotelID,
            "hotelName":hotelName,
            "hotelCategory":hotelCategory,
            "hotelRoomType":hotelRoomType,
            "hotelLocation":hotelLocation,
            "hotelLocationWithCoordinates":hotelLocationWithCoordinates,
            "hotelContactEmail":hotelContactEmail,
            "hotelContactNo1":hotelContactNo1,
            "hotelContactNo2":hotelContactNo2,
            "petsAllowedorNot":petsAllowedorNot,
            "hotelFee":hotelFee,
            "hotelCancellationCriteria":hotelCancellationCriteria,
            "hotelRemarks":hotelRemarks
        }),

        success:function (resp) {
            confirm("Do you want Update this Hotel Details ?");
            console.log(resp);
            alert("Hotel Details Updated Successful..!");
            getAllHotelDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Hotel Details */
function deleteHotel() {

    let hotelID = $("hotelID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8084/Hotel_Service/api/v1/hotel/deleteHotel"+hotelID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Hotel Details ?");
            console.log(resp);
            alert("Hotel Details Deleted Successful..!");
            getAllHotelDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Hotel Details */
function getAllHotelDetails() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8084/Hotel_Service/api/v1/hotel/getAllHotels",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblHotelDetails").empty();
                for (let hotel of resp.content) {

                    let hotelID = hotel.hotelID;
                    let hotelName = hotel.hotelName;
                    let hotelCategory = hotel.hotelCategory;
                    let hotelRoomType = hotel.hotelRoomType;
                    let hotelLocation = hotel.hotelLocation;
                    let hotelLocationWithCoordinates = hotel.hotelLocationWithCoordinates;
                    let hotelContactEmail = hotel.hotelContactEmail;
                    let hotelContactNo1 = hotel.hotelContactNo1;
                    let hotelContactNo2 = hotel.hotelContactNo2;
                    let petsAllowedorNot = hotel.petsAllowedorNot;
                    let hotelFee = hotel.hotelFee;
                    let hotelCancellationCriteria = hotel.hotelCancellationCriteria;
                    let hotelRemarks = hotel.hotelRemarks;

                    let row = `<tr><td>${hotelID}</td>,<td>${hotelName}</td>,<td>${hotelCategory}</td>,<td>${hotelRoomType}</td>,<td>${hotelLocation}</td>,<td>${hotelLocationWithCoordinates}</td>,<td>${hotelContactEmail}</td>,<td>${hotelContactNo1}</td>,<td>${hotelContactNo2}</td>,<td>${petsAllowedorNot}</td>,<td>${hotelFee}</td>,<td>${hotelCancellationCriteria}</td>,<td>${hotelRemarks}</td></tr>`;
                    $('#tblHotelDetails').append(row);
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
    $(document).on('click', '#tblHotelDetails tr', function () {

        /** Get values from the select row */
        var hotelID = $(this).find('td:eq(0)').text();
        var hotelName = $(this).find('td:eq(1)').text();
        var hotelCategory = $(this).find('td:eq(2)').text();
        var hotelRoomType = $(this).find('td:eq(3)').text();
        var hotelLocation = $(this).find('td:eq(4)').text();
        var hotelLocationWithCoordinates = $(this).find('td:eq(5)').text();
        var hotelContactEmail = $(this).find('td:eq(6)').text();
        var hotelContactNo1 = $(this).find('td:eq(7)').text();
        var hotelContactNo2 = $(this).find('td:eq(8)').text();
        var petsAllowedorNot = $(this).find('td:eq(9)').text();
        var hotelFee = $(this).find('td:eq(10)').text();
        var hotelCancellationCriteria = $(this).find('td:eq(11)').text();
        var hotelRemarks = $(this).find('td:eq(12)').text();

        /** Set values to the text-fields */
        $('#txtHotelId').val(hotelID);
        $('#txtHotelName').val(hotelName);
        $('#txtHotelCategory').val(hotelCategory);
        $('#txtHotelRoomType').val(hotelRoomType);
        $('#txtHotelLocation').val(hotelLocation);
        $('#txtHotelLocationMap').val(hotelLocationWithCoordinates);
        $('#txtHotelContactEmail').val(hotelContactEmail);
        $('#txtHotelContactNo1').val(hotelContactNo1);
        $('#txtHotelContactNo2').val(hotelContactNo2);
        $('#txtHotel').val(petsAllowedorNot);
        $('#txtHotelFee').val(hotelFee);
        $('#txtHotel').val(hotelCancellationCriteria);
        $('#txtHotelRemarks').val(hotelRemarks);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtHotelId').val("");
    $('#txtHotelName').val("");
    $('#txtHotelCategory').val("");
    $('#txtHotelRoomType').val("");
    $('#txtHotelLocation').val("");
    $('#txtHotelLocationMap').val("");
    $('#txtHotelContactEmail').val("");
    $('#txtHotelContactNo1').val("");
    $('#txtHotelContactNo2').val("");
    $('#txtHotel').val("");
    $('#txtHotelFee').val("");
    $('#txtHotel').val("");
    $('#txtHotelRemarks').val("");

    $('#txtHotelId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkHotelID() {
    if (/^(C00-)[0-9]{1,3}$/.test($('#txtHotelId').val())) {
        $('#txtHotelId').css('border', '2px solid green');
        $("#lblHotelID").text(" ");
        return true;
    } else {
        $('#txtHotelId').css('border', '2px solid red');
        $("#lblHotelID").text("Your Input Hotel ID Pattern is Wrong : H00-001").css('color','red');
    }
    return false;
}

function checkHotelName() {
    if (/^[A-z ]{1,}$/.test($('#txtHotelName').val())) {
        $('#txtHotelName').css('border', '2px solid green');
        $("#lblHotelName").text(" ");
        return true;
    } else {
        $('#txtHotelName').css('border', '2px solid red');
        $("#lblHotelName").text("Your Input Hotel Name Pattern is Wrong : Kamal").css('color','red');
    }
    return false;
}

function checkHotelLocation() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#txtHotelLocation').val())) {
        $('#txtHotelLocation').css('border', '2px solid green');
        $("#lblHotelLocation").text(" ");
        return true;
    } else {
        $('#txtHotelLocation').css('border', '2px solid red');
        $("#lblHotelLocation").text("Your Input Hotel Location Pattern is Wrong : Matara").css('color','red');
    }
    return false;
}

function checkHotelContactNo1() {
    if (/^[0-9]{3}(-)[0-9]{7}$/.test($('#txtHotelContactNo1').val())) {//  ("^\\d{10}$")
        $('#txtHotelContactNo1').css('border', '2px solid green');
        $("#lblHotelContactNo1").text(" ");
        return true;
    } else {
        $('#txtHotelContactNo1').css('border', '2px solid red');
        $("#lblHotelContactNo1").text("Your Input Hotel Contact No-01  Pattern is Wrong : 071-2345678").css('color','red');
    }
    return false;
}

function checkHotelContactNo2() {
    if (/^[0-9]{3}(-)[0-9]{7}$/.test($('#txtHotelContactNo2').val())) {//  ("^\\d{10}$")
        $('#txtHotelContactNo2').css('border', '2px solid green');
        $("#lblHotelContactNo2").text(" ");
        return true;
    } else {
        $('#txtHotelContactNo2').css('border', '2px solid red');
        $("#lblHotelContactNo2").text("Your Input Hotel Contact No-02  Pattern is Wrong : 071-2345678").css('color','red');
    }
    return false;
}

function checkDuplicteHotelID(id) {
    let allHotels = getAllHotelDetails();
    for (let i in allHotels) {
        if (id == allHotels[i].getHotelId()) {
            return true;
        }
        return false;
    }
}

function genarateHotelID() {
    let LastId = hotelArray[hotelArray.length - 1].getHotelId();
    $('#txtHotelId').val('H00-00' + (parseInt(LastId.split('H00-00')[1]) + 1));
}

$('#txtHotelId').val('H00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Guide */
    $('#tblHotelDetails>tr').on('dblclick', function () {
        let hotelID = $("#txtHotelId").val();
        let option = confirm(`Do you want to Delete this Hotel Details ? ${hotelID}`);
        if (option) {
            $(this).remove();
            let res = deleteHotel(hotelID);
            if (res) {
                alert("Hotel Details Deleted Successfully..!");
                clearAllHotelText();
            } else {
                alert("Hotel Details Deleted Failed..!");
            }
        }
    });
}

/** Clear All Hotel Test */
function clearAllHotelText() {
    $('#txtHotelId').val(genarateHotelID());
    $('#txtHotelName').val("");
    $('#txtHotelCategory').val("");
    $('#txtHotelRoomType').val("");
    $('#txtHotelLocation').val("");
    $('#txtHotelLocationMap').val("");
    $('#txtHotelContactEmail').val("");
    $('#txtHotelContactNo1').val("");
    $('#txtHotelContactNo2').val("");
    $('#txtHotel').val("");
    $('#txtHotelFee').val("");
    $('#txtHotel').val("");
    $('#txtHotelRemarks').val("");
}