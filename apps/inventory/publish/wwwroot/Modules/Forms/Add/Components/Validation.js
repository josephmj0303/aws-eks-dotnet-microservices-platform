/* ==== */
/* Form Validation Components Objects */
Form.Components.Validation = {};
/* ==== */

/* ==== */
/* Form Components Validation */
Form.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Form Components Validation Status */
Form.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Form Name Validation */
    if ($("#txtFormName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Form Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */