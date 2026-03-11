/* ==== */
/* Assign Fees Components Objects */
var FeesReceipt = {};
FeesReceipt.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Components Initialize */
FeesReceipt.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Receipt", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    FeesReceipt.Components.Pagination.Initialize();

    /* Once Init the Components Validation */
    FeesReceipt.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesReceipt.Components.Ready();
}
/* ==== */

/* ==== */
/* Assign Fees Components Ready */
FeesReceipt.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    FeesReceipt.Components.Cleaner();

    /* Add Event Listener */
    FeesReceipt.Components.AddEventListener();

    /* Populate the Data */
    FeesReceipt.Components.Populate();
}
/* ==== */

/* ==== */
/* FeesReceipt Components Clean Up */
FeesReceipt.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
       
    }
    FeesReceipt.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* FeesReceipt Components Add Event Listener */
FeesReceipt.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesReceipt.Components.RemoveEventListener();

    
     /* Print Report */
     $(".btnPrint").click(function () {
        /* Print the Specific Element */
       var t_Content =  $(".divPrintContainer").html();
         t_Content += "<div class=\"col-lg-12 col-xs-12 text-center\"><br><br><br><br><br><br></div>";
       t_Content +=  $(".divPrintContainer").html();
        GeneralFunction.Print(t_Content);
    });

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        FeesReceipt.Components.Back();
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Components Remove Active Event Listener */
FeesReceipt.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Assign Fees Button Processing Icon */
FeesReceipt.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */