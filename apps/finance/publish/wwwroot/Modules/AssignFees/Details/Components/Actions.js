
/* ==== */
/* Assign Fees Details Component Back */
AssignFeesDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
AssignFeesDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                AssignFeesDet.Components.Setter({
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
                AssignFeesDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_AssignFeesDet.Pop(AssignFeesDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Delete */
AssignFeesDet.Components.Delete = function (RouteId) {
    DataControllers_AssignFeesDet.Delete({
        FeesAssignId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Component Router */
AssignFeesDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "StudentFees":
            /* View the Student Fees Routing */
            GeneralFunction.SetRouting("AssignedStudentFees", RouteId);
            break;

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCategory", RouteId);
            break;

        case "Delete":
            AssignFeesDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
