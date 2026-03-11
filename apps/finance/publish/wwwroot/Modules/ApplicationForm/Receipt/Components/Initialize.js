/* ==== */
/* Application Fees Receipt Components Objects */
var ApplicationFeesReceipt = {};
ApplicationFeesReceipt.Components = {};
/* ==== */

/* ==== */
/* Application Fees Receipt Initialize Components  */
ApplicationFeesReceipt.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Receipt", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ApplicationFeesReceipt.Components.Pagination.Initialize();

    /* Once Init the Components Validation */
    ApplicationFeesReceipt.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ApplicationFeesReceipt.Components.Ready();

}
/* ==== */

/* ==== */
/* Application Fees Receipt Ready Components  */
ApplicationFeesReceipt.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ApplicationFeesReceipt.Components.Cleaner();

    /* Add Event Listener */
    ApplicationFeesReceipt.Components.AddEventListener();

    /* Populate the Data */
    ApplicationFeesReceipt.Components.Populate();
}
/* ==== */

/* ==== */
/* Application Fees Receipt Clean Up Components  */
ApplicationFeesReceipt.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
       
    }
    ApplicationFeesReceipt.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Application Fees Receipt Add Event Listener Components  */
ApplicationFeesReceipt.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ApplicationFeesReceipt.Components.RemoveEventListener();

    
     /* Print Report */
     $(".btnPrint").click(function () {
        /* Print the Specific Element */
       var t_Content =  $(".divPrintContainer").html();
       t_Content += "<div class=\"col-lg-12 col-xs-12 text-center\"><br><br>----------------------------&nbsp;<i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>&nbsp;----------------------------<br><br></div>";
       t_Content +=  $(".divPrintContainer").html();
        GeneralFunction.Print(t_Content);
    });

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        ApplicationFeesReceipt.Components.Back();
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Application Fees Receipt Remove Active Event Listener Components */
ApplicationFeesReceipt.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Application Fees Receipt Button Processing Icon */
ApplicationFeesReceipt.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */