

/* ==== */
/* Fees Category Data Controllers */
class DataControllers_FeesCategory {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        FeesCategory.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/FeesCategory/SetFeesCategory",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                FeesCategory.Components.SetProcessingState(false);

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
                        FeesCategory.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.FeesCategory !== "undefined") {
                                Dropdown.FeesCategory.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divFeesCategory", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnFeesCatId").val() != "0") FeesCategory.Components.Back();
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
                FeesCategory.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/FeesCategory/GetFeesCategory",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        FeesCategory.Components.Setter(JSON.parse(Response.result));
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