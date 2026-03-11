

/* ==== */
/* Product License Data Controllers */
class DataControllers_ProductLicense {

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Enable the Button Preloader */
        ProductLicense.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: '/ProductActivation/ActivateLicense',
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Disable the Button Preloader */
                ProductLicense.Components.SetProcessingState(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Route to Target Page */
                        window.location.href = "/Home/Index";
                        /* ==== */

                    } else {

                        /* ==== */
                        /* Error Message Box Show */
                        GeneralFunction.Message({
                            Status: "Failure",
                            Title: "Failure",
                            Message: Response.message,
                        });
                        /* ==== */
                    }
                }
            },
            error: function (req, status, error) {

                /* Disable the Button Preloader */
                ProductLicense.Components.SetProcessingState(false);

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