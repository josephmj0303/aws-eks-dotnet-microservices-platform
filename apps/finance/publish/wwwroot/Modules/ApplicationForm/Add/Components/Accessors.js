

/* ==== */
/* Application Form Setter Components  */
ApplicationForm.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ApplicationNo !== "undefined" ? $("#txtAdmissionNo").val(Param.ApplicationNo) : $("#txtAdmissionNo").val("");
    typeof Param.ApplicationDate !== "undefined" ? $("#txtApplicationDate").val(GeneralFunction.DateFormat(Param.ApplicationDate)) : $("#txtApplicationDate").val("");
    typeof Param.StudentName !== "undefined" ? $("#txtStudentName").val(Param.StudentName) : $("#txtStudentName").val("");
    typeof Param.ClassName !== "undefined" ? $("#txtClassName").val(Param.ClassName) : $("#txtClassName").val("");
    typeof Param.ParentName !== "undefined" ? $("#txtParentName").val(Param.ParentName) : $("#txtParentName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtContactNo").val(Param.ContactNo) : $("#txtContactNo").val("");
    typeof Param.FeeAmount !== "undefined" ? $("#txtFeeAmount").val(Param.FeeAmount) : $("#txtFeeAmount").val("");
    typeof Param.Remarks !== "undefined" ? $("#txtRemarks").val(Param.Remarks) : $("#txtRemarks").val("");

    if(typeof Param.PaymentType !== "undefined") {
        switch (Param.PaymentType) {
            case "Cash":
                /* Enable Cash */
                $('#rdbCash').prop('checked', true);
                break;
            case "Bank Transfer":
                /* Enable Bank Transfer */
                $('#rdbOnline').prop('checked', true);
                break;

            default:
                $('#rdbCash').prop('checked', true);
                break;
        }
        typeof Param.PaymentReference !== "undefined" ? $("#txtTransferReference").val(Param.PaymentReference) : $("#txtTransferReference").val("");
    }

    /* Payment Mode Visiblity */
    ApplicationForm.Components.PaymentModeVisiblity();

}
/* ==== */

/* ==== */
/* Application Form Getter Components  */
ApplicationForm.Components.Getter = function (Param) {

    /* Get the ApplicationForm.Response */
    var Response = {
        AFFId: $("#hdnAFFId").val(),
        ApplicationNo: $("#txtAdmissionNo").val(),
        ApplicationDate: $("#txtApplicationDate").val(),
        StudentName: $("#txtStudentName").val(),
        ClassName: $("#txtClassName").val(),
        ParentName: $("#txtParentName").val(),
        ContactNo: $("#txtContactNo").val(),
        FeeAmount: $("#txtFeeAmount").val(),
        PaymentType: $('#rdbCash').is(':checked') ? "Cash" : "Bank Transfer",
        PaymentReference: $("#txtTransferReference").val(),
        Remarks: $("#txtRemarks").val()
    }
    return Response;
}
/* ==== */



/* ==== */
/* Payment Mode Based Visiblity */
ApplicationForm.Components.PaymentModeVisiblity = function () {
    if ($('#rdbCash').is(':checked')) {
        $(".divReference").hide();
    }
    else {
        $(".divReference").show();
    }
}
/* ==== */