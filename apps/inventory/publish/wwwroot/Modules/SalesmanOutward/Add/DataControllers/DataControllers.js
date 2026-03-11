

/* ==== */
/* Sales Data Controllers */
class DataControllers_SalesmanOutward {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        SalesmanOutward.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/SalesmanOutward/SetSalesmanOutward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                SalesmanOutward.Components.SetProcessingState(false);

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

                        /* Clean Up */
                        SalesmanOutward.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnSMOUTId").val() != "0") SalesmanOutward.Components.Back();
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
                SalesmanOutward.Components.SetProcessingState(false);
            }
        });

    }

    /* Send the Data to Server */
    static PuchCustomer(Params) {

        /* Transation Preloader Start */
        //Customer.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Customer/SetCustomer",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                //SalesmanOutward.Components.SetProcessingState(false);

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

                        /* Clean Up */
                        $("#MdlCustomerConfirm").dialog("close");;

                        /* Goto Back  */
                        SalesmanOutward.Components.BillCutomerSetter(JSON.parse(Response.result));
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
               // Customer.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/SalesmanOutward/GetSalesmanOutward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        SalesmanOutward.Components.Setter(JSON.parse(Response.result));
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

    /* Receiver the Data from Server */
    static PopAvaliableProductStock(Params) {

        $.ajax({
            type: "POST",
            url: "/Reports/GetStockDetails",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        SalesmanOutward.Components.ProductSetter(JSON.parse(Response.result.value.data));
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

    /* Receiver the Data from Server */
    static PopTax(Params) {

        $.ajax({
            type: "POST",
            url: "/Master/LoadAllTax",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        SalesmanOutward.Components.TaxSetter(JSON.parse(Response.result));
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

    /* Receiver the Data from Server */
    static PopSearchCustomer(Params) {

        $.ajax({
            type: "POST",
            url: "/Customer/GetCustomerByContact",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        /* ==== */
                        /* Set the Components Values */
                        SalesmanOutward.Components.BillCutomerSetter(JSON.parse(Response.result));
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