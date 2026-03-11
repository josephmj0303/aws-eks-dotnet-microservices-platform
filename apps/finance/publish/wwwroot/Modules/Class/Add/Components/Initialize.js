/* ==== */
/* Class Components Objects */
var Class = {};
Class.Components = {};
/* ==== */

/* ==== */
/* Class Components Initialize */
Class.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Team Details", Action: "#ClassDetails" }, { Title: $("#hdnClassId").val() == "0" ? "Add New" : "Edit Team", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Class.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Class.Components.Ready();
}
/* ==== */

/* ==== */
/* Class Components Ready */
Class.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Class.Components.Cleaner();

    /* Add Event Listener */
    Class.Components.AddEventListener();

    /* Populate the Data */
    Class.Components.Populate($("#hdnClassId").val());
}
/* ==== */

/* ==== */
/* Class Components Clean Up */
Class.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        ClassName: "",
        SeqNo: 0,
        IsActive: true
    }
    Class.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Class Components Add Event Listener */
Class.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Class.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        Class.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Class.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Class Components Remove Active Event Listener */
Class.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Class Button Processing Icon */
Class.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */