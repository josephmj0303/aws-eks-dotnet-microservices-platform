/* ==== */
/* Sale Components Objects */
var SalesmanOutward = {};
SalesmanOutward.Components = {};
SalesmanOutward.Components.Products = [];
/* ==== */

/* ==== */
/* Sale Components Initialize */
SalesmanOutward.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Saleman Dispatch Report", Action: "#SalesmanOutwardDetails" }, { Title: $("#hdnSMOUTId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    SalesmanOutward.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesmanOutward.Components.Ready();
}
/* ==== */

/* ==== */
/* Sale Components Ready */
SalesmanOutward.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanOutward.Components.Cleaner();

    /* Add Event Listener */
    SalesmanOutward.Components.AddEventListener();

    /* Populate the Product Details */
    SalesmanOutward.Components.PopulateAvaliableProductStock();
    SalesmanOutward.Components.PopulateTax();

    /* Populate the Data */
    SalesmanOutward.Components.Populate($("#hdnSMOUTId").val());
}
/* ==== */

/* ==== */
/* Sale Components Clean Up */
SalesmanOutward.Components.Cleaner = function () {

    /* Clear the Products Array */
    SalesmanOutward.Components.Products = [];

    /* Set the Default Values */
    var CleanUp = {
        OutwardNo: "New",
        OutwardDate: new Date(),
        SalesmanId: 0,
        SalesmanName: "",
        ContactNo: "",
        Remarks: "",
        ProductDetails: [],
        TaxDetails : [],
    }
    SalesmanOutward.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Sale Components Add Event Listener */
SalesmanOutward.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanOutward.Components.RemoveEventListener();

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
        SalesmanOutward.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        SalesmanOutward.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Add Product */
    $(".btnAddNewProduct").on("click", function () {
        SalesmanOutward.Components.AddNewProduct({
            ProductCode: "",
            ProductName: "",
            BoxNo: "",
            Rate: parseFloat(Layout.Components.SalesPrice * 1).toFixed(2),
            SIWight: "",
            Qty: 1,
            DiscountPer: 0,
            Amount :0
        });
    });
    /* ==== */

    /* ==== */
    /* Customer Mobile No Based Serch */
    let inputTimeout;
    $('#txtSaleCustomerContactNo').on('input', function () {
        clearTimeout(inputTimeout); // Clear the previous timeout

        let t_ContactNo = $(this).val().trim();

        // Only proceed if length > 5 (optional, you can adjust or remove)
        if (t_ContactNo.length >= 5) {
            inputTimeout = setTimeout(function () {
                SalesmanOutward.Components.PopulateSearchCustomer(t_ContactNo);
            }, 500); // Delay in milliseconds (adjust as needed)
        }
    });
    $('#txtSaleCustomerContactNo').on('keypress', function (e) {
        if (e.which === 13) {
            clearTimeout(inputTimeout); // Cancel the debounce if Enter is pressed
            // 13 = Enter key
            let t_ContactNo = $(this).val().trim();
            SalesmanOutward.Components.PopulateSearchCustomer(t_ContactNo);
        }
    });
    /* ==== */


    /* ==== */
    /* Add Customer */
    $("#divCustomer_AddIcons").on("click", function () {

        /* Set the Default Values */
        var CleanUp = {
            CustId: 0,
            CustomerName: "",
            ContactNo: "",
            EMail: "",
            AddressLine1: "",
            AddressLine2: "",
            PostCode: "",
            City: "",
            State: "",
            GSTNo: ""
        }
        SalesmanOutward.Components.CutomerSetter(CleanUp);

        /* Show the Customer Modal */
        SalesmanOutward.Components.CustomerRecord();
    });
    /* ==== */

    /* ==== */
    /* Calculate the Discount and Tax */
    $('#txtDiscount, #txtTax').on('input', SalesmanOutward.Components.CalculateGrandTotal());
    /* ==== */

    /* ==== */
    /* Search Suggestion */
    $(".Search-Keyword-Input").on("input", function () {

        selectedIndex = -1;
        $("#tblSuggestion tbody tr").removeClass("highlight");

        const keyword = $(this).val().toLowerCase();
        const tbody = $("#tblSuggestion tbody");
        tbody.empty();

        if (keyword.length < 1) {
            $("#divSuggestion").hide();
            return;
        }

        const results = SalesmanOutward.Components.Products.filter(p =>
            p.ProductName.toLowerCase().includes(keyword) ||
            p.ProductCode.toLowerCase().includes(keyword)
        );

        if (results.length === 0) {
            tbody.append(`<tr><td colspan="3" class="text-muted text-center bolder black">No product found</td></tr>`);
        } else {
            results.forEach(p => {
                tbody.append(`
                    <tr data-id="${p.ProductId}" data-name="${p.ProductName}" data-code="${p.ProductCode}"  data-stockqty="${p.CurrentStockQty}" data-stockweight="${p.CurrentStockWeight}">
                        <td>${p.ProductCode}</td>
                        <td>${p.ProductName}</td>
                        <td>${p.CurrentStockQty}</td>
                        <td>${p.CurrentStockWeight}</td>
                    </tr>
                `);
            });
        }
        $("#divSuggestion").show();
    });

    let selectedIndex = -1;

    $(".Search-Keyword-Input").on("keydown", function (e) {
        const rows = $("#tblSuggestion tbody tr");
        if (rows.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % rows.length;
            rows.removeClass("highlight");
            $(rows[selectedIndex]).addClass("highlight");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + rows.length) % rows.length;
            rows.removeClass("highlight");
            $(rows[selectedIndex]).addClass("highlight");
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedIndex >= 0) {
                $(rows[selectedIndex]).trigger("click");
                selectedIndex = -1;
            }
        }
    });

    // Optional: Reset selection on new input
    $("#txtProductSearch").on("input", function () {
        selectedIndex = -1;
        $("#tblSuggestion tbody tr").removeClass("highlight");
    });

   
    $(document).on("click", "#tblSuggestion tbody tr", function () {

        const t_ProductCode = $(this).data("code");
        const t_ProductName = $(this).data("name");
        const t_ProductStockQty = $(this).data("stockqty");
        const t_ProductStockWeight = $(this).data("stockweight");


        // Get the product object from Products array
        const product = SalesmanOutward.Components.Products.find(p => p.ProductCode === t_ProductCode && p.ProductName === t_ProductName && p.CurrentStockWeight === t_ProductStockWeight);
        if (!product) return;

        let foundRow = null;

        // Loop through table rows to find if product exists (match by Code, Name, Weight)
        $("#tblProductList tbody tr").each(function () {
            const rowCode = $(this).find(".txtProductCode").val().trim();
            const rowName = $(this).find(".txtProductName").val().trim();
            const rowWeight = parseFloat($(this).find(".txtSIWt").val()) || 0;
            const productWeight = parseFloat(product.CurrentStockWeight) || 0;

            if (
                rowCode === product.ProductCode &&
                rowName === product.ProductName &&
                rowWeight === productWeight
            ) {
                foundRow = $(this);
                return false; // break
            }
        });

        if (foundRow) {
            // If found, increase quantity
            const qtyField = foundRow.find(".txtQty");
            let currentQty = parseFloat(qtyField.val()) || 0;
            qtyField.val(currentQty + 1).trigger("input");
        } else {
            // Else add new row
            SalesmanOutward.Components.AddNewProduct({
                ProductCode: product.ProductCode,
                ProductName: product.ProductName,
                BoxNo: "",
                Rate: parseFloat(Layout.Components.SalesPrice * 1).toFixed(2),
                SIWight: parseFloat(product.CurrentStockWeight).toFixed(3) || 0,
                Qty: 1,
                DiscountPer: 0,
                Amount: 0,
                AvailableQty: product.CurrentStockQty || 0
            });
        }

        // Update textbox and hide suggestions
        //$("#txtProductSearch").val(`${product.ProductName} (${stock} in stock)`);
        $("#divSuggestion").hide();
    });
    /* ==== */


    $(document).on('input', '.txtSourceProductCode, .txtSourceProductName, .txtSourceBoxNo, .txtSourceRate, .txtSourceSIWt', function () {
        setTimeout(function () {
            const row = $("#SourceTable");

            const productCode = row.find('.txtSourceProductCode').val().trim();
            const productName = row.find('.txtSourceProductName').val().trim();
            const boxNo = row.find('.txtSourceBoxNo').val().trim();
            const rate = parseFloat(row.find('.txtSourceRate').val());
            const siWt = parseFloat(row.find('.txtSourceSIWt').val());

            if (productCode && productName && boxNo && !isNaN(rate) && !isNaN(siWt)) {

                // Try to get matching product from master list
                const product = SalesmanOutward.Components.Products.find(p =>
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
                    SalesmanOutward.Components.AddNewProduct({
                        ProductCode: productObj.ProductCode,
                        ProductName: productObj.ProductName,
                        BoxNo: boxNo,
                        Rate: parseFloat(Layout.Components.SalesPrice * 1).toFixed(2),
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
                SalesmanOutward.Components.CalculateGrandTotal();
            }
        }, 500);
    });


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


}
/* ==== */

/* ==== */
/* Sale Components Remove Active Event Listener */
SalesmanOutward.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Sale Button Processing Icon */
SalesmanOutward.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Add New Product */
SalesmanOutward.Components.AddNewProduct = function (Params) {
    const SNo = $('#tblProductList tbody tr').length + 1;
    const RowIndex = GeneralFunction.GetRandomKey({ Keylength: 10 }).RandomKey;
    const row = `
        <tr id="${RowIndex}">
            <td>${SNo}</td>
            <td><input type="text" class="form-control txtProductCode" value="${Params.ProductCode}" oninput="SalesDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtProductName" value="${Params.ProductName}" /></td>
            <td><input type="text" class="form-control txtBoxNo" value="${Params.BoxNo}" /></td>
            <td><input type="number" class="form-control txtRate text-right" value="${Params.Rate}" oninput="SalesmanOutward.Components.CalculateTotalAmount(this);SalesDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtSIWt text-right" value="${Params.SIWight}" oninput="SalesmanOutward.Components.CalculateTotalAmount(this);SalesDet.Components.CheckAndAddNextRow(this)" /></td>
            <td class="hide"><input type="number" class="form-control txtAvailableQty text-center" readonly value ="${Params.AvailableQty}" /></td>
            <td><input type="number" class="form-control txtQty text-center" value ="${Params.Qty}" oninput="SalesmanOutward.Components.CalculateTotalAmount(this);SalesDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="number" class="form-control txtRowDiscount text-right" value="${Params.DiscountPer}" oninput="SalesmanOutward.Components.CalculateTotalAmount(this);SalesDet.Components.CheckAndAddNextRow(this)" /></td>
            <td><input type="text" class="form-control txtAmount text-right"  value="${Params.Amount}" readonly /></td>
            <td class="text-center"><i class="fa fa-trash-o fa-2x red" aria-hidden="true" onclick="SalesmanOutward.Components.RemoveItem(this)"></i></td>
        </tr>`;
    $('#tblProductList tbody').append(row);

    /* Create Product AutoComplete for Product Name */
    $(".txtProductName").autocomplete({
        minLength: 0,
        source: function (request, response) {
            const result = $.map(SalesmanOutward.Components.Products, function (product) {
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
            const result = $.map(SalesmanOutward.Components.Products, function (product) {
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
   
    SalesmanOutward.Components.CalculateGrandTotal();
    SalesmanOutward.Components.CalculateTotalAmount($("#" + RowIndex));
}
/* ==== */


/* ==== */
/* Remove Product */
SalesmanOutward.Components.RemoveItem = function (btn) {
    $(btn).closest("tr").remove();
    SalesmanOutward.Components.CalculateGrandTotal();
}
/* ==== */

/* ==== */
/* Calculate the Grand Total Amount */
SalesmanOutward.Components.CalculateGrandTotal = function () {
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
SalesmanOutward.Components.CalculateTotalAmount = function (el) {
    const row = $(el).closest('tr');
    const rate = parseFloat(row.find('.txtRate').val()) || 0;
    const qty = parseFloat(row.find('.txtQty').val()) || 0;
    const weight = parseFloat(row.find('.txtSIWt').val()) || 0;
    const discount = parseFloat(row.find('.txtRowDiscount').val()) || 0;

    const gross = (rate * weight) * qty;
    const net = gross - (gross * discount / 100);
    row.find('.txtAmount').val(net.toFixed(2));
    SalesmanOutward.Components.CalculateGrandTotal();
}
/* ==== */


/* ==== */
/* Add Record Delete */
SalesmanOutward.Components.CustomerRecord = function (RouteId) {

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
                    SalesmanOutward.Components.SaveCustomer();
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
SalesDet.Components.CheckAndAddNextRow = function (input) {
    //const row = $(input).closest('tr');

    //const productCode = row.find('.txtProductCode').val().trim();
    //const rate = parseFloat(row.find('.txtRate').val());
    //const qty = parseFloat(row.find('.txtQty').val());
    //const weight = parseFloat(row.find('.txtSIWt').val()) || 0;

    //if (productCode && !isNaN(rate) && rate > 0 && !isNaN(qty) && qty > 0 && !isNaN(weight) && weight > 0) {
    //    const isLastRow = row.is('#tblProductList tbody tr:last');
    //    if (isLastRow) {
    //        SalesmanOutward.Components.AddNewProduct({
    //            ProductCode: "",
    //            ProductName: "",
    //            BoxNo: "",
    //            Rate: "",
    //            SIWight: "",
    //            Qty: 1,
    //            DiscountPer: 0,
    //            Amount: 0
    //        });
    //    }
    //}
}