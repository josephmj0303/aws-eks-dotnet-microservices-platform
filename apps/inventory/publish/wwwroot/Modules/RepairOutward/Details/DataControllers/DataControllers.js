

/* ==== */
/* Sales Return Details Data Controllers */
class DataControllers_RepairOutwardDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        RepairOutwardDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/RepairOutward/GetRepairOutwardDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                RepairOutwardDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        RepairOutwardDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                RepairOutwardDet.Components.DataProcessing(false);

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

    /* Delete the Data from Server */
    static Delete(Params) {

        $.ajax({
            type: "POST",
            url: "/RepairOutward/DeleteRepairOutward",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);

                    /* ==== */
                    /* Message */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message
                    });
                    /* ==== */

                    if (Response.status == "Success") {
                        /* Refresh */
                        $(".RN" + Params.RSOId).remove();
                    }
                }
            },
            error: function (req, status, error) {
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

    /* Receiver the Data from Server */
    static GenerateDownloadData(Params, calback) {

        /* Load the Data Preloader Start */
        RepairOutwardDet.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/RepairOutward/GetRepairOutwardDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                RepairOutwardDet.Components.SetProcessingState(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        calback(JSON.parse(Response.result.value.data));
                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                RepairOutwardDet.Components.SetProcessingState(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */

                calback([]);
            }
        });


    }


}
/* ==== */