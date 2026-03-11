
/* ==== */
/* Purchase Print Components Save */
PurchaseReturnPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = PurchaseReturnPrint.Components.Getter({});
    if (PurchaseReturnPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_PurchaseReturnPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Purchase Print Components Back */
PurchaseReturnPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Purchase Print Components Populate */
PurchaseReturnPrint.Components.Populate = function (t_RouteId) {
    /* Load the PurchaseReturnPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_PurchaseReturnPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Purchase Print Details */
        DataControllers_PurchaseReturnPrint.Pop({
            GRNRetId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

