

/* ==== */
/* Repair Inward Data Controllers */
class DataControllers_RepairInward {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        RepairInward.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/RepairInward/SetRepairInward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                RepairInward.Components.SetProcessingState(false);

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
                        RepairInward.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnRepairInwardId").val() != "0") RepairInward.Components.Back();
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
                RepairInward.Components.SetProcessingState(false);
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
                //RepairInward.Components.SetProcessingState(false);

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
                        RepairInward.Components.BillCutomerSetter(JSON.parse(Response.result));
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
            url: "/RepairInward/GetRepairInward",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        RepairInward.Components.Setter(JSON.parse(Response.result));
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
    static PopProduct(Params) {

        $.ajax({
            type: "POST",
            url: "/Product/LoadAllProduct",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        RepairInward.Components.ProductSetter(JSON.parse(Response.result));
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
                        RepairInward.Components.TaxSetter(JSON.parse(Response.result));
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
                        RepairInward.Components.BillCutomerSetter(JSON.parse(Response.result));
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