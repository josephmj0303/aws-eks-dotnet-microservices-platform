/* ==== */
/* Sales Print Components Objects */
var SalesPrint = {};
SalesPrint.Components = {};
/* ==== */

/* ==== */
/* Sales Print Components Initialize */
SalesPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    SalesPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Print Components Ready */
SalesPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesPrint.Components.Cleaner();

    /* Add Event Listener */
    SalesPrint.Components.AddEventListener();

    /* Populate the Data */
    SalesPrint.Components.Populate($("#hdnInvId").val());
}
/* ==== */

/* ==== */
/* Sales Print Components Clean Up */
SalesPrint.Components.Cleaner = function () {

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
    SalesPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Print Components Add Event Listener */
SalesPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Sales Print Components Remove Active Event Listener */
SalesPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Print Button Processing Icon */
SalesPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */