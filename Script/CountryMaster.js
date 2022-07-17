
var ID = 0;
$(document).ready(function () {
    ShowCountryMaster()
    $("#btnSave").click(function () {
        InsertUpdateCountryMaster();
        return false;
    });
});

function InsertUpdateCountryMaster( ) {
    try {
        $.post("InsertUpdateCountryMaster", {
            CountryID :ID,
            CountryCode: $("#textCountryCode").val(),
            CountryName: $("#textCountryName").val()
        }, function (data) {
            if (data.Message != "") {
                alert(data.Message);
                ClearForm();
                ShowCountryMaster();
            }

        });

    } catch (e) {
        alert("Error in InsertUpdateCountryMaster:"+e.message);
    }
}

function ShowCountryMaster() {
    try {

        $.post("ShowCountryMaster", {}, function (data) {
            if (data.Message != "") {
                alert(data.Message);
            }
            if (data.Grid != "") {

                $("#dvGrid").html(data.Grid);
            }
        });


    } catch (e) {
        alert("Error in ShowCountryMaster:" + e.Message);
    }

}

function ClearForm() {
    CountryID = 0;
    $("#textCountryCode").val("");
    $("#textCountryName").val("");
    $("#textCountryCode").focus();
    
}

function EditCountryMaster(CountryID) {
    try {
        $.post("EditCountryMaster", {
            CountryID: CountryID
        }, function (data) {
            if (data.Message != "") {
                alert(data.Message);
            } else {
                ID = CountryID;
                $("#textCountryCode").val(data.CountryCode);
                $("#textCountryName").val(data.CountryName);
            }
        }
        );

    } catch (e) {
        alert("Error in InsertUpdateCountryMaster:" + e.message);
    }
}

function DeleteCountryMaster(ID) {
    try {
        if (confirm("Do you Want to Delete This Item?")) {}
        $.post("DeleteCountryMaster", {
            CountryID: ID
        }, function (data) {
            if (data.Message != "") {
                
                alert(data.Message);
                ShowCountryMaster();
               
            } 
        }
        );

    } catch (e) {
        alert("Error in DeleteCountryMaster:" + e.message);
    }
}