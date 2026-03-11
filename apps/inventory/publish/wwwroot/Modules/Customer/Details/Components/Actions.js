
/* ==== */
/* Customer Details Component Back */
CustomerDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Customer Details Component Populate */
CustomerDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                CustomerDet.Components.Setter({
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
                CustomerDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Customer Details Details */
    DataControllers_CustomerDet.Pop(CustomerDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Customer Details Component Delete */
CustomerDet.Components.Delete = function (RouteId) {
    DataControllers_CustomerDet.Delete({
        CustId: RouteId
    });
}
/* ==== */


/* ==== */
/* Customer Details Component Router */
CustomerDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Customer Routing */
            GeneralFunction.SetRouting("EditCustomer", RouteId);
            break;

        case "Delete":
            CustomerDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
