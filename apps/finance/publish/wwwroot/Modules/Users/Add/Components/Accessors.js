

/* ==== */
/* User Components Setter */
User.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.FirstName !== "undefined" ? $("#txtFirstName").val(Param.FirstName) : $("#txtFirstName").val("");
    typeof Param.LastName !== "undefined" ? $("#txtLastName").val(Param.LastName) : $("#txtLastName").val("");
    typeof Param.Mobile !== "undefined" ? $("#txtContactNo").val(Param.Mobile) : $("#txtContactNo").val("");
    typeof Param.Email !== "undefined" ? $("#txtEMailId").val(Param.Email) : $("#txtEMailId").val("");
    typeof Param.Password !== "undefined" ? $("#txtPassword").val(Param.Password) : $("#txtPassword").val("");
    typeof Param.UserName !== "undefined" ? $("#txtUserName").val(Param.UserName) : $("#txtUserName").val("");
    typeof Param.RoleId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divUserRoles", Value: Param.RoleId }) : "";
}
/* ==== */

/* ==== */
/* User Components Getter */
User.Components.Getter = function (Param) {

    /* Get the User Response */
    var Response = {
        UserId: $("#hdnUserId").val(),
        FirstName: $("#txtFirstName").val(),
        LastName: $("#txtLastName").val(),
        Gender: "Male",
        Mobile: $("#txtContactNo").val(),
        Email: $("#txtEMailId").val(),
        UserName: $("#txtUserName").val(),
        Password: $("#txtPassword").val(),
        RoleId: Dropdown.GetSelectedOption({ TargetId: ".divUserRoles" }).Value
    }
    return Response;
}
/* ==== */
