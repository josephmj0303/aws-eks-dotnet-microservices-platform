
/* ==== */
/* Section Details Component Back */
SectionDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Section Details Component Populate */
SectionDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                SectionDet.Components.Setter({
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
                SectionDet.Components.Pagination.Cleaner();
            }
        }
    }


    /* Load the Section Details Details */
    DataControllers_SectionDet.Pop(SectionDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Section Details Component Delete */
SectionDet.Components.Delete = function (RouteId) {
    DataControllers_SectionDet.Delete({
        SecId: RouteId
    });
}
/* ==== */


/* ==== */
/* Section Details Component Router */
SectionDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Section Routing */
            GeneralFunction.SetRouting("EditSection", RouteId);
            break;

        case "Delete":
            SectionDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
