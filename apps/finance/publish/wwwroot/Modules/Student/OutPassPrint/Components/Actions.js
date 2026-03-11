
/* ==== */
/* Assign Fees Components Save */
OutPassPrint.Components.Save = function () {
    /* Send Resquest Server */

}
/* ==== */

/* ==== */
/* Assign Fees Components Back */
OutPassPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Fees Collection Component Populate */
OutPassPrint.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                OutPassPrint.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_OutPassPrint.Pop(OutPassPrint.Components.Getter({}));
    /* ==== */
}
/* ==== */
