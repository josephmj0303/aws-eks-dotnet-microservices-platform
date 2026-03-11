
/* ==== */
/* Sales Details Component Back */
SalesDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Sales Details Component Populate */
SalesDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                SalesDet.Components.Setter({
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
                SalesDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Sales Details Details */
    DataControllers_SalesDet.Pop(SalesDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Sales Details Component Delete */
SalesDet.Components.Delete = function (RouteId) {
    DataControllers_SalesDet.Delete({
        InvId: RouteId
    });
}
/* ==== */


/* ==== */
/* Sales Details Component Router */
SalesDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Sales Routing */
            GeneralFunction.SetRouting("EditSale", RouteId);
            break;


        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintInvoice", RouteId);
            break;


        case "Delete":
            SalesDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

