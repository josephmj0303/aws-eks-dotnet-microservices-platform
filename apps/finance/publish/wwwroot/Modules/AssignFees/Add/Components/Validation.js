/* ==== */
/* Assign Fees Validation Components Objects */
AssignFees.Components.Validation = {};
/* ==== */

/* ==== */
/* Assign Fees Components Validation */
AssignFees.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
     $('#frmAssignFees').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            AssignFees: {
                required: true
            },
            FeesAmount: {
                required: true,
                min: 1
            }
        },

        messages: {
            AssignFees: {
                required: "Fees Name Is Required."
            },
            FeesAmount: {
                required: "Amount Is Required."
            }
        },

        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },

        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error'); //.addClass('has-info');
            $(e).remove();
        }
    });

}
/* ==== */

/* ==== */
/* Assign Fees Components Validation Status */
AssignFees.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmAssignFees').valid()) {
        t_Boolean = false;
    }
    else if (Params.Details.length == 0) {
        /* ==== */
        /* Student Validation Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Student Is Blank",
            Message: "Please select at least one student from the list by ticking the corresponding checkbox(es).",
        });
        /* ==== */
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */