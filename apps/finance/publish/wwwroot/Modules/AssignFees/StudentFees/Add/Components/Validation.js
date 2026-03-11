/* ==== */
/* Assign Student Fees Validation Objects Components */
AssignStudentFees.Components.Validation = {};
/* ==== */

/* ==== */
/* Assign Student Fees Validation Components  */
AssignStudentFees.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
     $('#frmAssignFees').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            DueDate: {
                required: true
            },
            FeesAmount: {
                required: true,
                min: 1
            }
        },

        messages: {
            DueDate: {
                required: "Due Date Is Required."
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
/* Assign Student Fees Components Validation Status */
AssignStudentFees.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmAssignFees').valid()) {
        t_Boolean = false;
    }
    else if (Params.FeesCatId == 0) {
        /* ==== */
        /* Student Validation Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Fees Category Is Blank",
            Message: "Please select valid fees category from the list.",
        });
        /* ==== */
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */