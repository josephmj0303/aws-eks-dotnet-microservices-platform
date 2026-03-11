
/* ==== */
/* Assign Fees Details Component Back */
OutPassReport.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
OutPassReport.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                OutPassReport.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                OutPassReport.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_OutPassReport.Pop(OutPassReport.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
OutPassReport.Components.Delete = function (RouteId) {
    DataControllers_OutPassReport.Delete({
        FeesCatId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
OutPassReport.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCollection", RouteId);
            break;

        case "Delete":
            OutPassReport.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
