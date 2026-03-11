

/* ==== */
/* Tax Components Setter */
Tax.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.TaxName !== "undefined" ? $("#txtTaxName").val(Param.TaxName) : $("#txtTaxName").val("");
    typeof Param.TaxPercentage !== "undefined" ? $("#txtTaxPercentage").val(Param.TaxPercentage) : $("#txtTaxPercentage").val("");
    typeof Param.TaxApplyFor !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divTaxFor", Value: Param.TaxApplyFor }) : "";

}
/* ==== */

/* ==== */
/* Tax Components Getter */
Tax.Components.Getter = function (Param) {

    /* Get the Tax Response */
    var Response = {
        TaxId: $("#hdnTaxId").val(),
        TaxName: $("#txtTaxName").val(),
        TaxPercentage: $("#txtTaxPercentage").val(),
        TaxApplyFor: Dropdown.GetSelectedOption({ TargetId: ".divTaxFor" }).Value,
    }
    return Response;
}
/* ==== */
