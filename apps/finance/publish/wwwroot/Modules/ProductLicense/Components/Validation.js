/* ==== */
/* Product License Validation Components Objects */
ProductLicense.Components.Validation = {};
/* ==== */

/* ==== */
/* Product License Components Validation */
ProductLicense.Components.Validation.Initialize = function (Params) {

    /* Registration OTP Validation */
    $('#frmProductLicense').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            LicenseKey: {
                required: true,
                minlength: 44,
                maxlength: 44,
            }
        },
        messages: {
            LicenseKey: {
                required: "License Key is required.",
                minlength : "License Key Must be 44 characters",
                maxlength : "License Key Must be 44 characters",
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
/* Product License Components Validation Status */
ProductLicense.Components.Validation.Status = function (Params) {

    var t_Boolean = false;
    switch (Params.Form) {
        case "ProductLicense":
            if (!$('#frmProductLicense').valid()) {
                t_Boolean = false;
            } else {
                t_Boolean = true;
            }
            break;

    }
    return t_Boolean;
}
/* ==== */