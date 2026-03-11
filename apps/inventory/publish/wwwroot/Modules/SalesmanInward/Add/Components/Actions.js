
/* ==== */
/* SalesReturn Components Save */
SalesmanInward.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanInward.Components.Getter();
    if (SalesmanInward.Components.Validation.Status({ FormName: "SalesReturns", Data: ObjResponse })) {
        DataControllers_SalesmanInward.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* SalesReturn Components Save */
SalesmanInward.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanInward.Components.CutomerGetter();
    if (SalesmanInward.Components.Validation.Status({ FormName: "Buyers", Data: ObjResponse })) {
        DataControllers_SalesmanInward.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* SalesReturn Components Back */
SalesmanInward.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* SalesReturn Components Search Customer */
SalesmanInward.Components.PopulateSearchSalesDetails = function (OutwardNo) {
    /* Load the SalesReturn Details */
    DataControllers_SalesmanInward.PopSearchSalesDetails({
        OutwardNo: OutwardNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* SalesReturn Components Populate */
SalesmanInward.Components.Populate = function (t_RouteId) {
    /* Load the SalesReturn Details */
    if (t_RouteId != "0") {
        DataControllers_SalesmanInward.Pop({
            SMINId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
