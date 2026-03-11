/* ==== */
/* Sales Return Components Setter */
SalesReturn.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.InvRetNo !== "undefined" ? $("#txtInvNo").val(Param.InvRetNo) : $("#txtInvNo").val("");
    typeof Param.InvRetDate !== "undefined" ? $("#txtInvDate").val(GeneralFunction.DateFormat(Param.InvRetDate)) : $("#txtInvDate").val("");
    typeof Param.BillNo !== "undefined" ? $("#txtOriginalInvNo").val(Param.BillNo) : $("#txtOriginalInvNo").val("");
    typeof Param.CustomerName !== "undefined" ? $("#txtSalesReturnCustomerName").val(Param.CustomerName) : $("#txtSalesReturnCustomerName").val("");
    typeof Param.ContactNo !== "undefined" ? $("#txtSalesReturnCustomerContactNo").val(Param.ContactNo) : $("#txtSalesReturnCustomerContactNo").val("");
    typeof Param.TotalDiscountPercentage !== "undefined" ? $("#lblSummaryDiscountPercentage").html(Param.TotalDiscountPercentage) : $("#lblSummaryDiscountPercentage").html("0.000");
    typeof Param.TotalDiscountAmount !== "undefined" ? $("#lblSummaryDiscount").html(parseFloat(Param.TotalDiscountAmount * 1).toFixed(2)) : $("#lblSummaryDiscount").html("0.00");
    typeof Param.Remarks !== "undefined" ? $("#txtRemarks").val(Param.Remarks) : $("#txtRemarks").val("");

    /* Set the SalesReturn Details */
    if (typeof Param.SalesReturnDetails !== "undefined" && Param.SalesReturnDetails.length > 0) {
        for (var i = 0; i < Param.SalesReturnDetails.length; i++) {
            /* Add the Product Row */
            SalesReturn.Components.AddNewProduct(Param.SalesReturnDetails[i]);
        }
    }

    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined" && Param.TaxDetails.length > 0) {
        /* Add the Product Row */
        SalesReturn.Components.TaxSetter(Param.TaxDetails);
    }
}
/* ==== */

/* ==== */
/* Sales Return Components Getter */
SalesReturn.Components.Getter = function (Param) {

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


    /* Get the SalesReturn Response */
    var Response = {
        InvRetId: $("#hdnInvRetId").val(),
        InvRetDate: GeneralFunction.DataClearning($("#txtInvDate").val()),
        BillNo: GeneralFunction.DataClearning($("#txtOriginalInvNo").val()),
        CustId: $("#txtSalesReturnCustomerContactNo").attr("data-custId"),
        CustomerName: GeneralFunction.DataClearning($("#txtSalesReturnCustomerName").val()),
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
/* Sales Return Components Product Setter */
SalesReturn.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td class="text-right bolder black lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}%  :</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true" 
                       tax-id="${Param[i].TaxId}" tax-percentage="${Param[i].TaxPercentage}" oninput="SalesReturn.Components.CalculateGrandTotal()">0.00</td>
                </tr>
            `);
            SalesReturn.Components.CalculateGrandTotal();
        }
    }
}
/* ==== */

/* ==== */
/* Sales Return Components Getter */
SalesReturn.Components.SalesSetter = function (Param) {

    /* Get the Response */
    if (typeof Param !== "undefined") {

        typeof Param.CustomerName !== "undefined" ? $("#txtSalesReturnCustomerName").val(Param.CustomerName) : $("#txtSalesReturnCustomerName").val("");
        typeof Param.ContactNo !== "undefined" ? $("#txtSalesReturnCustomerContactNo").val(Param.ContactNo) : $("#txtSalesReturnCustomerContactNo").val("");
       
        /* Set the Sales Details */
        if (typeof Param.SalesDetails !== "undefined" && Param.SalesDetails.length > 0) {
            for (var i = 0; i < Param.SalesDetails.length; i++) {
                /* Add the Product Row */
                Param.SalesDetails[i].AvailableQty = Param.SalesDetails[i].AvailableQty;
                Param.SalesDetails[i].Qty = 0;
                SalesReturn.Components.AddNewProduct(Param.SalesDetails[i]);
            }
        }

        /* Set the Tax Details */
        if (typeof Param.TaxDetails !== "undefined") {
            /* Add the Product Row */
            SalesReturn.Components.TaxSetter(Param.TaxDetails);
        }

    }

    /* Calculate the Grand Total */
    SalesReturn.Components.CalculateGrandTotal();
}
/* ==== */