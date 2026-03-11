/* ==== */
/* Tax Report Details Component Setter */
TaxReportDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    TaxReportDet.Components.Pagination.Cleaner();
    TaxReportDet.Components.Pagination.TableHead(Param.Data);
    TaxReportDet.Components.Pagination.TableBody(Param.Data);
    TaxReportDet.Components.Pagination.TableFooter(Param.Data);
}
/* ==== */


/* ==== */
/* Tax Report Components Setter */
TaxReportDet.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");

}
/* ==== */


/* ==== */
/* Tax Report Details Component Getter */
TaxReportDet.Components.Getter = function (Param) {

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
