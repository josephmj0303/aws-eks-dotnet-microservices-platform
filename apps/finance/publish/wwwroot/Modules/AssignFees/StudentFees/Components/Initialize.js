/* ==== */
/* Assigned Student Fees Details Components Objects */
var AssignStudentFeesDet = {};
AssignStudentFeesDet.Components = {};
/* ==== */

/* ==== */
/* Assigned Student Fees Details Components Initialize */
AssignStudentFeesDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Loan Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    AssignStudentFeesDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    AssignStudentFeesDet.Components.Ready();

    /* Get the Assigned Student Fees Details */
    AssignStudentFeesDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Components Ready */
AssignStudentFeesDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    AssignStudentFeesDet.Components.Cleaner();

    /* Add Event Listener */
    AssignStudentFeesDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Assigned Student Fees Details Components Clean Up */
AssignStudentFeesDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Assigned Student Fees Details Components Add Event Listener */
AssignStudentFeesDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    AssignStudentFeesDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            AssignStudentFeesDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        AssignStudentFeesDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Components Remove Active Event Listener */
AssignStudentFeesDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Data Processing PreLoader */
AssignStudentFeesDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-AssignStudentFeesDetails-Content", Status);
}
/* ==== */