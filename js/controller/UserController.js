/** Get All Users */
getAllUsers();

$('#tblUser>tr').css('cursor', 'pointer');

/** Sweet Alert for Save Customer */
function alertSs() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        text:'User Added Successfully...!',
        title: 'Succsess',
        showConfirmButton: false,
        timer: 1500
    });
}

/** Save User */
function saveUser() {

    let userID = $("userID").val();
    let userName = $("userName").val();
    let userEmail = $("userEmail").val();
    let userPassword = $("userPassword").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8081/Auth_Service/api/v1/user/saveUser",
        async:true,
        data:JSON.stringify({
            "userID":userID,
            "userName":userName,
            "userEmail":userEmail,
            "userPassword":userPassword
        }),

        success:function (resp) {
            confirm("Do you want Add this User ?");
            console.log(resp);
            alertSs();
            /*alert("Customer Added Successful..!");*/
            getAllUsers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Update User */
function updateUser() {

    let userID = $("userID").val();
    let userName = $("userName").val();
    let userEmail = $("userEmail").val();
    let userPassword = $("userPassword").val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8081/Auth_Service/api/v1/user/updateUser",
        async:true,
        data:JSON.stringify({
            "userID":userID,
            "userName":userName,
            "userEmail":userEmail,
            "userPassword":userPassword
        }),

        success:function (resp) {
            confirm("Do you want Update this User ?");
            console.log(resp);
            alert("User Updated Successful..!");
            getAllUsers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Delete User */
function deleteUser() {

    let userID = $("userID").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8081/Auth_Service/api/v1/user/deleteUser"+userID,
        async:true,

        success:function (resp) {
            confirm("Do you want Delete this User ?");
            console.log(resp);
            alert("User Deleted Successful..!");
            getAllUsers();
            clearFormData();
        },
        error:function (error) {
            console.log(error);
        }
    });
}

/** Get All Users */
function getAllUsers() {

    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Auth_Service/api/v1/user/getAllUsers",
        async:true,

        success:function (resp) {
            if (resp.code==="00") {
                $("#tblUser").empty();
                for (let user of resp.content) {

                    let userID = user.userID;
                    let userName = user.userName;
                    let userEmail = user.userEmail;
                    let userPassword = user.userPassword;

                    let row = `<tr><td>${userID}</td>,<td>${userName}</td>,<td>${userEmail}</td>,<td>${userPassword}</td></tr>`;
                    $('#tblUser').append(row);
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
        var userID = $(this).find('td:eq(0)').text();
        var userName = $(this).find('td:eq(1)').text();
        var userEmail = $(this).find('td:eq(2)').text();
        var userPassword = $(this).find('td:eq(3)').text();

        /** Set values to the text-fields */
        $('#txtUserID').val(userID);
        $('#txtUserName').val(userName);
        $('#txtUserEmail').val(userEmail);
        $('#txtUserPassword').val(userPassword);
    })
});

/** Clear Customer Input Field Data */
function clearFormData() {

    $('#txtUserID').val("");
    $('#txtUserName').val("");
    $('#txtUserEmail').val("");
    $('#txtUserPassword').val("");

    $('#txtUserID').focus();
}

/** ================================================================================================================================================================ */

/** Key Events Add to Input Fields */
function checkUserID() {
    if (/^(C00-)[0-9]{1,3}$/.test($('#txtUserID').val())) {
        $('#txtUserID').css('border', '2px solid green');
        $("#lblUserID").text(" ");
        return true;
    } else {
        $('#txtUserID').css('border', '2px solid red');
        $("#lblUserID").text("Your Input User ID Pattern is Wrong : U00-001").css('color','red');
    }
    return false;
}

function checkUserName() {
    if (/^[A-z ]{1,}$/.test($('#txtUserName').val())) {
        $('#txtUserName').css('border', '2px solid green');
        $("#lblUserName").text(" ");
        return true;
    } else {
        $('#txtUserName').css('border', '2px solid red');
        $("#lblUserName").text("Your Input User Name Pattern is Wrong : Kamal").css('color','red');
    }
    return false;
}

function checkDuplicteUserID(id) {
    let allUsers = getAllUsers();
    for (let i in allUsers) {
        if (id == allUsers[i].getUserID()) {
            return true;
        }
        return false;
    }
}

function genarateUserID() {
    let LastId = userArray[userArray.length - 1].getUserID();
    $('#txtUserID').val('U00-00' + (parseInt(LastId.split('U00-00')[1]) + 1));
}

$('#txtUserID').val('U00-001');

function dblclickEvent() {
    /** Double Click Event to Delete User */
    $('#tblUser>tr').on('dblclick', function () {
        let userID = $("#txtUserID").val();
        let option = confirm(`Do you want to Delete this User ? ${userID}`);
        if (option) {
            $(this).remove();
            let res = deleteUser(userID);
            if (res) {
                alert("User Deleted Successfully..!");
                clearAllUserText();
            } else {
                alert("User Deleted Failed..!");
            }
        }
    });
}

/** Clear All User Test */
function clearAllUserText() {
    $('#txtUserID').val(genarateUserID());
    $('#txtUserName').val("");
    $('#txtUserEmail').val("");
    $('#txtUserPassword').val("");
}