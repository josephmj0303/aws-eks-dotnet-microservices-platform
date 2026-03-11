/* ==== */
/* Student Details Component Setter */
StudentDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    StudentDet.Components.Pagination.TableBody(Param.Data);
}
/* ==== */

/* ==== */
/* Student Details Component Getter */
StudentDet.Components.Getter = function (Param) {

    /* Check the Cookies Name & Configure the Search Component */
    GeneralFunction.GetSearchHistory(GeneralFunction.GetCurrentHashName(), function (Params) {

        /* Set the Class & Section Dropdown */
        Dropdown.SetSelectedOption({ TargetId: ".divClassSection", Value: (Params.ClassId == 0 ? 0 : (Params.ClassId + "_" + Params.SecId)) });

        /* Set the Search Keyword */
        $(".Search-Keyword-Input").val(Params.Pagination.Search);

        /* Set Pagination Component */
        Pagination.SetProperties({
            PageNo: Params.Pagination.PageNo,
            TotalPages: Params.Pagination.TotalPages
        });

    });

    /* Decleartion */
    var t_ClassId = 0, t_SecId = 0;
    var t_StartYear = '01-Apr-2023'; var t_EndYear = '31-Mar-2024';

    /* Get the Admistion Year */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1]
    }

    /* Get the Class & Section Details */
    //var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Value;
    //if (t_ClassSecId != null && t_ClassSecId != "") {
    //    t_ClassId = t_ClassSecId.split("_")[0];
    //    t_SecId = t_ClassSecId.split("_")[1]
    //}
    t_ClassId = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;
    t_SecId = Dropdown.GetSelectedOption({ TargetId: ".divSection" }).Value;


    /* Get the Component Values */
    var Response = {
        ClassId: t_ClassId,
        SecId: t_SecId,
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
