/* ==== */
/* Fees Collection Details Pagination Components Objects */
OutPassPrint.Components.Pagination = {}
OutPassPrint.Components.Table = {
    HeadId: "#tbdReceiptDetails",
    BodyId: "#tbdReceiptDetails",
    FooterId: "#tbfReceiptDetails"
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Initialize */
OutPassPrint.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    OutPassPrint.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    OutPassPrint.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Fees Collection Components Table Clean */
OutPassPrint.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(OutPassPrint.Components.Table.HeadId).html("");
        $(OutPassPrint.Components.Table.BodyId).html("");
        $(OutPassPrint.Components.Table.FooterId).html("");

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
OutPassPrint.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("td"));
        t_th.text("FeesId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("td"));
        t_th.text("SL.NO");
        t_th.addClass("col-lg-1 col-md-1 col-sm-1 col-xs-1 text-left bolder green");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("DESCRIPTION");
        t_th.addClass("text-left bolder green col-lg-9 col-md-9 col-sm-9 col-xs-9");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("AMOUNT");
        t_th.addClass("col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right bolder green");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(OutPassPrint.Components.Table.HeadId);

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
OutPassPrint.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;

    try {

        for (var i = 0; i < Result.length; i++) {

            /* ==== */
            /* Bind Table Column Values */
            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("text-left");
            t_td.append("<label class=\"control-label no-padding-right bolder black h5 no-margin\">" + (i + 1) + "</label>");
            t_td.appendTo(t_tr);

            /* Fees Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.append("<label class=\"control-label no-padding-right bolder black h5 no-margin\">" + Result[i].FeesName + "</label>");
            //t_td.append("Validity : " +  "<label class=\"control-label no-padding-right bolder grey\">" + GeneralFunction.DateFormat(Result.StartDate) + " - " + GeneralFunction.DateFormat(Result.EndDate) + "</label>");
            t_td.appendTo(t_tr);

            /* Receipt Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.append("<label class=\"control-label no-padding-right bolder black h5 no-margin\">" + parseFloat(Result[i].PaidAmount).toFixed(2) + "</label>");
            //t_td.text(parseFloat(Result.PaidAmount).toFixed(2));
            t_TotalAmount += parseFloat(Result[i].PaidAmount);
            t_td.appendTo(t_tr);

            t_tr.appendTo(OutPassPrint.Components.Table.BodyId);
        }
        /* ==== */

        /* ==== */
        /* Calculate the Footer */
        OutPassPrint.Components.Pagination.TableFooter(t_TotalAmount);
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
OutPassPrint.Components.Pagination.TableFooter = function (TotalAmount) {

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
        t_th.addClass("text-right bolder black");
        t_th.text("");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("text-right bolder black");
        t_th.text("Total");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(TotalAmount).toFixed(2));
        t_th.addClass("text-right bolder black");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(OutPassPrint.Components.Table.FooterId);

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
OutPassPrint.Components.Pagination.DeleteRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlDeleteConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Delete",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Delete the FeesCategory */
                    OutPassPrint.Components.Delete(RouteId);
                    $(this).dialog("close");
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
