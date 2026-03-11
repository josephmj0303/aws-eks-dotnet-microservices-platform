
/* ==== */
/* Purchase Details Component Back */
PurchaseDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Purchase Details Component Populate */
PurchaseDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                PurchaseDet.Components.Setter({
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
                PurchaseDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Purchase Details Details */
    DataControllers_PurchaseDet.Pop(PurchaseDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Purchase Details Component Delete */
PurchaseDet.Components.Delete = function (RouteId) {
    DataControllers_PurchaseDet.Delete({
        GRNId: RouteId
    });
}
/* ==== */


/* ==== */
/* Purchase Details Component Router */
PurchaseDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintPurchase", RouteId);
            break;

        case "Edit":
            /* Set the Modify Purchase Routing */
            GeneralFunction.SetRouting("EditPurchase", RouteId);
            break;

        case "Delete":
            PurchaseDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

