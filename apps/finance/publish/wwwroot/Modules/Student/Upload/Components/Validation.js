/* ==== */
/* Student Validation Components Objects */
StudentUpload.Components.Validation = {};
/* ==== */

/* ==== */
/* Student Components Validation */
StudentUpload.Components.Validation.Initialize = function (Params) {


}
/* ==== */

/* ==== */
/* Student Components Validation Status */
StudentUpload.Components.Validation.Status = function (Params) {

    /* Declearation */
    var t_Boolean = true;

    try {

        switch (Params.Form) {
            case "UploadSheet":
                if (document.getElementById("divUploadFiles_FileUploader").files.length == 0) {
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Failure",
                        Message: "To proceed further, kindly upload the Excel sheet.",
                    });
                    t_Boolean = false;
                }
                break;

            case "Publish":
                /* ==== */
                /* Check Academy History Form Validation */
                $(StudentUpload.Components.Table.BodyId + ' tr').each(function () {
                    var cellSkippedRow = $(this).find('td').eq(StudentUpload.Components.TableColumns.IsSkipped).text().trim();
                    if (cellSkippedRow == "true") {
                        t_Boolean = false;
                        $(this).find('td').addClass("bg-warning");
                    }
                });
                /* ==== */
                break;

        }
    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
    return t_Boolean;
}
/* ==== */