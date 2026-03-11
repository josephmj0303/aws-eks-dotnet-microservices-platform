
/* ==== */
/* Batch Components Save */
Batch.Components.Save = function () {
    /* Send Resquest Server */
    if (Batch.Components.Validation.Status()) {
        DataControllers_Batch.Puch((Batch.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Batch Components Back */
Batch.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Batch Components Populate */
Batch.Components.Populate = function (t_RouteId) {
    /* Load the Batch Details */
    if (t_RouteId != "0") {
        DataControllers_Batch.Pop({
            BatchId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
