/* ==== */
/* Repair Inward Components Setter */
RepairInward.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.RSINo !== "undefined" ? $("#txtRSINo").val(Param.RSINo) : $("#txtRSINo").val("");
    typeof Param.RSIDate !== "undefined" ? $("#txtRSIDate").val(GeneralFunction.DateFormat(Param.RSIDate)) : $("#txtRSIDate").val("");
    typeof Param.SupplierName !== "undefined" ? $("#txtInwardCustomerName").val(Param.SupplierName) : $("#txtInwardCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtInwardCustomerContactNo").val(Param.ContactNo) : $("#txtInwardCustomerContactNo").val("");
    typeof Param.TotalDiscountPercentage !== "undefined" ? $("#lblSummaryDiscountPercentage").html(Param.TotalDiscountPercentage) : $("#lblSummaryDiscountPercentage").html("0.000");
    typeof Param.TotalDiscountAmount !== "undefined" ? $("#lblSummaryDiscount").html(parseFloat(Param.TotalDiscountAmount * 1).toFixed(2)) : $("#lblSummaryDiscount").html("0.00");
    typeof Param.Remarks !== "undefined" ? $("#txtRemarks").val(Param.Remarks) : $("#txtRemarks").val("");

    /* Set the RepairInward Details */
    if (typeof Param.RepairInwardDetails !== "undefined" && Param.RepairInwardDetails.length > 0) {
        for (var i = 0; i < Param.RepairInwardDetails.length; i++) {
            /* Add the Product Row */
            RepairInward.Components.AddNewProduct(Param.RepairInwardDetails[i]);
        }
    }

    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined") {
        /* Add the Product Row */
        RepairInward.Components.TaxSetter(Param.TaxDetails);
    }
}
/* ==== */

/* ==== */
/* Repair Inward Components Getter */
RepairInward.Components.Getter = function (Param) {

    /* Get the Product Details */
    var lstProductDetails = [];
    var lstTaxDetails = [];
    var t_TotalQty = 0;
    var t_TotalWeight = 0;
    var t_TotalAmount = 0;
    var t_TotalTaxAmount = 0;
    var t_TotalTaxPercentage = 0;

    /* ==== */
    /* Get the Product Details */
    $('#tblProductList tbody tr').each(function () {
        var $row = $(this);
        var t_ProductId = $row.find(".txtProductName").attr("data-ProductId") || "0";
        var t_ProductCode = GeneralFunction.DataClearning($row.find(".txtProductCode").val() || "");
        var t_ProductName = GeneralFunction.DataClearning($row.find(".txtProductName").val() || "");
        var t_BoxNo = GeneralFunction.DataClearning($row.find(".txtBoxNo").val() || "");
        var t_SIWeight = parseFloat($row.find('.txtSIWt').val()) || 0;
        var t_Qty = parseFloat($row.find('.txtQty').val()) || 0;
        var t_Rate = parseFloat($row.find('.txtRate').val()) || 0;
        var t_DiscountPer = parseFloat($row.find('.txtRowDiscount').val()) || 0;
        var t_Amount = parseFloat($row.find('.txtAmount').val()) || 0;

        if (t_ProductCode != "") {
            var t_DiscountAmount = ((((t_SIWeight * t_Qty) * t_Rate) / 100) * t_DiscountPer);
            lstProductDetails.push({
                RowIndex: $row.attr("id"),
                ProductId: t_ProductId,
                ProductCode: t_ProductCode,
                ProductName: t_ProductName,
                BoxNo: t_BoxNo,
                SIWight: t_SIWeight,
                Qty: t_Qty,
                Rate: t_Rate,
                DiscountPer: t_DiscountPer,
                DiscountAmount: t_DiscountAmount,
                TaxPer: 0,
                TaxAmount: 0,
                Amount: t_Amount
            });

            t_TotalQty += t_Qty;
            t_TotalWeight += t_SIWeight;
            t_TotalAmount += t_Amount;
        }
    });
    /* ==== */

    /* ==== */
    /* Get the Tax Details */
    $('#tbdTaxDetails tr').each(function () {
        lstTaxDetails.push({
            TaxId: $(this).find(".lblTaxPercent").attr("tax-id") || 0,
            TaxPer: $(this).find(".lblTaxPercent").attr("tax-percentage") || 0,
            TaxAmount: parseFloat($(this).find(".lblTaxPercent").html()) || 0,
        });
        t_TotalTaxPercentage += parseFloat($(this).find(".lblTaxPercent").attr("tax-percentage")) || 0;
        t_TotalTaxAmount += parseFloat($(this).find(".lblTaxPercent").html()) || 0;
    });
    /* ==== */


    /* Get the RepairInward Response */
    var Response = {
        RSIId: $("#hdnRSIId").val(),
        RSIDate: GeneralFunction.DataClearning($("#txtRSIDate").val()),
        SupplierId: $("#txtInwardCustomerContactNo").attr("data-custId"),
        SupplierName: GeneralFunction.DataClearning($("#txtInwardCustomerName").val()),
        ContactNo: GeneralFunction.DataClearning($("#txtInwardCustomerContactNo").val()),
        TotalQty: t_TotalQty,
        TotalWeight: t_TotalWeight,
        SubTotalAmount: t_TotalAmount,
        TotalDiscountPercentage: parseFloat($("#lblSummaryDiscountPercentage").html() * 1).toFixed(3),
        TotalDiscountAmount: parseFloat($("#lblSummaryDiscount").html() * 1).toFixed(2),
        TotalTaxPercentage: t_TotalTaxPercentage,
        TotalTaxAmount: t_TotalTaxAmount,
        GrandTotalAmount: parseFloat($("#lblSummaryToPay").html() * 1).toFixed(2),
        ProductDetails: lstProductDetails,
        TaxDetails: lstTaxDetails,
        Remarks: GeneralFunction.DataClearning($("#txtRemarks").val())
    }
    return Response;
}
/* ==== */

