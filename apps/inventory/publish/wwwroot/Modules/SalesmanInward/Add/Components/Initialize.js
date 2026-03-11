/* ==== */
/* Sales Return Components Objects */
var SalesmanInward = {};
SalesmanInward.Components = {};
SalesmanInward.Components.Products = [];
/* ==== */

/* ==== */
/* Sales Return Components Initialize */
SalesmanInward.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Salesman Return Report", Action: "#SalesmanInwardDetails" }, { Title: $("#hdnSMINId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    SalesmanInward.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesmanInward.Components.Ready();
}
/* ==== */

/* ==== */
/* Sales Return Components Ready */
SalesmanInward.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanInward.Components.Cleaner();

    /* Add Event Listener */
    SalesmanInward.Components.AddEventListener();

    /* Populate the Data */
    SalesmanInward.Components.Populate($("#hdnSMINId").val());
}
/* ==== */

/* ==== */
/* Sales Return Components Clean Up */
SalesmanInward.Components.Cleaner = function () {

    /* Clear the Products Array */
    SalesmanInward.Components.Products = [];

    /* Set the Default Values */
    var CleanUp = {
        InwardNo: "New",
        InwardDate: new Date(),
        OutwardNo: "",
        SalesmanId: 0,
        SalesmanName: "",
        ContactNo: "",
        Remarks: "",
        ProductDetails: [],
        TaxDetails : [],
    }
    SalesmanInward.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sales Return Components Add Event Listener */
SalesmanInward.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanInward.Components.RemoveEventListener();

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
        SalesmanInward.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesmanInward.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Add Product */
    $(".btnAddNewProduct").on("click", function () {
        SalesmanInward.Components.AddNewProduct({
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
    $('#txtDiscount, #txtTax').on('input', SalesmanInward.Components.CalculateGrandTotal());
    /* ==== */

    /* ==== */
    /* INV Based Serch Details */
    $('#txtOriginalInvNo').on('keypress', function (e) {
        if (e.which === 13) {

            /* Clear the Previous Data */
            SalesmanInward.Components.SalesSetter({
                CustomerName: "",
                ContactNo: "",
                SalesDetails: []
            });

            // 13 = Enter key
            let t_InvNo = $(this).val().trim();
            SalesmanInward.Components.PopulateSearchSalesDetails(t_InvNo);
        }
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* SalesReturn Components Remove Active Event Listener */
SalesmanInward.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sales Return Button Processing Icon */
SalesmanInward.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Add New Product */
SalesmanInward.Components.AddNewProduct = function (Params) {
    const SNo = $('#tblProductList tbody tr').length + 1;
    const RowIndex = GeneralFunction.GetRandomKey({ Keylength: 10 }).RandomKey;
    const row = `
        <tr id="${RowIndex}">
            <td>${SNo}</td>
            <td><input type="text" class="form-control txtProductCode" value="${Params.ProductCode}" oninput="SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtProductName" value="${Params.ProductName}" /></td>
            <td><input type="text" class="form-control txtBoxNo" value="${Params.BoxNo}" /></td>
            <td><input type="number" class="form-control txtRate text-right" value="${Params.Rate}" oninput="SalesmanInward.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtSIWt text-right" value="${Params.SIWight}" oninput="SalesmanInward.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtAvailableQty text-center" readonly value ="${Params.AvailableQty}" /></td>
            <td><input type="number" class="form-control txtQty text-center" value ="${Params.Qty}" oninput="SalesmanInward.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtRowDiscount text-right" value="${Params.DiscountPer}" oninput="SalesmanInward.Components.CalculateTotalAmount(this);SalesReturnsDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtAmount text-right"  value="${Params.Amount}" readonly /></td>
            <td class="text-center"><i class="fa fa-trash-o fa-2x red" aria-hidden="true" onclick="SalesmanInward.Components.RemoveItem(this)"></i></td>
        </tr>`;
    $('#tblProductList tbody').append(row);

    /* Create Product AutoComplete for Product Name */
    $(".txtProductName").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(SalesmanInward.Components.Products, function (product) {
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
            const result = $.map(SalesmanInward.Components.Products, function (product) {
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
   
    SalesmanInward.Components.CalculateGrandTotal();
    SalesmanInward.Components.CalculateTotalAmount($("#" + RowIndex));
}
/* ==== */


/* ==== */
/* Remove Product */
SalesmanInward.Components.RemoveItem = function (btn) {
    $(btn).closest("tr").remove();
    SalesmanInward.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Calculate the Grand Total Amount */
SalesmanInward.Components.CalculateGrandTotal = function () {
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
SalesmanInward.Components.CalculateTotalAmount = function (el) {
    const row = $(el).closest('tr');
    const rate = parseFloat(row.find('.txtRate').val()) || 0;
    const qty = parseFloat(row.find('.txtQty').val()) || 0;
    const weight = parseFloat(row.find('.txtSIWt').val()) || 0;
    const discount = parseFloat(row.find('.txtRowDiscount').val()) || 0;

    const gross = (rate * weight) * qty;
    const net = gross - (gross * discount / 100);
    row.find('.txtAmount').val(net.toFixed(2));
    SalesmanInward.Components.CalculateGrandTotal();
}
/* ==== */


/* ==== */
/* Add Record Delete */
SalesmanInward.Components.CustomerRecord = function (RouteId) {

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
                    SalesmanInward.Components.SaveCustomer();
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
