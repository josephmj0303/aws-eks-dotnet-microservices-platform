

/* ==== */
/* Login Data Controllers */
class DataControllers_Login {

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Enable the Button Preloader */
        Login.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: '/UserAccount/Login',
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Disable the Button Preloader */
                Login.Components.SetProcessingState(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Route to Target Page */
                        window.location.href = "/Home/Index#Home";
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
                Login.Components.SetProcessingState(false);

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