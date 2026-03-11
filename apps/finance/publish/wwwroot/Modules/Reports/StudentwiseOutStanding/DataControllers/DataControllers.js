

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_StudentwiseOutStanding {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        StudentwiseOutStanding.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Reports/GetStudentwiseOutStandingReport",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                StudentwiseOutStanding.Components.DataProcessing(false);
                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set the Report Data */
                        StudentwiseOutStanding.Components.Setter({
                            Data: JSON.parse(Response.result)
                        });

                        /* Set Excel Download Link */
                        // if (typeof Response.result.data2 !== "undefined") {
                        //     GeneralFunction.CreateExcelDownloadLink("#btnExcelDownload", Response.result.data2);
                        // }

                        // /* Set PDF Download Link */
                        // if (typeof Response.result.data3 !== "undefined") {
                        //     GeneralFunction.CreateExcelDownloadLink("#btnPdfDownload", Response.result.data3);
                        // }

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                StudentwiseOutStanding.Components.DataProcessing(false);

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