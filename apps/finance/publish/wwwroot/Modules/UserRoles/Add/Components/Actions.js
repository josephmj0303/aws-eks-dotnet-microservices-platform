
/* ==== */
/* UserRole Components Save */
UserRole.Components.Save = function () {
    /* Send Resquest Server */
    if (UserRole.Components.Validation.Status()) {
        DataControllers_UserRole.Puch((UserRole.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* UserRole Components Back */
UserRole.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* UserRole Components Populate */
UserRole.Components.Populate = function (t_RouteId) {
    /* Load the UserRole Details */
    if (t_RouteId != "0") {
        DataControllers_UserRole.Pop({
            RouteId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
