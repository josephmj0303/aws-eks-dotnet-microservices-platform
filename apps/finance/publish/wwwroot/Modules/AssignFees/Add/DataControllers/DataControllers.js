

/* ==== */
/* Assign Fees Data Controllers */
class DataControllers_AssignFees {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        AssignFees.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/AssignFees/SetAssignFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Transation Preloader Stop */
                AssignFees.Components.SetProcessingState(false);

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
                        AssignFees.Components.Cleaner();

                        /* Goto Back  */
                        window.history.back();
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
                AssignFees.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/AssignFees/GetAssignFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        AssignFees.Components.Setter(JSON.parse(Response.result));
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
    static PopStudent(Params) {

        /* Load the Data Preloader Start */
        AssignFees.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/GetStudentDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                AssignFees.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Bind the Student Details */
                        AssignFees.Components.Pagination.TableBody(JSON.parse(Response.result.value.data));

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                AssignFees.Components.DataProcessing(false);

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