/* ==== */
/* Section Components Objects */
var Section = {};
Section.Components = {};
/* ==== */

/* ==== */
/* Section Components Initialize */
Section.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Group Details", Action: "#SectionDetails" }, { Title: $("#hdnSecId").val() == "0" ? "Add New" : "Edit Group", Action: "#", Active: true }]);

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divClass", AddFlag: true, EditFlag: true, AllFlag: false });

    /* Once Init the Components Validation */
    Section.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Section.Components.Ready();
}
/* ==== */

/* ==== */
/* Section Components Ready */
Section.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Section.Components.Cleaner();

    /* Add Event Listener */
    Section.Components.AddEventListener();

    /* Load the Details */
    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });

    /* Populate the Data */
    Section.Components.Populate($("#hdnSecId").val());
    
}
/* ==== */

/* ==== */
/* Section Components Clean Up */
Section.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        ClassId: 0,
        Section: "",
        SeqNo: 0,
        IsActive: true
    }
    Section.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Section Components Add Event Listener */
Section.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Section.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").click(function () {
        Section.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        Section.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $("#txtSectionCode").on('input', function () {
        Section.Components.PreviewSectionCode(this.value);
    });
    /* ==== */

    /* ==== */
    /* Class Entry Screen */
    $("#divClass_AddIcons").click(function () {
        GeneralFunction.SetRouting("AddClass", 0);
    });
    $("#divClass_EditIcons").click(function () {
      var ClassId =  Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;
      GeneralFunction.SetRouting("EditClass", ClassId);
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Section Components Remove Active Event Listener */
Section.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Section Button Processing Icon */
Section.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Preview the Section Code */
Section.Components.PreviewSectionCode = function (SectionCode) {
    $(".divTestSectionPanel").css("margin-top", "14px");
    $(".divTestSectionPanel").css("background-color", SectionCode);
    $(".divTestSectionPanel").css("height", "50px");
    $(".divTestSectionPanel").css("width", "50px");
}
/* ==== */