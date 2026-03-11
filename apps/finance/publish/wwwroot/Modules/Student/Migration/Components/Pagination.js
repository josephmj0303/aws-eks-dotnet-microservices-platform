/* ==== */
/* Section Details Pagination Components Objects */
StudentMigration.Components.Pagination = {}
/* ==== */

/* ==== */
/* Section Details Components Initialize */
StudentMigration.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    StudentMigration.Components.Pagination.Cleaner("Source");
    StudentMigration.Components.Pagination.Cleaner("Target");

    /* Init the Pagination Table Header */
    StudentMigration.Components.Pagination.TableHead("Source");
    StudentMigration.Components.Pagination.TableHead("Target");

}
/* ==== */

/* ==== */
/* Section Components Table Clean */
StudentMigration.Components.Pagination.Cleaner = function (TargetId) {

    try {

        /* Clear the Pagination Table Components */
        $("#tbd" + TargetId + "StudentList").html("");

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
/* Section Details Components Pagination Table Header */
StudentMigration.Components.Pagination.TableHead = function (TargetId) {

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
        t_th.addClass("col-lg-1 text-center");
        t_th.append(StudentMigration.Components.Pagination.CreateCheckbox({ Id: TargetId + "_SelectAll", Status: TargetId == "Source" ? true : false }));
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Student Name");
        t_th.addClass("text-left col-lg-5 bolder");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo("#tbh" + TargetId + "StudentList");

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
/* Section Details Components Pagination Table Body */
StudentMigration.Components.Pagination.TableBody = function (TargetId, Params) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        t_tr = $(document.createElement("tr"));
        t_tr.addClass(TargetId + "_" + Params.StudentId);

        /* Hide Field */
        t_td = $(document.createElement("td"));
        t_td.text(Params.StudentId);
        t_td.addClass("hide");
        t_td.appendTo(t_tr);

        /* CheckBox  */
        t_td = $(document.createElement("td"));
        t_td.addClass("text-center");
        t_td.append(StudentMigration.Components.Pagination.CreateCheckbox({ Id: TargetId + "_" + Params.StudentId, Status: Params.Status }));
        t_td.appendTo(t_tr);

        t_td = $(document.createElement("td"));
        t_td.addClass("bolder")
        t_td.text(Params.StudentName);
        t_td.appendTo(t_tr);

        t_tr.appendTo("#tbd" + TargetId + "StudentList");
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
/* UserRights Record Delete */
StudentMigration.Components.Pagination.CreateCheckbox = function (Params) {

    var t_Checkbox = $(document.createElement("div"));

    var t_label = $(document.createElement("label"));
    t_label.addClass("block");

    var t_InputBox = $(document.createElement("input"));
    t_InputBox.addClass("ace input-md StudentCheckbox");
    t_InputBox.attr("Id", Params.Id);
    t_InputBox.attr("name", "form-field-checkbox");
    t_InputBox.attr("type", "checkbox");
    t_InputBox.prop('checked', Params.Status);
    t_InputBox.appendTo(t_label);

    var t_Span = $(document.createElement("span"));
    t_Span.addClass("lbl bigger-120");
    t_Span.appendTo(t_label);
    t_label.appendTo(t_Checkbox);

    return t_Checkbox;
}
/* ==== */


/* ==== */
/* Move to Right */
StudentMigration.Components.Pagination.MoveRight = function () {

    var IsFound = false;

    try {
        /* ===== */
        /* Append the Selected To Target List */
        $("#tbdSourceStudentList tr").each(function () {

            /* Current Row */
            var t_CurrentRow = $(this);
            var t_StudentId = t_CurrentRow.find("td:eq(0)").text().trim();
            var t_StudentName = t_CurrentRow.find("td:eq(2)").text().trim();
            var t_IsActive = t_CurrentRow.find(".StudentCheckbox").prop('checked');

            if (t_IsActive) {
                //if ($('#tbdTargetStudentList tr > td:contains(' + t_StudentId + ')').length == 0) {
                /* Puch the Record to Target Table */
                StudentMigration.Components.Pagination.TableBody("Target", {
                    StudentId: t_StudentId,
                    StudentName: t_StudentName,
                    Status: false
                });
                //}

                /* Delete the Moved Record Row */
                $(t_CurrentRow).remove();
                IsFound = true;
            }

        });
        /* ===== */

        if (IsFound == false) {
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: "Please select at least one student from the source list."
            });
        }

    }
    catch (e) {
        /* ==== */
        /* Exceoption Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: e.message
        });
        /* ==== */
    }
}
/* ==== */

/* ==== */
/* Move to Left */
StudentMigration.Components.Pagination.MoveLeft = function () {

    var IsFound = false;
    try {


        /* ===== */
        /* Append the Selected To Target List */
        $("#tbdTargetStudentList tr").each(function () {

            /* Current Row */
            var t_CurrentRow = $(this);
            var t_StudentId = t_CurrentRow.find("td:eq(0)").text().trim();
            var t_StudentName = t_CurrentRow.find("td:eq(2)").text().trim();
            var t_IsActive = t_CurrentRow.find(".StudentCheckbox").prop('checked');

            if (t_IsActive) {

                //if ($('#tbdSourceStudentList tr > td:contains(' + t_StudentId + ')').length == 0) {
                /* Puch the Record to Target Table */
                StudentMigration.Components.Pagination.TableBody("Source", {
                    StudentId: t_StudentId,
                    StudentName: t_StudentName,
                    Status: true
                });
                //}

                /* Delete the Moved Record Row */
                $(t_CurrentRow).remove();
                IsFound = true;
            }

        });
        /* ===== */

        if (IsFound == false) {
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: "Please select at least one student from the destination list."
            });
        }
    }
    catch (e) {
        /* ==== */
        /* Exceoption Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: e.message
        });
        /* ==== */
    }
}
/* ==== */


