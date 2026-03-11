
/* ==== */
/* Purchase Print Components Save */
PurchasePrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = PurchasePrint.Components.Getter({});
    if (PurchasePrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_PurchasePrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Purchase Print Components Back */
PurchasePrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Purchase Print Components Populate */
PurchasePrint.Components.Populate = function (t_RouteId) {
    /* Load the PurchasePrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_PurchasePrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Purchase Print Details */
        DataControllers_PurchasePrint.Pop({
            GRNId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

