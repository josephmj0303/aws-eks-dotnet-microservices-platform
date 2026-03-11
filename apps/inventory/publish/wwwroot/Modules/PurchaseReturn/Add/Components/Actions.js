
/* ==== */
/* Purchase Return Components Save */
PurchaseReturn.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = PurchaseReturn.Components.Getter();
    if (PurchaseReturn.Components.Validation.Status({ FormName: "PurchaseReturn", Data: ObjResponse })) {
        DataControllers_PurchaseReturn.Puch(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Purchase Return Components Back */
PurchaseReturn.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Purchase Return Components Populate Product */
PurchaseReturn.Components.PopulateProduct = function () {
    /* Load the PurchaseReturn Details */
    DataControllers_PurchaseReturn.PopProduct({});
    /* ==== */
}
/* ==== */


/* ==== */
/* Purchase Return Components Populate Tax */
PurchaseReturn.Components.PopulateTax = function () {
    /* Load the PurchaseReturn Details */
    DataControllers_PurchaseReturn.PopTax({ TaxApplyFor : "PurchaseReturn"});
    /* ==== */
}
/* ==== */



/* ==== */
/* Purchase Return Components Search Customer */
PurchaseReturn.Components.PopulateSearchPurchaseDetails = function (GRNNo) {
    /* Load the PurchaseReturn Details */
    DataControllers_PurchaseReturn.PopSearchPurchaseDetails({
        GRNNo: GRNNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Purchase Return Components Populate */
PurchaseReturn.Components.Populate = function (t_RouteId) {
    /* Load the PurchaseReturn Details */
    if (t_RouteId != "0") {
        DataControllers_PurchaseReturn.Pop({
            GRNRetId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
