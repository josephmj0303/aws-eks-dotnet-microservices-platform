/* ==== */
/* Organization Components Objects */
var Organization = {};
Organization.Components = {};
/* ==== */

/* ==== */
/* Organization Components Initialize */
Organization.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Company Details", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Organization.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Organization.Components.Ready();
}
/* ==== */

/* ==== */
/* Organization Components Ready */
Organization.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Organization.Components.Cleaner();

    /* Add Event Listener */
    Organization.Components.AddEventListener();

    /* Populate the Data */
    Organization.Components.Populate($("#hdnOrgId").val());
}
/* ==== */

/* ==== */
/* Organization Components Clean Up */
Organization.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        OrganizationName: "",
        Phone: "",
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
        City: "",
        State: "",
        PINCode: "",
    }



    Organization.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Organization Components Add Event Listener */
Organization.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Organization.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").click(function () {
        Organization.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        Organization.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Organization Components Remove Active Event Listener */
Organization.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Organization Button Processing Icon */
Organization.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */