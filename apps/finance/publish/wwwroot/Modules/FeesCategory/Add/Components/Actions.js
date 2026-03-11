
/* ==== */
/* Fees Category Components Save */
FeesCategory.Components.Save = function () {
    /* Send Resquest Server */
    if (FeesCategory.Components.Validation.Status()) {
        DataControllers_FeesCategory.Puch(FeesCategory.Components.Getter({}));
    }
}
/* ==== */

/* ==== */
/* Fees Category Components Back */
FeesCategory.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Fees Category Components Populate */
FeesCategory.Components.Populate = function (t_RouteId) {
    /* Load the Fees Category Details */
    if (t_RouteId != "0") {
        DataControllers_FeesCategory.Pop({
            FeesCatId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
