/* ==== */
/* Section Details Components Objects */
var StudentPromotion = {};
StudentPromotion.Components = {};
/* ==== */

/* ==== */
/* Section Details Components Initialize */
StudentPromotion.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Promotion", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StudentPromotion.Components.Pagination.Initialize();

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divSourceAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divTargetAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divTargetClassSection", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Init the Components Validation */
    StudentPromotion.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    StudentPromotion.Components.Ready();

}
/* ==== */

/* ==== */
/* Section Details Components Ready */
StudentPromotion.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    StudentPromotion.Components.Cleaner();

    /* Add Event Listener */
    StudentPromotion.Components.AddEventListener();

    /* Load the Dropdown Details */
    StudentPromotion.Components.Pagination.SetSourceAdmissionYear();
    StudentPromotion.Components.Pagination.SetTargetAdmissionYear();
    StudentPromotion.Components.Pagination.SetSourceClassSection();

}
/* ==== */


/* ==== */
/* Section Details Components Clean Up */
StudentPromotion.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Section Details Components Add Event Listener */
StudentPromotion.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentPromotion.Components.RemoveEventListener();

    /* ==== */
    /* Migrate Selected Student */
    $(".MigrateProgressBar").hide();
    $(".btn-Migrate").click(function () {
        if (StudentPromotion.Components.Validation.Status({ Form: "Migration" })) {
            StudentPromotion.Components.Pagination.MigrationRecord();
        }
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Section Details Components Remove Active Event Listener */
StudentPromotion.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".btn-Migrate").off("click");
}
/* ==== */

/* ==== */
/* StudentMigration Button Processing Icon */
StudentPromotion.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Migrate", Status, "Processing...", false);
    if (Status) $(".MigrateProgressBar").show();
    if (!Status) $(".MigrateProgressBar").hide();

    if (Status) {
        $(".Status").show();
    }
    else {
        $(".Status").html("");
        $(".Status").hide();
    }

}
/* ==== */


/* ==== */
/* StudentMigration  Icon */
StudentPromotion.Components.SetProgressPercent = function (Percent) {

    /* Declearaction */
    $(".progresspercent").attr("data-percent", Percent);
    $(".progresswidth").css("width", Percent);
}
/* ==== */