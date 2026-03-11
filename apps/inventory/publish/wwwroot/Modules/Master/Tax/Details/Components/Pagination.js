/* ==== */
/* Product Details Pagination Components Objects */
TaxDet.Components.Pagination = {}
TaxDet.Components.Table = {
    HeadId: "#tbhTaxDet",
    BodyId: "#tbdTaxDet"
}
/* ==== */

/* ==== */
/* Product Details Components Initialize */
TaxDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    TaxDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    TaxDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Product Components Table Clean */
TaxDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(TaxDet.Components.Table.BodyId).html("");

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
/* Product Details Components Pagination Table Header */
TaxDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("TaxId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Tax Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("%");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);

        //t_th = $(document.createElement("th"));
        //t_th.text("Apply For");
        //t_th.addClass("text-left col-lg-3 bolder background-gradient");
        //t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(TaxDet.Components.Table.HeadId);

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
/* Product Details Components Pagination Table Body */
TaxDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].TaxId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].TaxId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Tax Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].TaxName);
            t_td.appendTo(t_tr);

            /* Tax Percentage */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(Result[i].TaxPercentage + "%");
            t_td.appendTo(t_tr);

            ///* Apply For */
            //t_td = $(document.createElement("td"));
            //t_td.addClass("text-left");
            //t_td.text(Result[i].TaxApplyFor);
            //t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            t_td.append('<a onclick =\"TaxDet.Components.Router(' + Result[i].TaxId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Tax"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            t_td.append('<a onclick =\"TaxDet.Components.Router(' + Result[i].TaxId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Tax"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(TaxDet.Components.Table.BodyId);
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
/* TaxDet Record Delete */
TaxDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Product */
                    TaxDet.Components.Delete(RouteId);
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
