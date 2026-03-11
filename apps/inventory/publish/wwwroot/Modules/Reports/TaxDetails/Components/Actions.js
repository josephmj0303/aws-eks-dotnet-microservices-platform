
/* ==== */
/* Tax Report Details Component Back */
TaxReportDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Tax Report Details Component Populate */
TaxReportDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                TaxReportDet.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    PageSize : 100000000,
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
                TaxReportDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Tax Report Details Details */
    DataControllers_TaxReportDet.Pop(TaxReportDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Tax Report Details Component Delete */
TaxReportDet.Components.Delete = function (RouteId) {
    DataControllers_TaxReportDet.Delete({
        GRNId: RouteId
    });
}
/* ==== */


/* ==== */
/* Tax Report Details Component Router */
TaxReportDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Tax Report Routing */
            GeneralFunction.SetRouting("EditTax Report", RouteId);
            break;

        case "Delete":
            TaxReportDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

