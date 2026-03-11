/* ==== */
/* Dashboard Details Component Setter */
Dashboard.Components.QuickSummarySetter = function (Param) {

    /* Student Details */
    typeof Param.TotalMaleStudent !== "undefined" ? $(".lblMaleCount").html(Param.TotalMaleStudent) : $(".lblMaleCount").html("0");
    typeof Param.TotalFeMaleStudent !== "undefined" ? $(".lblFeMaleCount").html(Param.TotalFeMaleStudent) : $(".lblFeMaleCount").html("0");

    /* Admission Details */
    typeof Param.TotalAdmission !== "undefined" ? $(".TotalAdmission").html(Param.TotalAdmission) : $(".TotalAdmission").html("0");
    typeof Param.TotalStudent !== "undefined" ? $(".TotalActiveStudent").html(Param.TotalStudent) : $(".TotalActiveStudent").html("0");
    typeof Param.TotalDiscontinueStudent !== "undefined" ? $(".TotalDiscontinueStudent").html(Param.TotalDiscontinueStudent) : $(".TotalDiscontinueStudent").html("0");

    /* Outstanding Summery */
    typeof Param.TotalFeesAmount !== "undefined" ? $(".TotalPayableAmount").html(parseFloat(Param.TotalFeesAmount).toFixed(2)) : $(".TotalPayableAmount").html("0.00");
    typeof Param.TotalCollectionAmount !== "undefined" ? $(".TotalPaidAmount").html(parseFloat(Param.TotalCollectionAmount).toFixed(2)) : $(".TotalPaidAmount").html("0.00");
    typeof Param.TotalFeesAmount !== "undefined" ? $(".TotalBalanceAmount").html(parseFloat(Param.TotalFeesAmount - Param.TotalCollectionAmount).toFixed(2)) : $(".TotalBalanceAmount").html("0.00");

    /* Receipt Summery */
    typeof Param.TotalReceipt !== "undefined" ? $(".TotalReceiptCount").html(parseInt(Param.TotalReceipt)) : $(".TotalReceiptCount").html("0");
    typeof Param.TotalCancelReceipt !== "undefined" ? $(".TotalCancelReceipt").html(parseInt(Param.TotalCancelReceipt)) : $(".TotalCancelReceipt").html("0");
    typeof Param.TotalReceiptAmount !== "undefined" ? $(".TotalReceiptAmount").html(parseFloat(Param.TotalReceiptAmount).toFixed(2)) : $(".TotalReceiptAmount").html("0.00");


}
/* ==== */

/* ==== */
/* Dashboard Details Component Setter */
Dashboard.Components.CollectionSetter = function (Param) {

    /* Receipt Summery */
    typeof Param.TotalDayReceipt !== "undefined" ? $(".TotalDayReceiptCount").html(parseInt(Param.TotalDayReceipt)) : $(".TotalDayReceiptCount").html("0");
    typeof Param.TotalDayReceiptAmount !== "undefined" ? $(".TotalDayReceiptAmount").html(parseFloat(Param.TotalDayReceiptAmount).toFixed(2)) : $(".TotalDayReceiptAmount").html("0.00");

    typeof Param.TotalApplicationReceipt !== "undefined" ? $(".TotalApplicationReceipt").html(parseInt(Param.TotalApplicationReceipt)) : $(".TotalApplicationReceipt").html("0");
    typeof Param.TotalDayApplicationReceiptAmount !== "undefined" ? $(".TotalDayApplicationReceiptAmount").html(parseFloat(Param.TotalDayApplicationReceiptAmount).toFixed(2)) : $(".TotalDayApplicationReceiptAmount").html("0.00");

}
/* ==== */


/* ==== */
/* Dashboard Details Component Getter */
Dashboard.Components.SummeryGetter = function (Param) {

    /* Get the Admistion Year */
    var t_StartYear = '2023'; var t_EndYear = '2024';
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1];
    }

    /* Get the Component Values */
    var Response = {
        StartDate: DateRange.GetDate().StartDate,
        EndDate: DateRange.GetDate().EndDate,
    }
    return Response;
}
/* ==== */


/* ==== */
/* Dashboard Details Component Getter */
Dashboard.Components.CollectionGetter = function (Param) {

    /* Get the Component Values */
    var Response = {
        StartDate: DateRange.GetDate().StartDate,
        EndDate: DateRange.GetDate().EndDate,
    }
    return Response;
}
/* ==== */
