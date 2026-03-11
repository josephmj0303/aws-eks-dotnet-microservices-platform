

/* ==== */
/* UserRole Components Setter */
UserRole.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.RoleName !== "undefined" ? $("#txtRoleName").val(Param.RoleName) : $("#txtRoleName").val("");

}
/* ==== */

/* ==== */
/* UserRole Components Getter */
UserRole.Components.Getter = function (Param) {

    /* Get the UserRole Response */
    var Response = {
        RoleId: $("#hdnUserRoleId").val(),
        RoleName: $("#txtRoleName").val()
    }
    return Response;
}
/* ==== */
