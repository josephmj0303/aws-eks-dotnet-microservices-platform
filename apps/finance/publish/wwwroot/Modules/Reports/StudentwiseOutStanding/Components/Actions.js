
/* ==== */
/* Assign Fees Details Component Back */
StudentwiseOutStanding.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
StudentwiseOutStanding.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                StudentwiseOutStanding.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clean the Data */
                StudentwiseOutStanding.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_StudentwiseOutStanding.Pop(StudentwiseOutStanding.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
StudentwiseOutStanding.Components.Delete = function (RouteId) {
    DataControllers_StudentwiseOutStanding.Delete({
        FeesCatId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
StudentwiseOutStanding.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCollection", RouteId);
            break;

        case "Delete":
            StudentwiseOutStanding.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
