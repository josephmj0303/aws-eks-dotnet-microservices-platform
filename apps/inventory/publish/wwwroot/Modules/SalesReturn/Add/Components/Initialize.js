/* ==== */
/* Sales Return Components Objects */
var SalesReturn = {};
SalesReturn.Components = {};
SalesReturn.Components.Products = [];
/* ==== */

/* ==== */
/* Sales Return Components Initialize */
SalesReturn.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Sales Return Report", Action: "#SaleReturnDetails" }, { Title: $("#hdnInvRetId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    SalesReturn.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesReturn.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Return Components Ready */
SalesReturn.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesReturn.Components.Cleaner();

    /* Add Event Listener */
    SalesReturn.Components.AddEventListener();

    /* Populate the Data */
    SalesReturn.Components.Populate($("#hdnInvRetId").val());
}
/* ==== */

/* ==== */
/* Sales Return Components Clean Up */
SalesReturn.Components.Cleaner = function () {

    /* Clear the Products Array */
    SalesReturn.Components.Products = [];

    /* Set the Default Values */
    var CleanUp = {
        InvRetNo: "New",
        InvRetDate: new Date(),
        BillNo: "",
        CustId: 0,
        CustomerName: "",
        ContactNo: "",
        Remarks: "",
        ProductDetails: [],
        TaxDetails : [],
    }
    SalesReturn.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Return Components Add Event Listener */
SalesReturn.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesReturn.Components.RemoveEventListener();

    /* ==== */
    /* DateTime Picker */
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'dd-M-yyyy',
        defaultDate: new Date()
    });
    /* ==== */


    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        SalesReturn.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesReturn.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Add Product */
    $(".btnAddNewProduct").on("click", function () {
        SalesReturn.Components.AddNewProduct({
            ProductCode: "",
            ProductName: "",
            BoxNo: "",
            Rate: parseFloat(Layout.Components.SalesReturnsPrice * 1).toFixed(2),
            SIWight: "",
            Qty: 1,
            DiscountPer: 0,
            Amount: 0
        });
    });
    /* ==== */

    /* ==== */
    /* Calculate the Discount and Tax */
    $('#txtDiscount, #txtTax').on('input', SalesReturn.Components.CalculateGrandTotal());
    /* ==== */

    /* ==== */
    /* INV Based Serch Details */
    $('#txtOriginalInvNo').on('keypress', function (e) {
        if (e.which === 13) {

            /* Clear the Previous Data */
            SalesReturn.Components.SalesSetter({
                CustomerName: "",
                ContactNo: "",
                SalesDetails: []
            });

            // 13 = Enter key
            let t_InvNo = $(this).val().trim();
            SalesReturn.Components.PopulateSearchSalesDetails(t_InvNo);
        }
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* SalesReturn Components Remove Active Event Listener */
SalesReturn.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Return Button Processing Icon */
SalesReturn.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Add New Product */
SalesReturn.Components.AddNewProduct = function (Params) {
    const SNo = $('#tblProductList tbody tr').length + 1;
    const RowIndex = GeneralFunction.GetRandomKey({ Keylength: 10 }).RandomKey;
    const row = `
        <tr id="${RowIndex}">
            <td>${SNo}</td>
            <td><input type="text" class="form-control txtProductCode" value="${Params.ProductCode}" oninput="SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtProductName" value="${Params.ProductName}" /></td>
            <td><input type="text" class="form-control txtBoxNo" value="${Params.BoxNo}" /></td>
            <td><input type="number" class="form-control txtRate text-right" value="${Params.Rate}" oninput="SalesReturn.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtSIWt text-right" value="${Params.SIWight}" oninput="SalesReturn.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtAvailableQty text-center" readonly value ="${Params.AvailableQty}" /></td>
            <td><input type="number" class="form-control txtQty text-center" value ="${Params.Qty}" oninput="SalesReturn.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtRowDiscount text-right" value="${Params.DiscountPer}" oninput="SalesReturn.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtAmount text-right"  value="${Params.Amount}" readonly /></td>
            <td class="text-center"><i class="fa fa-trash-o fa-2x red" aria-hidden="true" onclick="SalesReturn.Components.RemoveItem(this)"></i></td>
        </tr>`;
    $('#tblProductList tbody').append(row);

    /* Create Product AutoComplete for Product Name */
    $(".txtProductName").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(SalesReturn.Components.Products, function (product) {
                const label = `${product.ProductName} (${product.ProductCode})`;
                if (label.toLowerCase().includes(request.term.toLowerCase())) {
                    return {
                        label: label,
                        value: product.ProductName,
                        data: product
                    };
                }
            });
            response(result);
        },
        select: function (event, ui) {
            const product = ui.item.data;
            const row = $(this).closest('tr');
            row.find(".txtProductCode").val(product.ProductCode);
            row.find(".txtProductName").val(product.ProductName).attr("data-ProductId", product.ProductId);
            row.find(".txtSIWt").val(product.CurrentStockWeight);
            row.find(".txtAvailableQty").val(product.CurrentStockQty);
        }
    });

    /* Create Product AutoComplete for Product Code */
    $(".txtProductCode").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(SalesReturn.Components.Products, function (product) {
                const label = `${product.ProductCode} (${product.ProductName})`;
                if (label.toLowerCase().includes(request.term.toLowerCase())) {
                    return {
                        label: label,
                        value: product.ProductCode,
                        data: product
                    };
                }
            });
            response(result);
        },
        select: function (event, ui) {
            const product = ui.item.data;
            const row = $(this).closest('tr');
            row.find(".txtProductName").val(product.ProductName).attr("data-ProductId", product.ProductId);
            row.find(".txtProductCode").val(product.ProductCode);
            row.find(".txtSIWt").val(product.CurrentStockWeight);
            row.find(".txtAvailableQty").val(product.CurrentStockQty);
        }
    });
   
    SalesReturn.Components.CalculateGrandTotal();
    SalesReturn.Components.CalculateTotalAmount($("#" + RowIndex));
}
/* ==== */


