
/* ==== */
/* Purchase Print Components Save */
RepairInwardPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = RepairInwardPrint.Components.Getter({});
    if (RepairInwardPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_RepairInwardPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Purchase Print Components Back */
RepairInwardPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Purchase Print Components Populate */
RepairInwardPrint.Components.Populate = function (t_RouteId) {
    /* Load the RepairInwardPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_RepairInwardPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Purchase Print Details */
        DataControllers_RepairInwardPrint.Pop({
            RSIId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

