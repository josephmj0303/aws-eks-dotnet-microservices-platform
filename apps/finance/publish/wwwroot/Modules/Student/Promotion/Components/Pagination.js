/* ==== */
/* Section Details Pagination Components Objects */
StudentPromotion.Components.Pagination = {}
StudentPromotion.Components.Table = {
    HeadId: "#tbhStudentPromotion",
    BodyId: "#tbdStudentPromotion"
}
/* ==== */

/* ==== */
/* Section Details Components Initialize */
StudentPromotion.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    StudentPromotion.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    // StudentPromotion.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Section Components Table Clean */
StudentPromotion.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(StudentPromotion.Components.Table.BodyId).html("");

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
/* Section Details Components Pagination Table Body */
StudentPromotion.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        $(StudentPromotion.Components.Table.BodyId).html("");
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].classSecId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].classSecId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("bolder black");
            t_td.html("<div class=\"space-6\"></div>" + Result[i].classSection);
            t_td.appendTo(t_tr);

            /* Clone the Target Class */
            t_td = $(document.createElement("td"));
            var t_CloneTargetClass = $(".TargetClassSectionDesign").clone();
            t_CloneTargetClass.removeClass("TargetClassSectionDesign");
            t_CloneTargetClass.appendTo(t_td);
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("Status text-center");
            t_td.text("");
            t_td.appendTo(t_tr);

            t_tr.appendTo(StudentPromotion.Components.Table.BodyId);
        }
        /* ==== */

        /* Hide the Status Bar */
        $(".Status").hide();

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
/* Bind the Source Admission Year */
StudentPromotion.Components.Pagination.SetSourceAdmissionYear = function () {

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

}
/* ==== */


/* ==== */
/* Bind the Target Admission Year */
StudentPromotion.Components.Pagination.SetTargetAdmissionYear = function () {
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

                var t_AdmissionYear = ObjResult.result[0].textFieldName;
                if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
                    t_StartYear = parseInt(t_AdmissionYear.split('-')[0]) + 1;
                    t_EndYear = parseInt(t_AdmissionYear.split('-')[1]) + 1;
                }

                /* ==== */
                /* Bind Next Admission Year */
                var t_OptionTag = $(document.createElement("option"));
                t_OptionTag.val(t_StartYear + "-" + t_EndYear);
                t_OptionTag.text(t_StartYear + "-" + t_EndYear);
                t_OptionTag.appendTo("#divTargetAdmissionYear_dropdown");
                /* ==== */

                for (var i = 0; i < ObjResult.result.length; i++) {
                    /* ==== */
                    /* Bind Target Admission Year */
                    var t_OptionTag = $(document.createElement("option"));
                    t_OptionTag.val(ObjResult.result[i].textFieldName);
                    t_OptionTag.text(ObjResult.result[i].textFieldName);
                    t_OptionTag.appendTo("#divTargetAdmissionYear_dropdown");
                    /* ==== */
                }

                // /* ==== */
                // /* Bind Current Admission Year */
                // var t_OptionTag = $(document.createElement("option"));
                // t_OptionTag.val(ObjResult.result[0].textFieldName);
                // t_OptionTag.text(ObjResult.result[0].textFieldName);
                // t_OptionTag.appendTo("#divTargetAdmissionYear_dropdown");
                // /* ==== */

            }
        }
    }
}
/* ==== */


/* ==== */
/* Bind the Source Admission Year */
StudentPromotion.Components.Pagination.SetSourceClassSection = function () {

    /* Read the Local Storage */
    var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
        StorageName: "DropdownClassSection_Cookies"
    });

    /* Read the Data From Cookies */
    if (ObjLocalStorageResponse.Status == "Success") {

        /* Set the Local Values */
        var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);
        if (ObjResult.result != null) {
            if (ObjResult.result.length > 0) {

                /* ==== */
                /* Bind No Promotion */
                var t_OptionTag = $(document.createElement("option"));
                t_OptionTag.val("0_0");
                t_OptionTag.text("No Promotion");
                t_OptionTag.appendTo("#divTargetClassSection_dropdown");
                /* ==== */

                /* Bind the Dropdown */
                for (var i = 0; i < ObjResult.result.length; i++) {

                    /* ==== */
                    /* Bind Next Admission Year */
                    var t_OptionTag = $(document.createElement("option"));
                    t_OptionTag.val(ObjResult.result[i].classSecId);
                    t_OptionTag.text(ObjResult.result[i].classSection);
                    t_OptionTag.appendTo("#divTargetClassSection_dropdown");
                    /* ==== */

                }

                /* Bind the Class & Section */
                StudentPromotion.Components.Pagination.TableBody(ObjResult.result);

            }
        }
    }

}
/* ==== */

/* ==== */
/* Student Record Delete */
StudentPromotion.Components.Pagination.MigrationRecord = function (RouteId) {

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

                    /* Migrate Now */
                    StudentPromotion.Components.Save();
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    /* Rollback the Current Action */
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */

/* ==== */
/* Calculate the Progress Calculation */
StudentPromotion.Components.Pagination.SetProgressCalculation = function () {
    /* ===== */
    /* Bind the Student List */
    StudentPromotion.Components.CompletedPercent = 0;
    StudentPromotion.Components.IsCanceled = false;
    StudentPromotion.Components.TotalRecords = 0;
    $(StudentPromotion.Components.Table.BodyId + " tr").each(function () {
        /* Current Row */
        var t_CurrentRow = $(this);
        var t_SourceClassSecId = t_CurrentRow.find("td:eq(0)").text().trim();
        var t_TargetClassSecId = t_CurrentRow.find("select").val();

        if (t_TargetClassSecId != "0_0") {
            StudentPromotion.Components.TotalRecords += 1;
        }
    });
    StudentPromotion.Components.RecordPercent = 0;
    if (StudentPromotion.Components.TotalRecords > 0) {
        StudentPromotion.Components.RecordPercent = (100 / StudentPromotion.Components.TotalRecords);
    }
    
}
/* ==== */