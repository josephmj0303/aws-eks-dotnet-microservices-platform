/* ==== */
/* Student Migration Components Objects */
var StudentMigration = {};
StudentMigration.Components = {};
/* ==== */

/* ==== */
/* Student Migration Components Initialize */
StudentMigration.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Migration", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StudentMigration.Components.Pagination.Initialize();

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divSourceAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divSourceClassSection", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divTargetAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divTargetClassSection", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Init the Components Validation */
    StudentMigration.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    StudentMigration.Components.Ready();

}
/* ==== */

/* ==== */
/* Student Migration Components Ready */
StudentMigration.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    StudentMigration.Components.Cleaner();

    /* Add Event Listener */
    StudentMigration.Components.AddEventListener();

    /* Load the Dropdown Details */
    StudentMigration.Components.Pagination.SetSourceAdmissionYear();
    Dropdown.SetChangeEvent({ TargetId: ".divSourceAdmissionYear", Enable: true });

    StudentMigration.Components.Pagination.SetTargetAdmissionYear();
    Dropdown.SetChangeEvent({ TargetId: ".divTargetAdmissionYear", Enable: true });

    Dropdown.ClassSection.LoadData({ TargetId: ".divSourceClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divSourceClassSection", Enable: true });

    Dropdown.ClassSection.LoadData({ TargetId: ".divTargetClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divTargetClassSection", Enable: true });

    StudentMigration.Components.LastAdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divSourceAdmissionYear" }).Value;
    StudentMigration.Components.LastClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSourceClassSection" }).Value;

}
/* ==== */

/* ==== */
/* Student Migration Components Clean Up */
StudentMigration.Components.Cleaner = function () {

    /* Set the Default Values */

}
/* ==== */

/* ==== */
/* Student Migration Components Add Event Listener */
StudentMigration.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentMigration.Components.RemoveEventListener();

    Dropdown.OnChanged = function (Params) {

        /* Element Based Event Listener */
        switch (Params.TargetId) {
            case "divSourceAdmissionYear":
                /* Load the Source Student Details */
                StudentMigration.Components.LastAdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divSourceAdmissionYear" }).Value;
                StudentMigration.Components.LastClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSourceClassSection" }).Value;
                StudentMigration.Components.PopulateSource({
                    Reset: true,
                    ResetPagination: true
                });
                break;
            case "divSourceClassSection":
                /* Load the Source Student Details */
                StudentMigration.Components.LastAdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divSourceAdmissionYear" }).Value;
                StudentMigration.Components.LastClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSourceClassSection" }).Value;
                StudentMigration.Components.PopulateSource({
                    Reset: true,
                    ResetPagination: true
                });
                break;
            case "divTargetAdmissionYear":
                /* Load the Source Student Details */
                if ($("#tbdTargetStudentList tr").length == 0) {
                    /* Set Last Admission Year & Class SecId */
                    StudentMigration.Components.PopulateDestination({
                        Reset: true,
                        ResetPagination: true
                    });
                }
                else {
                    StudentMigration.Components.Pagination.DeleteRecord();
                }
                break;
            case "divTargetClassSection":
                /* Load the Source Student Details */
                if ($("#tbdTargetStudentList tr").length == 0) {
                    /* Set Last Admission Year & Class SecId */
                    StudentMigration.Components.PopulateDestination({
                        Reset: true,
                        ResetPagination: true
                    });
                }
                else {
                    StudentMigration.Components.Pagination.DeleteRecord();
                }
                break;
        }
    }


    /* ==== */
    /* Select All For Source Table */
    $("#Source_SelectAll").on("click", function () {
        $("#tbdSourceStudentList .StudentCheckbox").prop("checked", $('#Source_SelectAll').prop('checked'));
    });
    /* ==== */

    /* ==== */
    /* Select All For Source Table */
    $("#Target_SelectAll").on("click", function () {
        $("#tbdTargetStudentList .StudentCheckbox").prop("checked", $('#Target_SelectAll').prop('checked'));
    });
    /* ==== */

    /* ==== */
    /* Move Selected Student to Right */
    $(".btn-MoveRight").on("click", function () {
        /* Move the Student to Right Hand Side */
        if (StudentMigration.Components.Validation.Status({ Form: "MoveRight" })) {
            StudentMigration.Components.Pagination.MoveRight();
        }
    });
    /* ==== */

    /* ==== */
    /* Move Selected Student to Left */
    $(".btn-MoveLeft").on("click", function () {
        /* Move the Student to Left Hand Side */
        if (StudentMigration.Components.Validation.Status({ Form: "MoveLeft" })) {
            StudentMigration.Components.Pagination.MoveLeft();
        }
    });
    /* ==== */

    /* ==== */
    /* Migrate Selected Student */
    $(".MigrateProgressBar").hide();
    $(".btn-Migrate").on("click", function () {
        if (StudentMigration.Components.Validation.Status({ Form: "Migration" })) {
            StudentMigration.Components.Pagination.MigrationRecord();
        }
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Student Migration Components Remove Active Event Listener */
StudentMigration.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Dropdown.SetChangeEvent({ TargetId: ".divSourceAdmissionYear", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divSourceClassSection", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divTargetAdmissionYear", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divTargetClassSection", Enable: false });

    /* Event Kill */
    $("#Source_SelectAll").off("click");
    $("#Target_SelectAll").off("click");
    $(".btn-MoveRight").off("click");
    $(".btn-MoveLeft").off("click");
    $(".btn-MoveLeft").off("click");
    $(".btn-Migrate").off("click");

}
/* ==== */

/* ==== */
/* Student Migration Button Processing Icon */
StudentMigration.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Migrate", Status, "Processing...", false);
    if (Status) $(".MigrateProgressBar").show();
    if (!Status) $(".MigrateProgressBar").hide();
}
/* ==== */

/* ==== */
/* Preview the Student Migration Code */
StudentMigration.Components.PreviewStudentMigrationCode = function (StudentMigrationCode) {
    $(".divTestStudentMigrationPanel").css("margin-top", "14px");
    $(".divTestStudentMigrationPanel").css("background-color", StudentMigrationCode);
    $(".divTestStudentMigrationPanel").css("height", "50px");
    $(".divTestStudentMigrationPanel").css("width", "50px");
}
/* ==== */

/* ==== */
/* Student Migration  Icon */
StudentMigration.Components.SetProgressPercent = function (Percent) {

    /* Declearaction */
    $(".progresspercent").attr("data-percent", Percent);
    $(".progresswidth").css("width", Percent);
}
/* ==== */