/* ==== */
/* Repair Inward Components Product Setter */
RepairInward.Components.ProductSetter = function (Param) {
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        /* Set the Component Values */
        RepairInward.Components.Products = Param;
    }
}
/* ==== */

/* ==== */
/* Repair Inward Components Product Setter */
RepairInward.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td class="text-right bolder black lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}%  :</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true" 
                       tax-id="${Param[i].TaxId}" tax-percentage="${Param[i].TaxPercentage}" oninput="RepairInward.Components.CalculateGrandTotal()">0.00</td>
                </tr>
            `);
            RepairInward.Components.CalculateGrandTotal();
        }
    }
}
/* ==== */

/* ==== */
/* Repair Inward Customer Components Getter */
RepairInward.Components.BillCutomerSetter = function (Param) {

    /* Get the Customer Response */
    typeof Param.CustId !== "undefined" ? $("#txtInwardCustomerContactNo").attr("data-custId", Param.CustId) : $("#txtInwardCustomerContactNo").attr("data-custId", 0);
    typeof Param.CustomerName !== "undefined" ? $("#txtInwardCustomerName").val(Param.CustomerName) : $("#txtInwardCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtInwardCustomerContactNo").val(Param.ContactNo) : $("#txtInwardCustomerContactNo").val("");
}
/* ==== */


/* ==== */
/* Repair Inward Customer Components Setter */
RepairInward.Components.CutomerSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.CustomerName !== "undefined" ? $("#txtCustomerName").val(Param.CustomerName) : $("#txtCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtCutomerContactNo").val(Param.ContactNo) : $("#txtCutomerContactNo").val("");
    typeof Param.EMail !== "undefined" ? $("#txtCutomerEMail").val(Param.EMail) : $("#txtCutomerEMail").val("");
    typeof Param.AddressLine1 !== "undefined" ? $("#txtAddressLine1").val(Param.AddressLine1) : $("#txtAddressLine1").val("");
    typeof Param.AddressLine2 !== "undefined" ? $("#txtAddressLine2").val(Param.AddressLine2) : $("#txtAddressLine2").val("");
    typeof Param.PostCode !== "undefined" ? $("#txtPostCode").val(Param.PostCode) : $("#txtPostCode").val("");
    typeof Param.City !== "undefined" ? $("#txtCity").val(Param.City) : $("#txtCity").val("");
    typeof Param.State !== "undefined" ? $("#txtState").val(Param.State) : $("#txtState").val("");
    typeof Param.GSTNo !== "undefined" ? $("#txtGSTNo").val(Param.GSTNo) : $("#txtGSTNo").val("");

}
/* ==== */

/* ==== */
/* Repair Inward Customer Components Getter */
RepairInward.Components.CutomerGetter = function (Param) {

    /* Get the Customer Response */
    var Response = {
        CustId: $("#hdnCustId").val(),
        CustomerName: $("#txtCustomerName").val(),
        ContactNo: $("#txtCutomerContactNo").val(),
        EMail: $("#txtCutomerEMail").val(),
        AddressLine1: $("#txtAddressLine1").val(),
        AddressLine2: $("#txtAddressLine2").val(),
        PostCode: $("#txtPostCode").val(),
        City: $("#txtCity").val(),
        State: $("#txtState").val(),
        GSTNo: $("#txtGSTNo").val()
    }
    return Response;
}
/* ==== */

