
/* ==== */
/* Customer Components Save */
Customer.Components.Save = function () {
    /* Send Resquest Server */
    if (Customer.Components.Validation.Status()) {
        DataControllers_Customer.Puch((Customer.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Customer Components Back */
Customer.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Customer Components Populate */
Customer.Components.Populate = function (t_RouteId) {
    /* Load the Customer Details */
    if (t_RouteId != "0") {
        DataControllers_Customer.Pop({
            CustId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
