

/* ==== */
/* Assign Student Fees Setter Components  */
AssignStudentFees.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ClassId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divClassSection", Value: Param.ClassId + "_" + Param.SecId }) : "";
    typeof Param.FeesCatId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divFeesCategory", Value: Param.FeesCatId }) : "";
    typeof Param.AdmissionNo !== "undefined" ? $("#lblAdmissionNo").html("( Admission No : " + Param.AdmissionNo + " )") : $("#lblAdmissionNo").html("");
    typeof Param.StudentName !== "undefined" ? $("#lblStudentName").html(Param.StudentName) : $("#lblStudentName").html("");
    typeof Param.StartYear !== "undefined" ? $("#lblBatch").html("( " + Param.StartYear + "-" + Param.EndYear + " )") : $("#lblBatch").html("");
    typeof Param.DueDate !== "undefined" ? $("#txtDueDate").val(GeneralFunction.DateFormat(Param.DueDate)) : $("#txtDueDate").val("");
    typeof Param.Amount !== "undefined" ? $("#txtAmount").val(parseFloat(Param.Amount).toFixed(2)) : $("#txtAmount").val("");
    typeof Param.Notes !== "undefined" ? $("#txtNotes").val(Param.Notes) : $("#txtNotes").val("");

}
/* ==== */

/* ==== */
/* Assign Student Fees Getter Components  */
AssignStudentFees.Components.Getter = function (Param) {

    /* Decleartion */
    var t_ClassId = 0, t_SecId = 0;
    /* Get the Class & Section Details */
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Value;
    var t_ClassSec = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Text;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_ClassId = t_ClassSecId.split("_")[0];
        t_SecId = t_ClassSecId.split("_")[1]
    }


    /* Get the AssignFees Response */
    var Response = {
        FeesId: $("#hdnFeesId").val(),
        FeesCatId: Dropdown.GetSelectedOption({ TargetId: ".divFeesCategory" }).Value,
        ClassId: t_ClassId,
        SecId: t_SecId,
        DueDate: $("#txtDueDate").val(),
        DueAmount: $("#txtAmount").val(),
        Notes: $("#txtNotes").val()
    }
    return Response;
}
/* ==== */

