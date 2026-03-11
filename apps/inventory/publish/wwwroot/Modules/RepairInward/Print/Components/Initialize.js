/* ==== */
/* Purchase Print Components Objects */
var RepairInwardPrint = {};
RepairInwardPrint.Components = {};
/* ==== */

/* ==== */
/* Purchase Print Components Initialize */
RepairInwardPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    RepairInwardPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Purchase Print Components Ready */
RepairInwardPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    RepairInwardPrint.Components.Cleaner();

    /* Add Event Listener */
    RepairInwardPrint.Components.AddEventListener();

    /* Populate the Data */
    RepairInwardPrint.Components.Populate($("#hdnRSIId").val());
}
/* ==== */

/* ==== */
/* Purchase Print Components Clean Up */
RepairInwardPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        RSINo: "",
        RSIDate: new Date(),
        SupplierName: "",
        ContactNo: "",
        TotalQty: 0,
        DiscountPercentage: 0,
        DiscountAmount: 0,
        TaxPercentage: 0,
        TaxAmount: 0,
        TotalAmount: 0,
        RepairInwardDetails: [],
        TaxDetails : []
    }
    RepairInwardPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Purchase Print Components Add Event Listener */
RepairInwardPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    RepairInwardPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        RepairInwardPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Purchase Print Components Remove Active Event Listener */
RepairInwardPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Purchase Print Button Processing Icon */
RepairInwardPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */