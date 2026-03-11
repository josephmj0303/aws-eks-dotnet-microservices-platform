

/* ==== */
/* Organization Data Controllers */
class DataControllers_UserRole {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        UserRole.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/UserRoles/SetRole",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                UserRole.Components.SetProcessingState(false);

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message
                    });
                    /* ==== */

                    /* ==== */
                    /* Response Routing */
                    if (Response.status == "Success") {

                        /* Clean Up */
                        UserRole.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.UserRoles !== "undefined") {
                                Dropdown.UserRoles.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divUserRoles", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnUserRoleId").val() != "0") UserRole.Components.Back();
                    }
                    /* ==== */
                }
            },
            error: function (req, status, error) {

                /* ==== */
                /* Exception Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error,
                });
                /* ==== */

                /* Transation Preloader Stop */
                UserRole.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/UserRoles/GetRole",
            data: {
                RoleId: Params.RouteId,
            },
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        UserRole.Components.Setter({
                            RoleName: Response.result.roleName
                        });
                        /* ==== */

                    }
                }
            },
            error: function (req, status, error) {

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error,
                });
                /* ==== */
            }
        });

    }
}
/* ==== */