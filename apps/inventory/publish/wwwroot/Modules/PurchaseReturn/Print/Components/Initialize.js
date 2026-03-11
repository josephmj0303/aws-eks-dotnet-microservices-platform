/* ==== */
/* Purchase Print Components Objects */
var PurchaseReturnPrint = {};
PurchaseReturnPrint.Components = {};
/* ==== */

/* ==== */
/* Purchase Print Components Initialize */
PurchaseReturnPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    PurchaseReturnPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Purchase Print Components Ready */
PurchaseReturnPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    PurchaseReturnPrint.Components.Cleaner();

    /* Add Event Listener */
    PurchaseReturnPrint.Components.AddEventListener();

    /* Populate the Data */
    PurchaseReturnPrint.Components.Populate($("#hdnGRNRetId").val());
}
/* ==== */

/* ==== */
/* Purchase Print Components Clean Up */
PurchaseReturnPrint.Components.Cleaner = function () {

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
    PurchaseReturnPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Purchase Print Components Add Event Listener */
PurchaseReturnPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    PurchaseReturnPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        PurchaseReturnPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Purchase Print Components Remove Active Event Listener */
PurchaseReturnPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Purchase Print Button Processing Icon */
PurchaseReturnPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */