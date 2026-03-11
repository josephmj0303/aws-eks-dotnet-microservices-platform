/* ==== */
/* Assign Fees Components Objects */
var OutPassPrint = {};
OutPassPrint.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Components Initialize */
OutPassPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "OutPass Print", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    OutPassPrint.Components.Pagination.Initialize();

    /* Once Init the Components Validation */
    OutPassPrint.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    OutPassPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Assign Fees Components Ready */
OutPassPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    OutPassPrint.Components.Cleaner();

    /* Add Event Listener */
    OutPassPrint.Components.AddEventListener();

    /* Populate the Data */
    OutPassPrint.Components.Populate();
}
/* ==== */

/* ==== */
/* OutPassPrint Components Clean Up */
OutPassPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
       
    }
    //OutPassPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* OutPassPrint Components Add Event Listener */
OutPassPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    OutPassPrint.Components.RemoveEventListener();

    
     /* Print Report */
     $(".btnPrint").click(function () {
        /* Print the Specific Element */
       var t_Content =  $(".divPrintContainer").html();
         t_Content += "<div class=\"col-lg-12 col-xs-12 text-center\"><br>----------------------------&nbsp;<i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>&nbsp;---------------------------->&nbsp;<br><br></div>";
       t_Content +=  $(".divPrintContainer").html();
        GeneralFunction.Print(t_Content);
    });

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        OutPassPrint.Components.Back();
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Assign Fees Components Remove Active Event Listener */
OutPassPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Assign Fees Button Processing Icon */
OutPassPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */