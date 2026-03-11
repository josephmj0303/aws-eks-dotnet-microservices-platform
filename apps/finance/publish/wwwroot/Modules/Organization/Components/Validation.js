/* ==== */
/* Organization Validation Components Objects */
Organization.Components.Validation = {};
/* ==== */

/* ==== */
/* Organization Components Validation */
Organization.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
    /* Home Screen Validation */
    $('#frmOrganization').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            OrganizationName: {
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
            OrganizationName: {
                required: "Company Name Is Required."
            },
            Phone: {
                required: "Company Phone No Is Required."
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
/* Organization Components Validation Status */
Organization.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmOrganization').valid()) {
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */