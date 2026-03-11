

/* ==== */
/* Dashboard Details Data Controllers */
class DataControllers_Dashboard {


    /* Receiver the Data from Server */
    static Pop_OverallSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetOverallSummaryDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set Account Summery Details */
                        Dashboard.Components.QuickSummarySetter(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

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
    static Pop_YearwiseOutstanding(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetYearwiseOutStandingDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set Yearwise Outstanding Details */
                        Dashboard.Components.Pagination.BindYearwiseOutsanding(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

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
    static Pop_ClasswiseOutstanding(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetClasswiseOutStandingDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set Yearwise Outstanding Details */
                        Dashboard.Components.Pagination.BindClasswiseOutsanding(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

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
    static Pop_PaymentMethod(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetPaymentMethodDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        var ObjResult = JSON.parse(Response.result);

                        /* Clean Up the Collection Summery Details */
                        Dashboard.Components.CollectionSetter({
                            TotalDayReceipt: ObjResult.TotalReceipt,
                            TotalDayReceiptAmount: (ObjResult.CashAmount + ObjResult.BankTransferAmount),
                            TotalApplicationReceipt: ObjResult.TotalApplicationReceipt,
                            TotalDayApplicationReceiptAmount: (ObjResult.ApplicationCashAmount + ObjResult.ApplicationBankTransferAmount)
                        });

                        /* Set Yearwise Outstanding Details */
                        Dashboard.Components.Pagination.BindPaymentMethodDetails(ObjResult);
                        Dashboard.Components.Pagination.BindApplicationPaymentMethodDetails(ObjResult);
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

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