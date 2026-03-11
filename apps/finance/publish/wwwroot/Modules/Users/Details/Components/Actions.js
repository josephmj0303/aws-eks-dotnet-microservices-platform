
/* ==== */
/* User Details Component Back */
UserDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* User Details Component Populate */
UserDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                UserDet.Components.Setter({
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
                UserDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the User Details Details */
    DataControllers_UserDet.Pop(UserDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* User Details Component Delete */
UserDet.Components.Delete = function (RouteId) {
    DataControllers_UserDet.Delete({
        UserId: RouteId
    });
}
/* ==== */


/* ==== */
/* User Details Component Router */
UserDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify User Routing */
            GeneralFunction.SetRouting("EditUser", RouteId);
            break;

        case "Delete":
            UserDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
