

/* ==== */
/* Product Weight Price Components Setter */
ProductWeightPrice.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.PurchasePrice !== "undefined" ? $("#txtPurchasePrice").val(parseFloat(Param.PurchasePrice).toFixed(2)) : $("#txtPurchasePrice").val("");
    typeof Param.SalesPrice !== "undefined" ? $("#txtSalesPrice").val(parseFloat(Param.SalesPrice).toFixed(2)) : $("#txtSalesPrice").val("");
    typeof Param.RepairPrice !== "undefined" ? $("#txtRepairPrice").val(parseFloat(Param.RepairPrice).toFixed(2)) : $("#txtRepairPrice").val("");

    Layout.Components.PurchasePrice = parseFloat(Param.PurchasePrice * 1).toFixed(2);
    Layout.Components.SalesPrice = parseFloat(Param.SalesPrice * 1).toFixed(2);
    Layout.Components.RepairPrice = parseFloat(Param.RepairPrice * 1).toFixed(2);
}
/* ==== */

/* ==== */
/* Product Weight Price Components Getter */
ProductWeightPrice.Components.Getter = function (Param) {

    /* Get the Product Weight Price Response */
    var Response = {
        PriceId: $("#hdnPriceId").val(),
        PurchasePrice: $("#txtPurchasePrice").val(),
        SalesPrice: $("#txtSalesPrice").val(),
        RepairPrice: $("#txtRepairPrice").val()
    }
    return Response;
}
/* ==== */
