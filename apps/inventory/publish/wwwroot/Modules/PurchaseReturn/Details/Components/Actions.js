
/* ==== */
/* Purchase Return Details Component Back */
PurchaseReturnDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Purchase Return Details Component Populate */
PurchaseReturnDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                PurchaseReturnDet.Components.Setter({
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
                PurchaseReturnDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Purchase Return Details */
    DataControllers_PurchaseReturnDet.Pop(PurchaseReturnDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Purchase Return Details Component Delete */
PurchaseReturnDet.Components.Delete = function (RouteId) {
    DataControllers_PurchaseReturnDet.Delete({
        GRNRetId: RouteId
    });
}
/* ==== */


/* ==== */
/* Purchase Return Details Component Router */
PurchaseReturnDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintPurchaseReturn", RouteId);
            break;

        case "Edit":
            /* Set the Modify PurchaseReturn Routing */
            GeneralFunction.SetRouting("EditPurchaseReturn", RouteId);
            break;

        case "Delete":
            PurchaseReturnDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

