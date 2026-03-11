/* ==== */
/* Assigned Student Fees Details Pagination Components Objects */
AssignStudentFeesDet.Components.Pagination = {}
AssignStudentFeesDet.Components.Table = {
    HeadId: "#tbhAssignStudentFeesDet",
    BodyId: "#tbdAssignStudentFeesDet"
}
/* ==== */

/* ==== */
/* Assigned Student Fees Details Components Initialize */
AssignStudentFeesDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    AssignStudentFeesDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    AssignStudentFeesDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assigned Student Fees Components Table Clean */
AssignStudentFeesDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(AssignStudentFeesDet.Components.Table.BodyId).html("");

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
/* Assigned Student Fees Details Components Pagination Table Header */
AssignStudentFeesDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FeesAssignId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Class");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Scheme Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Validity Start");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Validity End");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Customer Code");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Customer Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Due Date");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Amount");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(AssignStudentFeesDet.Components.Table.HeadId);

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
/* Assigned Student Fees Details Components Pagination Table Body */
AssignStudentFeesDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FeesAssignId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FeesAssignId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(Result[i].ClassName);
            t_td.appendTo(t_tr);

            /* Fees Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FeesName);
            t_td.appendTo(t_tr);

            /* Validity Start */
            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(GeneralFunction.DateFormat(Result[i].StartDate));
            t_td.appendTo(t_tr);

            /* Validity End */
            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(GeneralFunction.DateFormat(Result[i].EndDate));
            t_td.appendTo(t_tr);

            /* Admission No */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].AdmissionNo);
            t_td.appendTo(t_tr);

            /* Student Name */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].StudentName);
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(GeneralFunction.DateFormat(Result[i].DueDate));
            t_td.appendTo(t_tr);

            /* Fees Amount */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].DueAmount).toFixed(2));
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");

            if (Result[i].IsCancelled) {
                /* Cancelled Fees */
                t_td.addClass("red bolder");
                t_td.append("Canceled");
            }
            else if (Result[i].IsFeesCollected) {
                /* Activated Fees */
                t_td.addClass("green bolder");
                t_td.append("Activated");
            }
            else {
                //if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"AssignStudentFeesDet.Components.Router(' + Result[i].FeesAssignId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this FeesCategory"><i class=\"ace-icon fa fa-2x fa-pencil-square-o background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
               // if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"AssignStudentFeesDet.Components.Router(' + Result[i].FeesAssignId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this FeesCategory"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
                t_td.append('<a onclick =\"AssignStudentFeesDet.Components.Router(' + Result[i].FeesId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Fees"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            }
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(AssignStudentFeesDet.Components.Table.BodyId);
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
/* Assigned Student Fees Details Record Delete */
AssignStudentFeesDet.Components.Pagination.DeleteRecord = function (RouteId) {

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
                html: "Yes, I Understood",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Delete the FeesCategory */
                    AssignStudentFeesDet.Components.Delete(RouteId);
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
