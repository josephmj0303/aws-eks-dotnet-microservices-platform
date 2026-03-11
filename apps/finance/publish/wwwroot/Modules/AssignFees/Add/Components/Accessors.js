

/* ==== */
/* Assign Fees Components Setter */
AssignFees.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ClassId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divClass", Value: Param.ClassId }) : "";
    typeof Param.FeesCatId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divFeesCategory", Value: Param.FeesCatId }) : "";
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");
    typeof Param.DueDate !== "undefined" ? $("#txtDueDate").val(GeneralFunction.DateFormat(Param.DueDate)) : $("#txtDueDate").val("");
    typeof Param.Amount !== "undefined" ? $("#txtAmount").val(parseFloat(Param.Amount).toFixed(2)) : $("#txtAmount").val("");
    typeof Param.Notes !== "undefined" ? $("#txtNotes").val(Param.Notes) : $("#txtNotes").val("");

}
/* ==== */

/* ==== */
/* Assign Fees Components Getter */
AssignFees.Components.Getter = function (Param) {


    var t_StartYear = new Date().getFullYear(), t_EndYear = new Date().getFullYear();
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (typeof t_AcademyYear !== "undefined") {
        if (t_AcademyYear != "") {
            t_StartYear = t_AcademyYear.split("-")[0];
            t_EndYear = t_AcademyYear.split("-")[1];
        }
    }


    var lstStudent = [];
    var StudentId = 0;
    $("#tbdStudentList tr").each(function () {
        var t_CurrentRow = $(this);
        var t_StudentId = t_CurrentRow.find("td:eq(0)").text().trim();
        StudentId = t_StudentId;
        var t_IsActive = t_CurrentRow.find(".StudentCheckbox").prop('checked');
        if (t_IsActive) {
            switch ($("#SelPlan").val()) {

                case "Monthly":
                    var t_DueDate = $("#txtDueDate").val();
                    var t_DiffMonth = AssignFees.Components.GetMonthDifference($("#txtStartDate").val(), $("#txtEndDate").val());
                    for (var i = 0; i < t_DiffMonth; i++) {
                        lstStudent.push({
                            ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value,
                            FeesCatId: Dropdown.GetSelectedOption({ TargetId: ".divFeesCategory" }).Value,
                            StudentId: t_StudentId,
                            DueDate: t_DueDate,
                            DueAmount: $("#txtAmount").val(),
                        });
                        t_DueDate = GeneralFunction.DateFormat(AssignFees.Components.GenerateNextDueDate(t_DueDate));
                    }
                    break;

                default:
                    var t_DueDate = new Date($("#txtDueDate").val());
                    lstStudent.push({
                        ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value,
                        FeesCatId: Dropdown.GetSelectedOption({ TargetId: ".divFeesCategory" }).Value,
                        StudentId: t_StudentId,
                        DueDate: t_DueDate,
                        DueAmount: $("#txtAmount").val(),
                    });
                    break;
            }
           
        }
    });


    /* Get the AssignFees Response */
    var Response = {
        Header: {
            FeesAssignId: $("#hdnFeesAssignId").val(),
            ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value,
            FeesCatId: Dropdown.GetSelectedOption({ TargetId: ".divFeesCategory" }).Value,
            StartYear: t_StartYear,
            EndYear: t_EndYear,
            StartDate: $("#txtStartDate").val(),
            EndDate: $("#txtEndDate").val(),
            StudentId: StudentId,
            DueDate: $("#txtDueDate").val(),
            IssueAmount: $("#txtIssueAmount").val(),
            DueType: $("#SelPlan").val(),
            Amount: $("#txtAmount").val(),
            Notes: $("#txtNotes").val()
        },
        Details: lstStudent
    }
    return Response;
}
/* ==== */

/* ==== */
/* Assign Fees Components Getter */
AssignFees.Components.StudentFilterGetter = function (Param) {

    var t_StartYear = new Date().getFullYear(), t_EndYear =  new Date().getFullYear();
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (typeof t_AcademyYear !== "undefined") {
        if (t_AcademyYear != "") {
            t_StartYear = t_AcademyYear.split("-")[0];
            t_EndYear = t_AcademyYear.split("-")[1];
        }
    }

    /* Get the AssignFees Response */
    var Response = {
        ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value,
        StartYear: t_StartYear,
        EndYear: t_EndYear
    }
    return Response;
}
/* ==== */


AssignFees.Components.GetMonthDifference =  function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();

    return yearsDiff * 12 + monthsDiff;
}

AssignFees.Components.GenerateNextDueDate = function (startDueDate) {
    // Convert the input to a JavaScript Date object
    const date = new Date(startDueDate);

    // Increment the month by 1
    const nextMonth = date.getMonth() + 1; // JavaScript months are 0-based (0 = January)

    // Adjust the month and year
    date.setMonth(nextMonth);

    // Handle cases where the day doesn't exist in the next month
    if (date.getDate() < new Date(startDueDate).getDate()) {
        date.setDate(0); // Set to the last day of the previous month
    }

    return date; // Format as YYYY-MM-DD
}