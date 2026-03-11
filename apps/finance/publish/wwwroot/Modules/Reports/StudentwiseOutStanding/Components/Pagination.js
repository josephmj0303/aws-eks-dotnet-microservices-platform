/* ==== */
/* Assign Fees Details Pagination Components Objects */
StudentwiseOutStanding.Components.Pagination = {}
StudentwiseOutStanding.Components.Table = {
    HeadId: "#tbhStudentwiseOutStanding",
    BodyId: "#tbdStudentwiseOutStanding",
    FooterId: "#tbfStudentwiseOutStanding"
}
StudentwiseOutStanding.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
StudentwiseOutStanding.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    StudentwiseOutStanding.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    StudentwiseOutStanding.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
StudentwiseOutStanding.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(StudentwiseOutStanding.Components.Table.BodyId).html("");
        $(StudentwiseOutStanding.Components.Table.FooterId).html("");

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
StudentwiseOutStanding.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("StudentId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.StudentId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.SNo = 1;

        t_th = $(document.createElement("th"));
        t_th.text("Class");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.Class = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Admission No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.AdmissionNo = 3;

        t_th = $(document.createElement("th"));
        t_th.text("Student Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.StudentName = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.ContactNo = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Fees Amount");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.FeesAmount = 6;

        t_th = $(document.createElement("th"));
        t_th.text("Received Amount");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.ReceivedAmount = 7;

        t_th = $(document.createElement("th"));
        t_th.text("Outstanding Amount");
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);
        StudentwiseOutStanding.Components.TableColumns.OutstandingAmount = 8;

        t_tr.appendTo(StudentwiseOutStanding.Components.Table.HeadId);

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
StudentwiseOutStanding.Components.Pagination.TableBody = function (Result) {

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
                t_tr.addClass("RN" + Result[i].StudentId);

                t_td = $(document.createElement("td"));
                t_td.text(Result[i].StudentId);
                t_td.addClass("hide");
                t_td.appendTo(t_tr);

                /* S.No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text((i + 1));
                t_td.appendTo(t_tr);

                /* Class  */
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

                /* Contact No  */
                t_td = $(document.createElement("td"));
                t_td.addClass("");
                t_td.text(Result[i].FathersTelephoneNo);
                t_td.appendTo(t_tr);


                /* Total Fees Amount */
                t_td = $(document.createElement("td"));
                t_td.addClass("text-right");
                t_TotalFeesAmount += parseFloat(Result[i].TotalFeesAmount);
                t_td.text(parseFloat(Result[i].TotalFeesAmount).toFixed(2));
                t_td.appendTo(t_tr);

                /* Total Received Amount */
                t_td = $(document.createElement("td"));
                t_td.addClass("text-right");
                t_TotalRecAmount += parseFloat(Result[i].TotalReceivedAmount);
                t_td.text(parseFloat(Result[i].TotalReceivedAmount).toFixed(2));
                t_td.appendTo(t_tr);

                /* Total OutStanding Amount */
                t_td = $(document.createElement("td"));
                t_td.addClass("text-right");
                var t_BalanceAmount = parseFloat(parseFloat(Result[i].TotalFeesAmount) - parseFloat(Result[i].TotalReceivedAmount));
                t_TotalOutstandingAmount += t_BalanceAmount;
                t_td.text(parseFloat(t_BalanceAmount).toFixed(2));
                t_td.appendTo(t_tr);

                t_tr.appendTo(StudentwiseOutStanding.Components.Table.BodyId);

                /* Set Zero Outstanding Flag */
                if (t_BalanceAmount <= 0) t_tr.addClass("ZeroOutstanding");
            }
            /* ==== */

            /* ==== */
            /* Bind the Footer Details */
            StudentwiseOutStanding.Components.Pagination.TableFooter({
                TotalFeesAmount: t_TotalFeesAmount,
                TotalRecAmount: t_TotalRecAmount,
                TotalOutStandingAmount: t_TotalOutstandingAmount,
            });
            /* ==== */

        }
        /* ==== */

        /* ==== */
        /* Set the Total OutStanding Amount */
        $(".lblTotalOutStandingAmount").html(parseFloat(t_TotalOutstandingAmount).toFixed(2));
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
StudentwiseOutStanding.Components.Pagination.TableFooter = function (Params) {

    /* Declearation */
    var t_tr = null, t_th = null;
    //$(StudentwiseOutStanding.Components.Table.FooterId).html("");

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("StudentId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Total");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalFeesAmount).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalRecAmount).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text(parseFloat(Params.TotalOutStandingAmount).toFixed(2));
        t_th.addClass("text-right bolder");
        t_th.appendTo(t_tr);

        t_tr.appendTo(StudentwiseOutStanding.Components.Table.BodyId);

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
StudentwiseOutStanding.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    StudentwiseOutStanding.Components.Delete(RouteId);
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
