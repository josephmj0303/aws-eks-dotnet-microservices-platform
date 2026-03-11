/* ==== */
/* Fees Category Validation Components Objects */
FeesCategory.Components.Validation = {};
/* ==== */

/* ==== */
/* Fees Category Components Validation */
FeesCategory.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
     $('#frmFeesCategory').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            FeesCategory: {
                required: true
            }
        },

        messages: {
            FeesCategory: {
                required: "Fees Name Is Required."
            },
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
/* Fees Category Components Validation Status */
FeesCategory.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmFeesCategory').valid()) {
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */