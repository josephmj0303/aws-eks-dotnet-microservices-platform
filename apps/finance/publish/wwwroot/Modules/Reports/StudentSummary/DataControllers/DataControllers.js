

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_StudentSummary {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static PopStudent(Params) {

        $.ajax({
            type: "POST",
            url: "/Student/GetStudent",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        var ObjResponse = JSON.parse(Response.result.data1);
                        ObjResponse.AcademyHistory = JSON.parse(Response.result.data2);
                        StudentSummary.Components.StudentSetter(ObjResponse);
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
    static PopPendingPayments(Params) {

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetPendingFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        StudentSummary.Components.Pagination.TablePendingPanymentBody(JSON.parse(Response.result.data2));
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
     static PopSettlementPayments(Params) {

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetSettlementPayment",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        StudentSummary.Components.Pagination.TableSettlementPanymentBody(JSON.parse(Response.result.data2));
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
    static PopReceipt(Params) {

        /* Load the Data Preloader Start */
        //StudentSummary.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetSettlementReceiptDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
               //StudentSummary.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        StudentSummary.Components.Pagination.TableReceiptBody(JSON.parse(Response.result.value.data));

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                //.Components.DataProcessing(false);

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