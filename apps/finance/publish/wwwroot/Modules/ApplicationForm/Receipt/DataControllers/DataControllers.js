

/* ==== */
/* pplication Fees Receipt Data Controllers */
class DataControllers_ApplicationFeesReceipt {

    /* Send the Data to Server */
    static Puch(Params) {

      

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/ApplicationForm/GetFeesReceipt",
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
                        ObjResponse.ClassSection = ObjFessDetail.ClassName;
                        ObjResponse.StudentName = ObjFessDetail.StudentName;
                        ObjResponse.AdmissionNo = ObjFessDetail.ApplicationNo;
                        ObjResponse.PaidDate = ObjFessDetail.PaidDate;
                        ObjResponse.CollectBy = ObjFessDetail.CollectBy;
                        ObjResponse.PaymentMode = ObjFessDetail.PaymentMode;
                        ObjResponse.PaymentReference = ObjFessDetail.PaymentReference;
                        ObjResponse.RecNo = ObjFessDetail.RecNo;
                        ObjResponse.Notes = ObjFessDetail.Notes;
                        ObjResponse.DelFlag = ObjFessDetail.DelFlag;

                        ApplicationFeesReceipt.Components.Setter(ObjResponse);
                        ApplicationFeesReceipt.Components.Pagination.TableBody([{
                            FeesId: 1,
                            FeesName: "ADMISSION FEE",
                            PaidAmount: parseFloat(ObjFessDetail.FeeAmount).toFixed(2)
                        }]);
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