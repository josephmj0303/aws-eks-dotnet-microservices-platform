
/* ==== */
/* Sales Print Components Save */
SalesReturnPrint.Components.Save = function () {
    /* Send Resquest Server */
    var ObjResponse = SalesReturnPrint.Components.Getter({});
    if (SalesReturnPrint.Components.Validation.Status(ObjResponse)) {
        DataControllers_SalesReturnPrint.Puch(ObjResponse);
    }
}
/* ==== */

/* ==== */
/* Sales Print Components Back */
SalesReturnPrint.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Sales Print Components Populate */
SalesReturnPrint.Components.Populate = function (t_RouteId) {
    /* Load the SalesReturnPrint Details */
    if (t_RouteId != "0") {

        /* Get the Organization Details */
        DataControllers_SalesReturnPrint.PopOrganization({
            OrgId: 0
        });

        /* Get the Sales Print Details */
        DataControllers_SalesReturnPrint.Pop({
            InvRetId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */

