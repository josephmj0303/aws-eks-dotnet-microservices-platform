/* ==== */
/* Repair Inward Components Objects */
var RepairInward = {};
RepairInward.Components = {};
RepairInward.Components.Products = [];
/* ==== */

/* ==== */
/* Repair Inward Components Initialize */
RepairInward.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Service Collection Report", Action: "#RepairInwardDetails" }, { Title: $("#hdnRSIId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    RepairInward.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    RepairInward.Components.Ready();
}
/* ==== */

/* ==== */
/* Repair Inward Components Ready */
RepairInward.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    RepairInward.Components.Cleaner();

    /* Add Event Listener */
    RepairInward.Components.AddEventListener();

    /* Populate the Product Details */
    RepairInward.Components.PopulateProduct();
    RepairInward.Components.PopulateTax();

    /* Populate the Data */
    RepairInward.Components.Populate($("#hdnRSIId").val());
}
/* ==== */

/* ==== */
/* Repair Inward Components Clean Up */
RepairInward.Components.Cleaner = function () {

    /* Clear the Products Array */
    RepairInward.Components.Products = [];

    /* Set the Default Values */
    var CleanUp = {
        RSINo: "New",
        RSIDate: new Date(),
        SupplierId: 0,
        SupplierName: "",
        ContactNo: "",
        Remarks: "",
        ProductDetails: [],
        TaxDetails : [],
    }
    RepairInward.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Repair Inward Components Add Event Listener */
RepairInward.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    RepairInward.Components.RemoveEventListener();

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
        RepairInward.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        RepairInward.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Add Product */
    $(".btnAddNewProduct").on("click", function () {
        RepairInward.Components.AddNewProduct({
            ProductCode: "",
            ProductName: "",
            BoxNo: "",
            Rate: parseFloat(Layout.Components.RepairPrice * 1).toFixed(2),
            SIWight: "",
            Qty: 1,
            DiscountPer: 0,
            Amount: 0,
            AvailableQty:0
        });
    });
    /* ==== */

    /* ==== */
    /* Customer Mobile No Based Serch */
    let inputTimeout;
    $('#txtInwardCustomerContactNo').on('input', function () {
        clearTimeout(inputTimeout); // Clear the previous timeout

        let t_ContactNo = $(this).val().trim();

        // Only proceed if length > 5 (optional, you can adjust or remove)
        if (t_ContactNo.length >= 5) {
            inputTimeout = setTimeout(function () {

                RepairInward.Components.PopulateSearchCustomer(t_ContactNo);
            }, 500); // Delay in milliseconds (adjust as needed)
        }
    });
    $('#txtInwardCustomerContactNo').on('keypress', function (e) {
        if (e.which === 13) {
            clearTimeout(inputTimeout); // Cancel the debounce if Enter is pressed
            // 13 = Enter key
            let t_ContactNo = $(this).val().trim();
            RepairInward.Components.PopulateSearchCustomer(t_ContactNo);
        }
    });
    /* ==== */

    /* ==== */
    /* Add Customer */
    $("#divCustomer_AddIcons").on("click", function () {

        /* Set the Default Values */
        var CleanUp = {
            RSIId: 0,
            CustomerName: "",
            EMail : "",
            ContactNo: "",
            AddressLine1: "",
            AddressLine2: "",
            PostCode: "",
            City: "",
            State: "",
            GSTNo: ""
        }
        RepairInward.Components.CutomerSetter(CleanUp);

        /* Show the Customer Modal */
        RepairInward.Components.CustomerRecord();
    });
    /* ==== */

    /* ==== */
    /* Calculate the Discount and Tax */
    $('#txtDiscount, #txtTax').on('input', RepairInward.Components.CalculateGrandTotal());
    /* ==== */


    /* ==== */
    /* Get the PostCode Info */
    $("#txtPostCode").on("input", function (e) {

        // Remove all non-digit characters
        let t_PostCode = $(this).val().replace(/\D/g, "").substring(0, 6);

        // Update the textbox with cleaned value
        $(this).val(t_PostCode);
        if (!t_PostCode || t_PostCode.length < 6) {
            return;
        }


        // API URL (Replace with your own or use another suitable API)
        const url = `/Customer/GetPincodeInfo/${t_PostCode}`;
        $.get(url, function (data) {
            if (data.Status === "Success") {
                if (data.PostOffice.length > 0) {
                    // Extract the first post office data
                    const firstPostOffice = data.PostOffice[0];

                    // Set the extracted values to respective fields
                    $("#txtCity").val(firstPostOffice.District);
                    $("#txtState").val(firstPostOffice.State);
                }
            } else {
                // Clear fields in case of an error or no result
                $("#txtCity, #txtState").val("");
                alert("Invalid or unavailable postcode.");
            }
        }).fail(function (e) {
            // Handle API failure
            $("#txtCity, #txtState").val("");
            alert("Unable to fetch data. Please try again later.");
        });

    });
    /* ==== */

    $(document).on('input', '.txtSourceProductCode, .txtSourceProductName, .txtSourceBoxNo, .txtSourceRate, .txtSourceSIWt', function () {
        setTimeout(function () {
            const row = $("#SourceTable");

            const productCode = row.find('.txtSourceProductCode').val().trim();
            const productName = row.find('.txtSourceProductName').val().trim();
            const boxNo = row.find('.txtSourceBoxNo').val().trim();
            const rate = parseFloat(Layout.Components.RepairPrice * 1).toFixed(2);
            const siWt = parseFloat(row.find('.txtSourceSIWt').val());

            if (productCode && productName && boxNo && !isNaN(rate) && !isNaN(siWt)) {

                // Try to get matching product from master list
                const product = Sale.Components.Products.find(p =>
                    p.ProductCode === productCode &&
                    p.ProductName === productName &&
                    parseFloat(p.CurrentStockWeight) === siWt
                );

                // If not found in master, build partial object from input
                const productObj = product || {
                    ProductCode: productCode,
                    ProductName: productName,
                    CurrentStockWeight: siWt,
                    SaleRate: rate,
                    CurrentStockQty: 0
                };

                let foundRow = null;

                // Check if already exists in table
                $("#tblProductList tbody tr").each(function () {
                    const rowCode = $(this).find(".txtProductCode").val().trim();
                    const rowName = $(this).find(".txtProductName").val().trim();
                    const rowWeight = parseFloat($(this).find(".txtSIWt").val()) || 0;

                    if (
                        rowCode === productObj.ProductCode &&
                        rowName === productObj.ProductName &&
                        rowWeight === parseFloat(productObj.CurrentStockWeight)
                    ) {
                        foundRow = $(this);
                        return false; // break loop
                    }
                });

                if (foundRow) {
                    // Just increase quantity
                    const qtyField = foundRow.find(".txtQty");
                    let currentQty = parseFloat(qtyField.val()) || 0;
                    qtyField.val(currentQty + 1).trigger("input");
                } else {
                    // Add new row
                    RepairInward.Components.AddNewProduct({
                        ProductCode: productObj.ProductCode,
                        ProductName: productObj.ProductName,
                        BoxNo: boxNo,
                        Rate: parseFloat(productObj.SaleRate || 0).toFixed(2),
                        SIWight: parseFloat(productObj.CurrentStockWeight).toFixed(3),
                        Qty: 1,
                        DiscountPer: 0,
                        Amount: 0,
                        AvailableQty: productObj.CurrentStockQty || 0
                    });
                }

                // Clear the source row after adding
                $(".txtSourceInput").val("");
                $(".txtSourceScanArea").focus();
                RepairInward.Components.CalculateGrandTotal();
            }
        }, 500);
    });
}
/* ==== */

