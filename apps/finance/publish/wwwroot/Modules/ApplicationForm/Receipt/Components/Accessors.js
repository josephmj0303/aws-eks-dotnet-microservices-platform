

/* ==== */
/* Application Fees Receipt Setter Components  */
ApplicationFeesReceipt.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.OrganizationName !== "undefined" ? $(".lblOrganizationName").html(Param.OrganizationName) : $(".lblOrganizationName").html("");
    typeof Param.AddressLine1 !== "undefined" ? $(".lblAddressLine1").html(Param.AddressLine1) : $(".lblAddressLine1").html("");
    typeof Param.AddressLine2 !== "undefined" ? $(".lblAddressLine2").html(Param.AddressLine2) : $(".lblAddressLine2").html("");
    typeof Param.AddressLine3 !== "undefined" ? $(".lblAddressLine3").html("Land Mark : " + Param.AddressLine3) : $(".lblAddressLine3").html("");
    typeof Param.Phone !== "undefined" ? $(".lblPhone").html("Phone : " + Param.Phone) : $(".lblPhone").html("");
    typeof Param.City !== "undefined" ? $(".lblCity").html(Param.City + "-" + Param.PINCode) : $(".lblCity").html("");
    typeof Param.State !== "undefined" ? $(".lblState").html(Param.State) : $(".lblState").html("");
    typeof Param.StudentName !== "undefined" ? $(".lblStudentName").html(Param.StudentName) : $(".lblStudentName").html("");
    typeof Param.ClassSection !== "undefined" ? $(".lblClassSection").html(Param.ClassSection) : $(".lblClassSection").html("");
    typeof Param.AdmissionNo !== "undefined" ? $(".lblAdmissionNo").html(Param.AdmissionNo) : $(".lblAdmissionNo").html("");
    typeof Param.RecNo !== "undefined" ? $(".lblReceiptNo").html(Param.RecNo) : $(".lblReceiptNo").html("");
    typeof Param.PaidDate !== "undefined" ? $(".lblPaidOn").html(GeneralFunction.DateFormat(Param.PaidDate, "dd-MM-yyyy HH:mm")) : $(".lblPaidOn").html("");
    typeof Param.CollectBy !== "undefined" ? $(".lblCollectBy").html(Param.CollectBy) : $(".lblCollectBy").html("");
    typeof Param.Notes !== "undefined" ? $(".lblNotes").html(Param.Notes) : $(".lblNotes").html("");
    typeof Param.PaymentMode !== "undefined" ? $(".lblPaymentMode").html(Param.PaymentMode) : $(".lblPaymentMode").html("");
    typeof Param.PaymentReference !== "undefined" ? $(".lblPaymentReference").html(Param.PaymentReference) : $(".lblPaymentReference").html("");
    if (typeof Param.DelFlag !== "undefined") {
        /* Bind the Receipt Title */
        $(".lblReceiptName").html(Param.DelFlag == 0 ? "RECEIPT" : "CANCEL RECEIPT");
        $(".lblReceiptName").addClass(Param.DelFlag == 0 ? "green" : "red");

    }

}
/* ==== */

/* ==== */
/* Application Fees Receipt Getter Components */
ApplicationFeesReceipt.Components.Getter = function (Param) {

    /* Get the Fees Details */
    var Response = {
        AFFId: $("#hdnAFFId").val()
    }
    return Response;
}
/* ==== */
