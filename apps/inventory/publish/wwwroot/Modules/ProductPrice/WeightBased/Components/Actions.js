
/* ==== */
/* Product Weight Price Components Save */
ProductWeightPrice.Components.Save = function () {
    /* Send Resquest Server */
    if (ProductWeightPrice.Components.Validation.Status()) {
        DataControllers_ProductWeightPrice.Puch((ProductWeightPrice.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Product Weight Price Components Back */
ProductWeightPrice.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Product Weight Price Components Populate */
ProductWeightPrice.Components.Populate = function (t_RouteId) {
    /* Load the Product Weight Price Details */
    if (t_RouteId != "0") {
        DataControllers_ProductWeightPrice.Pop({
            PriceId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
