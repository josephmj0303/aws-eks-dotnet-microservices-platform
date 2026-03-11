/* ==== */
/* Tax Validation Components Objects */
Tax.Components.Validation = {};
/* ==== */

/* ==== */
/* Tax Components Validation */
Tax.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
    /* Home Screen Validation */
    $('#frmTax').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            TaxName: {
                required: true
            },
            Phone: {
                required: true
            },
            AddressLine1: {
                required: true
            },
            AddressLine2: {
                required: true
            },
            AddressLine3: {
                required: true
            },
            City: {
                required: true
            },
            State: {
                required: true
            },
            PINCode: {
                required: true
            }
        },

        messages: {
            TaxName: {
                required: "Company Name Is Required."
            },
            Phone: {
                required: "Phone No Is Required."
            },
            AddressLine1: {
                required: "Address Line1 Is Required."
            },
            AddressLine2: {
                required: "Address Line2 Is Required."
            },
            AddressLine3: {
                required: "Address Line3 Is Required."
            },
            City: {
                required: "City Is Required."
            },
            State: {
                required: "State Is Required."
            },
            PINCode: {
                required: "PIN Code Is Required."
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
/* Tax Components Validation Status */
Tax.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmTax').valid()) {
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */