/* ==== */
/* Student Details Pagination Components Objects */
StudentDet.Components.Pagination = {}
StudentDet.Components.Table = {
    HeadId: "#tbhStudentDet",
    BodyId: "#tbdStudentDet"
}
StudentDet.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Student Details Components Initialize */
StudentDet.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    StudentDet.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    StudentDet.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Student Components Table Clean */
StudentDet.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(StudentDet.Components.Table.BodyId).html("");

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
/* Student Details Components Pagination Table Header */
StudentDet.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

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
        t_th.text("S.No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Batch");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Team Name/Group");
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
        t_th.text("Gender");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Date Of Birth");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Age");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Relative's");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Contact No");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(StudentDet.Components.Table.HeadId);

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
/* Student Details Components Pagination Table Body */
StudentDet.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {


        /* ==== */
        /* Bind Table Column Values */
        StudentDet.Components.Pagination.Data = Result;
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].StudentId);

            t_td = $(document.createElement("td"));
            t_td.text((i + 1));
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].StudentId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Batch Details */
            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(Result[i].StartYear + "-" + Result[i].EndYear);
            Result[i].AcademicYear = Result[i].StartYear + "-" + Result[i].EndYear;
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(Result[i].ClassName + "-" + Result[i].Section);
            Result[i].Class = Result[i].ClassName + "-" + Result[i].Section;
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

            /* Gender */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].Gender);
            t_td.appendTo(t_tr);

            /* DOB */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(GeneralFunction.DateFormat(Result[i].DOB));
            t_td.appendTo(t_tr);

            /* Age */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.text(Result[i].Age);
            t_td.appendTo(t_tr);

            /* Parent's Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.html(Result[i].FathersName + ", <br>" + Result[i].MothersName);
            t_td.appendTo(t_tr);

            /* TelephoneNo */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FathersTelephoneNo);
            t_td.appendTo(t_tr);


            /* ==== */
            /* Edit / Delete */
            t_td = $(document.createElement("td"));
            t_td.attr("data-label", "");
            t_td.addClass("text-center hidden-xs hidden-sm");
            if (GeneralFunction.ReadEditRights()) t_td.append('<a onclick =\"StudentDet.Components.Router(' + Result[i].StudentId + ',' + "'Edit'" + ')" href=\'javascript:void(0);\' title="Edit this Student"><i class=\"ace-icon fa fa-2x fa-pencil background-gradient\" aria-hidden=\"true\"></i></a>&nbsp; ');
            if (GeneralFunction.ReadDeleteRights()) t_td.append('<a onclick =\"StudentDet.Components.Router(' + Result[i].StudentId + ',' + "'Delete'" + ')" href=\'javascript:void(0);\' title="Delete this Student"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(StudentDet.Components.Table.BodyId);
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
/* StudentDet Record Delete */
StudentDet.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Student */
                    StudentDet.Components.Delete(RouteId);
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
