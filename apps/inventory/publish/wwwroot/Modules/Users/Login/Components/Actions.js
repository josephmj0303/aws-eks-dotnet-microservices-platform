
/* ==== */
/* Login Components Save */
Login.Components.Authentication = function () {
    /* Send Resquest Server */
    if (Login.Components.Validation.Status({ Form: "Login" })) {
        DataControllers_Login.Pop((Login.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Login Components Back */
Login.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Login Components Populate */
Login.Components.Populate = function (t_RouteId) {
    /* Load the Login Details */
    if (t_RouteId != "0") {
        DataControllers_Login.Pop({
            RouteId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
