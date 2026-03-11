

/* ==== */
/* Login Components Setter */
Login.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.UserName !== "undefined" ? $("#txtUserName").val(Param.UserName) : $("#txtUserName").val("");
    typeof Param.Password !== "undefined" ? $("#txtPassword").val(Param.Password) : $("#txtPassword").val("");

}
/* ==== */

/* ==== */
/* Login Components Getter */
Login.Components.Getter = function (Param) {

    /* Get the Login Response */
    let Response = {
        UserName: $("#txtUserName").val(),
        Password: $("#txtPassword").val(),
        IsRememberMe: $('.remember-me').prop("checked")
    }
    return Response;
}
/* ==== */


/* ==== */
/* Login Components Fotgot Password Getter */
Login.Components.FotgotPasswordGetter = function (Param) {

    /* Get the Recovery E-Mail */
    var Response = {
        Email: $("#txtRecoveryEMail").val()
    }
    return Response;
}
/* ==== */

/* ==== */
/* Login Components Registration Getter */
Login.Components.RegistrationGetter = function (Param) {
    let Response = {
        FirstName: $("#txtRName").val(),
        Mobile: $("#txtRUsername").val(),
        Email: $("#txtREMail").val(),
        UserName: $("#txtRUsername").val(),
        Password: $("#txtRPassword").val(),
        UserType: "Student",
        AccountType: "Public",
        OrgId: $("#hdnOrgId").val(),
        Gender: "Male"
    }
    return Response;
}
/* ==== */

/* ==== */
/* Login Components Self-Introduction Getter */
Login.Components.SelfIntroductionGetter = function (Param) {

    /* Declearation */
    var lstGrades = [];

    /* ==== */
    /* Bind the Class */
    for (let i = 0; i < $(".ChkGamesItems").length; i++) {
        if ($($(".ChkGamesItems")[i]).prop("checked")) {
            /* Active Games */
            lstGrades.push($($(".ChkGamesItems")[i]).attr("data-values"));
        }
    }
    /* ==== */

    let Response = {
        Id: $("#hdnRegUserId").val(),
        UserType: $("#rdoStudent").is(':checked') ? "Student" : "Teacher",
        Class: lstGrades
    }
    return Response;
}
/* ==== */

/* ==== */
/* Login Components Mobile OTP Getter */
Login.Components.MobileOTPGetter = function (Param) {

    /* Get the Login Response */
    var t_MobileNo = $("#txtVContactNo").val();
    let Response = {
        Mobile: t_MobileNo
    }
    $("#lblVerifyMobileNo").html(t_MobileNo);
    return Response;
}
/* ==== */




/* ==== */
/* Login Components Mobile OTP Getter */
Login.Components.OTPGetter = function (Param) {

    /* Get the Login Response */
    let Response = {
        MobileOTP: $("#txtOTPContactNo").val()
    }
    return Response;
}
/* ==== */
