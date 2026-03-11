

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_OutPassReport {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        OutPassReport.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Reports/GetOutPassReportReport",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                OutPassReport.Components.DataProcessing(false);
                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set the Report Data */
                        OutPassReport.Components.Setter({
                            PageNo: Response.result.data1.value.pageNo,
                            TotalPages: Response.result.data1.value.totalPages,
                            Data: JSON.parse(Response.result.data1.value.data)
                        });

                     
                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                OutPassReport.Components.DataProcessing(false);

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