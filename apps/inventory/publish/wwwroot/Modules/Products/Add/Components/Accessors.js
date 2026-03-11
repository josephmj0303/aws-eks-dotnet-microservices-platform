

/* ==== */
/* Product Components Setter */
Product.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ProductCode !== "undefined" ? $("#txtProductCode").val(Param.ProductCode) : $("#txtProductCode").val("");
    typeof Param.ProductName !== "undefined" ? $("#txtProductName").val(Param.ProductName) : $("#txtProductName").val("");

}
/* ==== */

/* ==== */
/* Product Components Getter */
Product.Components.Getter = function (Param) {

    /* Get the Product Response */
    var Response = {
        ProductId: GeneralFunction.DataClearning($("#hdnProductId").val()),
        ProductCode: GeneralFunction.DataClearning($("#txtProductCode").val()),
        ProductName: GeneralFunction.DataClearning($("#txtProductName").val())
    }
    return Response;
}
/* ==== */
