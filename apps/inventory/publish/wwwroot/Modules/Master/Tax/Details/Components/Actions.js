
/* ==== */
/* Tax Details Component Back */
TaxDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Tax Details Component Populate */
TaxDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                TaxDet.Components.Setter({
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
                TaxDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Product Details Details */
    DataControllers_TaxDet.Pop(TaxDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Tax Details Component Delete */
TaxDet.Components.Delete = function (RouteId) {
    DataControllers_TaxDet.Delete({
        TaxId: RouteId
    });
}
/* ==== */


/* ==== */
/* Tax Details Component Router */
TaxDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Product Routing */
            GeneralFunction.SetRouting("EditTax", RouteId);
            break;

        case "Delete":
            TaxDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
