/* ==== */
/* Sales Print Components Objects */
var SalesmanOutwardPrint = {};
SalesmanOutwardPrint.Components = {};
/* ==== */

/* ==== */
/* Sales Print Components Initialize */
SalesmanOutwardPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    SalesmanOutwardPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Print Components Ready */
SalesmanOutwardPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanOutwardPrint.Components.Cleaner();

    /* Add Event Listener */
    SalesmanOutwardPrint.Components.AddEventListener();

    /* Populate the Data */
    SalesmanOutwardPrint.Components.Populate($("#hdnSMOUTId").val());
}
/* ==== */

/* ==== */
/* Sales Print Components Clean Up */
SalesmanOutwardPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        OutwardNo: "New",
        OutwardDate: new Date(),
        SalesmanId: 0,
        SalesmanName: "",
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
    SalesmanOutwardPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Print Components Add Event Listener */
SalesmanOutwardPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanOutwardPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesmanOutwardPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Sales Print Components Remove Active Event Listener */
SalesmanOutwardPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Print Button Processing Icon */
SalesmanOutwardPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */