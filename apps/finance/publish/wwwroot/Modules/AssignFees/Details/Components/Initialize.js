/* ==== */
/* Assign Fees Details Components Objects */
var AssignFeesDet = {};
AssignFeesDet.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
AssignFeesDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Loan Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    AssignFeesDet.Components.Pagination.Initialize();

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divClass", AddFlag: false, EditFlag: false, AllFlag: true });

    /* Once Initialize Completed then Goto Ready State */
    AssignFeesDet.Components.Ready();

    /* Get the Assign Fees Details */
    AssignFeesDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Assign Fees Details Components Ready */
AssignFeesDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    AssignFeesDet.Components.Cleaner();

    /* Add Event Listener */
    AssignFeesDet.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: true });

    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClass", Enable: true });

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Clean Up */
AssignFeesDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Add Event Listener */
AssignFeesDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    AssignFeesDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            AssignFeesDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        AssignFeesDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }


    Dropdown.OnChanged = function (Params) {

        /* Load the FeesCategory Details */
        AssignFeesDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });

    }
}
/* ==== */

/* ==== */
/* Assign Fees Details Components Remove Active Event Listener */
AssignFeesDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClass", Enable: false });
}
/* ==== */

/* ==== */
/* Assign Fees Details Data Processing PreLoader */
AssignFeesDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-AssignFeesDetails-Content", Status);
}
/* ==== */