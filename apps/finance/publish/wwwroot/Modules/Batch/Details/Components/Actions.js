
/* ==== */
/* Batch Details Component Back */
BatchDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Batch Details Component Populate */
BatchDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                BatchDet.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clear the Search History Cookies */
                GeneralFunction.RemoveCookies({
                    CookieName: GeneralFunction.GetCurrentHashName()
                });

                /* Clean the Data */
                BatchDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Batch Details Details */
    DataControllers_BatchDet.Pop(BatchDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Batch Details Component Delete */
BatchDet.Components.Delete = function (RouteId) {
    DataControllers_BatchDet.Delete({
        BatchId: RouteId
    });
}
/* ==== */


/* ==== */
/* Batch Details Component Router */
BatchDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Batch Routing */
            GeneralFunction.SetRouting("EditBatch", RouteId);
            break;

        case "Delete":
            BatchDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
