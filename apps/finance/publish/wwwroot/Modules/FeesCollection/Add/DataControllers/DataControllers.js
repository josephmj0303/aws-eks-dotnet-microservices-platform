

/* ==== */
/* Fees Collection Data Controllers */
class DataControllers_FeesCollection {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        FeesCollection.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/FeesCollection/SetFeesCollection",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Transation Preloader Stop */
                FeesCollection.Components.SetProcessingState(false);

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

                        /* Go to Back */
                        FeesCollection.Components.Cleaner();
                        FeesCollection.Components.Pagination.Cleaner();

                        /* Set the Modify Fees Collection Routing */
                        //FeesCollection.Components.Pagination.PrintConfirm(Response.result);
                        GeneralFunction.SetRouting("FeesReceipt", Response.result)
                        
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
                FeesCollection.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetPendingFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        FeesCollection.Components.PendingFeesSetter(JSON.parse(Response.result.data1))
                        FeesCollection.Components.Pagination.TableBody(JSON.parse(Response.result.data2));
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