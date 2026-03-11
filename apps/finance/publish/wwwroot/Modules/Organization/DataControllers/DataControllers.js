

/* ==== */
/* Organization Data Controllers */
class DataControllers_Organization {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        Organization.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Organization/SetOrganization",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                Organization.Components.SetProcessingState(false);

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
                        Organization.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.Organization !== "undefined") {
                                Dropdown.Organization.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divOrganization", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnOrganizationId").val() != "0") Organization.Components.Back();
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
                Organization.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/Organization/GetOrganization",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        Organization.Components.Setter(JSON.parse(Response.result));
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