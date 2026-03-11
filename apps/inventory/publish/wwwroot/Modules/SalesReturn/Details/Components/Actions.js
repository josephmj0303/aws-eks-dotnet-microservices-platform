
/* ==== */
/* Sales Return Details Component Back */
SalesReturnDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Sales Return Details Component Populate */
SalesReturnDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                SalesReturnDet.Components.Setter({
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
                SalesReturnDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the SalesReturn Details Details */
    DataControllers_SalesReturnDet.Pop(SalesReturnDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Sales Return Details Component Delete */
SalesReturnDet.Components.Delete = function (RouteId) {
    DataControllers_SalesReturnDet.Delete({
        InvRetId: RouteId
    });
}
/* ==== */


/* ==== */
/* Sales Return Details Component Router */
SalesReturnDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Sales Return Routing */
            GeneralFunction.SetRouting("EditSaleReturn", RouteId);
            break;


        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintSaleReturn", RouteId);
            break;


        case "Delete":
            SalesReturnDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

