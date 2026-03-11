/* ==== */
/* User Details Pagination Components Objects */
UserDet.Components.Pagination = {}
UserDet.Components.Table = {
    HeadId: "#tbhUserDet",
    BodyId: "#tbdUserDet"
}
/* ==== */

/* ==== */
/* User Details Components Initialize */
UserDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    UserDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    UserDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* User Components Table Clean */
UserDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(UserDet.Components.Table.BodyId).html("");

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
/* User Details Components Pagination Table Header */
UserDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("UserId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Name");
        t_th.addClass("text-left col-lg-3 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left col-lg-2 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("E-Mail");
        t_th.addClass("text-left col-lg-3 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("User Name");
        t_th.addClass("text-left col-lg-2 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("User Role");
        t_th.addClass("text-left col-lg-1 bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(UserDet.Components.Table.HeadId);

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
/* User Details Components Pagination Table Body */
UserDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {
        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].UserId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].UserId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* User Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FirstName + " " + Result[i].LastName);
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Mobile);
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Email);
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].UserName);
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].RoleName);
            t_td.appendTo(t_tr);


            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"UserDet.Components.Router(' + Result[i].UserId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this User"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp;');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"UserDet.Components.Router(' + Result[i].UserId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this User"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(UserDet.Components.Table.BodyId);
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
/* UserDet Record Delete */
UserDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the User */
                    UserDet.Components.Delete(RouteId);
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
