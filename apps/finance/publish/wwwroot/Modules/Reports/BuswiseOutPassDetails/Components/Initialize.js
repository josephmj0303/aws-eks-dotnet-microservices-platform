/* ==== */
/* Buswise OutPass Report Details Components Objects */
var BuswiseOutPassDetails = {};
BuswiseOutPassDetails.Components = {};
/* ==== */

/* ==== */
/* Buswise OutPass Report Details Components Initialize */
BuswiseOutPassDetails.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Bus Driver Outpass Checklist", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    BuswiseOutPassDetails.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    BuswiseOutPassDetails.Components.Ready();

    
}
/* ==== */

/* ==== */
/* Buswise OutPass Report Details Components Ready */
BuswiseOutPassDetails.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    BuswiseOutPassDetails.Components.Cleaner();

    /* Add Event Listener */
    BuswiseOutPassDetails.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* OutPass Report Details Components Clean Up */
BuswiseOutPassDetails.Components.Cleaner = function () {

    BuswiseOutPassDetails.Components.FilterSetter({
        OutPassDate: new Date()
    });
}
/* ==== */


/* ==== */
/* OutPass Report Details Components Add Event Listener */
BuswiseOutPassDetails.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    BuswiseOutPassDetails.Components.RemoveEventListener();

    /* ==== */
    /* DateTime Picker */
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'dd-M-yyyy',
        defaultDate: new Date()
    });
    /* ==== */

    /* ==== */
    /* Download Click */
    $(".btn-Download").on("click", function () {
        /* Load the Student Details */
        //BuswiseOutPassDetails.Components.Populate({
        //    Reset: true,
        //    ResetPagination: true
        //});

        window.location.href = "/Reports/GeneratePdf";
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* OutPass Report Details Components Remove Active Event Listener */
BuswiseOutPassDetails.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".btn-Download").off("click");
}
/* ==== */



/* ==== */
/* Fees Category Button Processing Icon */
BuswiseOutPassDetails.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Download", Status, "Downloading...", false);
}
/* ==== */