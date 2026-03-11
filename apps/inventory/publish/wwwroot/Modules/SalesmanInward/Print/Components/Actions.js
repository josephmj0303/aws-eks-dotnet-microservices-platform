
/* ==== */
/* Purchase Print Components Save */
SalesmanInwardPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanInwardPrint.Components.Getter({});
    if (SalesmanInwardPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_SalesmanInwardPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Purchase Print Components Back */
SalesmanInwardPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Purchase Print Components Populate */
SalesmanInwardPrint.Components.Populate = function (t_RouteId) {
    /* Load the RepairInwardPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_SalesmanInwardPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Purchase Print Details */
        DataControllers_SalesmanInwardPrint.Pop({
            SMINId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

