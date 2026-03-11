/* ==== */
/* Tax Components Objects */
var Tax = {};
Tax.Components = {};
/* ==== */

/* ==== */
/* Tax Components Initialize */
Tax.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Tax", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Tax.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Tax.Components.Ready();
}
/* ==== */

/* ==== */
/* Tax Components Ready */
Tax.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Tax.Components.Cleaner();

    /* Add Event Listener */
    Tax.Components.AddEventListener();

    /* Populate the Data */
    Tax.Components.Populate($("#hdnTaxId").val());
}
/* ==== */

/* ==== */
/* Tax Components Clean Up */
Tax.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        TaxName: "",
        TaxPercentage: "",
        TaxApplyFor: "Sales"
    }
    Tax.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Tax Components Add Event Listener */
Tax.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Tax.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click",function () {
        Tax.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Tax.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Tax Components Remove Active Event Listener */
Tax.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Tax Button Processing Icon */
Tax.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */