
/* ==== */
/* Fees Collection Components Save */
FeesCollection.Components.Save = function () {
    /* Send Resquest Server */

    DataControllers_FeesCollection.Puch(FeesCollection.Components.Getter({}));

}
/* ==== */

/* ==== */
/* Fees Collection Components Back */
FeesCollection.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Fees Collection Component Populate */
FeesCollection.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                FeesCollection.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_FeesCollection.Pop(FeesCollection.Components.PendingFeesGetter({}));
    /* ==== */
}
/* ==== */
