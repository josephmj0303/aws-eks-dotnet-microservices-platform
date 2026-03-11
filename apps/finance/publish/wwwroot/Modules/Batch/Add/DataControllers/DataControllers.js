

/* ==== */
/* Batch Data Controllers */
class DataControllers_Batch {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        Batch.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Batch/SetBatch",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                Batch.Components.SetProcessingState(false);

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
                        Batch.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.Batch !== "undefined") {
                                Dropdown.Batch.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divBatch", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        Batch.Components.Back(); 
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
                Class.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/Batch/GetBatch",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        Batch.Components.Setter(JSON.parse(Response.result));
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