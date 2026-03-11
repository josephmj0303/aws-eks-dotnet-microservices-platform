

/* ==== */
/* Product Weight Price Data Controllers */
class DataControllers_ProductWeightPrice {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        ProductWeightPrice.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/ProductPrice/SetProductWeightPrice",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                ProductWeightPrice.Components.SetProcessingState(false);

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

                        /* Set the Purchase and Sales Price */
                        Layout.Components.PurchasePrice = parseFloat($("#txtPurchasePrice").val());
                        Layout.Components.SalesPrice = parseFloat($("#txtSalesPrice").val());

                        /* Goto Back  */
                        ProductWeightPrice.Components.Back();
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
                ProductWeightPrice.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/ProductPrice/GetProductWeightPrice",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        ProductWeightPrice.Components.Setter(JSON.parse(Response.result));
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