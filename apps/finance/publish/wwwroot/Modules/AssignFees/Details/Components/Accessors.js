/* ==== */
/* Assign Fees Details Component Setter */
AssignFeesDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    AssignFeesDet.Components.Pagination.TableBody(Param.Data);
}
/* ==== */

/* ==== */
/* Assign Fees Details Component Getter */
AssignFeesDet.Components.Getter = function (Param) {

    /* Check the Cookies Name & Configure the Search Component */
    GeneralFunction.GetSearchHistory(GeneralFunction.GetCurrentHashName(), function (Params) {

        /* Set the Search Keyword */
        $(".Search-Keyword-Input").val(Params.Pagination.Search);

        /* Set Pagination Component */
        Pagination.SetProperties({
            PageNo: Params.Pagination.PageNo,
            TotalPages: Params.Pagination.TotalPages
        });

    });


    /* Decleartion */
    var t_ClassId = 0;
    var t_StartYear = ''; var t_EndYear = '';
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1]
    }
    t_ClassId = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;

    /* Get the Component Values */
    var Response = {
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        ClassId: t_ClassId,
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
