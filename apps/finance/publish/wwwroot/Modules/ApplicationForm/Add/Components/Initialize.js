/* ==== */
/* Application Form.Components Objects */
var ApplicationForm = {};
ApplicationForm.Components = {};
/* ==== */

/* ==== */
/* Application Form Initialize Components Initialize */
ApplicationForm.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Admission Forms", Action: "#ApplicationFormDetails" }, { Title: $("#hdnAFFId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    ApplicationForm.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ApplicationForm.Components.Ready();
}
/* ==== */

/* ==== */
/* Application Form Ready Components  */
ApplicationForm.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ApplicationForm.Components.Cleaner();

    /* Add Event Listener */
    ApplicationForm.Components.AddEventListener();

    //if ($("#hdnAFFId").val() == "0") {
    //    /* Get the Receipt No */
    //    ApplicationForm.Components.GenerateNextRecNo();
    //}
  
    /* Populate the Data */
    ApplicationForm.Components.Populate($("#hdnAFFId").val());
}
/* ==== */

/* ==== */
/* Application Form Clean Up Components  */
ApplicationForm.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        AFFId: "New",
        ApplicationDate: new Date(),
        StudentName: "",
        ClassName: "",
        ParentName: "",
        ContactNo: "",
        FeeAmount: "0.00",
        PaymentType: "Cash",
        Remarks: "",
    }
    ApplicationForm.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Application Form Add Event Listener Components  */
ApplicationForm.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ApplicationForm.Components.RemoveEventListener();

    /* ==== */
    /* DateTime Picker */
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'dd-M-yyyy',
        defaultDate: new Date()
    });
    /* ==== */

    /* ==== */
    /* Get the Pending Payment Details */
    $("#txtAdmissionNo").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Admission Details */
            ApplicationForm.Components.AdmissionPopulate({
                AdmissionNo: $("#txtAdmissionNo").val(),
            });
        }
    });
    /* ==== */

    /* ==== */
    /* Payment Mode Click Event */
    $(".PaymentType").on("click", function () {
        ApplicationForm.Components.PaymentModeVisiblity();
    });
    /* ==== */

    /* ==== */
    /* Paste FROM Clipboard */
    $("#txtAdmissionNo").on("paste", function () {
        setTimeout(function () {
            /* Load the Admission Details */
            ApplicationForm.Components.AdmissionPopulate({
                AdmissionNo: $("#txtAdmissionNo").val(),
            });
        }, 300);
    });
    /* ==== */

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        ApplicationForm.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        ApplicationForm.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Application Form Remove Active Event Listener Components */
ApplicationForm.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
    $("#txtAdmissionNo").off("paste");
    $(".PaymentType").off("click");
    $("#txtAdmissionNo").off("keydown");
}
/* ==== */

/* ==== */
/* ApplicationForm.Button Processing Icon */
ApplicationForm.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */




/* ==== */
/* Application Form Conformation Dialog Box */
ApplicationFormDet.Components.Pagination.ConformationForNewRecNo = function (Message) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#lblMessage").html(Message);
    $("#MdlAutoGenerateConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Conformation",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Get the Receipt No */
                    ApplicationForm.Components.GenerateNextRecNo();
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */
