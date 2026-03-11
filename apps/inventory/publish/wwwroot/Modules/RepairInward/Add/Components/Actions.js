
/* ==== */
/* Repair Inward Components Save */
RepairInward.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairInward.Components.Getter();
    if (RepairInward.Components.Validation.Status({ FormName: "RepairInward", Data: ObjResponse })) {
        DataControllers_RepairInward.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Repair Inward Components Save */
RepairInward.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairInward.Components.CutomerGetter();
    if (RepairInward.Components.Validation.Status({ FormName: "Supplier", Data: ObjResponse })) {
        DataControllers_RepairInward.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Repair Inward Components Back */
RepairInward.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Repair Inward Components Populate Product */
RepairInward.Components.PopulateProduct = function () {
    /* Load the Repair Inward Details */
    DataControllers_RepairInward.PopProduct({});
}
/* ==== */


/* ==== */
/* Repair Inward Components Populate Tax */
RepairInward.Components.PopulateTax = function () {
    /* Load the Repair Inward Details */
    DataControllers_RepairInward.PopTax({ TaxApplyFor: "Service" });
    /* ==== */
}
/* ==== */



/* ==== */
/* Repair Inward Components Search Customer */
RepairInward.Components.PopulateSearchCustomer = function (ContactNo) {
    /* Load the Repair Inward Details */
    DataControllers_RepairInward.PopSearchCustomer({
        ContactNo: ContactNo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Repair Inward Components Populate */
RepairInward.Components.Populate = function (t_RouteId) {
    /* Load the Repair Inward Details */
    if (t_RouteId != "0") {
        DataControllers_RepairInward.Pop({
            RSIId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
