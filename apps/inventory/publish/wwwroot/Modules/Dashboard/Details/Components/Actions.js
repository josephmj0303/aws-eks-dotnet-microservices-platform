
/* ==== */
/* Dashboard Details Component Back */
Dashboard.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Dashboard Details Component Populate */
Dashboard.Components.OutstandingPopulate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clear the Search History Cookies */
                GeneralFunction.RemoveCookies({
                    CookieName: GeneralFunction.GetCurrentHashName()
                });

                /* Clean the Data */
                Dashboard.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Dashboard Details Details */
    DataControllers_Dashboard.Pop_OverallSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallJathaUsersSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallCasteWiseSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallCityWiseSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallAgeWiseSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallIncomeWiseSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallYearWiseSummary(Dashboard.Components.SummeryGetter());
    DataControllers_Dashboard.Pop_OverallYearWiseMarriedSummary(Dashboard.Components.SummeryGetter());
    
    /* ==== */
}
/* ==== */


/* ==== */
/* Dashboard Details Component Router */
Dashboard.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

       
    }
}
/* ==== */
