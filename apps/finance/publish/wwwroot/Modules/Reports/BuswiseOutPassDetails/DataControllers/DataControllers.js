

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_BuswiseBuswiseOutPassDetails {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        BuswiseOutPassDetails.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Reports/GeneratePdf",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                BuswiseOutPassDetails.Components.SetProcessingState(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set the Report Data */
                        BuswiseOutPassDetails.Components.Setter(JSON.parse(Response.result));

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                BuswiseOutPassDetails.Components.DataProcessing(false);

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