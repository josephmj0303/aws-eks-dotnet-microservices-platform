
/* ==== */
/* Section Components Save */
Section.Components.Save = function () {
    /* Send Resquest Server */
    if (Section.Components.Validation.Status()) {
        DataControllers_Section.Puch((Section.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Section Components Back */
Section.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Section Components Populate */
Section.Components.Populate = function (t_RouteId) {
    /* Load the Section Details */
    if (t_RouteId != "0") {
        DataControllers_Section.Pop({
            SecId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
