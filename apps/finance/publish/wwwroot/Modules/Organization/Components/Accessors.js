

/* ==== */
/* Organization Components Setter */
Organization.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.OrganizationName !== "undefined" ? $("#txtOrganizationName").val(Param.OrganizationName) : $("#txtOrganizationName").val("");
    typeof Param.Phone !== "undefined" ? $("#txtPhone").val(Param.Phone) : $("#txtPhone").val("");
    typeof Param.AddressLine1 !== "undefined" ? $("#txtAddressLine1").val(Param.AddressLine1) : $("#txtOrganizationName").val("");
    typeof Param.AddressLine2 !== "undefined" ? $("#txtAddressLine2").val(Param.AddressLine2) : $("#txtOrganizationName").val("");
    typeof Param.AddressLine3 !== "undefined" ? $("#txtAddressLine3").val(Param.AddressLine3) : $("#txtAddressLine3").val("");
    typeof Param.City !== "undefined" ? $("#txtCity").val(Param.City) : $("#txtCity").val("");
    typeof Param.State !== "undefined" ? $("#txtState").val(Param.State) : $("#txtState").val("");
    typeof Param.PINCode !== "undefined" ? $("#txtPINCode").val(Param.PINCode) : $("#txtPINCode").val("");

}
/* ==== */

/* ==== */
/* Organization Components Getter */
Organization.Components.Getter = function (Param) {

    /* Get the Organization Response */
    var Response = {
        OrgId: $("#hdnOrgId").val(),
        OrganizationName: $("#txtOrganizationName").val(),
        Phone: $("#txtPhone").val(),
        AddressLine1: $("#txtAddressLine1").val(),
        AddressLine2: $("#txtAddressLine2").val(),
        AddressLine3: $("#txtAddressLine3").val(),
        City: $("#txtCity").val(),
        State: $("#txtState").val(),
        PINCode: $("#txtPINCode").val()
    }
    return Response;
}
/* ==== */
