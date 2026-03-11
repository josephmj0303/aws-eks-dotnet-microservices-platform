/* ==== */
/* Salesman Outward Pagination Components Objects */
SalesmanOutwardDet.Components.Pagination = {}
SalesmanOutwardDet.Components.Table = {
    HeadId: "#tbhSalesmanOutwardDet",
    BodyId: "#tbdSalesmanOutwardDet"
}
SalesmanOutwardDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Salesman Outward Initialize Components */
SalesmanOutwardDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    SalesmanOutwardDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    SalesmanOutwardDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Salesman Outward Table Clean Components  */
SalesmanOutwardDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(SalesmanOutwardDet.Components.Table.BodyId).html("");

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
/* Salesman Outward Table Header Pagination Components */
SalesmanOutwardDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("SMOUTId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("SMO");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Date");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Salesman Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Total Qty");
        t_th.addClass("text-center bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Total Weight");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Total Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Tax Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Grand Total");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-2");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(SalesmanOutwardDet.Components.Table.HeadId);

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
/* Salesman Outward Table Body Pagination Components */
SalesmanOutwardDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].SMOUTId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].SMOUTId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* RSO No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].OutwardNo);
            t_td.appendTo(t_tr);

            /* RSO Date */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateFormat(Result[i].OutwardDate));
            t_td.appendTo(t_tr);

            /* Supplier Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].SalesmanName);
            t_td.appendTo(t_tr);

            /* Contact No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ContactNo);
            t_td.appendTo(t_tr);

            /* Total Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.text(Result[i].TotalQty);
            t_td.appendTo(t_tr);

            /* Total Weight */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].TotalWeight).toFixed(3));
            t_td.appendTo(t_tr);

            /* Total Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].SubTotalAmount).toFixed(2));
            t_td.appendTo(t_tr);

            /* Total Tax Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].TotalTaxAmount).toFixed(2));
            t_td.appendTo(t_tr);

            /* Total Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].GrandTotalAmount).toFixed(2));
            t_td.appendTo(t_tr);


            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            t_td.append('<a onclick =\"SalesmanOutwardDet.Components.Router(' + Result[i].SMOUTId + ',' + "'Print'" + ')" href=\'javascript:void(0);\' title="Print this Outward"><i class=\"ace-icon fa fa-2x fa-print blue\" aria-hidden=\"true\"></i></a>&nbsp; ');
            t_td.append('<a onclick =\"SalesmanOutwardDet.Components.Router(' + Result[i].SMOUTId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Outward"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            t_td.append('<a onclick =\"SalesmanOutwardDet.Components.Router(' + Result[i].SMOUTId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Outward"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(SalesmanOutwardDet.Components.Table.BodyId);
        }
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
/* Salesman Outward Record Delete */
SalesmanOutwardDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the SalesmanOutward */
                    SalesmanOutwardDet.Components.Delete(RouteId);
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
