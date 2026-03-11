/* ==== */
/* Assign Fees Details Pagination Components Objects */
FeesCollectionDet.Components.Pagination = {}
FeesCollectionDet.Components.Table = {
    HeadId: "#tbhFeesCollectionDet",
    BodyId: "#tbdFeesCollectionDet"
}
FeesCollectionDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
FeesCollectionDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    FeesCollectionDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    FeesCollectionDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
FeesCollectionDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(FeesCollectionDet.Components.Table.BodyId).html("");

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
FeesCollectionDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.SNo = 0;

        t_th = $(document.createElement("th"));
        t_th.text("Receipt No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptNo = 1;


        t_th = $(document.createElement("th"));
        t_th.text("Receipt Date");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptDate = 2;


        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Batch");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.AcademicYear = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Team Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ClassName = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Customer Code");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.AdmissionNo = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Customer Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.StudentName = 6;

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ContactNo = 7;

        t_th = $(document.createElement("th"));
        t_th.text("Receipt Amount");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.ReceiptAmount = 8;


        t_th = $(document.createElement("th"));
        t_th.text("Collect By");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.CollectBy = 9;

        t_th = $(document.createElement("th"));
        t_th.text("Payment Mode");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.PaymentMode = 10;


        t_th = $(document.createElement("th"));
        t_th.text("Status");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        FeesCollectionDet.Components.TableColumns.Status = 11;


        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(FeesCollectionDet.Components.Table.HeadId);

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
FeesCollectionDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_TotalAmount = 0;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("FRN" + Result[i].FCHeaderId);

            t_td = $(document.createElement("td"));
            t_td.text((i + 1));
            t_td.addClass("text-center");
            t_td.appendTo(t_tr);

            /* Receipt No */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FCHeaderId);
            t_td.addClass("text-center");
            t_td.appendTo(t_tr);

            /* Receipt Date */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateFormat(Result[i].CreatedOn));
            t_td.appendTo(t_tr);

             /* Academic Year */
             t_td = $(document.createElement("td"));
             t_td.addClass("");
             t_td.text(Result[i].StartYear + "-" + Result[i].EndYear);
             t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ClassName + "-" + Result[i].Section);
            t_td.appendTo(t_tr);

            /* Admission No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].AdmissionNo);
            t_td.appendTo(t_tr);

            /* Student Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].StudentName);
            t_td.appendTo(t_tr);

            /* Contact No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FathersTelephoneNo);
            t_td.appendTo(t_tr);

             /* Receipt Amount */
             t_td = $(document.createElement("td"));
             t_td.addClass("text-right");
             t_td.text(parseFloat(Result[i].TotalPaidAmount).toFixed(2));
             t_TotalAmount += parseFloat(Result[i].TotalPaidAmount);
             t_td.appendTo(t_tr);

            /* Collect By */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FirstName + " " + Result[i].LastName);
            t_td.appendTo(t_tr);

             /* Payment Mode */
             t_td = $(document.createElement("td"));
             t_td.addClass("bolder");
             t_td.text(Result[i].PaymentMode);
             t_td.appendTo(t_tr);
 
            /* Trans Mode */
            t_td = $(document.createElement("td"));
            Result[i].FeesStatus == "Cancelled" ? t_td.addClass("red") : t_td.addClass("green");
            t_td.addClass("bolder hide");
            t_td.text(Result[i].FeesStatus);
            t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            if (GeneralFunction.ReadDeleteRights() && Result[i].FeesStatus != "Cancelled") t_td.append('<a onclick =\"FeesCollectionDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Receipt'" + ')" href=\'javascript:void(0);\' title="Print this Fees"><i class="ace-icon fa fa-2x fas fa fa-print  blue\" aria-hidden="true"></i></a>&nbsp;&nbsp;');
            if (GeneralFunction.ReadDeleteRights() && Result[i].FeesStatus != "Cancelled")  t_td.append('<a onclick =\"FeesCollectionDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Cancel this Fees"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(FeesCollectionDet.Components.Table.BodyId);
        }
        FeesCollectionDet.Components.Pagination.TableFooter(t_TotalAmount);
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
/* Assign Fees Details Components Pagination Table Header */
FeesCollectionDet.Components.Pagination.TableFooter = function (t_TotalAmount) {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

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
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.text("");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("td"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(FeesCollectionDet.Components.Table.BodyId);

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
FeesCollectionDet.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    FeesCollectionDet.Components.Delete(RouteId);
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
