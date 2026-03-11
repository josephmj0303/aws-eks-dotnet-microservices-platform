

/* ==== */
/* Application Form Data Controllers */
class DataControllers_ApplicationForm {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        ApplicationForm.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/ApplicationForm/SetAdmissionForm",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                ApplicationForm.Components.SetProcessingState(false);

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* ==== */
                    /* Message Box */
                    //GeneralFunction.Message({
                    //    Status: Response.status,
                    //    Title: Response.status,
                    //    Message: Response.message
                    //});
                    /* ==== */

                    /* ==== */
                    /* Response Routing */
                    if (Response.status == "Success") {

                        /* Clean Up */
                        ApplicationForm.Components.Cleaner();

                        /* Goto Back  */
                        if ($("#hdnAFFId").val() != "0") {
                            ApplicationForm.Components.Back();
                        }
                        else {
                            /* Print the Fees Receipt */
                            GeneralFunction.SetRouting("ApplicationFeesReceipt", Response.result)
                        }
                    }
                    else if (Response.status == "Re-Generate") {

                        /* Display the Conformation Dialog */
                        ApplicationFormDet.Components.Pagination.ConformationForNewRecNo(Response.message);
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
                ApplicationForm.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/ApplicationForm/GetAdmissionForm",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        ApplicationForm.Components.Setter(JSON.parse(Response.result));
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
    static PopRecNo(Params) {

        $.ajax({
            type: "POST",
            url: "/ApplicationForm/GetNextNumber",
            data: {},
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        $("#txtApplicationNo").val(Response.result);
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
    static PopAdmissionInfo(Params) {

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
                        var ObjStudentData = JSON.parse(Response.result.data1);
                        if (ObjStudentData != null) {
                            var StudentData = {
                                AFFId: "New",
                                ApplicationNo: ObjStudentData.AdmissionNo,
                                ApplicationDate: new Date(ObjStudentData.AdmissionDate),
                                StudentName: ObjStudentData.StudentName,
                                ClassName: ObjStudentData.ClassSection,
                                ParentName: ObjStudentData.FathersName,
                                ContactNo: ObjStudentData.FathersTelephoneNo,
                                FeeAmount: "",
                                PaymentType: "Cash",
                                Remarks: "",
                            }
                            ApplicationForm.Components.Setter(StudentData);
                            $("#txtFeeAmount").focus();
                        }
                        else {

                            /* ==== */
                            /* Exceoption Message Box Show */
                            GeneralFunction.Message({
                                Status: "Failure",
                                Title: "Failure",
                                Message: "No Record Found",
                            });
                            /* ==== */
                        }


                        FeesCollection.Components.PendingFeesSetter()
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