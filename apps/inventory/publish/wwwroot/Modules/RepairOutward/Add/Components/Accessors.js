/* ==== */
/* Repair Outward Components Setter */
RepairOutward.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.RSONo !== "undefined" ? $("#txtInvNo").val(Param.RSONo) : $("#txtInvNo").val("");
    typeof Param.RSODate !== "undefined" ? $("#txtInvDate").val(GeneralFunction.DateFormat(Param.RSODate)) : $("#txtInvDate").val("");
    typeof Param.RSINo !== "undefined" ? $("#txtOriginalInvNo").val(Param.RSINo) : $("#txtOriginalInvNo").val("");
    typeof Param.SupplierName !== "undefined" ? $("#txtSalesReturnCustomerName").val(Param.SupplierName) : $("#txtSalesReturnCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtSalesReturnCustomerContactNo").val(Param.ContactNo) : $("#txtSalesReturnCustomerContactNo").val("");
    typeof Param.TotalDiscountPercentage !== "undefined" ? $("#lblSummaryDiscountPercentage").html(Param.TotalDiscountPercentage) : $("#lblSummaryDiscountPercentage").html("0.000");
    typeof Param.TotalDiscountAmount !== "undefined" ? $("#lblSummaryDiscount").html(parseFloat(Param.TotalDiscountAmount * 1).toFixed(2)) : $("#lblSummaryDiscount").html("0.00");
    typeof Param.Remarks !== "undefined" ? $("#txtRemarks").val(Param.Remarks) : $("#txtRemarks").val("");

    /* Set the RepairOutward Details */
    if (typeof Param.RepairOutwardDetails !== "undefined" && Param.RepairOutwardDetails.length > 0) {
        for (var i = 0; i < Param.RepairOutwardDetails.length; i++) {
            /* Add the Product Row */
            RepairOutward.Components.AddNewProduct(Param.RepairOutwardDetails[i]);
        }
    }

    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined" && Param.TaxDetails.length > 0) {
        /* Add the Product Row */
        RepairOutward.Components.TaxSetter(Param.TaxDetails);
    }
}
/* ==== */

/* ==== */
/* Repair Outward Components Getter */
RepairOutward.Components.Getter = function (Param) {

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


    /* Get the RepairOutward Response */
    var Response = {
        RSOId: $("#hdnRSOId").val(),
        RSONo: GeneralFunction.DataClearning($("#txtInvNo").val()),
        RSODate: GeneralFunction.DataClearning($("#txtInvDate").val()),
        RSINo: GeneralFunction.DataClearning($("#txtOriginalInvNo").val()),
        SupplierId: $("#txtSalesReturnCustomerContactNo").attr("data-custId"),
        SupplierName: GeneralFunction.DataClearning($("#txtSalesReturnCustomerName").val()),
        ContactNo: GeneralFunction.DataClearning($("#txtSalesReturnCustomerContactNo").val()),
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
/* Repair Outward Components Product Setter */
RepairOutward.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td class="text-right bolder black lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}%  :</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true" 
                       tax-id="${Param[i].TaxId}" tax-percentage="${Param[i].TaxPercentage}" oninput="RepairOutward.Components.CalculateGrandTotal()">0.00</td>
                </tr>
            `);
            RepairOutward.Components.CalculateGrandTotal();
        }
    }
}
/* ==== */

/* ==== */
/* Repair Outward Components Getter */
RepairOutward.Components.InwardSetter = function (Param) {

    /* Get the Response */
    if (typeof Param !== "undefined") {

        typeof Param.SupplierName !== "undefined" ? $("#txtSalesReturnCustomerName").val(Param.SupplierName) : $("#txtSalesReturnCustomerName").val("");
        typeof Param.ContactNo !== "undefined" ? $("#txtSalesReturnCustomerContactNo").val(Param.ContactNo) : $("#txtSalesReturnCustomerContactNo").val("");
       
        /* Set the Inward Details */
        if (typeof Param.InwardDetails !== "undefined" && Param.InwardDetails.length > 0) {
            for (var i = 0; i < Param.InwardDetails.length; i++) {
                /* Add the Product Row */
                Param.InwardDetails[i].AvailableQty = Param.InwardDetails[i].Qty;
                Param.InwardDetails[i].Qty = 0;
                RepairOutward.Components.AddNewProduct(Param.InwardDetails[i]);
            }
        }

        /* Set the Tax Details */
        if (typeof Param.TaxDetails !== "undefined") {
            /* Add the Product Row */
            RepairOutward.Components.TaxSetter(Param.TaxDetails);
        }

    }

    /* Calculate the Grand Total */
    RepairOutward.Components.CalculateGrandTotal();
}
/* ==== */