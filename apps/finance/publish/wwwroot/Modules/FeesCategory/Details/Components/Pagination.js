/* ==== */
/* Fees Category Details Pagination Components Objects */
FeesCategoryDet.Components.Pagination = {}
FeesCategoryDet.Components.Table = {
    HeadId: "#tbhFeesCategoryDet",
    BodyId: "#tbdFeesCategoryDet"
}
/* ==== */

/* ==== */
/* Fees Category Details Components Initialize */
FeesCategoryDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    FeesCategoryDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    FeesCategoryDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Fees Category Components Table Clean */
FeesCategoryDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(FeesCategoryDet.Components.Table.BodyId).html("");

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
/* Fees Category Details Components Pagination Table Header */
FeesCategoryDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FeesCatId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Scheme Name");
        t_th.addClass("text-left bolder col-lg-4");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Due Amount");
        t_th.addClass("text-right bolder col-lg-1 hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Notes");
        t_th.addClass("text-left bolder col-lg-4");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(FeesCategoryDet.Components.Table.HeadId);

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
/* Fees Category Details Components Pagination Table Body */
FeesCategoryDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesCatId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesCatId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* FeesCategory */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FeesName);
            t_td.appendTo(t_tr);

            /* Fees Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right hide");
            t_td.text(parseFloat(Result[i].Amount).toFixed(2));
            t_td.appendTo(t_tr);

            /* Fees Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-left");
            t_td.text(Result[i].Notes);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"FeesCategoryDet.Components.Router(' + Result[i].FeesCatId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this FeesCategory"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"FeesCategoryDet.Components.Router(' + Result[i].FeesCatId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this FeesCategory"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(FeesCategoryDet.Components.Table.BodyId);
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
/* Fees Category Details Record Delete */
FeesCategoryDet.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    FeesCategoryDet.Components.Delete(RouteId);
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
