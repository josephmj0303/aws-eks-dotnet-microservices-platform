

/* ==== */
/* Tax Data Controllers */
class DataControllers_Tax {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        Tax.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Master/SetTax",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                Tax.Components.SetProcessingState(false);

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
                        Tax.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.Tax !== "undefined") {
                                Dropdown.Tax.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divTax", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnTaxId").val() != "0") Tax.Components.Back();
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
                Tax.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/Master/GetTax",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        Tax.Components.Setter(JSON.parse(Response.result));
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