/* ==== */
/* Class Details Pagination Components Objects */
ClassDet.Components.Pagination = {}
ClassDet.Components.Table = {
    HeadId: "#tbhClassDet",
    BodyId: "#tbdClassDet"
}
/* ==== */

/* ==== */
/* Class Details Components Initialize */
ClassDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    ClassDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    ClassDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Class Components Table Clean */
ClassDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(ClassDet.Components.Table.BodyId).html("");

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
/* Class Details Components Pagination Table Header */
ClassDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("ClassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Team Name");
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

        t_tr.appendTo(ClassDet.Components.Table.HeadId);

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
/* Class Details Components Pagination Table Body */
ClassDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].ClassId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].ClassId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ClassName);
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
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"ClassDet.Components.Router(' + Result[i].ClassId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Class"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"ClassDet.Components.Router(' + Result[i].ClassId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Class"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(ClassDet.Components.Table.BodyId);
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
/* ClassDet Record Delete */
ClassDet.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    ClassDet.Components.Delete(RouteId);
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
