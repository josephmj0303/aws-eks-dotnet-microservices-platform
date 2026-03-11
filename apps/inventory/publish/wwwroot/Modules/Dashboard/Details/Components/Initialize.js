/* ==== */
/* Dashboard Details Components Objects */
var Dashboard = {};
Dashboard.Components = {};
/* ==== */

/* ==== */
/* Dashboard Details Components Initialize */
Dashboard.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "ஜாதக ஆய்வு", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    Dashboard.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Dashboard.Components.Ready();

    /* Get the Dashboard Outstanding Details */
    Dashboard.Components.OutstandingPopulate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */

/* ==== */
/* Dashboard Details Components Ready */
Dashboard.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Dashboard.Components.Cleaner();

    /* Add Event Listener */
    Dashboard.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Dashboard Details Components Clean Up */
Dashboard.Components.Cleaner = function () {

    /* Clean Up the Summary Details */
    Dashboard.Components.QuickSummarySetter({
        TotalJathagam: 0,
        TotalMarriedJathagam: 0,
        TotalCevvayJathagam: 0,
        TotalRahuKetuCevvayJathagam: 0,
        TotalRahuKetuJathagam: 0,
        TotalSuthaJathagam: 0,
        TotalNewRegJathagam: 0
    });

}
/* ==== */


/* ==== */
/* Dashboard Details Components Add Event Listener */
Dashboard.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Dashboard.Components.RemoveEventListener();

    /* Trigger the back button click event to navigate to the previous page or perform the designated action */
    $(".HoroscopeType").on("click", function () {
        /* Get the Next Registration No */
        /* Get the Dashboard Outstanding Details */
        Dashboard.Components.OutstandingPopulate({
            Reset: false,
            ResetPagination: false
        });
    });
    

}
/* ==== */

/* ==== */
/* Dashboard Details Components Remove Active Event Listener */
Dashboard.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $(".HoroscopeType").off("click");
}
/* ==== */

/* ==== */
/* Dashboard Details Data Processing PreLoader */
Dashboard.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Classdetails-Content", Status);
}
/* ==== */
