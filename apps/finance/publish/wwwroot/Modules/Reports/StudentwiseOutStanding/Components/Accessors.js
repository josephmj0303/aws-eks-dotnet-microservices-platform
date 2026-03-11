/* ==== */
/* Assign Fees Details Component Setter */
StudentwiseOutStanding.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    StudentwiseOutStanding.Components.Pagination.TableBody(Param.Data);
}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
StudentwiseOutStanding.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    $("#chkPendingStudent").attr("checked", Param.AppearPendingOnly);
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Getter */
StudentwiseOutStanding.Components.Getter = function (Param) {

    /* Decleartion */
    var t_StartYear = "", t_EndYear = "";
    var t_ClassId = 0, t_SecId = 0;


    /* Get the AcademyYear */
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AcademyYear != "") {
        t_StartYear = t_AcademyYear.split("-")[0];
        t_EndYear = t_AcademyYear.split("-")[1];
    }

    t_ClassId = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;
    t_SecId = Dropdown.GetSelectedOption({ TargetId: ".divSection" }).Value;

    /* Get the Component Values */
    var Response = {
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        ClassId: t_ClassId,
        SecId: t_SecId,
        Pagination: Pagination.GetProperties()
    }
    return Response;
}
/* ==== */
