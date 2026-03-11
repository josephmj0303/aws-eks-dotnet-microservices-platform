
/* ==== */
/* Product License Components Save */
ProductLicense.Components.Authentication = function () {
    /* Send Resquest Server */
    if (ProductLicense.Components.Validation.Status({ Form: "ProductLicense" })) {
        DataControllers_ProductLicense.Pop((ProductLicense.Components.Getter({})));
    }
}
/* ==== */

/* ==== */
/* Product License Components Back */
ProductLicense.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Product License Components Populate */
ProductLicense.Components.Populate = function (t_RouteId) {
    /* Load the Product License Details */
    if (t_RouteId != "0") {
        DataControllers_ProductLicense.Pop({
            RouteId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
