

/* ==== */
/* Customer Components Setter */
Customer.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.CustomerName !== "undefined" ? $("#txtCustomerName").val(Param.CustomerName) : $("#txtCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtCutomerContactNo").val(Param.ContactNo) : $("#txtCutomerContactNo").val("");
    typeof Param.EMail !== "undefined" ? $("#txtCutomerEMail").val(Param.EMail) : $("#txtCutomerEMail").val("");
    typeof Param.AddressLine1 !== "undefined" ? $("#txtAddressLine1").val(Param.AddressLine1) : $("#txtAddressLine1").val("");
    typeof Param.AddressLine2 !== "undefined" ? $("#txtAddressLine2").val(Param.AddressLine2) : $("#txtAddressLine2").val("");
    typeof Param.PostCode !== "undefined" ? $("#txtPostCode").val(Param.PostCode) : $("#txtPostCode").val("");
    typeof Param.City !== "undefined" ? $("#txtCity").val(Param.City) : $("#txtCity").val("");
    typeof Param.State !== "undefined" ? $("#txtState").val(Param.State) : $("#txtState").val("");
    typeof Param.GSTNo !== "undefined" ? $("#txtGSTNo").val(Param.GSTNo) : $("#txtGSTNo").val("");

}
/* ==== */

/* ==== */
/* Customer Components Getter */
Customer.Components.Getter = function (Param) {

    /* Get the Customer Response */
    var Response = {
        CustId: $("#hdnCustId").val(),
        CustomerName: $("#txtCustomerName").val(),
        EMail: $("#txtCutomerEMail").val(),
        ContactNo: $("#txtCutomerContactNo").val(),
        AddressLine1: $("#txtAddressLine1").val(),
        AddressLine2: $("#txtAddressLine2").val(),
        PostCode: $("#txtPostCode").val(),
        City: $("#txtCity").val(),
        State: $("#txtState").val(),
        GSTNo: $("#txtGSTNo").val()
    }
    return Response;
}
/* ==== */
