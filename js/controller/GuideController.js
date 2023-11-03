/** Get All Guides */
getAllGuides();

$('#tblGuide>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Guide */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Guide Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Guide */
function saveGuide() {

    let guideID = $("guideID").val();
    let guideName = $("guideName").val();
    let guideAddress = $("guideAddress").val();
    let guideAge = $("guideAge").val();
    let guideGender = $("guideGender").val();
    let guideContactNo = $("guideContactNo").val();
    let guideImage = $("guideImage").val();
    let guideNICImage = $("guideNICImage").val();
    let guideIDImage = $("guideIDImage").val();
    let guideExperience = $("guideExperience").val();
    let guideManDayValue = $("guideManDayValue").val();
    let guideRemarks = $("guideRemarks").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8082/Booking_Service/api/v1/guide/saveGuide",
        async:true,
        data:JSON.stringify({
            "guideID":guideID,
            "guideName":guideName,
            "guideAddress":guideAddress,
            "guideAge":guideAge,
            "guideGender":guideGender,
            "guideContactNo":guideContactNo,
            "guideImage":guideImage,
            "guideNICImage":guideNICImage,
            "guideIDImage":guideIDImage,
            "guideExperience":guideExperience,
            "guideManDayValue":guideManDayValue,
            "guideRemarks":guideRemarks
        }),

        success:function (resp) {
            confirm("Do you want Add this Guide ?");
            console.log(resp);
            alertSs();
            /*alert("Guide Added Successful..!");*/
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Guide */
function updateGuide() {

    let guideID = $("guideID").val();
    let guideName = $("guideName").val();
    let guideAddress = $("guideAddress").val();
    let guideAge = $("guideAge").val();
    let guideGender = $("guideGender").val();
    let guideContactNo = $("guideContactNo").val();
    let guideImage = $("guideImage").val();
    let guideNICImage = $("guideNICImage").val();
    let guideIDImage = $("guideIDImage").val();
    let guideExperience = $("guideExperience").val();
    let guideManDayValue = $("guideManDayValue").val();
    let guideRemarks = $("guideRemarks").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8082/Booking_Service/api/v1/guide/updateGuide",
        async:true,
        data:JSON.stringify({
            "guideID":guideID,
            "guideName":guideName,
            "guideAddress":guideAddress,
            "guideAge":guideAge,
            "guideGender":guideGender,
            "guideContactNo":guideContactNo,
            "guideImage":guideImage,
            "guideNICImage":guideNICImage,
            "guideIDImage":guideIDImage,
            "guideExperience":guideExperience,
            "guideManDayValue":guideManDayValue,
            "guideRemarks":guideRemarks
        }),

        success:function (resp) {
            confirm("Do you want Update this Guide ?");
            console.log(resp);
            alert("Guide Updated Successful..!");
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Guide */
function deleteGuide() {

    let guideID = $("guideID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8082/Booking_Service/api/v1/guide/deleteGuide"+guideID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Guide ?");
            console.log(resp);
            alert("Guide Deleted Successful..!");
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Guides */
function getAllGuides() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8082/Booking_Service/api/v1/guide/getAllGuides",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblCustomer").empty();
                for (let guide of resp.content) {

                    let guideID = guide.guideID;
                    let guideName = guide.guideName;
                    let guideAddress = guide.guideAddress;
                    let guideAge = guide.guideAge;
                    let guideGender = guide.guideGender;
                    let guideContactNo = guide.guideContactNo;
                    let guideImage = guide.guideImage;
                    let guideNICImage = guide.guideNICImage;
                    let guideIDImage = guide.guideIDImage;
                    let guideExperience = guide.guideExperience;
                    let guideManDayValue = guide.guideManDayValue;
                    let guideRemarks = guide.guideRemarks;

                    let row = `<tr><td>${guideID}</td>,<td>${guideName}</td>,<td>${guideAddress}</td>,<td>${guideAge}</td>,<td>${guideGender}</td>,<td>${guideContactNo}</td>,<td>${guideImage}</td>,<td>${guideNICImage}</td>,<td>${guideIDImage}</td>,<td>${guideExperience}</td>,<td>${guideManDayValue}</td>,<td>${guideRemarks}</td></tr>`;
                    $('#tblGuide').append(row);
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
    $(document).on('click', '#tblGuide tr', function () {

        /** Get values from the select row */
        var guideID = $(this).find('td:eq(0)').text();
        var guideName = $(this).find('td:eq(1)').text();
        var guideAddress = $(this).find('td:eq(2)').text();
        var guideAge = $(this).find('td:eq(3)').text();
        var guideGender = $(this).find('td:eq(4)').text();
        var guideContactNo = $(this).find('td:eq(5)').text();
        var guideImage = $(this).find('td:eq(6)').text();
        var guideNICImage = $(this).find('td:eq(7)').text();
        var guideIDImage = $(this).find('td:eq(8)').text();
        var guideExperience = $(this).find('td:eq(9)').text();
        var guideManDayValue = $(this).find('td:eq(10)').text();
        var guideRemarks = $(this).find('td:eq(11)').text();

        /** Set values to the text-fields */
        $('#txtGuideId').val(guideID);
        $('#txtGuideName').val(guideName);
        $('#txtGuideAddress').val(guideAddress);
        $('#txtGuideAge').val(guideAge);
        $('#lblGuideGender').val(guideGender);
        $('#txtGuideContactNo').val(guideContactNo);
        $('#txtGuideImage').val(guideImage);
        $('#txtGuideNICImage').val(guideNICImage);
        $('#txtGuideIDImage').val(guideIDImage);
        $('#txtGuideExperience').val(guideExperience);
        $('#txtGuideManDayValue').val(guideManDayValue);
        $('#txtGuideRemarks').val(guideRemarks);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtGuideId').val("");
    $('#txtGuideName').val("");
    $('#txtGuideAddress').val("");
    $('#txtGuideAge').val("");
    $('#lblGuideGender').val("");
    $('#txtGuideContactNo').val("");
    $('#txtGuideImage').val("");
    $('#txtGuideNICImage').val("");
    $('#txtGuideIDImage').val("");
    $('#txtGuideExperience').val("");
    $('#txtGuideManDayValue').val("");
    $('#txtGuideRemarks').val("");

    $('#txtGuideId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkGuideID() {
    if (/^(C00-)[0-9]{1,3}$/.test($('#txtGuideId').val())) {
        $('#txtGuideId').css('border', '2px solid green');
        $("#lblGuideID").text(" ");
        return true;
    } else {
        $('#txtGuideId').css('border', '2px solid red');
        $("#lblGuideID").text("Your Input Guide ID Pattern is Wrong : G00-001").css('color','red');
    }
    return false;
}

function checkGuideName() {
    if (/^[A-z ]{1,}$/.test($('#txtGuideName').val())) {
        $('#txtGuideName').css('border', '2px solid green');
        $("#lblGuideName").text(" ");
        return true;
    } else {
        $('#txtGuideName').css('border', '2px solid red');
        $("#lblGuideName").text("Your Input Guide Name Pattern is Wrong : Kamal").css('color','red');
    }
    return false;
}

function checkGuideAddress() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#txtGuideAddress').val())) {
        $('#txtGuideAddress').css('border', '2px solid green');
        $("#lblGuideAddress").text(" ");
        return true;
    } else {
        $('#txtGuideAddress').css('border', '2px solid red');
        $("#lblGuideAddress").text("Your Input Guide Address Pattern is Wrong : Matara").css('color','red');
    }
    return false;
}

function checkGuideContactNo() {
    if (/^[0-9]{3}(-)[0-9]{7}$/.test($('#txtGuideContactNo').val())) {//  ("^\\d{10}$")
        $('#txtGuideContactNo').css('border', '2px solid green');
        $("#lblGuideContactNo").text(" ");
        return true;
    } else {
        $('#txtGuideContactNo').css('border', '2px solid red');
        $("#lblGuideContactNo").text("Your Input Guide Contact No Pattern is Wrong : 071-2345678").css('color','red');
    }
    return false;
}

function checkDuplicteGuideID(id) {
    let allGuides = getAllGuides();
    for (let i in allGuides) {
        if (id == allGuides[i].getGuideId()) {
            return true;
        }
        return false;
    }
}

function genarateGuideID() {
    let LastId = guideArray[guideArray.length - 1].getGuideId();
    $('#txtCustomerId').val('G00-00' + (parseInt(LastId.split('G00-00')[1]) + 1));
}

$('#txtGuideId').val('G00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Guide */
    $('#tblGuide>tr').on('dblclick', function () {
        let guideID = $("#txtGuideId").val();
        let option = confirm(`Do you want to Delete this Guide ? ${guideID}`);
        if (option) {
            $(this).remove();
            let res = deleteGuide(guideID);
            if (res) {
                alert("Guide Deleted Successfully..!");
                clearAllGuideText();
            } else {
                alert("Guide Deleted Failed..!");
            }
        }
    });
}

/** Clear All Guide Test */
function clearAllGuideText() {
    $('#txtGuideId').val(genarateGuideID());
    $('#txtGuideName').val("");
    $('#txtGuideAddress').val("");
    $('#txtGuideAge').val("");
    $('#lblGuideGender').val("");
    $('#txtGuideContactNo').val("");
    $('#txtGuideImage').val("");
    $('#txtGuideNICImage').val("");
    $('#txtGuideIDImage').val("");
    $('#txtGuideExperience').val("");
    $('#txtGuideManDayValue').val("");
    $('#txtGuideRemarks').val("");
}