
/* ==== */
/* Repair Inward Details Component Back */
RepairInwardDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Repair Inward Details Component Populate */
RepairInwardDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                RepairInwardDet.Components.Setter({
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
                RepairInwardDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Repair Inward Details Details */
    DataControllers_RepairInwardDet.Pop(RepairInwardDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Repair Inward Details Component Delete */
RepairInwardDet.Components.Delete = function (RouteId) {
    DataControllers_RepairInwardDet.Delete({
        RSIId: RouteId
    });
}
/* ==== */


/* ==== */
/* Repair Inward Details Component Router */
RepairInwardDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Print":
            /* Print Invoice */
            GeneralFunction.SetRouting("PrintRepairInward", RouteId);
            break;

        case "Edit":
            /* Set the Modify Repair Inward Routing */
            GeneralFunction.SetRouting("EditRepairInward", RouteId);
            break;

        case "Delete":
            RepairInwardDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */

