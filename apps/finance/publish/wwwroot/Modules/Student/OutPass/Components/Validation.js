/* ==== */
/* OutPass Validation Components Objects */
OutPass.Components.Validation = {};
/* ==== */

/* ==== */
/* OutPass Components Validation */
OutPass.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
     $('#frmOutPass').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            OutPassNo: {
                required: true
            },
            OutPassDate: {
                required: true
            },
            AdmissionNo: {
                required: true
            },
            AttenderName: {
                required: true
            },
            Relation: {
                required: true
            },
            Place: {
                required: true
            },
            PhoneNo: {
                required: true
            }
        },

        messages: {
            OutPassNo: {
                required: "Out Pass No Is Required."
            },
            OutPassDate: {
                required: "Out Pass Date Is Required."
            },
            AdmissionNo: {
                required: "Admission No Is Required."
            },
            AttenderName: {
                required: "Attender Name Is Required."
            },
            Relation: {
                required: "Relation Is Required."
            },
            Place: {
                required: "Place Is Required."
            },
            PhoneNo: {
                required: "Phone No Is Required."
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
/* OutPass Components Validation Status */
OutPass.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmOutPass').valid()) {
        t_Boolean = false;
    }
    else if (typeof OutPass.Components.CurrentStudentData.StudentDetails === "undefined") {
        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: "Admission No Is Not Valid",
        });
        /* ==== */
        t_Boolean = false;
    }
    else if ($("#ImgAttenderCapturedPhoto").attr("src") == "/assets/images/placeholder/Profile.jpg") {
        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: "Attender Image Is Required",
        });
        /* ==== */
        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */