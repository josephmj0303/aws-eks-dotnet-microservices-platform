

/* ==== */
/* Student Data Controllers */
class DataControllers_StudentUpload {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Stop */
        StudentUpload.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Student/SetStudent",
            data: Params,
            async: true,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                StudentUpload.Components.SetProcessingState(false);

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* ==== */
                    /* Response Routing */
                    if (Response.status == "Success") {

                        /* Set the Completed */
                        $(".Row_" + Response.result.admissionNo).addClass("bg-success");

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
                StudentUpload.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static PopExcelData(Params) {

        StudentUpload.Components.SetProcessingState(true);
        StudentUpload.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/ImportExcelData",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                StudentUpload.Components.SetProcessingState(false);
                StudentUpload.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        var ObjResponse = JSON.parse(Response.result);
                        StudentUpload.Components.Setter(ObjResponse);
                        /* ==== */

                    }
                }
            },
            error: function (req, status, error) {

                StudentUpload.Components.SetProcessingState(false);
                StudentUpload.Components.DataProcessing(false);

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