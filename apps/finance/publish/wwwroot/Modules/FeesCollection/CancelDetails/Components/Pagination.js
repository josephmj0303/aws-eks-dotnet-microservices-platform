/* ==== */
/* Assign Fees Details Pagination Components Objects */
FeesCollectionCancelDet.Components.Pagination = {}
FeesCollectionCancelDet.Components.Table = {
    HeadId: "#tbhFeesCollectionCancelDet",
    BodyId: "#tbdFeesCollectionCancelDet"
}
FeesCollectionCancelDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
FeesCollectionCancelDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    FeesCollectionCancelDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    FeesCollectionCancelDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
FeesCollectionCancelDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(FeesCollectionCancelDet.Components.Table.BodyId).html("");

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
FeesCollectionCancelDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("Receipt No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.ReceiptNo = 0;


        t_th = $(document.createElement("th"));
        t_th.text("Receipt Date");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.ReceiptDate = 1;


        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Batch");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.AcademicYear = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Class");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.ClassName = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Admission No");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.AdmissionNo = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Student Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.StudentName = 5;


        // t_th = $(document.createElement("th"));
        // t_th.text("Contact No");
        // t_th.addClass("text-left bolder background-gradient");
        // t_th.appendTo(t_tr);
        // FeesCollectionCancelDet.Components.TableColumns.ContactNo = 6;


        // t_th = $(document.createElement("th"));
        // t_th.text("Fees Name");
        // t_th.addClass("text-left bolder background-gradient");
        // t_th.appendTo(t_tr);
        // FeesCollectionCancelDet.Components.TableColumns.FeesName = 7;


        // t_th = $(document.createElement("th"));
        // t_th.text("Fees Amount");
        // t_th.addClass("text-right bolder background-gradient");
        // t_th.appendTo(t_tr);
        // FeesCollectionCancelDet.Components.TableColumns.FeesAmount = 8;


        t_th = $(document.createElement("th"));
        t_th.text("Receipt Amount");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.ReceiptAmount = 6;


        t_th = $(document.createElement("th"));
        t_th.text("Cancel By");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.CancelBy = 7;

        t_th = $(document.createElement("th"));
        t_th.text("Cancel On");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        FeesCollectionCancelDet.Components.TableColumns.CancelOn = 8;

        // t_th = $(document.createElement("th"));
        // t_th.text("Payment Mode");
        // t_th.addClass("text-left bolder background-gradient");
        // t_th.appendTo(t_tr);
        // FeesCollectionCancelDet.Components.TableColumns.PaymentMode = 11;


        // t_th = $(document.createElement("th"));
        // t_th.text("Status");
        // t_th.addClass("text-left bolder background-gradient hide");
        // t_th.appendTo(t_tr);
        // FeesCollectionCancelDet.Components.TableColumns.Status = 12;


        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(FeesCollectionCancelDet.Components.Table.HeadId);

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
FeesCollectionCancelDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FCHeaderId);

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
            // t_td = $(document.createElement("td"));
            // t_td.addClass("");
            // t_td.text(Result[i].FathersTelephoneNo);
            // t_td.appendTo(t_tr);

            /* Fees Name */
            // t_td = $(document.createElement("td"));
            // t_td.addClass("");
            // t_td.text(Result[i].FeesName);
            // t_td.appendTo(t_tr);

             /* Fees Amount */
            //  t_td = $(document.createElement("td"));
            //  t_td.addClass("text-right");
            //  t_td.text(parseFloat(Result[i].DueAmount).toFixed(2));
            //  t_td.appendTo(t_tr);

             /* Receipt Amount */
             t_td = $(document.createElement("td"));
             t_td.addClass("text-right");
             t_td.text(parseFloat(Result[i].TotalPaidAmount).toFixed(2));
             t_td.appendTo(t_tr);

            /* Collect By */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].DeletedBy);
            t_td.appendTo(t_tr);

             /* Delete On */
             t_td = $(document.createElement("td"));
             t_td.addClass("");
             t_td.text(GeneralFunction.DateTimeFormat(Result[i].DeletedOn));
             t_td.appendTo(t_tr);

             /* Payment Mode */
            //  t_td = $(document.createElement("td"));
            //  t_td.addClass("bolder");
            //  t_td.text(Result[i].PaymentMode);
            //  t_td.appendTo(t_tr);
 
            /* Trans Mode */
            // t_td = $(document.createElement("td"));
            // Result[i].FeesStatus == "Cancelled" ? t_td.addClass("red") : t_td.addClass("green");
            // t_td.addClass("bolder hide");
            // t_td.text(Result[i].FeesStatus);
            // t_td.appendTo(t_tr);

            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            t_td.append('<a onclick =\"FeesCollectionCancelDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Receipt'" + ')" href=\'javascript:void(0);\' title="Print this Fees"><i class="ace-icon fa fa-2x fas fa fa-print  blue\" aria-hidden="true"></i></a>&nbsp;&nbsp;');
            if (GeneralFunction.ReadDeleteRights() && Result[i].FeesStatus != "Cancelled")  t_td.append('<a onclick =\"FeesCollectionCancelDet.Components.Router(' + Result[i].FCHeaderId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Cancel this Fees"><i class="ace-icon fa fa-2x fas fa-trash-alt red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(FeesCollectionCancelDet.Components.Table.BodyId);
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
FeesCollectionCancelDet.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    FeesCollectionCancelDet.Components.Delete(RouteId);
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
