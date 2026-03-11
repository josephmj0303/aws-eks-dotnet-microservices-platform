

/* ==== */
/* Stock Details Data Controllers */
class DataControllers_StockDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        StockDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Reports/GetStockDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                StockDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        StockDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                StockDet.Components.DataProcessing(false);

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
        StockDet.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Reports/GetStockDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                StockDet.Components.SetProcessingState(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        calback(JSON.parse(Response.result.value.data));
                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                StockDet.Components.SetProcessingState(false);

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