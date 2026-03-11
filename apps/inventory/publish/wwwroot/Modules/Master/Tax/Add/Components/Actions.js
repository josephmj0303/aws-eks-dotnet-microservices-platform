
/* ==== */
/* Tax Components Save */
Tax.Components.Save = function () {
    /* Send Resquest Server */
    if (Tax.Components.Validation.Status()) {
        DataControllers_Tax.Puch((Tax.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Tax Components Back */
Tax.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
    //location.reload()
}
/* ==== */

/* ==== */
/* Tax Components Populate */
Tax.Components.Populate = function (t_RouteId) {
    /* Load the Tax Details */
    if (t_RouteId != "0") {
        DataControllers_Tax.Pop({
            TaxId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
