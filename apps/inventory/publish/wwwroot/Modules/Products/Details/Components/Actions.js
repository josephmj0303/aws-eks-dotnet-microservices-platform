
/* ==== */
/* Product Details Component Back */
ProductDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Product Details Component Populate */
ProductDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                ProductDet.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clear the Search History Cookies */
                GeneralFunction.RemoveCookies({
                    CookieName: GeneralFunction.GetCurrentHashName()
                });

                /* Clean the Data */
                ProductDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Product Details Details */
    DataControllers_ProductDet.Pop(ProductDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Product Details Component Delete */
ProductDet.Components.Delete = function (RouteId) {
    DataControllers_ProductDet.Delete({
        ProductId: RouteId
    });
}
/* ==== */


/* ==== */
/* Product Details Component Router */
ProductDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Product Routing */
            GeneralFunction.SetRouting("EditProduct", RouteId);
            break;

        case "Delete":
            ProductDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
