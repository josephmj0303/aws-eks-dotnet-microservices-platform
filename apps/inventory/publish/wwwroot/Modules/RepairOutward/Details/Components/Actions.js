
/* ==== */
/* Sales Return Details Component Back */
RepairOutwardDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Sales Return Details Component Populate */
RepairOutwardDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                RepairOutwardDet.Components.Setter({
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
                RepairOutwardDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the RepairOutward Details Details */
    DataControllers_RepairOutwardDet.Pop(RepairOutwardDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Sales Return Details Component Delete */
RepairOutwardDet.Components.Delete = function (RouteId) {
    DataControllers_RepairOutwardDet.Delete({
        RSOId: RouteId
    });
}
/* ==== */


/* ==== */
/* Sales Return Details Component Router */
RepairOutwardDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Sales Return Routing */
            GeneralFunction.SetRouting("EditRepairOutward", RouteId);
            break;


        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintRepairOutward", RouteId);
            break;


        case "Delete":
            RepairOutwardDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

