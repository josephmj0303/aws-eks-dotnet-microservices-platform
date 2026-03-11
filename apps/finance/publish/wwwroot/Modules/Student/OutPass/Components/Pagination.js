/* ==== */
/* Location Stage Details Pagination Components Objects */
OutPass.Components.Pagination = {}
OutPass.Components.Table = {
    HeadId: "#tbhOutPassHistoryDet",
    BodyId: "#tbdOutPassHistoryDet"
}
/* ==== */

/* ==== */
/* Location Stage Details Initialize Components */
OutPass.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    OutPass.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    OutPass.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Location Stage Table Clean Components */
OutPass.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(OutPass.Components.Table.BodyId).html("");

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
/* Location Stage Details Pagination Components For Table Header */
OutPass.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("OutPassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Pass No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Date");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Attender Details");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Issue By");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(OutPass.Components.Table.HeadId);

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
/* Location Stage Details Pagination Components For Table Body */
OutPass.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */


        t_tr = $(document.createElement("tr"));
        t_tr.addClass("RN" + Result.OutPassId);

        t_td = $(document.createElement("td"));
        t_td.text(Result.OutPassId);
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        /* Out Pass No */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-center bolder");
        t_td.text(Result.OutPassNo);
        t_td.appendTo(t_tr);

        /* Out Pass Date */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-left bolder");
        t_td.text(GeneralFunction.DateTimeFormat(new Date(Result.OutPassDate)));
        t_td.appendTo(t_tr);

        /* Attender Name */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-left bolder");
        t_td.html('<span class="bolder green">Name&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="bolder">' + Result.AttenderName + '</span><br>'
            + '<span class="bolder green">Relation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="bolder">' + Result.Relation + '</span><br>'
            + '<span class="bolder green">Phone No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="bolder">' + Result.PhoneNo + '</span><br>'
            + '<span class="bolder green">Place&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="bolder">' + Result.Place + '</span>');
        t_td.appendTo(t_tr);

        /* IssueBy */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-left bolder");
        t_td.text(Result.IssueBy);
        t_td.appendTo(t_tr);

        /* IssueBy */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-center bolder");
        t_td.append('<a onclick =\"OutPass.Components.Router(' + Result.OutPassId + ',' + "'Print'" + ')" href=\'javascript:void(0);\' title="Print this Pass"><i class=\"ace-icon fa fa-2x fa-print blue\" aria-hidden=\"true\"></i></a>&nbsp; ');
        t_td.appendTo(t_tr);

        t_tr.appendTo(OutPass.Components.Table.BodyId);

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
/* Location Stage Delete Components */
OutPass.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Location Stage */
                    OutPass.Components.Delete(RouteId);
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
