
/* ==== */
/* Assign Fees Details Component Back */
FeesCollectionCancelDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
FeesCollectionCancelDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                FeesCollectionCancelDet.Components.Setter({
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
                FeesCollectionCancelDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_FeesCollectionCancelDet.Pop(FeesCollectionCancelDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
FeesCollectionCancelDet.Components.Delete = function (RouteId) {
    DataControllers_FeesCollectionCancelDet.Delete({
        FeesCollectionId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
FeesCollectionCancelDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Receipt":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("FeesReceipt", RouteId);
            break;

        case "Delete":
            FeesCollectionCancelDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
