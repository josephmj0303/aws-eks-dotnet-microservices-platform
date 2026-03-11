
/* ==== */
/* Purchase Components Save */
Purchase.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = Purchase.Components.Getter();
    if (Purchase.Components.Validation.Status({ FormName: "Purchase", Data: ObjResponse })) {
        DataControllers_Purchase.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Purchase Components Save */
Purchase.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = Purchase.Components.CutomerGetter();
    if (Purchase.Components.Validation.Status({ FormName: "Supplier", Data: ObjResponse })) {
        DataControllers_Purchase.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Purchase Components Back */
Purchase.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Purchase Components Populate Product */
Purchase.Components.PopulateProduct = function () {
    /* Load the Purchase Details */
    DataControllers_Purchase.PopProduct({});
    /* ==== */
}
/* ==== */


/* ==== */
/* Purchase Components Populate Tax */
Purchase.Components.PopulateTax = function () {
    /* Load the Purchase Details */
    DataControllers_Purchase.PopTax({ TaxApplyFor : "Purchase"});
    /* ==== */
}
/* ==== */



/* ==== */
/* Purchase Components Search Customer */
Purchase.Components.PopulateSearchCustomer = function (ContactNo) {
    /* Load the Purchase Details */
    DataControllers_Purchase.PopSearchCustomer({
        ContactNo: ContactNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Purchase Components Populate */
Purchase.Components.Populate = function (t_RouteId) {
    /* Load the Purchase Details */
    if (t_RouteId != "0") {
        DataControllers_Purchase.Pop({
            GRNId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
