/* ==== */
/* Sales Print Components Objects */
var RepairOutwardPrint = {};
RepairOutwardPrint.Components = {};
/* ==== */

/* ==== */
/* Sales Print Components Initialize */
RepairOutwardPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    RepairOutwardPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Print Components Ready */
RepairOutwardPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    RepairOutwardPrint.Components.Cleaner();

    /* Add Event Listener */
    RepairOutwardPrint.Components.AddEventListener();

    /* Populate the Data */
    RepairOutwardPrint.Components.Populate($("#hdnRSOId").val());
}
/* ==== */

/* ==== */
/* Sales Print Components Clean Up */
RepairOutwardPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        RSONo: "",
        RSODate: new Date(),
        RSINo: "",
        SupplierName: "",
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
    RepairOutwardPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Print Components Add Event Listener */
RepairOutwardPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    RepairOutwardPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        RepairOutwardPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Sales Print Components Remove Active Event Listener */
RepairOutwardPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Print Button Processing Icon */
RepairOutwardPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */