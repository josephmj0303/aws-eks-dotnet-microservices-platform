/* ==== */
/* Buswise OutPass Details Details Component Setter */
BuswiseOutPassDetails.Components.Setter = function (Param) {

    /* Set the Pagination Data */
    BuswiseOutPassDetails.Components.Pagination.TableBody(Param);
}
/* ==== */


/* ==== */
/* Buswise OutPass Details Components Setter */
BuswiseOutPassDetails.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.OutPassDate !== "undefined" ? $("#txtOutPassDate").val(GeneralFunction.DateFormat(Param.OutPassDate)) : $("#txtOutPassDate").val("");
    
}
/* ==== */

/* ==== */
/*Buswise OutPass Details Details Component Getter */
BuswiseOutPassDetails.Components.Getter = function (Param) {

    /* Get the Component Values */
    var Response = {
        OutPassDate: $("#txtOutPassDate").val(),
    }
    return Response;
}
/* ==== */
