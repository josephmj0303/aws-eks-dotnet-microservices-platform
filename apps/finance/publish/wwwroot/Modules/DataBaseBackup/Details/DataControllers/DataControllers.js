

/* ==== */
/* DataBase Backup Details Data Controllers */
class DataControllers_DataBaseBackupDet {


    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        DataBaseBackupDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/DataBaseBackup/GetDataBaseBackupDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                DataBaseBackupDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        DataBaseBackupDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                DataBaseBackupDet.Components.DataProcessing(false);

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
    static Puch(Params) {

        /* Transation Preloader Start */
        DataBaseBackupDet.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/DataBaseBackup/SetDataBaseBackup",
            dataType: "text",
            async: true,
            data: {},
            success: function (Response) {

                /* Transation Preloader Start */
                DataBaseBackupDet.Components.SetProcessingState(false);

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

                        /* Clean the Data */
                        DataBaseBackupDet.Components.Pagination.Cleaner();

                        /* Call the Class Populate */
                        DataBaseBackupDet.Components.Populate({
                            Reset: true,
                            ResetPagination: false
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Transation Preloader Start */
                DataBaseBackupDet.Components.SetProcessingState(false);

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