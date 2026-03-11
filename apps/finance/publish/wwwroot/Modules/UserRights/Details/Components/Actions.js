
/* ==== */
/* User Rights Details Component Back */
UserRights.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* User Rights Details Component Populate */
UserRights.Components.Populate = function (Params) {

     /* Clean the Pagination Components */
     if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* User Roles Pagination Clean-Up */
                UserRights.Components.Setter({
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
                UserRights.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the User Rights Details Details */
    DataControllers_UserRights.Pop(UserRights.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* User Rights Details Component Delete */
UserRights.Components.Delete = function (RouteId) {
    DataControllers_UserRights.Delete({
        RouteId: RouteId
    });
}
/* ==== */

/* ==== */
/* User Rights Details Component Populate */
UserRights.Components.PopulateRoleBasedRights = function (RoleId) {

    /* Load the User Rights Details Details */
    DataControllers_UserRights.GetRights(RoleId);
    /* ==== */

}
/* ==== */

/* ==== */
/* User Rights Details Component Save */
UserRights.Components.Save = function () {

    /* Save the User Rights Details */
    DataControllers_UserRights.Save(UserRights.Components.GetterUserRightsDetails());
    /* ==== */
}
/* ==== */

/* ==== */
/* User Rights Details Component Router */
UserRights.Components.Router = function (RouteId, RoutePage) {
    
}
/* ==== */
