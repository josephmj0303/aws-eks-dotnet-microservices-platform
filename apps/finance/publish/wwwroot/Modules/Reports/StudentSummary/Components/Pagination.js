/* ==== */
/* Fees Collection Details Pagination Components Objects */
StudentSummary.Components.Pagination = {}
StudentSummary.Components.Table = {
    HeadId: "#tbhPendingFees",
    BodyId: "#tbdPendingFees",
    FooterId: "#tbfPendingFees"
}
StudentSummary.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Fees Collection Details Components Initialize */
StudentSummary.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    StudentSummary.Components.Pagination.Cleaner();

    /* Init the Pending Payment Table Header */
    StudentSummary.Components.Pagination.TablePendingPanymentHead();

     /* Init the Pending Payment Table Header */
     StudentSummary.Components.Pagination.TableSettlementPanymentHead();

    /* Init the Pending Payment Table Header */
    StudentSummary.Components.Pagination.TableReceiptHead();

}
/* ==== */

/* ==== */
/* Fees Collection Components Table Clean */
StudentSummary.Components.Pagination.Cleaner = function () {

    try {
      $(StudentSummary.Components.Table.BodyId).html("");
      $(StudentSummary.Components.Table.FooterId).html("");
      $("#tbdSummeryFeesCollectionDet").html("");
      $("#tbdSettlementFees").html("");

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
StudentSummary.Components.Pagination.TablePendingPanymentHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FeesId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Description");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesName = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Due Date");
        t_th.addClass("col-lg-4 text-left bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.Validity = 2;

        t_th = $(document.createElement("th"));
        t_th.html("Payable (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesAmount = 3;

        t_th = $(document.createElement("th"));
        t_th.html("Paid (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.PaidAmount = 4;

        t_th = $(document.createElement("th"));
        t_th.html("Balance (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.Balance = 5;
        /* ==== */

        t_tr.appendTo(StudentSummary.Components.Table.HeadId);

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
StudentSummary.Components.Pagination.TablePendingPanymentBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;
    var t_TotalPaidAmount = 0;
    var t_TotalBalAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesId);
            t_td.addClass("hide");
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

            t_tr.appendTo(StudentSummary.Components.Table.BodyId);
        }
        /* ==== */

        /* ==== */
        /* Calculate the Footer */
        $(".chkFeesSelect").attr("checked", true);
        StudentSummary.Components.Pagination.TablePendingPanymentFooter(t_TotalAmount, t_TotalPaidAmount, t_TotalBalAmount);
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
StudentSummary.Components.Pagination.TablePendingPanymentFooter = function (TotalAmount, TotalPaidAmount, TotalBalAmount) {

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
        /* ==== */

        t_tr.appendTo(StudentSummary.Components.Table.FooterId);

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
/* Fees Settlement Details Components Pagination Table Header */
StudentSummary.Components.Pagination.TableSettlementPanymentHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FeesId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Description");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesName = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Due Date");
        t_th.addClass("col-lg-4 text-left bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.Validity = 2;

        t_th = $(document.createElement("th"));
        t_th.html("Due Amount (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.FeesAmount = 3;

        t_th = $(document.createElement("th"));
        t_th.html("Receipt (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.PaidAmount = 4;

        t_th = $(document.createElement("th"));
        t_th.html("Balance (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder hide");
        t_th.appendTo(t_tr);
        StudentSummary.Components.TableColumns.Balance = 5;
        /* ==== */

        t_tr.appendTo("#tbhSettlementFees");

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
StudentSummary.Components.Pagination.TableSettlementPanymentBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;
    var t_TotalPaidAmount = 0;
    var t_TotalBalAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesId);
            t_td.addClass("hide");
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
            t_td.addClass("text-right hide");
            t_td.text(parseFloat(parseFloat(Result[i].DueAmount) - parseFloat(Result[i].PaidAmount)).toFixed(2));
            t_TotalBalAmount += (parseFloat(Result[i].DueAmount) - parseFloat(Result[i].PaidAmount));
            t_td.appendTo(t_tr);

            t_tr.appendTo("#tbdSettlementFees");
        }
        /* ==== */

        /* ==== */
        /* Calculate the Footer */
        $(".chkFeesSelect").attr("checked", true);
        StudentSummary.Components.Pagination.TableSettlementPanymentFooter(t_TotalAmount, t_TotalPaidAmount, t_TotalBalAmount);
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
StudentSummary.Components.Pagination.TableSettlementPanymentFooter = function (TotalAmount, TotalPaidAmount, TotalBalAmount) {

    /* Declearation */
    var t_tr = null, t_th = null;
    $("#tbfSettlementFees").html("");

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
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
        t_th.addClass("text-right bolder black h5 hide");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo("#tbfSettlementFees");

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
/* Assign Fees Details Components Pagination Table Header */
StudentSummary.Components.Pagination.TableReceiptHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("Receipt No");
        t_th.addClass("text-left bolder col-lg-1");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptNo = 0;

        t_th = $(document.createElement("th"));
        t_th.text("Date");
        t_th.addClass("text-left bolder col-lg-2");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptDate = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Payment");
        t_th.addClass("text-left bolder col-lg-2");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.PaymentMode = 11;

        t_th = $(document.createElement("th"));
        t_th.html("Receipt (" + GeneralFunction.CurrencySymbol + ")");
        t_th.addClass("text-right bolder col-lg-1");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptAmount = 9;

        t_th = $(document.createElement("th"));
        t_th.text("Collect By");
        t_th.addClass("text-left bolder col-lg-2");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.CollectBy = 10;

        t_th = $(document.createElement("th"));
        t_th.text("Note");
        t_th.addClass("text-left bolder col-lg-3");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.PaymentMode = 11;

        // t_th = $(document.createElement("th"));
        // t_th.text("Status");
        // t_th.addClass("text-left bolder hide");
        // t_th.appendTo(t_tr);
        // FeesCollectionDet.Components.TableColumns.Status = 12;

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo("#tbhSummeryFeesCollectionDet");
        

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
/* Assign Fees Details Components Pagination Table Body */
StudentSummary.Components.Pagination.TableReceiptBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalPaidAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("FRN" + Result[i].FCHeaderId);

            /* Receipt No */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FCHeaderId);
            t_td.addClass("text-center");
            t_td.appendTo(t_tr);

            /* Receipt Date */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateFormat(Result[i].CreatedOn));
            t_td.appendTo(t_tr);

             /* Payment Mode */
             t_td = $(document.createElement("td"));
             t_td.addClass("bolder");
             t_td.text(Result[i].PaymentMode);
             t_td.appendTo(t_tr);
 
             /* Receipt Amount */
             t_td = $(document.createElement("td"));
             t_td.addClass("text-right");
             t_td.text(parseFloat(Result[i].TotalPaidAmount).toFixed(2));
             t_TotalPaidAmount += parseFloat(Result[i].TotalPaidAmount);
             t_td.appendTo(t_tr);

            /* Collect By */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FirstName + " " + Result[i].LastName);
            t_td.appendTo(t_tr);

            /* Notes */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Notes);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            t_td.append('<a onclick =\"FeesCollectionDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Receipt'" + ')" href=\'javascript:void(0);\' title="Print this Fees"><i class="ace-icon fa fa-2x fas fa fa-print  blue\" aria-hidden="true"></i></a>&nbsp;&nbsp;');
            if (GeneralFunction.ReadDeleteRights() && Result[i].FeesStatus != "Cancelled")  t_td.append('<a onclick =\"FeesCollectionDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Cancel this Receipt"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo("#tbdSummeryFeesCollectionDet");
        }
        /* ==== */

        /* Bind the Receipt Footer */
        StudentSummary.Components.Pagination.TableReceiptFooter(t_TotalPaidAmount);
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
/* Assign Fees Details Components Pagination Table Header */
StudentSummary.Components.Pagination.TableReceiptFooter = function (TotalPaidAmount) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        $("#tbfSummeryFeesCollectionDet").html("");

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("text-right bolder black h5");
        t_th.text("Total");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("text-right bolder black h5");
        t_th.text(parseFloat(TotalPaidAmount).toFixed(2));
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo("#tbfSummeryFeesCollectionDet");

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
/* Fees Collection Details Record Delete */
StudentSummary.Components.Pagination.PrintConfirm = function (RouteId) {

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
