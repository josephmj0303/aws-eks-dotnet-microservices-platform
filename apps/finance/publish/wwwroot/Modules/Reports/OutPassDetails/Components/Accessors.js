/* ==== */
/* Assign Fees Details Component Setter */
OutPassReport.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    OutPassReport.Components.Pagination.TableBody(Param.Data);
}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
OutPassReport.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");

}
/* ==== */

/* ==== */
/* Assign Fees Details Component Getter */
OutPassReport.Components.Getter = function (Param) {



    /* Get the Component Values */
    var Response = {
        StartDate: $("#txtStartDate").val(),
        EndDate: $("#txtEndDate").val(),
        Pagination: Pagination.GetProperties()
    }
    return Response;
}
/* ==== */
