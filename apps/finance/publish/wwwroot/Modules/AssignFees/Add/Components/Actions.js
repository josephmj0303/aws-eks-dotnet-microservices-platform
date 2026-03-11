
/* ==== */
/* Assign Fees Components Save */
AssignFees.Components.Save = function () {
    /* Send Resquest Server */
    var RequestData = AssignFees.Components.Getter({});
    if (AssignFees.Components.Validation.Status(RequestData)) {
        DataControllers_AssignFees.Puch(RequestData);
    }
}
/* ==== */

/* ==== */
/* Assign Fees Components Back */
AssignFees.Components.Back = function () {
    /* Goto Previows Screen */
   // window.history.back();
}
/* ==== */

/* ==== */
/* Assign Fees Components Populate */
AssignFees.Components.Populate = function (t_RouteId) {
    /* Load the Assign Fees Details */
    if (t_RouteId != "0") {
        DataControllers_AssignFees.Pop({
            FeesCatId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */


/* ==== */
/* Assign Populate Student Components  */
AssignFees.Components.PopulateStudent = function (t_RouteId) {
    /* Load the Assign Fees Details */
    DataControllers_AssignFees.PopStudent(AssignFees.Components.StudentFilterGetter());
    /* ==== */
}
/* ==== */
