

/* ==== */
/* Batch Details Data Controllers */
class DataControllers_BatchDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        BatchDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Batch/GetBatchDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                BatchDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        BatchDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                BatchDet.Components.DataProcessing(false);

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
            url: "/Batch/DeleteBatch",
            dataType: "text",
            async: true,
            data : Params,
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
                        $(".RN" + Params.BatchId).remove();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.Batch !== "undefined") {
                                Dropdown.Batch.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divBatch", ComponentValue: 0 });
                            }
                        }
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

}
/* ==== */