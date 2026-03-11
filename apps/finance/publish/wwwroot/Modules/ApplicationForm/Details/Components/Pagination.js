/* ==== */
/* Application Form Details Pagination Components Objects */
ApplicationFormDet.Components.Pagination = {}
ApplicationFormDet.Components.Table = {
    HeadId: "#tbhFormDet",
    BodyId: "#tbdFormDet"
}
ApplicationFormDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Application Form Details Components Initialize */
ApplicationFormDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    ApplicationFormDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    ApplicationFormDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Application Form Table Clean Components */
ApplicationFormDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(ApplicationFormDet.Components.Table.BodyId).html("");

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
/* Application Form Details Pagination Table Header Components */
ApplicationFormDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("AFFId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.SNo = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Application No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.ApplicationNo = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Date");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.Date = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Student Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.StudentName = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Class Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.ClassName = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Parent Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.ParentName = 6;

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.ContactNo = 7;

        t_th = $(document.createElement("th"));
        t_th.text("Fee Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.FeeAmount = 8;

        t_th = $(document.createElement("th"));
        t_th.text("Collect By");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.CollectBy = 9;

        t_th = $(document.createElement("th"));
        t_th.text("Payment Mode"); 
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        ApplicationFormDet.Components.TableColumns.PaymentMode = 10;

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(ApplicationFormDet.Components.Table.HeadId);

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
/* Form Details Pagination Table Body Components */
ApplicationFormDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].AFFId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].AFFId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* S.No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text((i + 1));
            t_td.appendTo(t_tr);

            /* AFF Id */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ApplicationNo);
            t_td.appendTo(t_tr);

            /* Application Date */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateTimeFormat(Result[i].ApplicationDate));
            t_td.appendTo(t_tr);

            /* Student Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].StudentName);
            t_td.appendTo(t_tr);

            /* ClassName */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ClassName);
            t_td.appendTo(t_tr);

            /* Parent Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ParentName);
            t_td.appendTo(t_tr);

            /* Contact No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ContactNo);
            t_td.appendTo(t_tr);

            /* Fee Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].FeeAmount).toFixed(2));
            t_TotalAmount += parseFloat(Result[i].FeeAmount);
            t_td.appendTo(t_tr);

            /* Collect By */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FirstName + " " + Result[i].LastName);
            t_td.appendTo(t_tr);

            /* Payment Mode */
            t_td = $(document.createElement("td"));
            t_td.addClass("bolder");
            t_td.text(Result[i].PaymentType);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            t_td.append('<a onclick =\"ApplicationFormDet.Components.Router(' + Result[i].AFFId + ',' + "'Receipt'" + ')" href=\'javascript:void(0);\' title="Edit this Form"><i class=\"ace-icon fa fa-2x fa-print blue\" aria-hidden=\"true\"></i></a>&nbsp; ');
            t_td.append('<a onclick =\"ApplicationFormDet.Components.Router(' + Result[i].AFFId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Form"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            t_td.append('<a onclick =\"ApplicationFormDet.Components.Router(' + Result[i].AFFId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Form"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(ApplicationFormDet.Components.Table.BodyId);
        }
        ApplicationFormDet.Components.Pagination.TableFooter(t_TotalAmount);
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
/* Application Form Details Details Components Pagination Table Header */
ApplicationFormDet.Components.Pagination.TableFooter = function (t_TotalAmount) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder");
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
        t_th.text(parseFloat(t_TotalAmount).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(ApplicationFormDet.Components.Table.BodyId);

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
/* Application Form Details Record Delete */
ApplicationFormDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Form */
                    ApplicationFormDet.Components.Delete(RouteId);
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
