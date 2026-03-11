/* ==== */
/* Assign Fees Validation Components Objects */
OutPassPrint.Components.Validation = {};
/* ==== */

/* ==== */
/* Assign Fees Components Validation */
OutPassPrint.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
    $('#frmOutPass').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            AdmissionNo: {
                required: true
            },
            PaidDate: {
                required: true
            }
        },

        messages: {
            AdmissionNo: {
                required: "Admission No Is Required."
            },
            PaidDate: {
                required: "Paid Date Is Required."
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
OutPassPrint.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmOutPassPrint').valid()) {
        t_Boolean = false;
    }
    else if ($(OutPassPrint.Components.Table.BodyId + " tr").length == 0) {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Fees Information Is Needed, Please complete the fees information before moving on."
        });
        /* ==== */
        t_Boolean = false;

    }
    return t_Boolean;
}
/* ==== */