/* ==== */
/* Remove Product */
SalesReturn.Components.RemoveItem = function (btn) {
    $(btn).closest("tr").remove();
    SalesReturn.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Calculate the Grand Total Amount */
SalesReturn.Components.CalculateGrandTotal = function () {
    let subtotal = 0;
    let totalQty = 0;
    let totalWeight = 0;

    $('#tblProductList tbody tr').each(function () {
        const amount = parseFloat($(this).find('.txtAmount').val()) || 0;
        const qty = parseFloat($(this).find('.txtQty').val()) || 0;
        const weight = parseFloat($(this).find('.txtSIWt').val()) || 0;

        subtotal += amount;
        totalQty += qty;
        totalWeight += weight;
    });

    // Show in footer
    $('#lblFooterTotal').text(subtotal.toFixed(2));
    $('#lblTotalQty').text(totalQty);
    $('#lblTotalWeight').text(totalWeight.toFixed(3));

    // Discount & Tax
    const discountPercent = parseFloat($('#lblSummaryDiscountPercentage').html()) || 0;
    const discountAmount = subtotal * discountPercent / 100;
    const taxableAmount = subtotal - discountAmount;

    // Calculate Tax 
    var totalTaxAmount = 0;
    var lstTax = $(".lblTaxPercent");
    for (var i = 0; i < lstTax.length; i++) {
        const taxPercent = parseFloat($(lstTax[i]).attr("tax-percentage")) || 0;
        const taxAmount = taxableAmount * taxPercent / 100;
        $(lstTax[i]).html(parseFloat(taxAmount * 1).toFixed(2));
        totalTaxAmount += parseFloat(taxAmount * 1);
    }
    const toPayAmount = taxableAmount + totalTaxAmount;

    // Show summary in bottom right
    $('#lblSummaryTotal').text(subtotal.toFixed(2));
    $('#lblSummaryDiscount').text(discountAmount.toFixed(2));
    $('#lblSummaryToPay').text(toPayAmount.toFixed(2));

    // Still update hidden fields if needed
    $('#txtTotalAmount').val(toPayAmount.toFixed(2));
}
/* ==== */

/* ==== */
/* Calculate the Product Amount */
SalesReturn.Components.CalculateTotalAmount = function (el) {
    const row = $(el).closest('tr');
    const rate = parseFloat(row.find('.txtRate').val()) || 0;
    const qty = parseFloat(row.find('.txtQty').val()) || 0;
    const weight = parseFloat(row.find('.txtSIWt').val()) || 0;
    const discount = parseFloat(row.find('.txtRowDiscount').val()) || 0;

    const gross = (rate * weight) * qty;
    const net = gross - (gross * discount / 100);
    row.find('.txtAmount').val(net.toFixed(2));
    SalesReturn.Components.CalculateGrandTotal();
}
/* ==== */


/* ==== */
/* Add Record Delete */
SalesReturn.Components.CustomerRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlCustomerConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Add Buyer",
        title_html: true,
        buttons: [
            {
                html: "Save",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Save the Customer */
                    SalesReturn.Components.SaveCustomer();
                }
            },
            {
                html: "Cancel",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */
