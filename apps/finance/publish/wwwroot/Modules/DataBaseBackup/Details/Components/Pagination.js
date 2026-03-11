/* ==== */
/* DataBase Backup Details Pagination Components Objects */
DataBaseBackupDet.Components.Pagination = {}
DataBaseBackupDet.Components.Table = {
    HeadId: "#tbhBackupLogDet",
    BodyId: "#tbdBackupLogDet"
}
/* ==== */

/* ==== */
/* DataBase Backup Details Components Initialize */
DataBaseBackupDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    DataBaseBackupDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    DataBaseBackupDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Class Components Table Clean */
DataBaseBackupDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(DataBaseBackupDet.Components.Table.BodyId).html("");

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
/* DataBase Backup Details Components Pagination Table Header */
DataBaseBackupDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("DBLogId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Backup File");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Backup On");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Executed By");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Status");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Message");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(DataBaseBackupDet.Components.Table.HeadId);

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
/* DataBase Backup Details Components Pagination Table Body */
DataBaseBackupDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            if (Result[i].Status == "Failure") t_tr.addClass("red");

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].DBLogId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* File Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FileName);
            t_td.appendTo(t_tr);

            /* Created On */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].CreatedOn);
            t_td.appendTo(t_tr);

            /* Executed By */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FirstName + " " + Result[i].LastName);
            t_td.appendTo(t_tr);

            /* Status */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Status);
            t_td.appendTo(t_tr);

            /* Message */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Message);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Download */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            //t_td.append('<a href="/DataBaseBackup/DownloadBackup?FilePath=' + Result[i].FileName +  '" title=\"Download\><i class="ace-icon fa fa-2x fa-download background-gradient\" aria-hidden=\"true\"></i></a>');
            t_td.append('<a href="/DataBaseBackup/DownloadBackup?FileName=' + Result[i].FileName +  '" title=\"Download\"><i class=\"ace-icon fa fa-2x fa-download background-gradient\" aria-hidden=\"true\"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */


            t_tr.appendTo(DataBaseBackupDet.Components.Table.BodyId);
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
/* DataBaseBackupDet Record Backup */
DataBaseBackupDet.Components.Pagination.BackupRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlBackupConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Backup Confirmation",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Delete the Class */
                    $(this).dialog("close");
                    DataBaseBackupDet.Components.Backup(RouteId);

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
