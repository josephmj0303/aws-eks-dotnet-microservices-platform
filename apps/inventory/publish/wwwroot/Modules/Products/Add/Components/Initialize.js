/* ==== */
/* Product Components Objects */
var Product = {};
Product.Components = {};
/* ==== */

/* ==== */
/* Product Components Initialize */
Product.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Products Details", Action: "#ProductDetails" }, { Title: $("#hdnProductId").val() == "0" ? "Add New" : "Edit Products", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Product.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Product.Components.Ready();
}
/* ==== */

/* ==== */
/* Product Components Ready */
Product.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Product.Components.Cleaner();

    /* Add Event Listener */
    Product.Components.AddEventListener();

    /* Populate the Data */
    Product.Components.Populate($("#hdnProductId").val());
}
/* ==== */

/* ==== */
/* Product Components Clean Up */
Product.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        ProductCode: "",
        ProductName: ""
    }
    Product.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Product Components Add Event Listener */
Product.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Product.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        Product.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Product.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Product Components Remove Active Event Listener */
Product.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Product Button Processing Icon */
Product.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */