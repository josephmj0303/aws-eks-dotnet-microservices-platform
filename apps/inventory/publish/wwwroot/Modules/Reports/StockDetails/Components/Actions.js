
/* ==== */
/* Stock Details Component Back */
StockDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Stock Details Component Populate */
StockDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                StockDet.Components.Setter({
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
                StockDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Stock Details Details */
    DataControllers_StockDet.Pop(StockDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Stock Details Component Delete */
StockDet.Components.Delete = function (RouteId) {
    DataControllers_StockDet.Delete({
        GRNId: RouteId
    });
}
/* ==== */


/* ==== */
/* Stock Details Component Router */
StockDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Stock Routing */
            GeneralFunction.SetRouting("EditStock", RouteId);
            break;

        case "Delete":
            StockDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

