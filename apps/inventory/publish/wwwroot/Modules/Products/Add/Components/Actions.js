
/* ==== */
/* Product Components Save */
Product.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = Product.Components.Getter({});
    if (Product.Components.Validation.Status(ObjResponse)) {
        DataControllers_Product.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Product Components Back */
Product.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Product Components Populate */
Product.Components.Populate = function (t_RouteId) {
    /* Load the Product Details */
    if (t_RouteId != "0") {
        DataControllers_Product.Pop({
            ProductId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
