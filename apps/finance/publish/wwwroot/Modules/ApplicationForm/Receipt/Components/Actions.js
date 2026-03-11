
/* ==== */
/* Assign Fees Components Save */
ApplicationFeesReceipt.Components.Save = function () {
    /* Send Resquest Server */

}
/* ==== */

/* ==== */
/* Assign Fees Components Back */
ApplicationFeesReceipt.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Fees Collection Component Populate */
ApplicationFeesReceipt.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                ApplicationFeesReceipt.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_ApplicationFeesReceipt.Pop(ApplicationFeesReceipt.Components.Getter({}));
    /* ==== */
}
/* ==== */
