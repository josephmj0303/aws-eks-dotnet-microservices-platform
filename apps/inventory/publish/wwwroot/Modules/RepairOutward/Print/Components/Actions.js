
/* ==== */
/* Sales Print Components Save */
RepairOutwardPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairOutwardPrint.Components.Getter({});
    if (RepairOutwardPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_RepairOutwardPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sales Print Components Back */
RepairOutwardPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Sales Print Components Populate */
RepairOutwardPrint.Components.Populate = function (t_RouteId) {
    /* Load the RepairOutwardPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_RepairOutwardPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Sales Print Details */
        DataControllers_RepairOutwardPrint.Pop({
            RSOId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

