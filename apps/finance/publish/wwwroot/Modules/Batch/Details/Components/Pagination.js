/* ==== */
/* Batch Details Pagination Components Objects */
BatchDet.Components.Pagination = {}
BatchDet.Components.Table = {
    HeadId: "#tbhBatchDet",
    BodyId: "#tbdBatchDet"
}
/* ==== */

/* ==== */
/* Batch Details Components Initialize */
BatchDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    BatchDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    BatchDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Class Components Table Clean */
BatchDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(BatchDet.Components.Table.BodyId).html("");

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
/* Batch Details Components Pagination Table Header */
BatchDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("BatchId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Batch");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("Active");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-2");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(BatchDet.Components.Table.HeadId);

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
/* Batch Details Components Pagination Table Body */
BatchDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].BatchId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].BatchId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].StartYear + "-" + Result[i].EndYear);
            t_td.appendTo(t_tr);

            /* Active */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.html(Result[i].IsActive ? "<i class=\"fa fa-check green\" aria-hidden=\"true\"></i>" : "<i class=\"fa fa-times red\" aria-hidden=\"true\"></i>");
            t_td.appendTo(t_tr);


            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center");
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"BatchDet.Components.Router(' + Result[i].BatchId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Batch"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"BatchDet.Components.Router(' + Result[i].BatchId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Batch"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(BatchDet.Components.Table.BodyId);
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
/* BatchDet Record Delete */
BatchDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Class */
                    BatchDet.Components.Delete(RouteId);
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
