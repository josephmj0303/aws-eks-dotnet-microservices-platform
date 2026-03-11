/* ==== */
/* Fees Category Components Objects */
var FeesCategory = {};
FeesCategory.Components = {};
/* ==== */

/* ==== */
/* Fees Category Components Initialize */
FeesCategory.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Scheme Details", Action: "#FeesCategoryDetails" }, { Title: $("#hdnFeesCatId").val() == "0" ? "Add New" : "Edit Scheme", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    FeesCategory.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesCategory.Components.Ready();
}
/* ==== */

/* ==== */
/* Fees Category Components Ready */
FeesCategory.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    FeesCategory.Components.Cleaner();

    /* Add Event Listener */
    FeesCategory.Components.AddEventListener();

    /* Populate the Data */
    FeesCategory.Components.Populate($("#hdnFeesCatId").val());
}
/* ==== */

/* ==== */
/* FeesCategory Components Clean Up */
FeesCategory.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        FeesName: "",
        Amount: "0.00",
        Notes: ""
    }
    FeesCategory.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* FeesCategory Components Add Event Listener */
FeesCategory.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesCategory.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").click(function () {
        FeesCategory.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        FeesCategory.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Fees Category Components Remove Active Event Listener */
FeesCategory.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Fees Category Button Processing Icon */
FeesCategory.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */