/* ==== */
/* Section Details Component Setter */
SectionDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    SectionDet.Components.Pagination.TableBody(Param.Data);
}
/* ==== */

/* ==== */
/* Section Details Component Getter */
SectionDet.Components.Getter = function (Param) {

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

    /* Get the Component Values */
    var Response = {
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
