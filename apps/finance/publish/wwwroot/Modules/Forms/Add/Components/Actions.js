
/* ==== */
/* Form Components Save */
Form.Components.Save = function () {
    /* Send Resquest Server */
    if (Form.Components.Validation.Status()) {
        DataControllers_Form.Puch((Form.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Form Components Back */
Form.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Form Components Populate */
Form.Components.Populate = function (t_RouteId) {
    /* Load the Form Details */
    if (t_RouteId != "0") {
        DataControllers_Form.Pop({
            FormId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
