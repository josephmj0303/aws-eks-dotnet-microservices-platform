/* ==== */
/* User Validation Components Objects */
User.Components.Validation = {};
/* ==== */

/* ==== */
/* User Components Validation */
User.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Organization Components Validation Status */
User.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* User Name Validation */
    if ($("#txtFirstName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "First Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtUserName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "UserName is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    else if ($("#txtPassword").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Password is Required"
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
    return t_Boolean;
}
/* ==== */