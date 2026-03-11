/* ==== */
/* Purchase Print Components Objects */
var PurchasePrint = {};
PurchasePrint.Components = {};
/* ==== */

/* ==== */
/* Purchase Print Components Initialize */
PurchasePrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    PurchasePrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Purchase Print Components Ready */
PurchasePrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    PurchasePrint.Components.Cleaner();

    /* Add Event Listener */
    PurchasePrint.Components.AddEventListener();

    /* Populate the Data */
    PurchasePrint.Components.Populate($("#hdnGRNId").val());
}
/* ==== */

/* ==== */
/* Purchase Print Components Clean Up */
PurchasePrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        BillNo: "",
        BillDate: new Date(),
        CustomerName: "",
        ContactNo: "",
        TotalQty: 0,
        DiscountPercentage: 0,
        DiscountAmount: 0,
        TaxPercentage: 0,
        TaxAmount: 0,
        TotalAmount: 0,
        SalesDetails: [],
        TaxDetails : []
    }
    PurchasePrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Purchase Print Components Add Event Listener */
PurchasePrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    PurchasePrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        PurchasePrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Purchase Print Components Remove Active Event Listener */
PurchasePrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Purchase Print Button Processing Icon */
PurchasePrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */