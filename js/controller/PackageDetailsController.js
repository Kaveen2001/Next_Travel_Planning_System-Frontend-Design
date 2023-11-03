/** Get All Package Details */
getAllPackageDetails();

$('#tblPackageDetails>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Package Details */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Package Details Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Package Details */
function savePackageDetails() {

    let packageID = $("packageID").val();
    let packageCategory = $("packageCategory").val();
    let travelStartDate = $("travelStartDate").val();
    let travelEndDate = $("travelEndDate").val();
    let countOfDays = $("countOfDays").val();
    let countOfNights = $("countOfNights").val();
    let traveler = $("traveler").val();
    let totalHeadCount = $("totalHeadCount").val();
    let withPetOrNot = $("withPetOrNot").val();
    let needGuideOrNot = $("needGuideOrNot").val();
    let customerID = $("customerID").val();
    let packageValue = $("packageValue").val();
    let packagePaidValue = $("packagePaidValue").val();
    let packageRemarks = $("packageRemarks").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/EmployeeMS_Backend_war/api/v1/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "packageID":packageID,
            "packageCategory":packageCategory,
            "travelStartDate":travelStartDate,
            "travelEndDate":travelEndDate,
            "countOfDays":countOfDays,
            "countOfNights":countOfNights,
            "traveler":traveler,
            "totalHeadCount":totalHeadCount,
            "withPetOrNot":withPetOrNot,
            "needGuideOrNot":needGuideOrNot,
            "customerID":customerID,
            "packageValue":packageValue,
            "packagePaidValue":packagePaidValue,
            "packageRemarks":packageRemarks
        }),

        success:function (resp) {
            confirm("Do you want Add this Package Details ?");
            console.log(resp);
            alertSs();
            /*alert("Package Details Added Successful..!");*/
            getAllPackageDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Package Details */
function updatePackageDetails() {

    let packageID = $("packageID").val();
    let packageCategory = $("packageCategory").val();
    let travelStartDate = $("travelStartDate").val();
    let travelEndDate = $("travelEndDate").val();
    let countOfDays = $("countOfDays").val();
    let countOfNights = $("countOfNights").val();
    let traveler = $("traveler").val();
    let totalHeadCount = $("totalHeadCount").val();
    let withPetOrNot = $("withPetOrNot").val();
    let needGuideOrNot = $("needGuideOrNot").val();
    let customerID = $("customerID").val();
    let packageValue = $("packageValue").val();
    let packagePaidValue = $("packagePaidValue").val();
    let packageRemarks = $("packageRemarks").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/EmployeeMS_Backend_war/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "packageID":packageID,
            "packageCategory":packageCategory,
            "travelStartDate":travelStartDate,
            "travelEndDate":travelEndDate,
            "countOfDays":countOfDays,
            "countOfNights":countOfNights,
            "traveler":traveler,
            "totalHeadCount":totalHeadCount,
            "withPetOrNot":withPetOrNot,
            "needGuideOrNot":needGuideOrNot,
            "customerID":customerID,
            "packageValue":packageValue,
            "packagePaidValue":packagePaidValue,
            "packageRemarks":packageRemarks
        }),

        success:function (resp) {
            confirm("Do you want Update this Package Details ?");
            console.log(resp);
            alert("Package Details Updated Successful..!");
            getAllPackageDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Package Details */
function deletePackageDetails() {

    let packageID = $("packageID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/EmployeeMS_Backend_war/api/v1/employee/deleteEmployee/"+hotelID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Package Details ?");
            console.log(resp);
            alert("Package Details Deleted Successful..!");
            getAllPackageDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Package Details */
function getAllPackageDetails() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/EmployeeMS_Backend_war/api/v1/employee/getAllEmployees",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblHotelDetails").empty();
                for (let pack of resp.content) {

                    let packageID = pack.packageID;
                    let packageCategory = pack.packageCategory;
                    let travelStartDate = pack.travelStartDate;
                    let travelEndDate = pack.travelEndDate;
                    let countOfDays = pack.countOfDays;
                    let countOfNights = pack.countOfNights;
                    let traveler = pack.traveler;
                    let totalHeadCount = pack.totalHeadCount;
                    let withPetOrNot = pack.withPetOrNot;
                    let needGuideOrNot = pack.needGuideOrNot;
                    let customerID = pack.customerID;
                    let packageValue = pack.packageValue;
                    let packagePaidValue = pack.packagePaidValue;
                    let packageRemarks = pack.packageRemarks;

                    let row = `<tr><td>${packageID}</td>,<td>${packageCategory}</td>,<td>${travelStartDate}</td>,<td>${travelEndDate}</td>,<td>${countOfDays}</td>,<td>${countOfNights}</td>,<td>${traveler}</td>,<td>${totalHeadCount}</td>,<td>${withPetOrNot}</td>,<td>${needGuideOrNot}</td>,<td>${customerID}</td>,<td>${packageValue}</td>,<td>${packagePaidValue}</td>,<td>${packageRemarks}</td></tr>`;
                    $('#tblPackageDetails').append(row);
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
    $(document).on('click', '#tblPackageDetails tr', function () {

        /** Get values from the select row */
        var packageID = $(this).find('td:eq(0)').text();
        var packageCategory = $(this).find('td:eq(1)').text();
        var travelStartDate = $(this).find('td:eq(2)').text();
        var travelEndDate = $(this).find('td:eq(3)').text();
        var countOfDays = $(this).find('td:eq(4)').text();
        var countOfNights = $(this).find('td:eq(5)').text();
        var traveler = $(this).find('td:eq(6)').text();
        var totalHeadCount = $(this).find('td:eq(7)').text();
        var withPetOrNot = $(this).find('td:eq(8)').text();
        var needGuideOrNot = $(this).find('td:eq(9)').text();
        var customerID = $(this).find('td:eq(10)').text();
        var packageValue = $(this).find('td:eq(11)').text();
        var packagePaidValue = $(this).find('td:eq(12)').text();
        var packageRemarks = $(this).find('td:eq(13)').text();

        /** Set values to the text-fields */
        $('#txtPackageId').val(packageID);
        $('#txtPackageCategory').val(packageCategory);
        $('#txtTravelStartDate').val(travelStartDate);
        $('#txtTravelEndDate').val(travelEndDate);
        $('#txtp').val(countOfDays);
        $('#txtHotelContactEmail').val(countOfNights);
        $('#txtt').val(traveler);
        $('#txtTotalHeadcount').val(totalHeadCount);
        $('#txtHotel').val(withPetOrNot);
        $('#txtHotelFee').val(needGuideOrNot);
        $('#txtCustomerId').val(customerID);
        $('#txtPackageValue').val(packageValue);
        $('#txtPaidValue').val(packagePaidValue);
        $('#txtPackageRemarks').val(packageRemarks);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtPackageId').val("");
    $('#txtPackageCategory').val("");
    $('#txtTravelStartDate').val("");
    $('#txtTravelEndDate').val("");
    $('#txtp').val("");
    $('#txtHotelContactEmail').val("");
    $('#txtt').val("");
    $('#txtTotalHeadcount').val("");
    $('#txtHotel').val("");
    $('#txtHotelFee').val("");
    $('#txtCustomerId').val("");
    $('#txtPackageValue').val("");
    $('#txtPaidValue').val("");
    $('#txtPackageRemarks').val("");

    $('#txtPackageId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkPackageID() {
    if (/^(P00-)[0-9]{1,3}$/.test($('#txtPackageId').val())) {
        $('#txtPackageId').css('border', '2px solid green');
        $("#lblPackageID").text(" ");
        return true;
    } else {
        $('#txtPackageId').css('border', '2px solid red');
        $("#lblPackageID").text("Your Input Package ID Pattern is Wrong : P00-001").css('color','red');
    }
    return false;
}

function checkCustomerID() {
    if (/^(C00-)[0-9]{1,3}$/.test($('#txtCustomerId').val())) {
        $('#txtCustomerId').css('border', '2px solid green');
        $("#lblCustomerID").text(" ");
        return true;
    } else {
        $('#txtCustomerId').css('border', '2px solid red');
        $("#lblCustomerID").text("Your Input Customer ID Pattern is Wrong : C00-001").css('color','red');
    }
    return false;
}

function checkDuplictePackageID(id) {
    let allPackages = getAllPackages();
    for (let i in allPackages) {
        if (id == allPackages[i].getPackageID()) {
            return true;
        }
        return false;
    }
}

function genaratePackageID() {
    let LastId = packageArray[packageArray.length - 1].getPackageID();
    $('#txtPackageId').val('P00-00' + (parseInt(LastId.split('P00-00')[1]) + 1));
}

$('#txtPackageId').val('P00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Package Details */
    $('#tblPackageDetails>tr').on('dblclick', function () {
        let packageID = $("#txtPackageId").val();
        let option = confirm(`Do you want to Delete this Package Details ? ${packageID}`);
        if (option) {
            $(this).remove();
            let res = deletePackageDetails(packageID);
            if (res) {
                alert("Package Details Deleted Successfully..!");
                clearAllPackageText();
            } else {
                alert("Package Details Deleted Failed..!");
            }
        }
    });
}

/** Clear All Package Test */
function clearAllPackageText() {
    $('#txtPackageId').val(genaratePackageID());
    $('#txtPackageCategory').val("");
    $('#txtTravelStartDate').val("");
    $('#txtTravelEndDate').val("");
    $('#txtp').val("");
    $('#txtHotelContactEmail').val("");
    $('#txtt').val("");
    $('#txtTotalHeadcount').val("");
    $('#txtHotel').val("");
    $('#txtHotelFee').val("");
    $('#txtCustomerId').val("");
    $('#txtPackageValue').val("");
    $('#txtPaidValue').val("");
    $('#txtPackageRemarks').val("");
}