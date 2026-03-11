
/* ==== */
/* Application Form Save Components  */
ApplicationForm.Components.Save = function () {
    /* Send Resquest Server */
    if (ApplicationForm.Components.Validation.Status()) {
        DataControllers_ApplicationForm.Puch((ApplicationForm.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Application Form Back Components  */
ApplicationForm.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Application Form Populate Components  */
ApplicationForm.Components.Populate = function (t_RouteId) {
    /* Load the Application Form.Details */
    if (t_RouteId != "0") {
        DataControllers_ApplicationForm.Pop({
            AFFId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */


/* ==== */
/* Application Form Populate Components  */
ApplicationForm.Components.GenerateNextRecNo = function () {
    /* Load the Application Form.Details */
    DataControllers_ApplicationForm.PopRecNo();
    /* ==== */
}
/* ==== */



/* ==== */
/* Application Form Component Student Populate */
ApplicationForm.Components.AdmissionPopulate = function (Params) {

    /* Load the Class Details Details */
    DataControllers_ApplicationForm.PopAdmissionInfo(Params);
    /* ==== */
}
/* ==== */