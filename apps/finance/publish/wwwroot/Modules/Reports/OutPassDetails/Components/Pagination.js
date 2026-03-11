/* ==== */
/* Assign Fees Details Pagination Components Objects */
OutPassReport.Components.Pagination = {}
OutPassReport.Components.Table = {
    HeadId: "#tbhOutPassReport",
    BodyId: "#tbdOutPassReport"
}
OutPassReport.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
OutPassReport.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    OutPassReport.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    OutPassReport.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
OutPassReport.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(OutPassReport.Components.Table.BodyId).html("");
        $(OutPassReport.Components.Table.FooterId).html("");

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
OutPassReport.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("OutPassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.OutPassId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.SNo = 1;

        t_th = $(document.createElement("th"));
        t_th.text("OutPass No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.OutPassNo = 2;

        t_th = $(document.createElement("th"));
        t_th.text("OutPass Date");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.OutPassDate = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Class/Sec");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.ClassSec = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Admission No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.AdmissionNo = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Student Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.StudentName = 6;

        t_th = $(document.createElement("th"));
        t_th.text("Attender Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.AttenderName = 7;

        t_th = $(document.createElement("th"));
        t_th.text("Relation");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.Relation = 8;

        t_th = $(document.createElement("th"));
        t_th.text("Phone No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.PhoneNo = 9;

        t_th = $(document.createElement("th"));
        t_th.text("Place");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.Place = 10;

        t_th = $(document.createElement("th"));
        t_th.text("Issue By");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.IssueBy = 11;

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        OutPassReport.Components.TableColumns.Print = 12;

        t_tr.appendTo(OutPassReport.Components.Table.HeadId);

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
OutPassReport.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalFeesAmount = 0;
    var t_TotalRecAmount = 0;
    var t_TotalOutstandingAmount = 0;


    try {

        /* ==== */
        /* Bind Table Column Values */
        if (Result.length > 0) {

            /* ==== */
            /* Bind the Outstandings */
            for (var i = 0; i < Result.length; i++) {

                t_tr = $(document.createElement("tr"));
                t_tr.addClass("RN" + Result[i].OutPassId);

                t_td = $(document.createElement("td"));
                t_td.text(Result[i].OutPassId);
                t_td.addClass("hide");
                t_td.appendTo(t_tr);

                /* OutPass No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text((i + 1));
                t_td.appendTo(t_tr);

                /* OutPass No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].OutPassNo);
                t_td.appendTo(t_tr);

                /* OutPass Date  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(GeneralFunction.DateTimeFormat(Result[i].OutPassDate));
                t_td.appendTo(t_tr);

                /* Admission No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].ClassName + "-" + Result[i].Section);
                t_td.appendTo(t_tr);

                /* Admission No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].AdmissionNo);
                t_td.appendTo(t_tr);

                /* Student Name  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].StudentName);
                t_td.appendTo(t_tr);

                /* Attender Name  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].AttenderName);
                t_td.appendTo(t_tr);

                /* Relation  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].Relation);
                t_td.appendTo(t_tr);

                /* PhoneNo  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].PhoneNo);
                t_td.appendTo(t_tr);

                /* Place  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].Place);
                t_td.appendTo(t_tr);

                /* Issue By  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].IssueBy);
                t_td.appendTo(t_tr);

                /* Issue By  */
                /* IssueBy */
                t_td = $(document.createElement("td"));
                t_td.addClass("text-center bolder");
                t_td.append('<a onclick =\"OutPass.Components.Router(' + Result[i].OutPassId + ',' + "'Print'" + ')" href=\'javascript:void(0);\' title="Print this Pass"><i class=\"ace-icon fa fa-2x fa-print blue\" aria-hidden=\"true\"></i></a>&nbsp; ');
                t_td.appendTo(t_tr);

                t_tr.appendTo(OutPassReport.Components.Table.BodyId);
                
            }
            /* ==== */

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
/* Assign Fees Details Record Delete */
OutPassReport.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    OutPassReport.Components.Delete(RouteId);
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
