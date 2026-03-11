
/* ==== */
/* Buswise OutPass Details Component Back */
BuswiseOutPassDetails.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Buswise OutPass Details Component Populate */
BuswiseOutPassDetails.Components.Populate = function (Params) {

    /* Load the Class Details Details */
    DataControllers_BuswiseBuswiseOutPassDetails.Pop(BuswiseOutPassDetails.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Buswise OutPass Details Component Delete */
BuswiseOutPassDetails.Components.Delete = function (RouteId) {
    DataControllers_BuswiseOutPassDetails.Delete({
        FeesCatId: RouteId
    });
}
/* ==== */


/* ==== */
/* Buswise OutPass Details Component Router */
BuswiseOutPassDetails.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCollection", RouteId);
            break;

        case "Delete":
            BuswiseOutPassDetails.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
