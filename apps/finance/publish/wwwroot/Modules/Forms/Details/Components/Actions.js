
/* ==== */
/* Form Details Component Back */
FormDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Form Details Component Populate */
FormDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                FormDet.Components.Setter({
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
                FormDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Form Details Details */
    DataControllers_FormDet.Pop(FormDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Form Details Component Delete */
FormDet.Components.Delete = function (RouteId) {
    DataControllers_FormDet.Delete({
        FormId: RouteId
    });
}
/* ==== */


/* ==== */
/* Form Details Component Router */
FormDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Form Routing */
            GeneralFunction.SetRouting("EditForm", RouteId);
            break;

        case "Delete":
            FormDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
