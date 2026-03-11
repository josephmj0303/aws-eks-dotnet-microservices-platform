

/* ==== */
/* User Rights Details Data Controllers */
class DataControllers_UserRights {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        UserRights.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/UserRights/GetUserRightsDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                UserRights.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        UserRights.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                UserRights.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Send the Data to Server */
    static Save(Params) {

        /* Load the Data Preloader Start */
        UserRights.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/UserRights/SetUserRightsDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                UserRights.Components.SetProcessingState(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    /* ==== */
                    /*  Message Box Show */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message,
                    });
                    /* ==== */

                    /* ==== */
                    /* Reset the User Rights */
                    UserRights.Components.PopulateRoleBasedRights($("#hdnRoleId").val());
                    /* ==== */

                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                UserRights.Components.SetProcessingState(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });

    }

    /* Get the User Rights From Server */
    static GetRights(RoleId) {

        $.ajax({
            type: "POST",
            url: "/UserRights/GetUserRightsDetails",
            data:
            {
                RoleId: RoleId,
                Pagination: {
                    PageNo : 1
                }
            },
            dataType: "text",
            async: false,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Remove the Local Storage */
                        if (GeneralFunction.ReadlocalStorage({ StorageName: "UserRolesRights" }).StorageValue != "") {
                            GeneralFunction.RemovelocalStorage({
                                StorageName: "UserRolesRights"
                            });
                        }
                        /* ==== */

                        /* ==== */
                        /* Create Local Storage */
                        GeneralFunction.CreatelocalStorage({
                            StorageName: "UserRolesRights",
                            StorageValue: JSON.stringify(Response.result.value.data)
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
                    Message: error
                });
                /* ==== */
            }
        });

    }
}
/* ==== */