
/* ==== */
/* User Components Save */
User.Components.Save = function () {
    /* Send Resquest Server */
    if (User.Components.Validation.Status()) {
        DataControllers_User.Puch((User.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* User Components Back */
User.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* User Components Populate */
User.Components.Populate = function (t_RouteId) {
    /* Load the User Details */
    if (t_RouteId != "0") {
        DataControllers_User.Pop({
            RouteId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
