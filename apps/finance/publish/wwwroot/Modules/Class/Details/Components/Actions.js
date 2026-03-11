
/* ==== */
/* Class Details Component Back */
ClassDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Class Details Component Populate */
ClassDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                ClassDet.Components.Setter({
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
                ClassDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Class Details Details */
    DataControllers_ClassDet.Pop(ClassDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Class Details Component Delete */
ClassDet.Components.Delete = function (RouteId) {
    DataControllers_ClassDet.Delete({
        ClassId: RouteId
    });
}
/* ==== */


/* ==== */
/* Class Details Component Router */
ClassDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Class Routing */
            GeneralFunction.SetRouting("EditClass", RouteId);
            break;

        case "Delete":
            ClassDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
