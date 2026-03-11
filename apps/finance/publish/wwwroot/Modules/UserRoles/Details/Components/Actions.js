
/* ==== */
/* Brand Details Component Back */
UserRoleDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Brand Details Component Populate */
UserRoleDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                UserRoleDet.Components.Setter({
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
                UserRoleDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Brand Details Details */
    DataControllers_UserRoleDet.Pop(UserRoleDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Brand Details Component Delete */
UserRoleDet.Components.Delete = function (RouteId) {
    DataControllers_UserRoleDet.Delete({
        RoleId: RouteId
    });
}
/* ==== */


/* ==== */
/* Brand Details Component Router */
UserRoleDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Brand Routing */
            GeneralFunction.SetRouting("EditUserRole", RouteId);
            break;

        case "Delete":
            UserRoleDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
