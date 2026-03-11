/* ==== */
/* Purchase Print Components Objects */
var SalesmanInwardPrint = {};
SalesmanInwardPrint.Components = {};
/* ==== */

/* ==== */
/* Purchase Print Components Initialize */
SalesmanInwardPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    SalesmanInwardPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Purchase Print Components Ready */
SalesmanInwardPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanInwardPrint.Components.Cleaner();

    /* Add Event Listener */
    SalesmanInwardPrint.Components.AddEventListener();

    /* Populate the Data */
    SalesmanInwardPrint.Components.Populate($("#hdnSMINId").val());
}
/* ==== */

/* ==== */
/* Purchase Print Components Clean Up */
SalesmanInwardPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        InwardNo: "",
        InwardDate: new Date(),
        SalesmanName: "",
        ContactNo: "",
        TotalQty: 0,
        DiscountPercentage: 0,
        DiscountAmount: 0,
        TaxPercentage: 0,
        TaxAmount: 0,
        TotalAmount: 0,
        ProductDetails: [],
        TaxDetails : []
    }
    SalesmanInwardPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Purchase Print Components Add Event Listener */
SalesmanInwardPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanInwardPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesmanInwardPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Purchase Print Components Remove Active Event Listener */
SalesmanInwardPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Purchase Print Button Processing Icon */
SalesmanInwardPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */