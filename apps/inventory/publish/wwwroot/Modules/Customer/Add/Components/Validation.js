/* ==== */
/* Customer Validation Components Objects */
Customer.Components.Validation = {};
/* ==== */

/* ==== */
/* Customer Components Validation */
Customer.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Customer Components Validation Status */
Customer.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* Customer Name Validation */
    if ($("#txtCustomerName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Buyers Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtCutomerContactNo").val() == "") {

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
    return t_Boolean;
}
/* ==== */