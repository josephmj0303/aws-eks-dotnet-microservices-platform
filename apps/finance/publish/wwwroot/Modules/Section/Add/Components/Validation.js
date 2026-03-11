/* ==== */
/* Section Validation Components Objects */
Section.Components.Validation = {};
/* ==== */

/* ==== */
/* Section Components Validation */
Section.Components.Validation.Initialize = function (Params) {
    
}
/* ==== */

/* ==== */
/* Organization Components Validation Status */
Section.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Class Name Validation */
    if ($("#txtSectionName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Group Name is Required"
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