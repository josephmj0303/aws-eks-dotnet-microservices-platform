

/* ==== */
/* Repair Outward Data Controllers */
class DataControllers_RepairOutward {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        RepairOutward.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/RepairOutward/SetRepairOutward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                RepairOutward.Components.SetProcessingState(false);

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
                        RepairOutward.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnRSOId").val() != "0") RepairOutward.Components.Back();
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
                RepairOutward.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/RepairOutward/GetRepairOutward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        RepairOutward.Components.Setter(JSON.parse(Response.result));
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
    static PopSearchRepairOutwardsDetails(Params) {

        $.ajax({
            type: "POST",
            url: "/RepairOutward/GetMatchedRepairInwardDetails",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        /* ==== */
                        /* Set the Components Values */
                        RepairOutward.Components.InwardSetter(JSON.parse(Response.result));
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