/* ==== */
/* Repair Inward Components Remove Active Event Listener */
RepairInward.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Repair Inward Button Processing Icon */
RepairInward.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Add New Product */
RepairInward.Components.AddNewProduct = function (Params) {
    const SNo = $('#tblProductList tbody tr').length + 1;
    const RowIndex = GeneralFunction.GetRandomKey({ Keylength: 10 }).RandomKey;
    const row = `
        <tr id="${RowIndex}">
            <td>${SNo}</td>
            <td><input type="text" class="form-control txtProductCode" value="${Params.ProductCode}" oninput="RepairInward.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtProductName" value="${Params.ProductName}" /></td>
            <td><input type="text" class="form-control txtBoxNo" value="${Params.BoxNo}" /></td>
            <td><input type="number" class="form-control txtRate text-right" value="${Params.Rate}" oninput="RepairInward.Components.CalculateTotalAmount(this);RepairInward.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtSIWt text-right" value="${Params.SIWight}" oninput="RepairInward.Components.CalculateTotalAmount(this);RepairInward.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtAvailableQty text-center" readonly value ="${Params.AvailableQty}" /></td>
            <td><input type="number" class="form-control txtQty text-center" value ="${Params.Qty}" oninput="RepairInward.Components.CalculateTotalAmount(this);RepairInward.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtRowDiscount text-right" value="${Params.DiscountPer}" oninput="RepairInward.Components.CalculateTotalAmount(this);RepairInward.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtAmount text-right"  value="${Params.Amount}" readonly /></td>
            <td class="text-center"><i class="fa fa-trash-o fa-2x red" aria-hidden="true" onclick="RepairInward.Components.RemoveItem(this)"></i></td>
        </tr>`;
    $('#tblProductList tbody').append(row);

    /* Create Product AutoComplete for Product Name */
    $(".txtProductName").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(RepairInward.Components.Products, function (product) {
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
        }
    });

    /* Create Product AutoComplete for Product Code */
    $(".txtProductCode").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(RepairInward.Components.Products, function (product) {
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
        }
    });
    RepairInward.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Remove Product */
