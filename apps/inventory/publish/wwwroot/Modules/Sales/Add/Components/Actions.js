
/* ==== */
/* Sale Components Save */
Sale.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = Sale.Components.Getter();
    if (Sale.Components.Validation.Status({ FormName: "Sales", Data: ObjResponse })) {
        DataControllers_Sales.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sale Components Save */
Sale.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = Sale.Components.CutomerGetter();
    if (Sale.Components.Validation.Status({ FormName: "Buyers", Data: ObjResponse })) {
        DataControllers_Sales.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Sale Components Back */
Sale.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Sale Components Populate Product */
Sale.Components.PopulateAvaliableProductStock = function () {
    /* Load the Sale Details */
    DataControllers_Sales.PopAvaliableProductStock();
    /* ==== */
}
/* ==== */


/* ==== */
/* Sale Components Populate Tax */
Sale.Components.PopulateTax = function () {
    /* Load the Sale Details */
    DataControllers_Sales.PopTax({ TaxApplyFor: "Sales" });
    /* ==== */
}
/* ==== */



/* ==== */
/* Sale Components Search Customer */
Sale.Components.PopulateSearchCustomer = function (ContactNo) {
    /* Load the Sale Details */
    DataControllers_Sales.PopSearchCustomer({
        ContactNo: ContactNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Sale Components Populate */
Sale.Components.Populate = function (t_RouteId) {
    /* Load the Sale Details */
    if (t_RouteId != "0") {
        DataControllers_Sales.Pop({
            InvId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
