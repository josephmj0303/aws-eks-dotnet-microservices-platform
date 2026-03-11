
/* ==== */
/* Stock Details Component Back */
ProductPrice.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Stock Details Component Populate */
ProductPrice.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                ProductPrice.Components.Setter({
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
                ProductPrice.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Stock Details Details */
    DataControllers_ProductPrice.Pop(ProductPrice.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Stock Details Component Delete */
ProductPrice.Components.Delete = function (RouteId) {
    DataControllers_ProductPrice.Delete({
        GRNId: RouteId
    });
}
/* ==== */


/* ==== */
/* Stock Details Component Router */
ProductPrice.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Delete":
            ProductPrice.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

