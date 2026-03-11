/* ==== */
/* Batch Components Objects */
var Batch = {};
Batch.Components = {};
/* ==== */

/* ==== */
/* Batch Components Initialize */
Batch.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Batch Details", Action: "#BatchDetails" }, { Title: $("#hdnBatchId").val() == "0" ? "Add New" : "Edit Batch", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Batch.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Batch.Components.Ready();
}
/* ==== */

/* ==== */
/* Batch Components Ready */
Batch.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Batch.Components.Cleaner();

    /* Add Event Listener */
    Batch.Components.AddEventListener();

    /* Populate the Data */
    Batch.Components.Populate($("#hdnBatchId").val());
}
/* ==== */

/* ==== */
/* Batch Components Clean Up */
Batch.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        StartYear: new Date().getFullYear(),
        EndYear: new Date().getFullYear() + 1,
        StartDate: "01-Jun-" + new Date().getFullYear(),
        EndDate: "01-May-" + (parseInt(new Date().getFullYear()) + 1),
        IsActive: true
    }
    Batch.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Batch Components Add Event Listener */
Batch.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Batch.Components.RemoveEventListener();

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
    /* Save Click */
    $(".btn-save").on("click", function () {
        Batch.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Batch.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Batch Components Remove Active Event Listener */
Batch.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Batch Button Processing Icon */
Batch.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */