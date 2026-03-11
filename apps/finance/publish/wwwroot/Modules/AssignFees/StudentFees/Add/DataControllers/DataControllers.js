

/* ==== */
/* Assign Fees Data Controllers */
class DataControllers_AssignStudentFees {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        AssignStudentFees.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/AssignFees/SetStudentFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Transation Preloader Stop */
                AssignStudentFees.Components.SetProcessingState(false);

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
                        if ($("#hdnFeesAssignId").val() != "0") AssignFees.Components.Back();
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
            url: "/AssignFees/GetStudentFees",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        AssignStudentFees.Components.Setter(JSON.parse(Response.result));
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