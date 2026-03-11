
/* ==== */
/* DataBase Backup Details Component Back */
DataBaseBackupDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* DataBase Backup Details Component Populate */
DataBaseBackupDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                DataBaseBackupDet.Components.Setter({
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
                DataBaseBackupDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the DataBase Backup Details Details */
    DataControllers_DataBaseBackupDet.Pop(DataBaseBackupDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* DataBase Backup Details Component Delete */
DataBaseBackupDet.Components.Backup = function (RouteId) {
    DataControllers_DataBaseBackupDet.Puch();
}
/* ==== */


/* ==== */
/* DataBase Backup Details Component Router */
DataBaseBackupDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

       
    }
}
/* ==== */
