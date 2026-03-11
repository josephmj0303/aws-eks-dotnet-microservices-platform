

/* ==== */
/* ProductLicense Components Setter */
ProductLicense.Components.Setter = function (Param) {

    /* Set the Component Values */

}
/* ==== */

/* ==== */
/* ProductLicense Components Getter */
ProductLicense.Components.Getter = function (Param) {

    /* Get the ProductLicense Response */
    let Response = {
        ProductKey: $.trim($(".lblProductCode").html()),
        LicenseKey: $("#txtLicenseKey").val()
    }
    return Response;
}
/* ==== */
