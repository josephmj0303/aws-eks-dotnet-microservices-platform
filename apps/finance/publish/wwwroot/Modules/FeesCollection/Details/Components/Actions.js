
/* ==== */
/* Assign Fees Details Component Back */
FeesCollectionDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
FeesCollectionDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                FeesCollectionDet.Components.Setter({
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
                FeesCollectionDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_FeesCollectionDet.Pop(FeesCollectionDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
FeesCollectionDet.Components.Delete = function (RouteId) {
    DataControllers_FeesCollectionDet.Delete({
        FCHeaderId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
FeesCollectionDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Receipt":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("FeesReceipt", RouteId);
            break;

        case "Delete":
            FeesCollectionDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
