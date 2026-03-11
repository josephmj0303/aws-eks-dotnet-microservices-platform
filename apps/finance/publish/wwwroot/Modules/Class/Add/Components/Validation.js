/* ==== */
/* Class Validation Components Objects */
Class.Components.Validation = {};
/* ==== */

/* ==== */
/* Class Components Validation */
Class.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Class Components Validation Status */
Class.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Class Name Validation */
    if ($("#txtClassName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Team Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtSequenceNo").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Sequence is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */