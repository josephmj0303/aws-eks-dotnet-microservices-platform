
/* ==== */
/* Assigned Student Fees Details Component Back */
AssignStudentFeesDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Component Populate */
AssignStudentFeesDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                AssignStudentFeesDet.Components.Setter({
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
                AssignStudentFeesDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_AssignStudentFeesDet.Pop(AssignStudentFeesDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Component Delete */
AssignStudentFeesDet.Components.Delete = function (RouteId) {
    DataControllers_AssignStudentFeesDet.Delete({
        FeesId: RouteId
    });
}
/* ==== */


/* ==== */
/* Assigned Student Fees Details Component Router */
AssignStudentFeesDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assigned Student Fees Routing */
            GeneralFunction.SetRouting("EditFeesCategory", RouteId);
            break;

        case "Delete":
            AssignStudentFeesDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
