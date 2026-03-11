

/* ==== */
/* Batch Components Setter */
Batch.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.StartYear !== "undefined" ? $("#txtStartingYear").val(Param.StartYear) : $("#txtStartingYear").val("");
    typeof Param.EndYear !== "undefined" ? $("#txtEndingYear").val(Param.EndYear) : $("#txtEndingYear").val("");
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");
    typeof Param.IsActive !== "undefined" ? $('#chkActive').prop('checked', Param.IsActive) : $('#chkActive').prop('checked', false);

}
/* ==== */

/* ==== */
/* Batch Components Getter */
Batch.Components.Getter = function (Param) {

    /* Set the Starting Year & Ending Year */
    var t_StartDate = new Date(GeneralFunction.DateFormat($("#txtStartDate").val()));
    var t_EndDate = new Date(GeneralFunction.DateFormat($("#txtEndDate").val()));
    var t_StartYear = t_StartDate.getFullYear();
    var t_EndYear = t_EndDate.getFullYear();

    /* Get the Batch Response */
    var Response = {
        BatchId: $("#hdnBatchId").val(),
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        StartDate: $("#txtStartDate").val(),
        EndDate: $("#txtEndDate").val(),
        IsActive: $("#chkActive").is(':checked')
    }
    return Response;
}
/* ==== */
