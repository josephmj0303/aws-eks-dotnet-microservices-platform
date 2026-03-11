
/* ==== */
/* Sales Print Components Save */
SalesPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesPrint.Components.Getter({});
    if (SalesPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_SalesPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sales Print Components Back */
SalesPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Sales Print Components Populate */
SalesPrint.Components.Populate = function (t_RouteId) {
    /* Load the SalesPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_SalesPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Sales Print Details */
        DataControllers_SalesPrint.Pop({
            InvId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

