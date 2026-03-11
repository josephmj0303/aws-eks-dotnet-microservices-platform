/* ==== */
/* Student Details Pagination Components Objects */
Student.Components.Pagination = {}
Student.Components.Table = {
    HeadId: "#tbhAcademyHistoryDet",
    BodyId: "#tbdAcademyHistoryDet"
}
Student.Components.TableColumns = {

}
/* ==== */

/* ==== */
/* Student Details Components Initialize */
Student.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    Student.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    Student.Components.Pagination.TableHead();

}
/* ==== */


/* ==== */
/* Student Components Table Clean */
Student.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(Student.Components.Table.BodyId).html("");

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
Student.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("ClassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.ClassId = 0;

        t_th = $(document.createElement("th"));
        t_th.text("SecId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.SecId = 1;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Class/Sec");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.ClassSection = 2;

        t_th = $(document.createElement("th"));
        t_th.text("Start Year");
        t_th.addClass("text-left bolder background-gradient hide");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.StartYear = 3;

        t_th = $(document.createElement("th"));
        t_th.text("End Year");
        t_th.addClass("text-left bolder background-gradient hide");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.EndYear = 4;

        t_th = $(document.createElement("th"));
        t_th.text("Academic Year");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.AcademicYear = 5;

        t_th = $(document.createElement("th"));
        t_th.text("Active");
        t_th.addClass("text-center bolder background-gradient");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.ISActiveAcademicYear = 6;

        t_th = $(document.createElement("th"));
        t_th.text("TransferId");
        t_th.addClass("text-left bolder background-gradient hide");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.TransferId = 7;

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("");
        t_th.appendTo(t_tr);
        Student.Components.TableColumns.Delete = 8;
        /* ==== */

        t_tr.appendTo(Student.Components.Table.HeadId);

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
Student.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_RandomId = GeneralFunction.GetRandomKey().RandomKey;

    try {
        /* ==== */
        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));
        t_tr.attr("Id", "Row_" + t_RandomId);

        t_td = $(document.createElement("td"));
        t_td.text(Result.ClassId);
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.SecId);
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.ClassSection);
        t_td.addClass("text-left bolder");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.StartYear);
        t_td.addClass("text-left bolder hide");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.EndYear);
        t_td.addClass("text-left bolder hide");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.AcademyYear);
        t_td.addClass("text-left bolder");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        let t_LabelElement = $(document.createElement("label"));
        t_LabelElement.addClass("block no-padding text-center");

        let t_CheckboxElement = $(document.createElement("input"));
        t_CheckboxElement.addClass("ace input-lg");
        t_CheckboxElement.attr("name", "chkYesOrNo");
        t_CheckboxElement.attr("id", "chkYesOrNo_" + t_RandomId);
        t_CheckboxElement.attr("type", "radio");
        t_CheckboxElement.appendTo(t_LabelElement);

        let t_CheckboxLabelElement = $(document.createElement("label"));
        t_CheckboxLabelElement.addClass("lbl bigger-110 bolder");
        t_CheckboxLabelElement.attr("for", "chkYesOrNo_" + t_RandomId);
        t_CheckboxLabelElement.appendTo(t_LabelElement);

        t_LabelElement.appendTo(t_td);
        t_td.addClass("text-center bolder");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.text(Result.TransferId);
        t_td.addClass("text-left bolder hide");
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.addClass("text-center bolder");
        t_td.append('<a onclick =\"Student.Components.Router(' + "'" + "Row_" + t_RandomId + "'" + ',' + "'DeleteAcademy'" + ')" href=\'javascript:void(0);\' title="Delete this Student"><i class="ace-icon fa fa-2x fas fa-trash red\" aria-hidden="true"></i></a>');
        t_td.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(Student.Components.Table.BodyId);
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
/* Student Sort the Record */
Student.Components.Pagination.SortTableRecords = function () {

    var tbody = $(Student.Components.Table.BodyId);
    var rows = tbody.find('tr').get();

    // Sort the rows using the custom comparison function
    rows.sort(Student.Components.Pagination.CompareRows); 

    // Reattach the sorted rows to the table
    $.each(rows, function (index, row) {
        tbody.append(row);
    });

    /* First Row Check Box Activiate */
    $(Student.Components.Table.BodyId + ' tr:first input[type="radio"]').prop('checked', true);
}
/* ==== */

/* ==== */
/* Student Record Comparison */
Student.Components.Pagination.CompareRows = function (a, b) {
    var dateA = new Date($(a).find('td:eq(3)').text());
    var dateB = new Date($(b).find('td:eq(3)').text());
    return dateB - dateA;
}
/* ==== */

/* ==== */
/* Student Record Delete */
Student.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    $("#" + RouteId).remove();
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
