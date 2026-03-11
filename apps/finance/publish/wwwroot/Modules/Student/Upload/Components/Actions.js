
/* ==== */
/* Student Components Save */
StudentUpload.Components.Save = function () {

    $('#tbdExecutionStudentDet tr').each(function () {

        /* Transation Preloader Start */
        StudentUpload.Components.SetProcessingState(true);

        /* Send Resquest Server */
        DataControllers_StudentUpload.Puch((StudentUpload.Components.Getter(this)));
    });


    /* ==== */
    /* Message Box */
    GeneralFunction.Message({
        Status: "Success",
        Title: "Success",
        Message: "The Excel data has been imported successfully."
    });
    /* ==== */

    StudentUpload.Components.Back();


}
/* ==== */

/* ==== */
/* Student Components Back */
StudentUpload.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Student Components Populate */
StudentUpload.Components.Populate = function (Params) {
    /* Load the Student Details */
    if (Params.ExcelPath != "") {

        /* Clean the Pagination Components */
        if (typeof Params !== "undefined") {

            /* Reset the Current Page Configuration */
            if (typeof Params.ResetPagination !== "undefined") {

                if (Params.ResetPagination) {
                    /* Student Academy History Pagination Clean-Up */
                    StudentUpload.Components.Setter({
                        PageNo: 1,
                        TotalPages: 1,
                        Data: []
                    });
                }

            }

            if (typeof Params.Reset !== "undefined") {
                if (Params.Reset) {

                    /* Clean the Data */
                    StudentUpload.Components.Pagination.Cleaner();
                }
            }
        }

        DataControllers_StudentUpload.PopExcelData({
            ExcelPath: Params.ExcelPath
        });
    }
    /* ==== */
}
/* ==== */


/* ==== */
/* Student Details Component Router */
StudentUpload.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "DeleteAcademy":
            StudentUpload.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */