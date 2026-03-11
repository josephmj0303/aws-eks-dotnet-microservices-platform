/* ==== */
/* Purchase Components Setter */
Purchase.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.GRNNo !== "undefined" ? $("#txtGRNNo").val(Param.GRNNo) : $("#txtGRNNo").val("");
    typeof Param.GRNDate !== "undefined" ? $("#txtGRNDate").val(GeneralFunction.DateFormat(Param.GRNDate)) : $("#txtGRNDate").val("");
    typeof Param.SupplierName !== "undefined" ? $("#txtPurchaseCustomerName").val(Param.SupplierName) : $("#txtPurchaseCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtPurchaseCustomerContactNo").val(Param.ContactNo) : $("#txtPurchaseCustomerContactNo").val("");
    typeof Param.TotalDiscountPercentage !== "undefined" ? $("#lblSummaryDiscountPercentage").html(Param.TotalDiscountPercentage) : $("#lblSummaryDiscountPercentage").html("0.000");
    typeof Param.TotalDiscountAmount !== "undefined" ? $("#lblSummaryDiscount").html(parseFloat(Param.TotalDiscountAmount * 1).toFixed(2)) : $("#lblSummaryDiscount").html("0.00");
    typeof Param.Remarks !== "undefined" ? $("#txtRemarks").val(Param.Remarks) : $("#txtRemarks").val("");

    /* Set the Purchase Details */
    if (typeof Param.PurchaseDetails !== "undefined" && Param.PurchaseDetails.length > 0) {
        for (var i = 0; i < Param.PurchaseDetails.length; i++) {
            /* Add the Product Row */
            Purchase.Components.AddNewProduct(Param.PurchaseDetails[i]);
        }
    }

    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined") {
        /* Add the Product Row */
        Purchase.Components.TaxSetter(Param.TaxDetails);
    }
}
/* ==== */


/* ==== */
/* Purchase Components Getter */
Purchase.Components.Getter = function (Param) {

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


    /* Get the Purchase Response */
    var Response = {
        GRNId: $("#hdnGRNId").val(),
        GRNDate: GeneralFunction.DataClearning($("#txtGRNDate").val()),
        SupplierId: $("#txtPurchaseCustomerContactNo").attr("data-custId"),
        SupplierName: GeneralFunction.DataClearning($("#txtPurchaseCustomerName").val()),
        ContactNo: GeneralFunction.DataClearning($("#txtPurchaseCustomerContactNo").val()),
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
/* Purchase Components Product Setter */
Purchase.Components.ProductSetter = function (Param) {
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        /* Set the Component Values */
        Purchase.Components.Products = Param;
    }
}
/* ==== */

/* ==== */
/* Purchase Components Product Setter */
Purchase.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td class="text-right bolder black lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}%  :</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true" 
                       tax-id="${Param[i].TaxId}" tax-percentage="${Param[i].TaxPercentage}" oninput="Purchase.Components.CalculateGrandTotal()">0.00</td>
                </tr>
            `);
            Purchase.Components.CalculateGrandTotal();
        }
    }
}
/* ==== */

/* ==== */
/* Purchase Customer Components Getter */
Purchase.Components.BillCutomerSetter = function (Param) {

    /* Get the Customer Response */
    typeof Param.CustId !== "undefined" ? $("#txtPurchaseCustomerContactNo").attr("data-custId", Param.CustId) : $("#txtPurchaseCustomerContactNo").attr("data-custId", 0);
    typeof Param.CustomerName !== "undefined" ? $("#txtPurchaseCustomerName").val(Param.CustomerName) : $("#txtPurchaseCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtPurchaseCustomerContactNo").val(Param.ContactNo) : $("#txtPurchaseCustomerContactNo").val("");
}
/* ==== */


/* ==== */
/* Purchase Customer Components Setter */
Purchase.Components.CutomerSetter = function (Param) {

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
/* Purchase Customer Components Getter */
Purchase.Components.CutomerGetter = function (Param) {

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

