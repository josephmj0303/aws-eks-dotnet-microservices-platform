

/* ==== */
/* Stock Details Data Controllers */
class DataControllers_ProductPrice {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        ProductPrice.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/ProductPrice/GetProductPriceDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                ProductPrice.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        ProductPrice.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                ProductPrice.Components.DataProcessing(false);

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