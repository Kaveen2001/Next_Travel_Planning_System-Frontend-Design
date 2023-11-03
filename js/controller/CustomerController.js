/** Get All Customers */
getAllCustomers();

$('#tblCustomer>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Customer */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'Customer Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save Customer */
function saveCustomer() {

    let customerID = $("customerID").val();
    let customerName = $("customerName").val();
    let customerNICNo = $("customerNICNo").val();
    let customerNICImage = $("customerNICImage").val();
    let customerAge = $("customerAge").val();
    let customerGender = $("customerGender").val();
    let customerAddress = $("customerAddress").val();
    let customerEmailAddress = $("customerEmailAddress").val();
    let customerContactNo = $("customerContactNo").val();
    let customerImage = $("customerImage").val();
    let customerRemarks = $("customerRemarks").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8083/Customer_Service/api/v1/customer/saveCustomer",
        async:true,
        data:JSON.stringify({
            "customerID":customerID,
            "customerName":customerName,
            "customerNICNo":customerNICNo,
            "customerNICImage":customerNICImage,
            "customerAge":customerAge,
            "customerGender":customerGender,
            "customerAddress":customerAddress,
            "customerEmailAddress":customerEmailAddress,
            "customerContactNo":customerContactNo,
            "customerImage":customerImage,
            "customerRemarks":customerRemarks
        }),

        success:function (resp) {
            confirm("Do you want Add this Customer ?");
            console.log(resp);
            alertSs();
            /*alert("Customer Added Successful..!");*/
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update Customer */
function updateCustomer() {

    let customerID = $("customerID").val();
    let customerName = $("customerName").val();
    let customerNICNo = $("customerNICNo").val();
    let customerNICImage = $("customerNICImage").val();
    let customerAge = $("customerAge").val();
    let customerGender = $("customerGender").val();
    let customerAddress = $("customerAddress").val();
    let customerEmailAddress = $("customerEmailAddress").val();
    let customerContactNo = $("customerContactNo").val();
    let customerImage = $("customerImage").val();
    let customerRemarks = $("customerRemarks").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8083/Customer_Service/api/v1/customer/updateCustomer",
        async:true,
        data:JSON.stringify({
            "customerID":customerID,
            "customerName":customerName,
            "customerNICNo":customerNICNo,
            "customerNICImage":customerNICImage,
            "customerAge":customerAge,
            "customerGender":customerGender,
            "customerAddress":customerAddress,
            "customerEmailAddress":customerEmailAddress,
            "customerContactNo":customerContactNo,
            "customerImage":customerImage,
            "customerRemarks":customerRemarks
        }),

        success:function (resp) {
            confirm("Do you want Update this Customer ?");
            console.log(resp);
            alert("Customer Updated Successful..!");
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete Customer */
function deleteCustomer() {

    let customerID = $("customerID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8083/Customer_Service/api/v1/customer/deleteCustomer"+customerID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this Customer ?");
            console.log(resp);
            alert("Customer Deleted Successful..!");
            getAllCustomers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Customers */
function getAllCustomers() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8083/Customer_Service/api/v1/customer/getAllCustomers",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblCustomer").empty();
                for (let cus of resp.content) {

                    let customerID = cus.customerID;
                    let customerName = cus.customerName;
                    let customerNICNo = cus.customerNICNo;
                    let customerNICImage = cus.customerNICImage;
                    let customerAge = cus.customerAge;
                    let customerGender = cus.customerGender;
                    let customerAddress = cus.customerAddress;
                    let customerEmailAddress = cus.customerEmailAddress;
                    let customerContactNo = cus.customerContactNo;
                    let customerImage = cus.customerImage;
                    let customerRemarks = cus.customerRemarks;

                    let row = `<tr><td>${customerID}</td>,<td>${customerName}</td>,<td>${customerNICNo}</td>,<td>${customerNICImage}</td>,<td>${customerAge}</td>,<td>${customerGender}</td>,<td>${customerAddress}</td>,<td>${customerEmailAddress}</td>,<td>${customerContactNo}</td>,<td>${customerImage}</td>,<td>${customerRemarks}</td></tr>`;
                    $('#tblCustomer').append(row);
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
    $(document).on('click', '#tblCustomer tr', function () {

        /** Get values from the select row */
        var customerID = $(this).find('td:eq(0)').text();
        var customerName = $(this).find('td:eq(1)').text();
        var customerNICNo = $(this).find('td:eq(2)').text();
        var customerNICImage = $(this).find('td:eq(3)').text();
        var customerAge = $(this).find('td:eq(4)').text();
        var customerGender = $(this).find('td:eq(5)').text();
        var customerAddress = $(this).find('td:eq(6)').text();
        var customerEmailAddress = $(this).find('td:eq(7)').text();
        var customerContactNo = $(this).find('td:eq(8)').text();
        var customerImage = $(this).find('td:eq(9)').text();
        var customerRemarks = $(this).find('td:eq(10)').text();

        /** Set values to the text-fields */
        $('#txtCustomerId').val(customerID);
        $('#txtCustomerName').val(customerName);
        $('#txtCustomerNICNo').val(customerNICNo);
        $('#txtCustomerNICImage').val(customerNICImage);
        $('#txtCustomerAge').val(customerAge);
        $('#lblCustomerGender').val(customerGender);
        $('#txtCustomerAddress').val(customerAddress);
        $('#txtCustomerEmailAddress').val(customerEmailAddress);
        $('#txtCustomerContactNo').val(customerContactNo);
        $('#txtCustomerImage').val(customerImage);
        $('#txtCustomerRemarks').val(customerRemarks);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtCustomerId').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerNICNo').val("");
    $('#txtCustomerNICImage').val("");
    $('#txtCustomerAge').val("");
    $('#lblCustomerGender').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerEmailAddress').val("");
    $('#txtCustomerContactNo').val("");
    $('#txtCustomerImage').val("");
    $('#txtCustomerRemarks').val("");

    $('#txtCustomerId').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkCustomerID() {
    if (/^(C00-)[0-9]{1,3}$/.test($('#txtCustomerId').val())) {
        $('#txtCustomerId').css('border', '2px solid green');
        $("#lblCusID").text(" ");
        return true;
    } else {
        $('#txtCustomerId').css('border', '2px solid red');
        $("#lblCusID").text("Your Input Customer ID Pattern is Wrong : C00-001").css('color','red');
    }
    return false;
}

function checkCustomerName() {
    if (/^[A-z ]{1,}$/.test($('#txtCustomerName').val())) {
        $('#txtCustomerName').css('border', '2px solid green');
        $("#lblCusName").text(" ");
        return true;
    } else {
        $('#txtCustomerName').css('border', '2px solid red');
        $("#lblCusName").text("Your Input Customer Name Pattern is Wrong : Kamal").css('color','red');
    }
    return false;
}

function checkCustomerAddress() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#txtCustomerAddress').val())) {
        $('#txtCustomerAddress').css('border', '2px solid green');
        $("#lblCusAddress").text(" ");
        return true;
    } else {
        $('#txtCustomerAddress').css('border', '2px solid red');
        $("#lblCusAddress").text("Your Input Customer Address Pattern is Wrong : Matara").css('color','red');
    }
    return false;
}

function checkCustomerMobileNo() {
    if (/^[0-9]{3}(-)[0-9]{7}$/.test($('#txtCustomerMobileNo').val())) {//  ("^\\d{10}$")
        $('#txtCustomerMobileNo').css('border', '2px solid green');
        $("#lblCusMobileNo").text(" ");
        return true;
    } else {
        $('#txtCustomerMobileNo').css('border', '2px solid red');
        $("#lblCusMobileNo").text("Your Input Customer Mobile No Pattern is Wrong : 071-2345678").css('color','red');
    }
    return false;
}

function checkDuplicteCustomerID(id) {
    let allCustomers = getAllCustomers();
    for (let i in allCustomers) {
        if (id == allCustomers[i].getCustomerID()) {
            return true;
        }
        return false;
    }
}

function genarateCustomerID() {
    let LastId = customerArray[customerArray.length - 1].getCustomerID();
    $('#txtCustomerId').val('C00-00' + (parseInt(LastId.split('C00-00')[1]) + 1));
}

$('#txtCustomerId').val('C00-001');

function dblclickEvent() {
    /** Double Click Event to Delete Customer */
    $('#tblCustomer>tr').on('dblclick', function () {
        let cusID = $("#txtCustomerId").val();
        let option = confirm(`Do you want to Delete this Customer ? ${cusID}`);
        if (option) {
            $(this).remove();
            let res = deleteCustomer(cusID);
            if (res) {
                alert("Customer Deleted Successfully..!");
                clearAllCustomerText();
            } else {
                alert("Customer Deleted Failed..!");
            }
        }
    });
}

/** Clear All Customers Test */
function clearAllCustomerText() {
    $('#txtCustomerId').val(genarateCustomerID());
    $('#txtCustomerName').val("");
    $('#txtCustomerNICNo').val("");
    $('#txtCustomerNICImage').val("");
    $('#txtCustomerAge').val("");
    $('#lblCustomerGender').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerEmailAddress').val("");
    $('#txtCustomerContactNo').val("");
    $('#txtCustomerImage').val("");
    $('#txtCustomerRemarks').val("");
}