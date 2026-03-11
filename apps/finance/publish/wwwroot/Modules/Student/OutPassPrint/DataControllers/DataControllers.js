

/* ==== */
/* Assign Fees Data Controllers */
class DataControllers_OutPassPrint {

    /* Send the Data to Server */
    static Puch(Params) {

      

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/Student/GetOutPassPrintDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {
                        
                        /* ==== */
                        /* Set the Components Values */
                        var ObjResponse = JSON.parse(Response.result.data1);
                        ObjResponse.OutPassDetails = JSON.parse(Response.result.data2);
                        OutPassPrint.Components.Setter(ObjResponse);
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