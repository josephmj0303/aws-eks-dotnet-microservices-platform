
/* ==== */
/* Fees Category Details Component Back */
FeesCategoryDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Fees Category Details Component Populate */
FeesCategoryDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                FeesCategoryDet.Components.Setter({
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
                FeesCategoryDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_FeesCategoryDet.Pop(FeesCategoryDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Fees Category Details Component Delete */
FeesCategoryDet.Components.Delete = function (RouteId) {
    DataControllers_FeesCategoryDet.Delete({
        FeesCatId: RouteId
    });
}
/* ==== */


/* ==== */
/* Fees Category Details Component Router */
FeesCategoryDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Fees Category Routing */
            GeneralFunction.SetRouting("EditFeesCategory", RouteId);
            break;

        case "Delete":
            FeesCategoryDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
