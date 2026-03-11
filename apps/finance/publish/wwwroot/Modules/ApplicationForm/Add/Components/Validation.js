/* ==== */
/* ApplicationForm.Validation Components Objects */
ApplicationForm.Components.Validation = {};
/* ==== */

/* ==== */
/* ApplicationForm.Components Validation */
ApplicationForm.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* ApplicationForm.Components Validation Status */
ApplicationForm.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Application Form Validation */
    if ($("#txtAdmissionNo").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Admission No is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtApplicationDate").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Application Date is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtStudentName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Student Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtClassName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Class Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtContactNo").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Contact No is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if (parseFloat($("#txtFeeAmount").val() * 1) == 0) {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Fee Amount is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */