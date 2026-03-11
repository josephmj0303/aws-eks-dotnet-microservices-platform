
/* ==== */
/* Class Components Save */
Class.Components.Save = function () {
    /* Send Resquest Server */
    if (Class.Components.Validation.Status()) {
        DataControllers_Class.Puch((Class.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Class Components Back */
Class.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Class Components Populate */
Class.Components.Populate = function (t_RouteId) {
    /* Load the Class Details */
    if (t_RouteId != "0") {
        DataControllers_Class.Pop({
            ClassId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
