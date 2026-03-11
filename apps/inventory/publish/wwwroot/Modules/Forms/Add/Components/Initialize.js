/* ==== */
/* Form Components Objects */
var Form = {};
Form.Components = {};
/* ==== */

/* ==== */
/* Form Components Initialize */
Form.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Forms Details", Action: "#FormDetails" }, { Title: $("#hdnFormId").val() == "0" ? "Add New" : "Edit Forms", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Form.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Form.Components.Ready();
}
/* ==== */

/* ==== */
/* Form Components Ready */
Form.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Form.Components.Cleaner();

    /* Add Event Listener */
    Form.Components.AddEventListener();

    /* Populate the Data */
    Form.Components.Populate($("#hdnFormId").val());
}
/* ==== */

/* ==== */
/* Form Components Clean Up */
Form.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        FormName: ""
    }
    Form.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Form Components Add Event Listener */
Form.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Form.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        Form.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Form.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Form Components Remove Active Event Listener */
Form.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Form Button Processing Icon */
Form.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */