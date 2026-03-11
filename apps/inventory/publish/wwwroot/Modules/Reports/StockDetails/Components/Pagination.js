/* ==== */
/* Stock Details Pagination Components Objects */
StockDet.Components.Pagination = {}
StockDet.Components.Table = {
    HeadId: "#tbhStockDet",
    BodyId: "#tbdStockDet"
}
StockDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Stock Details Components Initialize */
StockDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    StockDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    StockDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Stock Components Table Clean */
StockDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(StockDet.Components.Table.BodyId).html("");

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
/* Stock Details Components Pagination Table Header */
StockDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_td = $(document.createElement("td"));
        t_td.text("ProductId");
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_td = $(document.createElement("td"));
        t_td.attr("colspan", 2);
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.attr("colspan", 2);
        t_td.addClass("text-center bolder background-gradient");
        t_td.text("Purchase");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.attr("colspan", 2);
        t_td.addClass("text-center bolder background-gradient");
        t_td.text("Sales");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.attr("colspan", 2);
        t_td.addClass("text-center bolder background-gradient");
        t_td.text("Salesman");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.attr("colspan", 1);
        t_td.addClass("text-center bolder background-gradient");
        t_td.text("");
        t_td.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(StockDet.Components.Table.HeadId);

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_td = $(document.createElement("td"));
        t_td.text("ProductId");
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_td = $(document.createElement("td"));
        t_td.text("Product Code");
        t_td.addClass("text-left bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Product Name");
        t_td.addClass("text-left bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Purchased");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Return");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Sold");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Return");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Outward");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Inward");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text("Available");
        t_td.addClass("text-right bolder background-gradient");
        t_td.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(StockDet.Components.Table.HeadId);

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
/* Stock Details Components Pagination Table Body */
StockDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].ProductId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].ProductId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Product Code */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ProductCode);
            t_td.appendTo(t_tr);

            /* Product Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ProductName);
            t_td.appendTo(t_tr);

            /* Purchased Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].PurchasedQty);
            t_td.appendTo(t_tr);

            /* Purchased Return Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].PurchasedReturnQty);
            t_td.appendTo(t_tr);

            /* Sold Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].SoldQty);
            t_td.appendTo(t_tr);

            /* Sold Return Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].SoldReturnQty);
            t_td.appendTo(t_tr);

            /* Inward Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].RepairOutwardQty );
            t_td.appendTo(t_tr);

            /* Outward Qty */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].RepairInwardQty);
            t_td.appendTo(t_tr);

            /* Total Weight */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].CurrentStockQty);
            t_td.appendTo(t_tr);

            t_tr.appendTo(StockDet.Components.Table.BodyId);
           
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
/* StockDet Record Delete */
StockDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Stock */
                    StockDet.Components.Delete(RouteId);
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
