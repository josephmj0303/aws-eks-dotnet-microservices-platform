/* ==== */
/* UserRole Validation Components Objects */
UserRole.Components.Validation = {};
/* ==== */

/* ==== */
/* UserRole Components Validation */
UserRole.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Organization Components Validation Status */
UserRole.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    /* UserRole Name Validation */
    if ($("#txtRoleName").val() == "") {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Role Name is Required"
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */