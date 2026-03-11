
/* ==== */
/* Organization Components Save */
Organization.Components.Save = function () {
    /* Send Resquest Server */
    if (Organization.Components.Validation.Status()) {
        DataControllers_Organization.Puch((Organization.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Organization Components Back */
Organization.Components.Back = function () {
    /* Goto Previows Screen */
    //window.history.back();
    location.reload()
}
/* ==== */

/* ==== */
/* Organization Components Populate */
Organization.Components.Populate = function (t_RouteId) {
    /* Load the Organization Details */
    if (t_RouteId != "0") {
        DataControllers_Organization.Pop({
            OrgId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
