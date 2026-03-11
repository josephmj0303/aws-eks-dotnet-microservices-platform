/* ==== */
/* Product Weight Price Components Objects */
var ProductWeightPrice = {};
ProductWeightPrice.Components = {};
/* ==== */

/* ==== */
/* Product Weight Price Components Initialize */
ProductWeightPrice.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Product Weight Prices", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    ProductWeightPrice.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ProductWeightPrice.Components.Ready();
}
/* ==== */

/* ==== */
/* Product Weight Price Components Ready */
ProductWeightPrice.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ProductWeightPrice.Components.Cleaner();

    /* Add Event Listener */
    ProductWeightPrice.Components.AddEventListener();

    /* Populate the Data */
    ProductWeightPrice.Components.Populate($("#hdnPriceId").val());
}
/* ==== */

/* ==== */
/* Product Weight Price Components Clean Up */
ProductWeightPrice.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        PurchasePrice: 0,
        SalesPrice: 0,
        RepairPrice: 0
    }
    ProductWeightPrice.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Product Weight Price Components Add Event Listener */
ProductWeightPrice.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ProductWeightPrice.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        ProductWeightPrice.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        ProductWeightPrice.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Product Weight Price Components Remove Active Event Listener */
ProductWeightPrice.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Product Weight Price Button Processing Icon */
ProductWeightPrice.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */