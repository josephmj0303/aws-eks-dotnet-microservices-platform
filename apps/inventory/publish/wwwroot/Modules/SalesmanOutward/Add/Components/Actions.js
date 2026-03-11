
/* ==== */
/* Sale Components Save */
SalesmanOutward.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanOutward.Components.Getter();
    if (SalesmanOutward.Components.Validation.Status({ FormName: "Sales", Data: ObjResponse })) {
        DataControllers_SalesmanOutward.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sale Components Save */
SalesmanOutward.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanOutward.Components.CutomerGetter();
    if (SalesmanOutward.Components.Validation.Status({ FormName: "Buyers", Data: ObjResponse })) {
        DataControllers_SalesmanOutward.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Sale Components Back */
SalesmanOutward.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Sale Components Populate Product */
SalesmanOutward.Components.PopulateAvaliableProductStock = function () {
    /* Load the Sale Details */
    DataControllers_SalesmanOutward.PopAvaliableProductStock();
    /* ==== */
}
/* ==== */


/* ==== */
/* Sale Components Populate Tax */
SalesmanOutward.Components.PopulateTax = function () {
    /* Load the Sale Details */
    DataControllers_SalesmanOutward.PopTax({ TaxApplyFor: "Sales" });
    /* ==== */
}
/* ==== */



/* ==== */
/* Sale Components Search Customer */
SalesmanOutward.Components.PopulateSearchCustomer = function (ContactNo) {
    /* Load the Sale Details */
    DataControllers_SalesmanOutward.PopSearchCustomer({
        ContactNo: ContactNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Sale Components Populate */
SalesmanOutward.Components.Populate = function (t_RouteId) {
    /* Load the Sale Details */
    if (t_RouteId != "0") {
        DataControllers_SalesmanOutward.Pop({
            SMOUTId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
