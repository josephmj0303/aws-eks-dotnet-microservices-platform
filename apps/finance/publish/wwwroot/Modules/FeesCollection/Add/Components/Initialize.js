/* ==== */
/* Fees Collection Components Objects */
var FeesCollection = {};
FeesCollection.Components = {};
/* ==== */

/* ==== */
/* Fees Collection Components Initialize */
FeesCollection.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Receipt", Action: "#FeesCollectionDetails" }, { Title: $("#hdnFeesId").val() == "0" ? "Add New" : "Edit Fees Collection", Action: "#", Active: true }]);

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divClass", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divFeesCategory", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Load the Pagination Header  */
    FeesCollection.Components.Pagination.Initialize();

    /* Once Init the Components Validation */
    FeesCollection.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesCollection.Components.Ready();
}
/* ==== */

/* ==== */
/* Fees Collection Components Ready */
FeesCollection.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    FeesCollection.Components.Cleaner();

    /* Add Event Listener */
    FeesCollection.Components.AddEventListener();

    /* Load the Details */
    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.FeesCategory.LoadData({ TargetId: ".divFeesCategory", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.SetChangeEvent({ TargetId: ".divFeesCategory", Enable: true });

    /* Populate the Data */
    FeesCollection.Components.Populate($("#hdnFeesId").val());
}
/* ==== */

/* ==== */
/* FeesCollection Components Clean Up */
FeesCollection.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        AdmissionNo: "",
        PaidDate: new Date(),
        Notes: ""
    }
    FeesCollection.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* FeesCollection Components Add Event Listener */
FeesCollection.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesCollection.Components.RemoveEventListener();

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
    /* Save Click */
    $(".btn-save").on("click", function () {
        if (FeesCollection.Components.Validation.Status()) {
            FeesCollection.Components.Pagination.ReceiptConfirm();
        }
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        FeesCollection.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Get the Pending Payment Details */
    $("#txtAdmissionNo").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            FeesCollection.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });
    /* ==== */

    /* ==== */
    /* Payment Mode Click Event */
    $(".PaymentType").on("click",function () {
        FeesCollection.Components.PaymentModeVisiblity();
    });
    /* ==== */

    /* ==== */
    /* Paste FROM Clipboard */
    $("#txtAdmissionNo").on("paste", function () {
        setTimeout(function () {
            /* Load the FeesCategory Details */
            FeesCollection.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }, 300);
    });
    /* ==== */

    /* ==== */
    /* Search Click */
    $(".btn-Search").on("click", function () {
        FeesCollection.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Fees Collection Components Remove Active Event Listener */
FeesCollection.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
    $("#txtAdmissionNo").off("paste");
    $(".PaymentType").off("click");
    $(".btn-Search").off("click");
    $("#txtAdmissionNo").off("keydown");
}
/* ==== */

/* ==== */
/* Fees Collection Button Processing Icon */
FeesCollection.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */