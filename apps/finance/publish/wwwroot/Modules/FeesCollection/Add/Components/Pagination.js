/* ==== */
/* Fees Collection Details Pagination Components Objects */
FeesCollection.Components.Pagination = {}
FeesCollection.Components.Table = {
    HeadId: "#tbhPendingFees",
    BodyId: "#tbdPendingFees",
    FooterId: "#tbfPendingFees"
}
FeesCollection.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Fees Collection Details Components Initialize */
FeesCollection.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    FeesCollection.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    FeesCollection.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Fees Collection Components Table Clean */
FeesCollection.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        FeesCollection.Components.PendingFeesSetter({
            StudentName: "",
            ClassSection: "",
        })
        $(FeesCollection.Components.Table.BodyId).html("");
        $(FeesCollection.Components.Table.FooterId).html("");

    }
    catch (ex) {

        /* ==== */
        /* Exception Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */
    }
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Pagination Table Header */
FeesCollection.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FeesId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.FeesId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.Selection = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Description");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.FeesName = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Due Date");
        t_th.addClass("col-lg-4 text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.Validity = 3;

        t_th = $(document.createElement("th"));
        t_th.html("Payable (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.FeesAmount = 4;

        t_th = $(document.createElement("th"));
        t_th.html("Paid (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.PaidAmount = 5;

        t_th = $(document.createElement("th"));
        t_th.html("Balance (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.Balance = 6;

        t_th = $(document.createElement("th"));
        t_th.html("Pay (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        FeesCollection.Components.TableColumns.PayAmount = 7;
        /* ==== */

        t_tr.appendTo(FeesCollection.Components.Table.HeadId);

    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Pagination Table Body */
FeesCollection.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;
    var t_TotalPaidAmount = 0;
    var t_TotalBalAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        $(FeesCollection.Components.Table.BodyId).html("");
        $(FeesCollection.Components.Table.FooterId).html("");

        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);


            /* Active */
            t_td = $(document.createElement("td"));
            t_td.addClass("bigger-100 text-center");
            t_td.html('<label class="block no-padding"><input name="chkFeesSelect" type="checkbox" class="ace input-lg chkFeesSelect" id="chkFeesSelect' + Result[i].FeesId + '"><label class="lbl bigger-110 bolder" for="chkFeesSelect' + Result[i].FeesId + '"> </label></label>');
            t_td.appendTo(t_tr);

            /* Fees Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("bolder");
            t_td.text(Result[i].FeesName);
            t_td.appendTo(t_tr);

            /* Validity */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-left");
            t_td.text(GeneralFunction.DateFormat(Result[i].DueDate));
            t_td.appendTo(t_tr);

            /* Fees Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].DueAmount).toFixed(2));
            t_TotalAmount += parseFloat(Result[i].DueAmount);
            t_td.appendTo(t_tr);

            /* Paid Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].PaidAmount).toFixed(2));
            t_TotalPaidAmount += parseFloat(Result[i].PaidAmount);
            t_td.appendTo(t_tr);

            /* Pending Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(parseFloat(Result[i].DueAmount) - parseFloat(Result[i].PaidAmount)).toFixed(2));
            t_TotalBalAmount += (parseFloat(Result[i].DueAmount) - parseFloat(Result[i].PaidAmount));
            t_td.appendTo(t_tr);

            /* Pay Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.attr("Style", "background-color: yellow;font-weight: 600;");
            t_td.attr("contenteditable", true);
            t_td.attr("oninput", "FeesCollection.Components.Pagination.CalculateTotalPayAmount()");
            t_td.text(parseFloat(0).toFixed(2));
            t_td.appendTo(t_tr);

            t_tr.appendTo(FeesCollection.Components.Table.BodyId);
        }
        /* ==== */

        /* ==== */
        /* Calculate the Footer */
        $(".chkFeesSelect").attr("checked", true);
        FeesCollection.Components.Pagination.TableFooter(t_TotalAmount, t_TotalPaidAmount, t_TotalBalAmount);
        /* ==== */
    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Pagination Table Footer */
FeesCollection.Components.Pagination.TableFooter = function (TotalAmount, TotalPaidAmount, TotalBalAmount) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.addClass("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("text-right bolder black h5");
        t_th.text("Total");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(TotalAmount).toFixed(2));
        t_th.addClass("text-right bolder black h5");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(TotalPaidAmount).toFixed(2));
        t_th.addClass("text-right bolder black h5");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(TotalBalAmount).toFixed(2));
        t_th.addClass("text-right bolder black h5");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.attr("Id", "lblTotalPayAmount")
        t_th.text(parseFloat(0).toFixed(2));
        t_th.addClass("text-right bolder black h5");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(FeesCollection.Components.Table.FooterId);

    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* Calcualte the Total Pay Amount */
FeesCollection.Components.Pagination.CalculateTotalPayAmount = function () {
    var t_TotalPayAmount = 0;
    $(FeesCollection.Components.Table.BodyId + ' tr').each(function () {
        var CurrentRow = $(this);
        t_TotalPayAmount += parseFloat($(CurrentRow.find("td")[7]).text())
    });

    /* Set total Pay Amount */
    $("#lblTotalPayAmount").html(parseFloat(t_TotalPayAmount).toFixed(2));
}
/* ==== */


/* ==== */
/* Fees Collection Details Record Delete */
FeesCollection.Components.Pagination.ReceiptConfirm = function () {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlReceiptConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Receipt",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Print Dialog */
                    $(this).dialog("close");
                    FeesCollection.Components.Save();

                }
            },
            {
                html: "No",
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
/* Fees Collection Details Record Delete */
FeesCollection.Components.Pagination.PrintConfirm = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlPrintConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Print",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Print Dialog */
                    $(this).dialog("close");
                    GeneralFunction.SetRouting("FeesReceipt", RouteId);

                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */
