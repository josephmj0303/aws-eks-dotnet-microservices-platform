/* ==== */
/* Dashboard Details Components Objects */
var Dashboard = {};
Dashboard.Components = {};
/* ==== */

/* ==== */
/* Dashboard Details Components Initialize */
Dashboard.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Dashboard", Action: "#", Active: true }]);

    /* Initialize the Date Range  */
    DateRange.Init({ TargetId: ".divDateRange", RangeName: "Today" });

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Load the Pagination Header  */
    Dashboard.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Dashboard.Components.Ready();

    /* Get the Dashboard Outstanding Details */
    Dashboard.Components.OutstandingPopulate({
        Reset: false,
        ResetPagination: false
    });

    /* Get the Dashboard Payment Details */
    Dashboard.Components.PaymentPopulate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */

/* ==== */
/* Dashboard Details Components Ready */
Dashboard.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    Dashboard.Components.Cleaner();

    /* Add Event Listener */
    Dashboard.Components.AddEventListener();

    /* Load the Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: true });

}
/* ==== */


/* ==== */
/* Dashboard Details Components Clean Up */
Dashboard.Components.Cleaner = function () {

    /* Clean Up the Summary Details */
    Dashboard.Components.QuickSummarySetter({

        TotalMaleStudent: 0,
        TotalFeMaleStudent: 0,

        TotalStudent: 0,

        TotalFeesAmount: 0.00,
        TotalCollectionAmount: 0.00,

        TotalReceipt: 0,
        TotalReceiptAmount: 0.00
    });

    /* Clean Up the Collection Summery Details */
    Dashboard.Components.CollectionSetter({

        TotalDayReceipt: 0,
        TotalDayReceiptAmount: 0.00,

        TotalApplicationReceipt: 0,
        TotalDayApplicationReceiptAmount: 0.00,
        
    });

}
/* ==== */


/* ==== */
/* Dashboard Details Components Add Event Listener */
Dashboard.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Dashboard.Components.RemoveEventListener();

    /* ==== */
    /* Dropdown Change Event */
    Dropdown.OnChanged = function (Params) {

        /* ==== */
        /* Dropdown Changed Target Id */
        switch (Params.TargetId) {

            case "divAdmissionYear":
                /* Get the Dashboard Outstanding Details */
                Dashboard.Components.OutstandingPopulate({
                    Reset: true,
                    ResetPagination: true
                });
                break;

        }
    }
    /* ==== */

    /* ==== */
    /* Date Change Event */
    DateRange.OnChanged = function () {
        /* Get the Dashboard Payment Details */
        Dashboard.Components.PaymentPopulate({
            Reset: true,
            ResetPagination: true
        });
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Dashboard Details Components Remove Active Event Listener */
Dashboard.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Dashboard Details Data Processing PreLoader */
Dashboard.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Classdetails-Content", Status);
}
/* ==== */
