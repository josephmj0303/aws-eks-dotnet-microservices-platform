
/* ==== */
/* Form Details Component Back */
ApplicationFormDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Form Details Component Populate */
ApplicationFormDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                ApplicationFormDet.Components.Setter({
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
                ApplicationFormDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Form Details Details */
    DataControllers_ApplicationFormDet.Pop(ApplicationFormDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Form Details Component Delete */
ApplicationFormDet.Components.Delete = function (RouteId) {
    DataControllers_ApplicationFormDet.Delete({
        AFFId: RouteId
    });
}
/* ==== */


/* ==== */
/* Form Details Component Router */
ApplicationFormDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Receipt":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("ApplicationFeesReceipt", RouteId);
            break;

        case "Edit":
            /* Set the Modify Form Routing */
            GeneralFunction.SetRouting("EditApplicationForm", RouteId);
            break;

        case "Delete":
            ApplicationFormDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
