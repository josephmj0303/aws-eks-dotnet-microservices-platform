

/* ==== */
/* Sales Return Data Controllers */
class DataControllers_SalesmanInward {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        SalesmanInward.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/SalesmanInward/SetSalesmanInward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                SalesmanInward.Components.SetProcessingState(false);

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
                        SalesmanInward.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnSalesmanInwardId").val() != "0") SalesmanInward.Components.Back();
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
                SalesmanInward.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/SalesmanInward/GetSalesmanInward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        SalesmanInward.Components.Setter(JSON.parse(Response.result));
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
    
    /* Receiver the Data from Server */
    static PopSearchSalesDetails(Params) {

        $.ajax({
            type: "POST",
            url: "/SalesmanInward/GetMatchedSalesDetails",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        /* ==== */
                        /* Set the Components Values */
                        SalesmanInward.Components.SalesSetter(JSON.parse(Response.result));
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