

/* ==== */
/* Assign Fees Details Data Controllers */
class DataControllers_FeesCollectionDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        FeesCollectionDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/FeesCollection/GetFeesCollectionDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                FeesCollectionDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        FeesCollectionDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data),
                            AdditionalValues: Response.result.value.additionalValues
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                FeesCollectionDet.Components.DataProcessing(false);

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
            url: "/FeesCollection/DeleteFeesCollection",
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

                        if (typeof StudentSummary !== "undefined") {
                            if (document.getElementById("tbdSummeryFeesCollectionDet") != null) {
                                /* Clear the Table */
                                $("#tbdSummeryFeesCollectionDet").html("");
                                /* Remove the Row */
                                StudentSummary.Components.PopulateReceipt();
                            }
                        }

                        /* Clear the Table Data */
                        FeesCollectionDet.Components.Pagination.Cleaner();

                        /* Load the Fees Details */
                        FeesCollectionDet.Components.Populate({
                            Reset: true,
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