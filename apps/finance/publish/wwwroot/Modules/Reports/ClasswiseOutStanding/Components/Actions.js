
/* ==== */
/* Assign Fees Details Component Back */
ClasswiseOutStanding.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
ClasswiseOutStanding.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                ClasswiseOutStanding.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                ClasswiseOutStanding.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_ClasswiseOutStanding.Pop(ClasswiseOutStanding.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
ClasswiseOutStanding.Components.Delete = function (RouteId) {
    
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
ClasswiseOutStanding.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCollection", RouteId);
            break;

        case "Delete":
            ClasswiseOutStanding.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