/* ==== */
/* Bind the Source Admission Year */
StudentMigration.Components.Pagination.SetSourceAdmissionYear = function () {

    /* Read the Local Storage */
    var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
        StorageName: "DropdownAdmissionYear_Cookies"
    });

    /* Read the Data From Cookies */
    if (ObjLocalStorageResponse.Status == "Success") {

        /* Set the Local Values */
        var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);
        if (ObjResult.result != null) {
            for (var i = 0; i < ObjResult.result.length; i++) {

                /* ==== */
                /* Bind Current Admission Year */
                var t_OptionTag = $(document.createElement("option"));
                t_OptionTag.val(ObjResult.result[i].textFieldName);
                t_OptionTag.text(ObjResult.result[i].textFieldName);
                t_OptionTag.appendTo("#divSourceAdmissionYear_dropdown");
                /* ==== */

            }
        }
    }

}
/* ==== */


/* ==== */
/* Bind the Target Admission Year */
StudentMigration.Components.Pagination.SetTargetAdmissionYear = function () {
    /* Read the Local Storage */
    var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
        StorageName: "DropdownAdmissionYear_Cookies"
    });

    /* Read the Data From Cookies */
    if (ObjLocalStorageResponse.Status == "Success") {

        /* Set the Local Values */
        var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);
        if (ObjResult.result != null) {
            if (ObjResult.result.length > 0) {
                for (var i = 0; i < ObjResult.result.length; i++) {

                    var t_AdmissionYear = ObjResult.result[i].textFieldName;
                    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
                        t_StartYear = parseInt(t_AdmissionYear.split('-')[0]) + 1;
                        t_EndYear = parseInt(t_AdmissionYear.split('-')[1]) + 1;
                    }

                    if (GeneralFunction.EnablePromotion) {
                        /* ==== */
                        /* Bind Next Admission Year */
                        var t_OptionTag = $(document.createElement("option"));
                        t_OptionTag.val(t_StartYear + "-" + t_EndYear);
                        t_OptionTag.text(t_StartYear + "-" + t_EndYear);
                        t_OptionTag.appendTo("#divTargetAdmissionYear_dropdown");
                        /* ==== */
                    }

                    /* ==== */
                    /* Bind Current Admission Year */
                    var t_OptionTag = $(document.createElement("option"));
                    t_OptionTag.val(ObjResult.result[i].textFieldName);
                    t_OptionTag.text(ObjResult.result[i].textFieldName);
                    t_OptionTag.appendTo("#divTargetAdmissionYear_dropdown");
                    /* ==== */
                }

            }
        }
    }
}
/* ==== */

/* ==== */
/* Student Record Delete */
StudentMigration.Components.Pagination.DeleteRecord = function (RouteId) {

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
                    StudentMigration.Components.PopulateDestination({
                        Reset: true,
                        ResetPagination: true
                    });
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    /* Rollback the Current Action */
                    $("#divTargetAdmissionYear_dropdown").val(StudentMigration.Components.LastAdmissionYear);
                    $("#divTargetClassSection_dropdown").val(StudentMigration.Components.LastClassSecId);
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */

/* ==== */
/* Student Record Delete */
StudentMigration.Components.Pagination.MigrationRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlMigrateConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Migration",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Close the Dialog Box */
                    $(this).dialog("close");

                    setTimeout(function () {
                        /* Migrate Now */
                        StudentMigration.Components.Save();
                    }, 200);
                   
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {

                    /* Close the Dialog Box */
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */
