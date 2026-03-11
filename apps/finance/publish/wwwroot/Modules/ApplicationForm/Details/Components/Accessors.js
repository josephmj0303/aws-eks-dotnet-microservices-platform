/* ==== */
/* Form Details Component Setter */
ApplicationFormDet.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    ApplicationFormDet.Components.Pagination.TableBody(Param.Data);

    /* Bind the Summery Details */
    if (typeof Param.AdditionalValues !== "undefined") {
        if (Param.AdditionalValues.length == 3) {
            $(".lblTotalAmt").html(parseFloat(Param.AdditionalValues[0]).toFixed(2));
            $(".lblCashAmt").html(parseFloat(Param.AdditionalValues[1]).toFixed(2));
            $(".lblBankTransferAmt").html(parseFloat(Param.AdditionalValues[2]).toFixed(2));
        }
    }
}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
ApplicationFormDet.Components.FilterSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.StartDate !== "undefined" ? $("#txtStartDate").val(GeneralFunction.DateFormat(Param.StartDate)) : $("#txtStartDate").val("");
    typeof Param.EndDate !== "undefined" ? $("#txtEndDate").val(GeneralFunction.DateFormat(Param.EndDate)) : $("#txtEndDate").val("");

}
/* ==== */

/* ==== */
/* Form Details Component Getter */
ApplicationFormDet.Components.Getter = function (Param) {

    /* Check the Cookies Name & Configure the Search Component */
    GeneralFunction.GetSearchHistory(GeneralFunction.GetCurrentHashName(), function (Params) {

        /* Set the Search Keyword */
        $("#txtStartDate").val(Params.StartDate);
        $("#txtEndDate").val(Params.EndDate);

        $("#rdbCash").prop("checked", (Params.PaymentMode == "Cash" ? true : false));
        $("#rdbOnline").prop("checked", (Params.PaymentMode == "Bank Transfer" ? true : false));
        $(".Search-Keyword-Input").val(Params.Pagination.Search);

        /* Set Pagination Component */
        Pagination.SetProperties({
            PageNo: Params.Pagination.PageNo,
            TotalPages: Params.Pagination.TotalPages
        });

    });

    var t_PaymentMode = "All";
    if ($('#rdbCash').is(':checked')) {
        t_PaymentMode = "Cash";
    }
    else if ($('#rdbOnline').is(':checked')) {
        t_PaymentMode = "Bank Transfer";
    }

    /* Get the Component Values */
    var Response = {
        StartDate: $("#txtStartDate").val(),
        EndDate: $("#txtEndDate").val(),
        PaymentMode: t_PaymentMode,
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