RepairInward.Components.RemoveItem = function (btn) {
    $(btn).closest("tr").remove();
    RepairInward.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Calculate the Grand Total Amount */
RepairInward.Components.CalculateGrandTotal = function () {
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
RepairInward.Components.CalculateTotalAmount = function (el) {
    const row = $(el).closest('tr');
    const rate = parseFloat(row.find('.txtRate').val()) || 0;
    const qty = parseFloat(row.find('.txtQty').val()) || 0;
    const weight = parseFloat(row.find('.txtSIWt').val()) || 0;
    const discount = parseFloat(row.find('.txtRowDiscount').val()) || 0;

    const gross = (rate * weight) * qty;
    const net = gross - (gross * discount / 100);
    row.find('.txtAmount').val(net.toFixed(2));
    RepairInward.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Add Record Delete */
RepairInward.Components.CustomerRecord = function (RouteId) {

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
                    RepairInward.Components.SaveCustomer();
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

/* ==== */
/* Automatically Create New Row */
RepairInward.Components.CheckAndAddNextRow = function (input) {
    const row = $(input).closest('tr');

    const productCode = row.find('.txtProductCode').val().trim();
    const rate = parseFloat(row.find('.txtRate').val());
    const qty = parseFloat(row.find('.txtQty').val());
    const weight = parseFloat(row.find('.txtSIWt').val()) || 0;

    if (productCode && !isNaN(rate) && rate > 0 && !isNaN(qty) && qty > 0 && !isNaN(weight) && weight > 0) {
        const isLastRow = row.is('#tblProductList tbody tr:last');
        if (isLastRow) {
            RepairInward.Components.AddNewProduct({
                ProductCode: "",
                ProductName: "",
                BoxNo: "",
                Rate: "",
                SIWight: "",
                Qty: 1,
                DiscountPer: 0,
                Amount: 0
            });
        }
    }
}
/* ==== */