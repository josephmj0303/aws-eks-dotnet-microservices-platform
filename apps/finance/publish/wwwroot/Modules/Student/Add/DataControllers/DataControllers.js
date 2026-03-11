

/* ==== */
/* Student Data Controllers */
class DataControllers_Student {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        Student.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Student/SetStudent",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                Student.Components.SetProcessingState(false);

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
                        Student.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.UserRoles !== "undefined") {
                                Dropdown.AdmissionYear.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divAdmissionYear", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnStudentId").val() != "0") Student.Components.Back();
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
                Student.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

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
                        ObjResponse.StudentImagePath = (ObjResponse.IsPushed ? ObjResponse.CloudStorageLink : ObjResponse.LocalStorageURL);
                        ObjResponse.AcademyHistory = JSON.parse(Response.result.data2);
                        Student.Components.Setter(ObjResponse);
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