
/* ==== */
/* Assign Student Fees Save Components  */
AssignStudentFees.Components.Save = function () {
    /* Send Resquest Server */
    var RequestData = AssignStudentFees.Components.Getter({});
    if (AssignStudentFees.Components.Validation.Status(RequestData)) {
        DataControllers_AssignStudentFees.Puch(RequestData);
    }
}
/* ==== */

/* ==== */
/* Assign Student Fees Save Back Components  */
AssignStudentFees.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Assign Student Fees Populate Components */
AssignStudentFees.Components.Populate = function (t_RouteId) {
    /* Load the Assign Fees Details */
    if (t_RouteId != "0") {
        DataControllers_AssignStudentFees.Pop({
            FeesId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */