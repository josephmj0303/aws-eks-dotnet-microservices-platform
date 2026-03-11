
/* ==== */
/* Sales Print Components Save */
SalesmanOutwardPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesmanOutwardPrint.Components.Getter({});
    if (SalesmanOutwardPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_SalesmanOutwardPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sales Print Components Back */
SalesmanOutwardPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Sales Print Components Populate */
SalesmanOutwardPrint.Components.Populate = function (t_RouteId) {
    /* Load the SalesmanOutwardPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_SalesmanOutwardPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Sales Print Details */
        DataControllers_SalesmanOutwardPrint.Pop({
           SMOUTId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

