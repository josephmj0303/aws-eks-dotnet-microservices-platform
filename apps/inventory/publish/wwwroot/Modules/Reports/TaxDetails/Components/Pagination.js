/* ==== */
/* Tax Report Details Pagination Components Objects */
TaxReportDet.Components.Pagination = {}
TaxReportDet.Components.Table = {
    HeadId: "#tbhTaxReportDet",
    BodyId: "#tbdTaxReportDet",
    FooterId: "#tbfTaxReportDet"
}
TaxReportDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Tax Report Details Components Initialize */
TaxReportDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    TaxReportDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    TaxReportDet.Components.Pagination.TableHead([]);

}
/* ==== */

/* ==== */
/* Tax Report Components Table Clean */
TaxReportDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(TaxReportDet.Components.Table.HeadId).html("");
        $(TaxReportDet.Components.Table.BodyId).html("");
        $(TaxReportDet.Components.Table.FooterId).html("");

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
/* Tax Report Details Components Pagination Table Header */
TaxReportDet.Components.Pagination.TableHead = function (Result) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("InvId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Inv No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Inv Date");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Buyer Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        /* Bind the Tax Detail */
        if (Result.length > 0) {
            for (var j = 0; j < Result[0].SaleTaxDetails.length; j++) {
                t_th = $(document.createElement("th"));
                t_th.addClass("text-right bolder background-gradient");
                t_th.text(Result[0].SaleTaxDetails[j].TaxName + " " + Result[0].SaleTaxDetails[j].TaxPer + "%");
                t_th.appendTo(t_tr);
            }
        }

        t_th = $(document.createElement("th"));
        t_th.text("Total Tax");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(TaxReportDet.Components.Table.HeadId);

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
/* Tax Report Details Components Pagination Table Body */
TaxReportDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].InvId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].InvId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Bill No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].BillNo);
            t_td.appendTo(t_tr);

            /* Bill Date */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateFormat(Result[i].BillDate));
            t_td.appendTo(t_tr);

            /* Customer Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].CustomerName);
            t_td.appendTo(t_tr);

            /* Contact No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ContactNo);
            t_td.appendTo(t_tr);

           
            /* Bind the Tax Detail */
            for (var j = 0; j < Result[i].SaleTaxDetails.length; j++) {
                t_td = $(document.createElement("td"));
                t_td.addClass("text-right");
                t_td.text(parseFloat(Result[i].SaleTaxDetails[j].TaxAmount).toFixed(2));
                t_td.appendTo(t_tr);
            }

            /* Total Tax */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].TotalTaxAmount).toFixed(2));
            t_td.appendTo(t_tr);

            t_tr.appendTo(TaxReportDet.Components.Table.BodyId);
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

/* ==== */
/* Tax Report Details Components Pagination Table Header */
TaxReportDet.Components.Pagination.TableFooter = function (Result) {

    /* Declearation */
    var t_tr = null, t_th = null;
    var ObjTaxCol = {};
    var t_TotalTax = 0;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("InvId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.attr("colspan", 4);
        t_th.addClass("text-right bolder black h4");
        t_th.text("Total");
        t_th.appendTo(t_tr);

        /* Bind the Tax Detail */
        for (var i = 0; i < Result.length; i++) {
            for (var j = 0; j < Result[i].SaleTaxDetails.length; j++) {
                var key = Result[i].SaleTaxDetails[j].TaxName;
                // Initialize to 0 if not already
                if (!ObjTaxCol[key]) {
                    ObjTaxCol[key] = 0;
                }
                ObjTaxCol[key] += parseFloat(Result[i].SaleTaxDetails[j].TaxAmount);
            }
            t_TotalTax += parseFloat(Result[i].TotalTaxAmount);
        }

        for (const key in ObjTaxCol) {
            if (ObjTaxCol.hasOwnProperty(key)) {
                var t_th = $(document.createElement("th"));  // Create <th> for each tax type
                t_th.text(ObjTaxCol[key].toFixed(2)); // Key + amount
                t_th.addClass("text-right bolder black h4");
                t_th.appendTo(t_tr);  // Append to the row
            }
        }
        /* ==== */

        var t_th = $(document.createElement("th"));  // Create <th> for each tax type
        t_th.text(t_TotalTax.toFixed(2)); // Key + amount
        t_th.addClass("text-right bolder black h4");
        t_th.appendTo(t_tr);  // Append to the row

        t_tr.appendTo(TaxReportDet.Components.Table.FooterId);

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
/* TaxReportDet Record Delete */
TaxReportDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Tax Report */
                    TaxReportDet.Components.Delete(RouteId);
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
