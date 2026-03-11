/* ==== */
/* Sales Print Components Objects */
var SalesReturnPrint = {};
SalesReturnPrint.Components = {};
/* ==== */

/* ==== */
/* Sales Print Components Initialize */
SalesReturnPrint.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Print", Action: "#", Active: true }]);

    /* Once Initialize Completed then Goto Ready State */
    SalesReturnPrint.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Print Components Ready */
SalesReturnPrint.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesReturnPrint.Components.Cleaner();

    /* Add Event Listener */
    SalesReturnPrint.Components.AddEventListener();

    /* Populate the Data */
    SalesReturnPrint.Components.Populate($("#hdnInvRetId").val());
}
/* ==== */

/* ==== */
/* Sales Print Components Clean Up */
SalesReturnPrint.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        InvRetNo: "",
        InvRetDate: new Date(),
        BillNo: "",
        CustomerName: "",
        ContactNo: "",
        TotalQty: 0,
        DiscountPercentage: 0,
        DiscountAmount: 0,
        TaxPercentage: 0,
        TaxAmount: 0,
        TotalAmount: 0,
        SalesReturnDetails: [],
        TaxDetails : []
    }
    SalesReturnPrint.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Print Components Add Event Listener */
SalesReturnPrint.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesReturnPrint.Components.RemoveEventListener();

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesReturnPrint.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Sales Print Components Remove Active Event Listener */
SalesReturnPrint.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Print Button Processing Icon */
SalesReturnPrint.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */