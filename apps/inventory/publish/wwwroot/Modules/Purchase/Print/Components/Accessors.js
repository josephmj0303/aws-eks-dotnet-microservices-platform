

/* ==== */
/* Purchase Print Components Setter */
PurchasePrint.Components.Setter = function (Param) {
    
    /* Set the Customer Details */
    typeof Param.GRNNo !== "undefined" ? $(".lblBillNo").html(Param.GRNNo) : $(".lblBillNo").html("");
    typeof Param.GRNDate !== "undefined" ? $(".lblBillDate").html(GeneralFunction.DateFormat(Param.GRNDate)) : $(".lblBillDate").html("");
    typeof Param.SupplierName !== "undefined" ? $(".lblCustomerName").html(Param.SupplierName) : $(".lblCustomerName").html("");
    typeof Param.ContactNo !== "undefined" ? $(".lblContactNo").html(Param.ContactNo) : $(".lblContactNo").html("");


    typeof Param.TotalDiscountPercentage !== "undefined" ? $(".lblDiscountPercentage").html(Param.TotalDiscountPercentage) : $(".lblDiscountPercentage").html("");
    typeof Param.TotalDiscountAmount !== "undefined" ? $(".lblDiscountAmount").html(parseFloat(Param.TotalDiscountAmount).toFixed(2)) : $(".lblDiscountAmount").html("");
    typeof Param.TaxPercentage !== "undefined" ? $(".lblTaxPercentage").html(Param.TaxPercentage) : $(".lblTaxPercentage").html("");
    typeof Param.GrandTotalAmount !== "undefined" ? $(".lblSummaryToPay").html("Grand Total  : " + parseFloat(Param.GrandTotalAmount).toFixed(2)) : $(".lblSummaryToPay").html("");


    /* Set the Tax Details */
    if (typeof Param.TaxDetails !== "undefined" && Param.TaxDetails.length > 0) {
        PurchasePrint.Components.TaxSetter(Param.TaxDetails);
    }

   
    /* Bind the Sales Details */
    var t_TotWeight = 0;
    var t_TotQty = 0;
    var t_TotAmount = 0;
    var t_TotDiscountAmt = 0;
    if (typeof Param.PurchaseDetails !== "undefined" && Param.PurchaseDetails.length > 0) {
        var $tbody = $(".tbdProductDetails");
        $tbody.empty(); // clear existing rows if any

        for (var i = 0; i < Param.PurchaseDetails.length; i++) {
            var item = Param.PurchaseDetails[i];
            var tr = $('<tr></tr>');
            tr.append('<td class="border-right p-all text-center bolder">' + (i + 1) + '</td>');
            tr.append('<td class="border-right p-all text-left bolder">' + (item.ProductCode || '') + '</td>');
            tr.append('<td class="border-right p-all text-left bolder">' + (item.ProductName || '') + '</td>');
            tr.append('<td class="border-right p-all text-left bolder">' + (item.BoxNo || '') + '</td>');
            tr.append('<td class="border-right p-all text-right bolder">' + parseFloat(item.Rate || 0).toFixed(2) + '</td>');
            tr.append('<td class="border-right p-all text-right bolder">' + parseFloat(item.SIWight || 0).toFixed(3) + '</td>');
            tr.append('<td class="border-right p-all text-center bolder">' + (item.Qty || 0) + '</td>');
            tr.append('<td class="border-right p-all text-right bolder">' + parseFloat(item.DiscountAmount || 0).toFixed(2) + '</td>');
            tr.append('<td class="border-right p-all text-right bolder">' + parseFloat(item.Amount || 0).toFixed(2) + '</td>');
            $tbody.append(tr);

            t_TotWeight += parseFloat(item.SIWight || 0);
            t_TotDiscountAmt += parseFloat(item.DiscountAmount || 0);
            t_TotQty += parseFloat(item.Qty || 0);
            t_TotAmount += parseFloat(item.Amount || 0);

        }
        $(".lblTotalQty").html(t_TotQty);
        $(".lblTotalWeight").html(parseFloat(t_TotWeight).toFixed(3));
        $(".lblTotalDiscount").html(parseFloat(t_TotDiscountAmt).toFixed(2));
        $(".lblTotalAmount").html(parseFloat(t_TotAmount).toFixed(2));
    }
}
/* ==== */

/* ==== */
/* Purchase Print Components Getter */
PurchasePrint.Components.Getter = function (Param) {

    /* Get the Purchase Print Response */
    var Response = {
        InvId: GeneralFunction.DataClearning($("#hdnInvId").val())
    }
    return Response;
}
/* ==== */

/* ==== */
/* Sale Components Product Setter */
PurchasePrint.Components.TaxSetter = function (Param) {
    $("#tbdTaxDetails").html("");
    if (typeof Param !== "undefined" || Param != null || Param.length != 0) {
        for (var i = 0; i < Param.length; i++) {
            /* Set the Component Values */
            $("#tbdTaxDetails").append(`
                <tr>
                    <td colspan="8" class="text-logocolour text-end border-right p-all text-right text-logocolour bolder lblTaxName">${Param[i].TaxName} ${Param[i].TaxPercentage}% &nbsp;</td>
                    <td class="text-right bolder black lblTaxPercent" contenteditable="true">${Param[i].TaxAmount}</td>
                </tr>
            `);
        }
    }
}
/* ==== */


/* ==== */
/* Sale Components Organization Setter */
PurchasePrint.Components.OrganizationSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.OrganizationName !== "undefined" ? $(".lblOrganizationName").html(Param.OrganizationName) : $(".lblOrganizationName").html("");
    typeof Param.Phone !== "undefined" ? $(".lblPhone").html(Param.Phone) : $(".lblPhone").html("");
    typeof Param.AddressLine1 !== "undefined" ? $(".lblAddressLine1").html(Param.AddressLine1) : $(".lblAddressLine1").html("");
    typeof Param.AddressLine2 !== "undefined" ? $(".lblAddressLine2").html(Param.AddressLine2) : $(".lblAddressLine2").html("");
    typeof Param.AddressLine3 !== "undefined" ? $(".lblAddressLine3").html(Param.AddressLine3) : $(".lblAddressLine3").html("");
    typeof Param.City !== "undefined" ? $(".lblCity").html(Param.City) : $(".lblCity").html("");
    typeof Param.State !== "undefined" ? $(".lblState").html(Param.State) : $(".lblState").html("");
    typeof Param.PINCode !== "undefined" ? $(".lblPINCode").html(Param.PINCode) : $(".lblPINCode").html("");

    if (typeof Param.Files !== "undefined") {
        if (Param.Files.length != 0) {

            for (var i = 0; i < Param.Files.length; i++) {

                /* ==== */
                /* Set the Gallery Viewer */
                $(".OrgLetterHead").attr("src", Param.Files[i].ImagePath + "/" + Param.Files[i].FileName);
                /* ==== */

            }
        }
        else {
            $(".OrgLetterHead").hide();
        }
    }


}
/* ==== */