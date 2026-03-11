

/* ==== */
/* Organization Data Controllers */
class DataControllers_StudentMigration {

    /* Send the Data to Server */
    static Puch(Params) {

        $.ajax({
            type: "POST",
            url: "/Student/SetMigration",
            data: Params,
            dataType: "text",
            async: false,
            success: function (Response) {

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* Progress Percent */
                    StudentMigration.Components.CompletedRecord += 1;

                    /* Calculate the Completed Percent */
                    var TotCompletedPercent = ((StudentMigration.Components.CompletedRecord / StudentMigration.Components.TotalRecords) * 100);
                    StudentMigration.Components.SetProgressPercent(parseFloat(TotCompletedPercent).toFixed(0) + "%");

                    if (StudentMigration.Components.CompletedRecord == StudentMigration.Components.TotalRecords) {
                        
                        /* Transation Preloader Stop */
                        StudentMigration.Components.SetProcessingState(false);

                        /* ==== */
                        /* Message Box */
                        GeneralFunction.Message({
                            Status: "Success",
                            Title: "Migration",
                            Message: "Migration has been completed successfully"
                        });
                        /* ==== */

                        /* Once Components Ready then Clean the Component Values */
                        StudentMigration.Components.Pagination.Cleaner("Source");
                        StudentMigration.Components.Pagination.Cleaner("Target");
                    }

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

                StudentMigration.Components.IsCanceled = true;

                /* Transation Preloader Stop */
                Student.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static PopSource(Params) {

        /* Load the Data Preloader Start */
        //StudentMigration.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/GetStudentDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                //StudentMigration.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        StudentMigration.Components.Setter({
                            TargetId: "Source",
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                StudentMigration.Components.DataProcessing(false);

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
    static PopDestination(Params) {

        /* Load the Data Preloader Start */
        //StudentMigration.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Student/GetStudentDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                //StudentMigration.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        StudentMigration.Components.Setter({
                            TargetId: "Target",
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                StudentMigration.Components.DataProcessing(false);

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