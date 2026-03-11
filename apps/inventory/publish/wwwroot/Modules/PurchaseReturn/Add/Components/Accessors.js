/* ==== */
/* Purchase Return Components Setter */
PurchaseReturn.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.GRNRetNo !== "undefined" ? $("#txtGRNReturnNo").val(Param.GRNRetNo) : $("#txtGRNReturnNo").val("");
    typeof Param.GRNRetDate !== "undefined" ? $("#txtGRNReturnDate").val(GeneralFunction.DateFormat(Param.GRNRetDate)) : $("#txtGRNReturnDate").val("");
    typeof Param.GRNNo !== "undefined" ? $("#txtOriginalGRNNo").val(Param.GRNNo) : $("#txtOriginalGRNNo").val("");
    typeof Param.SupplierName !== "undefined" ? $("#txtSupplierName").val(Param.SupplierName) : $("#txtSupplierName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtSupplierContactNo").val(Param.ContactNo) : $("#txtSupplierContactNo").val("");
    typeof Param.TotalDiscountPercentage !== "undefined" ? $("#lblReturnSummaryDiscountPercentage").html(Param.TotalDiscountPercentage) : $("#lblReturnSummaryDiscountPercentage").html("0.000");
    typeof Param.TotalDiscountAmount !== "undefined" ? $("#lblReturnSummaryDiscount").html(parseFloat(Param.TotalDiscountAmount * 1).toFixed(2)) : $("#lblReturnSummaryDiscount").html("0.00");
    typeof Param.Remarks !== "undefined" ? $("#txtReturnRemarks").val(Param.Remarks) : $("#txtReturnRemarks").val("");

    /* Set the PurchaseReturn Details */
    if (typeof Param.PurchaseReturnDetails !== "undefined" && Param.PurchaseReturnDetails.length > 0) {
        for (var i = 0; i < Param.PurchaseReturnDetails.length; i++) {
            /* Add the Product Row */
            PurchaseReturn.Components.AddNewProduct(Param.PurchaseReturnDetails[i]);
        }
    }

    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined") {
        /* Add the Product Row */
        PurchaseReturn.Components.TaxSetter(Param.TaxDetails);
    }
}
/* ==== */


/* ==== */
/* Purchase Return Components Getter */
PurchaseReturn.Components.Getter = function (Param) {

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
    $('#tblReturnProductList tbody tr').each(function () {
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


    /* Get the PurchaseReturn Response */
    var Response = {
        GRNRetId: $("#hdnGRNRetId").val(),
        GRNRetNo: GeneralFunction.DataClearning($("#txtGRNReturnNo").val()),
        GRNRetDate: GeneralFunction.DataClearning($("#txtGRNReturnDate").val()),
        GRNNo: GeneralFunction.DataClearning($("#txtOriginalGRNNo").val()),
        SupplierName: GeneralFunction.DataClearning($("#txtSupplierName").val()),
        ContactNo: GeneralFunction.DataClearning($("#txtSupplierContactNo").val()),
        TotalQty: t_TotalQty,
        TotalWeight: t_TotalWeight,
        SubTotalAmount: t_TotalAmount,
        TotalDiscountPercentage: parseFloat($("#lblReturnSummaryDiscountPercentage").html() * 1).toFixed(3),
        TotalDiscountAmount: parseFloat($("#lblReturnSummaryDiscount").html() * 1).toFixed(2),
        TotalTaxPercentage: t_TotalTaxPercentage,
        TotalTaxAmount: t_TotalTaxAmount,
        GrandTotalAmount: parseFloat($("#lblReturnSummaryToPay").html() * 1).toFixed(2),
        ProductDetails: lstProductDetails,
        TaxDetails: lstTaxDetails,
        Remarks: GeneralFunction.DataClearning($("#txtRemarks").val())
    }
    return Response;
}
/* ==== */

/* ==== */
/* Purchase Return Components Product Setter */
PurchaseReturn.Components.ProductSetter = function (Param) {
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        /* Set the Component Values */
        PurchaseReturn.Components.Products = Param;
    }
}
/* ==== */

/* ==== */
/* Purchase Return Components Product Setter */
PurchaseReturn.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td class="text-right bolder black lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}%  :</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true" 
                       tax-id="${Param[i].TaxId}" tax-percentage="${Param[i].TaxPercentage}" oninput="PurchaseReturn.Components.CalculateGrandTotal()">0.00</td>
                </tr>
            `);
            PurchaseReturn.Components.CalculateGrandTotal();
        }
    }
}
/* ==== */

/* ==== */
/* Purchase Return Components Getter */
PurchaseReturn.Components.PurchaseSetter = function (Param) {

    /* Get the Response */
    if (typeof Param !== "undefined") {

        typeof Param.SupplierName !== "undefined" ? $("#txtSupplierName").val(Param.SupplierName) : $("#txtSupplierName").val("");
        typeof Param.ContactNo !== "undefined" ? $("#txtSupplierContactNo").val(Param.ContactNo) : $("#txtSupplierContactNo").val("");

        /* Set the PurchaseReturn Details */
        if (typeof Param.PurchaseDetails !== "undefined" && Param.PurchaseDetails.length > 0) {

            /* Clear the Table Data */
            $('#tblReturnProductList tbody tr').empty();

            for (var i = 0; i < Param.PurchaseDetails.length; i++) {
                /* Add the Product Row */
                Param.PurchaseDetails[i].AvailableQty = Param.PurchaseDetails[i].AvailableQty;
                Param.PurchaseDetails[i].Qty = 0;
                Param.PurchaseDetails[i].SIWight = Param.PurchaseDetails[i].AvailableWeight;
                PurchaseReturn.Components.AddNewProduct(Param.PurchaseDetails[i]);
            }
        }

        /* Set the Tax Details */
        if (typeof Param.TaxDetails !== "undefined") {
            /* Add the Product Row */
            PurchaseReturn.Components.TaxSetter(Param.TaxDetails);
        }

    }

    /* Calculate the Grand Total */
    PurchaseReturn.Components.CalculateGrandTotal();
}
/* ==== */
