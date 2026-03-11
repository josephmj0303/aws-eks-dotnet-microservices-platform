

/* ==== */
/* Section Details Data Controllers */
class DataControllers_StudentPromotion {

      /* Send the Data to Server */
      static Puch(Params) {

        $.ajax({
            type: "POST",
            url: "/Student/SetPromotion",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* Update the Completed Status */
                    $(".RN" + Response.result).find(".Status").html("<i class=\"fa fa-check green bigger-120\"></i>")

                    /* Progress Percent */
                    StudentPromotion.Components.CompletedPercent += StudentPromotion.Components.RecordPercent;
                    StudentPromotion.Components.SetProgressPercent(StudentPromotion.Components.CompletedPercent + "%");

                    if (StudentPromotion.Components.CompletedPercent >= 99) {
                        
                        /* Transation Preloader Stop */
                        StudentPromotion.Components.SetProcessingState(false);

                        Dropdown.AdmissionYear.LoadData({ TargetId: ".divSearchAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });

                        /* ==== */
                        /* Message Box */
                        GeneralFunction.Message({
                            Status: "Success",
                            Title: "Migration",
                            Message: "Migration has been completed successfully"
                        });
                        /* ==== */
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

                StudentPromotion.Components.IsCanceled = true;

                /* Transation Preloader Stop */
                Student.Components.SetProcessingState(false);
            }
        });

    }


    /* Delete the Data from Server */
    static Delete(Params) {

        $.ajax({
            type: "POST",
            url: "/Section/DeleteSection",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);

                    /* ==== */
                    /* Message */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message
                    });
                    /* ==== */

                    if (Response.status == "Success") {
                        /* Refresh */
                        $(".RN" + Params.SecId).remove();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.ClassSection !== "undefined") {
                                Dropdown.ClassSection.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divClassSection", ComponentValue: 0 });
                            }
                        }
                    }
                }
            },
            error: function (req, status, error) {
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