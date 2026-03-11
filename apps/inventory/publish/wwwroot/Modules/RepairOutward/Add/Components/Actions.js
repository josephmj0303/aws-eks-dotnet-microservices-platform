
/* ==== */
/* Repair Outward Components Save */
RepairOutward.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairOutward.Components.Getter();
    if (RepairOutward.Components.Validation.Status({ FormName: "RepairOutward", Data: ObjResponse })) {
        DataControllers_RepairOutward.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Repair Outward Components Save */
RepairOutward.Components.SaveCustomer = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairOutward.Components.CutomerGetter();
    if (RepairOutward.Components.Validation.Status({ FormName: "Buyers", Data: ObjResponse })) {
        DataControllers_RepairOutward.PuchCustomer(ObjResponse);
    }
}
/* ==== */


/* ==== */
/* Repair Outward Components Back */
RepairOutward.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */


/* ==== */
/* Repair Outward Components Search Customer */
RepairOutward.Components.PopulateSearchSalesDetails = function (RSINo) {
    /* Load the Repair Outward Details */
    DataControllers_RepairOutward.PopSearchRepairOutwardsDetails({
        RSINo: RSINo
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Repair Outward Components Populate */
RepairOutward.Components.Populate = function (t_RouteId) {
    /* Load the Repair Outward Details */
    if (t_RouteId != "0") {
        DataControllers_RepairOutward.Pop({
            RSOId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */
