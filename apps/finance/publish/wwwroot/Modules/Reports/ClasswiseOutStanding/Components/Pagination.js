/* ==== */
/* Assign Fees Details Pagination Components Objects */
ClasswiseOutStanding.Components.Pagination = {}
ClasswiseOutStanding.Components.Table = {
    HeadId: "#tbhClasswiseOutStanding",
    BodyId: "#tbdClasswiseOutStanding"
}
ClasswiseOutStanding.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
ClasswiseOutStanding.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    ClasswiseOutStanding.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    ClasswiseOutStanding.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
ClasswiseOutStanding.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(ClasswiseOutStanding.Components.Table.BodyId).html("");

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
/* Assign Fees Details Components Pagination Table Header */
ClasswiseOutStanding.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("ClassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.ClassId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.SNo = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Academic Year");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.AcademicYear = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Class");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.Class = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Fees Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.TotalFeesAmount = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Received Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.TotalReceivedAmount = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Outstanding Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        ClasswiseOutStanding.Components.TableColumns.TotalOutstandingAmount = 6;

        t_tr.appendTo(ClasswiseOutStanding.Components.Table.HeadId);

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
/* Assign Fees Details Components Pagination Table Body */
ClasswiseOutStanding.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalDues = 0;
    var t_TotalCollection = 0;
    var t_TotalOutStanding = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {
            if ($("#chkPendingClass").is(":checked")) {
                if (parseFloat(parseFloat(Result[i].TotalFeesAmount) - parseFloat(Result[i].TotalReceivedAmount)) <= 0) {
                    /* Avoid 0 OutStanding */
                    continue;
                }
            }

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].ClassId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].ClassId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* S.No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text((i + 1));
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].StartYear + "-" + Result[i].EndYear);
            t_td.appendTo(t_tr);

            /* Academic Year  */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ClassName);
            t_td.appendTo(t_tr);

            /* Total Fees Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].TotalFeesAmount).toFixed(2));
            t_td.appendTo(t_tr);

            /* Total Received Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].TotalReceivedAmount).toFixed(2));
            t_td.appendTo(t_tr);

            /* Total OutStanding Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(parseFloat(Result[i].TotalFeesAmount) - parseFloat(Result[i].TotalReceivedAmount)).toFixed(2));
            t_td.appendTo(t_tr);

            /* Bind Data */
            t_tr.appendTo(ClasswiseOutStanding.Components.Table.BodyId);

            /* Calculate the Grand Total */
            t_TotalDues += parseFloat(Result[i].TotalFeesAmount) * 1;
            t_TotalCollection += parseFloat(Result[i].TotalReceivedAmount) * 1;


        }
        /* ==== */

        /* Call Grand Total */
        ClasswiseOutStanding.Components.Pagination.TableFooter({
            TotalDues: parseFloat(t_TotalDues).toFixed(2),
            TotalCollection: parseFloat(t_TotalCollection).toFixed(2)
        });

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
/* Assign Fees Details Components Pagination Table Header */
ClasswiseOutStanding.Components.Pagination.TableFooter = function (Params) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("Total");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalDues).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalCollection).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalDues - Params.TotalCollection).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(ClasswiseOutStanding.Components.Table.BodyId);

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
/* Assign Fees Details Record Delete */
ClasswiseOutStanding.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    ClasswiseOutStanding.Components.Delete(RouteId);
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
