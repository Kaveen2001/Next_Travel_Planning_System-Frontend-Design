/** Get All Vehicle Details */
getAllVehicleDetails();

$('#tblVehicleDetails>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Vehicle Details */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Vehicle Details Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Vehicle Details */
function saveVehicle() {

    let vehicleID = $("vehicleID").val();
    let vehicleBrand = $("vehicleBrand").val();
    let vehicleCategory = $("vehicleCategory").val();
    let fuelType = $("fuelType").val();
    let hybridOrNonHybrid = $("hybridOrNonHybrid").val();
    let fuelUsage = $("fuelUsage").val();
    let vehicleImage = $("vehicleImage").val();
    let vehicleSeatCapacity = $("vehicleSeatCapacity").val();
    let vehicleType = $("vehicleType").val();
    let transmissionType = $("transmissionType").val();
    let guideName = $("guideName").val();
    let guideContactNo = $("guideContactNo").val();
    let guideLicenseScannedImage = $("guideLicenseScannedImage").val();
    let vehicleRemarks = $("vehicleRemarks").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8086/Vehicle_Service/api/v1/vehicle/saveVehicle",
        async:true,
        data:JSON.stringify({
            "vehicleID":vehicleID,
            "vehicleBrand":vehicleBrand,
            "vehicleCategory":vehicleCategory,
            "fuelType":fuelType,
            "hybridOrNonHybrid":hybridOrNonHybrid,
            "fuelUsage":fuelUsage,
            "vehicleImage":vehicleImage,
            "vehicleSeatCapacity":vehicleSeatCapacity,
            "vehicleType":vehicleType,
            "transmissionType":transmissionType,
            "guideName":guideName,
            "guideContactNo":guideContactNo,
            "guideLicenseScannedImage":guideLicenseScannedImage,
            "vehicleRemarks":vehicleRemarks
        }),

        success:function (resp) {
            confirm("Do you want Add this Vehicle ?");
            console.log(resp);
            alertSs();
            /*alert("Vehicle Added Successful..!");*/
            getAllVehicleDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Vehicle Details */
function updateVehicle() {

    let vehicleID = $("vehicleID").val();
    let vehicleBrand = $("vehicleBrand").val();
    let vehicleCategory = $("vehicleCategory").val();
    let fuelType = $("fuelType").val();
    let hybridOrNonHybrid = $("hybridOrNonHybrid").val();
    let fuelUsage = $("fuelUsage").val();
    let vehicleImage = $("vehicleImage").val();
    let vehicleSeatCapacity = $("vehicleSeatCapacity").val();
    let vehicleType = $("vehicleType").val();
    let transmissionType = $("transmissionType").val();
    let guideName = $("guideName").val();
    let guideContactNo = $("guideContactNo").val();
    let guideLicenseScannedImage = $("guideLicenseScannedImage").val();
    let vehicleRemarks = $("vehicleRemarks").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8086/Vehicle_Service/api/v1/vehicle/updateVehicle",
        async:true,
        data:JSON.stringify({
            "vehicleID":vehicleID,
            "vehicleBrand":vehicleBrand,
            "vehicleCategory":vehicleCategory,
            "fuelType":fuelType,
            "hybridOrNonHybrid":hybridOrNonHybrid,
            "fuelUsage":fuelUsage,
            "vehicleImage":vehicleImage,
            "vehicleSeatCapacity":vehicleSeatCapacity,
            "vehicleType":vehicleType,
            "transmissionType":transmissionType,
            "guideName":guideName,
            "guideContactNo":guideContactNo,
            "guideLicenseScannedImage":guideLicenseScannedImage,
            "vehicleRemarks":vehicleRemarks
        }),

        success:function (resp) {
            confirm("Do you want Update this Vehicle Details ?");
            console.log(resp);
            alert("Vehicle Details Updated Successful..!");
            getAllVehicleDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Vehicle Details */
function deleteVehicle() {

    let vehicleID = $("vehicleID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8086/Vehicle_Service/api/v1/vehicle/deleteVehicle"+vehicleID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Vehicle Details ?");
            console.log(resp);
            alert("Vehicle Details Deleted Successful..!");
            getAllVehicleDetails();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Vehicle Details */
function getAllVehicleDetails() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8086/Vehicle_Service/api/v1/vehicle/getAllVehicles",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblVehicleDetails").empty();
                for (let vehicle of resp.content) {

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