/* ==== */
/* Sales Details Component Setter */
SalesDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    SalesDet.Components.Pagination.TableBody(Param.Data);
}
/* ==== */


/* ==== */
/* Sales Components Setter */
SalesDet.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");

}
/* ==== */


/* ==== */
/* Sales Details Component Getter */
SalesDet.Components.Getter = function (Param) {

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
        StartDate: $("#txtStartDate").val(),
        EndDate: $("#txtEndDate").val(),
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
