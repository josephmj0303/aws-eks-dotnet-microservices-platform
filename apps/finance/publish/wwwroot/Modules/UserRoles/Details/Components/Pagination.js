/* ==== */
/* User Roles Details Pagination Components Objects */
UserRoleDet.Components.Pagination = {}
UserRoleDet.Components.Table = {
    HeadId: "#tbhRoleDet",
    BodyId: "#tbdRoleDet"
}
/* ==== */

/* ==== */
/* User Roles Details Components Initialize */
UserRoleDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    UserRoleDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    UserRoleDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* User Roles Components Table Clean */
UserRoleDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(UserRoleDet.Components.Table.BodyId).html("");

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
/* User Roles Details Components Pagination Table Header */
UserRoleDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("RoleId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Role Name");
        t_th.addClass("text-left col-lg-11 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(UserRoleDet.Components.Table.HeadId);

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
/* User Roles Details Components Pagination Table Body */
UserRoleDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].RoleId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].RoleId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* User Roles Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].RoleName);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"UserRoleDet.Components.Router(' + Result[i].RoleId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Role"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp;');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"UserRoleDet.Components.Router(' + Result[i].RoleId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Role"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(UserRoleDet.Components.Table.BodyId);
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
/* UserRoleDet Record Delete */
UserRoleDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the User Roles */
                    UserRoleDet.Components.Delete(RouteId);
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
