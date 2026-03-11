

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_AssignFeesDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        AssignFeesDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/AssignFees/GetAssignFeesDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                AssignFeesDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        AssignFeesDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                AssignFeesDet.Components.DataProcessing(false);

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

    /* Delete the Data from Server */
    static Delete(Params) {

        $.ajax({
            type: "POST",
            url: "/AssignFees/DeleteAssignFees",
            dataType: "text",
            async: true,
            data: Params,
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
                        /* Clear the Table Data */
                        AssignFeesDet.Components.Pagination.Cleaner();

                        /* Get the Assign Fees Details */
                        AssignFeesDet.Components.Populate({
                            Reset: false,
                            ResetPagination: false
                        });
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