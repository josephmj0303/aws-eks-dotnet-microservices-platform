
/* ==== */
/* SalesReturn Components Save */
SalesReturn.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesReturn.Components.Getter();
    if (SalesReturn.Components.Validation.Status({ FormName: "SalesReturns", Data: ObjResponse })) {
        DataControllers_SalesReturn.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* SalesReturn Components Save */
SalesReturn.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesReturn.Components.CutomerGetter();
    if (SalesReturn.Components.Validation.Status({ FormName: "Buyers", Data: ObjResponse })) {
        DataControllers_SalesReturn.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* SalesReturn Components Back */
SalesReturn.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* SalesReturn Components Search Customer */
SalesReturn.Components.PopulateSearchSalesDetails = function (InvNo) {
    /* Load the SalesReturn Details */
    DataControllers_SalesReturn.PopSearchSalesDetails({
        InvNo: InvNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* SalesReturn Components Populate */
SalesReturn.Components.Populate = function (t_RouteId) {
    /* Load the SalesReturn Details */
    if (t_RouteId != "0") {
        DataControllers_SalesReturn.Pop({
            InvRetId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
