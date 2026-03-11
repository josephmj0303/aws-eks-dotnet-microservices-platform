/* ==== */
/* Login Validation Components Objects */
Login.Components.Validation = {};
/* ==== */

/* ==== */
/* Login Components Validation */
Login.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
    $('#frmLogin').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            UserName: {
                required: true
            },
            Password: {
                required: true
            }
        },

        messages: {
            UserName: {
                required: "Username is required."
            },
            Password: {
                required: "Password is required."
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

    /* Forgot Password Validation */
    $('#frmforgotpassword').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            RecoveryEMail: {
                required: true
            }
        },

        messages: {
            RecoveryEMail: {
                required: "Recovery EMail is required."
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

    /* Registration Validation */
    $('#frmregistration').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            Name: {
                required: true
            },
            EMail: {
                required: true,
                email: true
                // remote: {
                //     url: "/UserAccount/IsValidEmail",
                //     type: "post"
                // }
            },
            Username: {
                required: true,
                remote: {
                    url: "/UserAccount/IsValidUserName",
                    type: "post"
                }
            },
            Password: {
                required: true,
                minlength: 5
            },
            CPassword: {
                equalTo: "#txtRPassword",
                required: true,
                minlength: 5
            }
        },

        messages: {
            Name: {
                required: "Name is required."
            },
            EMail: {
                required: "EMail is required.",
                remote: "This E-mailid is already taken. Try another."
            },
            Username: {
                required: "Mobile is required.",
                remote: "This Mobile number is already taken. Try another."
            },
            Password: {
                required: "Password is required.",
                minlength: "Password atleast 5 characters long."
            },
            CPassword: {
                required: "Confirm Password is required.",
                minlength: "Password atleast 5 characters long."
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

    /* Registration OTP Validation */
    $('#frmVerfication').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            VContactNo: {
                required: true,
                minlength: 10,
                maxlength: 10,
                remote: {
                    url: "/UserAccount/IsValidUserName",
                    type: "post",
                    data: {
                        UserName: function () {
                            return $("#txtVContactNo").val();
                        }
                    }
                }
            }
        },

        messages: {
            VContactNo: {
                required: "Mobile is required.",
                remote: "This Mobile number is already taken. Try another."
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
/* Login Components Validation Status */
Login.Components.Validation.Status = function (Params) {

    var t_Boolean = false;
    switch (Params.Form) {
        case "Login":
            if (!$('#frmLogin').valid()) {
                t_Boolean = false;
            } else {
                t_Boolean = true;
            }
            break;

        case "ForgotPassword":
            if (!$('#frmforgotpassword').valid()) {
                t_Boolean = false;
            } else {
                t_Boolean = true;
            }
            break;

        case "Registration":
            if (!$('#frmregistration').valid()) {
                t_Boolean = false;
            } else {
                t_Boolean = true;
            }
            break;

        case "SelfIntroduction":
            if ($(".ChkGamesItems").length == 0) {
                /* ==== */
                /* Error Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Choose your game",
                });
                /* ==== */
            } else {
                t_Boolean = true;
            }
            break;

        case "SendOTP":
            if (!$('#frmVerfication').valid()) {
                t_Boolean = false;
            } else {
                t_Boolean = true;
            }
            break;

        case "VerifyOTP":

            /* Get the User OTP Values */
            let ObjCurrentOTP = Login.Components.OTPGetter();
            if (ObjCurrentOTP != null) {
                if (Login.Components.MobileOTP != ObjCurrentOTP.MobileOTP) {
                    /* ==== */
                    /* Error Message Box Show */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Failure",
                        Message: "Mobile OTP entered is incorrect, Try again",
                    });
                    t_Boolean = false;
                    /* ==== */
                }
                else{
                    t_Boolean = true;
                }
            }
            break;
    }
    return t_Boolean;
}
/* ==== */