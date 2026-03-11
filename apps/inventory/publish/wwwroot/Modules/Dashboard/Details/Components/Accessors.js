/* ==== */
/* Dashboard Details Component Setter */
Dashboard.Components.QuickSummarySetter = function (Param) {

    typeof Param.TotalJathagam_Male !== "undefined" ? $(".lblTotalCount").html(parseInt(Param.TotalJathagam_Male) + parseInt(Param.TotalJathagam_Female)) : $(".lblTotalCount").html("0");
    typeof Param.TotalJathagam_Male !== "undefined" ? $(".lblTotalMaleCount").html(Param.TotalJathagam_Male) : $(".lblTotalMaleCount").html("0");
    typeof Param.TotalJathagam_Female !== "undefined" ? $(".lblTotalFeMaleCount").html(Param.TotalJathagam_Female) : $(".lblTotalFeMaleCount").html("0");

    typeof Param.TotalMarriedJathagam_Male !== "undefined" ? $(".lblTotalMarriedCount").html(parseInt(Param.TotalMarriedJathagam_Male) + parseInt(Param.TotalMarriedJathagam_Female)) : $(".lblTotalMarriedCount").html("0");
    typeof Param.TotalMarriedJathagam_Male !== "undefined" ? $(".lblTotalMarriedMaleCount").html(Param.TotalMarriedJathagam_Male) : $(".lblTotalMarriedMaleCount").html("0");
    typeof Param.TotalMarriedJathagam_Female !== "undefined" ? $(".lblTotalMarriedFeMaleCount").html(Param.TotalMarriedJathagam_Female) : $(".lblTotalMarriedFeMaleCount").html("0");

    typeof Param.TotalNewRegJathagam_Male !== "undefined" ? $(".lblTotalNewRegCount").html(parseInt(Param.TotalNewRegJathagam_Male) + parseInt(Param.TotalNewRegJathagam_Female)) : $(".lblTotalNewRegCount").html("0");
    typeof Param.TotalNewRegJathagam_Male !== "undefined" ? $(".lblTotalNewRegMaleCount").html(Param.TotalNewRegJathagam_Male) : $(".lblTotalNewRegMaleCount").html("0");
    typeof Param.TotalNewRegJathagam_Female !== "undefined" ? $(".lblTotalNewRegFeMaleCount").html(Param.TotalNewRegJathagam_Female) : $(".lblTotalNewRegFeMaleCount").html("0");


    //typeof Param.TotalMarriedJathagam !== "undefined" ? $(".lblTotalMarriedJathagam").html(Param.TotalMarriedJathagam) : $(".lblTotalMarriedJathagam").html("0");
    //typeof Param.TotalNewRegJathagam !== "undefined" ? $(".lblTotalNewRegJathagam").html(Param.TotalNewRegJathagam) : $(".lblTotalNewRegJathagam").html("0");
   

    /* Jathagam Category Details */
    Dashboard.Components.Pagination.BindJathagamCategoryDetails(Param);
}
/* ==== */

/* Dashboard Categorywise Gender Component Setter */
Dashboard.Components.QuickJathaUsersSummarSetter = function (Param) {
    
    /* Jathagam Category Details */
    Dashboard.Components.Pagination.BindJathagamCategoryGenderDetails(Param);
}
/* ==== */



/* ==== */
/* Dashboard Details Component Getter */
Dashboard.Components.SummeryGetter = function (Param) {

  
    /* Get the Component Values */
    var Response = {
        HoroscopeType: $('#rdbOwnHoroscopeOpt').prop('checked') ? "Own Source" : "Other Source",
    }
    return Response;
}
/* ==== */
