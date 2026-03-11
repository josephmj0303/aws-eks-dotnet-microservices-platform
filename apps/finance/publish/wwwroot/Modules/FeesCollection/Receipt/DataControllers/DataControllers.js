

/* ==== */
/* Assign Fees Data Controllers */
class DataControllers_FeesReceipt {

    /* Send the Data to Server */
    static Puch(Params) {

      

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetFeesReceipt",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Fees Details */
                        var ObjFessDetail = JSON.parse(Response.result.data2);
                        /* ==== */

                        /* ==== */
                        /* Set the Components Values */
                        var ObjResponse = JSON.parse(Response.result.data1);
                        ObjResponse.ClassSection = ObjFessDetail.ClassName + " " + ObjFessDetail.Section;
                        ObjResponse.StudentName = ObjFessDetail.StudentName;
                        ObjResponse.AdmissionNo = ObjFessDetail.AdmissionNo;
                        ObjResponse.PaidDate = ObjFessDetail.PaidDate;
                        ObjResponse.CollectBy = ObjFessDetail.CollectBy;
                        ObjResponse.PaymentMode = ObjFessDetail.PaymentMode;
                        ObjResponse.RecNo = ObjFessDetail.RecNo;
                        ObjResponse.Notes = ObjFessDetail.Notes;
                        ObjResponse.PaymentReference = ObjFessDetail.PaymentReference;
                        ObjResponse.DelFlag = ObjFessDetail.DelFlag;

                        FeesReceipt.Components.Setter(ObjResponse);
                        FeesReceipt.Components.Pagination.TableBody(ObjFessDetail.FeesCollectionDetails);
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