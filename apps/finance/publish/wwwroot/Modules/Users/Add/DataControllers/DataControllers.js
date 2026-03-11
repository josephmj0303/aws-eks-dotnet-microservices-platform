

/* ==== */
/* Organization Data Controllers */
class DataControllers_User {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        User.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/UserAccount/SetUsers",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                User.Components.SetProcessingState(false);

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
                        User.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnUserId").val() != "0") User.Components.Back();
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
                User.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/UserAccount/GetUser",
            data: {
                UserId: Params.RouteId,
            },
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        User.Components.Setter({
                            UserId: Response.result.userId,
                            FirstName:Response.result.firstName,
                            LastName:Response.result.lastName,
                            Gender: Response.result.gender,
                            Mobile: Response.result.mobile,
                            Email: Response.result.email,
                            UserName: Response.result.userName,
                            Password:Response.result.password,
                            RoleId:Response.result.roleId

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