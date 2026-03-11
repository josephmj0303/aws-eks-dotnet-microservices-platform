/* ==== */
/* Assign Fees Details Component Setter */
ClasswiseOutStanding.Components.Setter = function (Param) {

    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    ClasswiseOutStanding.Components.Pagination.TableBody(Param.Data);
}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
ClasswiseOutStanding.Components.FilterSetter = function (Param) {

   
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Getter */
ClasswiseOutStanding.Components.Getter = function (Param) {

    /* Get the Admistion Year */
    var t_StartYear = ''; var t_EndYear = '';
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1];
    }


    var t_ClassId = 0, t_SecId = 0;
    t_ClassId = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;

    /* Get the Component Values */
    var Response = {
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        ClassId: t_ClassId,
        Pagination: Pagination.GetProperties()
    }
    return Response;
}
/* ==== */
