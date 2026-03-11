
/* ==== */
/* Salesman Outward Back Component */
SalesmanOutwardDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Salesman Outward Populate Component */
SalesmanOutwardDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                SalesmanOutwardDet.Components.Setter({
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
                SalesmanOutwardDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the SalesmanOutward Details Details */
    DataControllers_SalesmanOutwardDet.Pop(SalesmanOutwardDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Salesman Outward Delete Component */
SalesmanOutwardDet.Components.Delete = function (RouteId) {
    DataControllers_SalesmanOutwardDet.Delete({
        SMOUTId: RouteId
    });
}
/* ==== */


/* ==== */
/* Salesman Outward Router Component */
SalesmanOutwardDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Sales Return Routing */
            GeneralFunction.SetRouting("EditSalesmanOutward", RouteId);
            break;


        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintSalesmanOutward", RouteId);
            break;


        case "Delete":
            SalesmanOutwardDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

