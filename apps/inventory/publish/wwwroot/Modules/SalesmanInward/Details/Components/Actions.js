
/* ==== */
/* Salesman Inward Details Component Back */
SalesmanInwardDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Salesman Inward Details Component Populate */
SalesmanInwardDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                SalesmanInwardDet.Components.Setter({
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
                SalesmanInwardDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Salesman Inward Details Details */
    DataControllers_SalesmanInwardDet.Pop(SalesmanInwardDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Salesman Inward Details Component Delete */
SalesmanInwardDet.Components.Delete = function (RouteId) {
    DataControllers_SalesmanInwardDet.Delete({
        SMINId: RouteId
    });
}
/* ==== */


/* ==== */
/* Salesman Inward Details Component Router */
SalesmanInwardDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintSalesmanInward", RouteId);
            break;

        case "Edit":
            /* Set the Modify Salesman Inward Routing */
            GeneralFunction.SetRouting("EditSalesmanInward", RouteId);
            break;

        case "Delete":
            SalesmanInwardDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

