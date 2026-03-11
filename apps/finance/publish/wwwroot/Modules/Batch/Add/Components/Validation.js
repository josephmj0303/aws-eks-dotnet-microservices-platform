/* ==== */
/* Batch Validation Components Objects */
Batch.Components.Validation = {};
/* ==== */

/* ==== */
/* Batch Components Validation */
Batch.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Batch Components Validation Status */
Batch.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Starting Year Validation */
    if ($("#txtStartingYear").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Academy Start Year is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtEndingYear").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Academy End Year is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtStartDate").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Academy Start Date is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtEndDate").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Academy End Date is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */