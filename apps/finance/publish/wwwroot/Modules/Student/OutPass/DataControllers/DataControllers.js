

/* ==== */
/* OutPass Data Controllers */
class DataControllers_OutPass {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        OutPass.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Student/SetOutPass",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                OutPass.Components.SetProcessingState(false);

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

                        /* Clear the Components */
                        OutPass.Components.Cleaner();

                        /* Print */
                        OutPass.Components.Router(Response.result.outPassId, "Print");
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
                OutPass.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        OutPass.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/GetOutPassHistory",
            data: Params,
            dataType: "text",
            success: function (Response) {

                OutPass.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* Set the Student Information */
                        OutPass.Components.CurrentStudentData = {
                            StudentDetails: JSON.parse(Response.result).Data1,
                            OutPassDetails: JSON.parse(Response.result).Data2,
                            AttenderDetails: JSON.parse(Response.result).Data3
                        }

                        /* ==== */
                        /* Set the Student Information */
                        OutPass.Components.StudentSetter(OutPass.Components.CurrentStudentData.StudentDetails);
                        /* ==== */

                        /* ==== */
                        /* Set the Components Values */
                        for (var i = 0; i < OutPass.Components.CurrentStudentData.OutPassDetails.length; i++) {
                            OutPass.Components.Pagination.TableBody(OutPass.Components.CurrentStudentData.OutPassDetails[i]);
                        }
                        /* ==== */
                    }
                }
            },
            error: function (req, status, error) {

                OutPass.Components.DataProcessing(false);

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
    static PopImage(Params) {

        OutPass.Components.DataImageProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/GetOutPassImages",
            data: Params,
            dataType: "text",
            success: function (Response) {

                OutPass.Components.DataImageProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        
                        /* ==== */
                        /* Set the Student Information */
                        OutPass.Components.StudentAttenderImage(JSON.parse(Response.result));
                        /* ==== */

                        
                    }
                }
            },
            error: function (req, status, error) {

                OutPass.Components.DataImageProcessing(false);

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