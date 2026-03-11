
/* ==== */
/* Assign Fees Components Save */
FeesReceipt.Components.Save = function () {
    /* Send Resquest Server */

}
/* ==== */

/* ==== */
/* Assign Fees Components Back */
FeesReceipt.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Fees Collection Component Populate */
FeesReceipt.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                FeesReceipt.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_FeesReceipt.Pop(FeesReceipt.Components.Getter({}));
    /* ==== */
}
/* ==== */
