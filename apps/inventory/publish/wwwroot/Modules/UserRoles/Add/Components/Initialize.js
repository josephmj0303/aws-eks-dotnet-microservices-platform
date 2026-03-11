/* ==== */
/* UserRole Components Objects */
var UserRole = {};
UserRole.Components = {};
/* ==== */

/* ==== */
/* UserRole Components Initialize */
UserRole.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "User Role Details", Action: "#UserRoleDetails" }, { Title: $("#hdnUserRoleId").val() == "0" ? "Add New" : "Edit Role", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    UserRole.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    UserRole.Components.Ready();
}
/* ==== */

/* ==== */
/* UserRole Components Ready */
UserRole.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    UserRole.Components.Cleaner();

    /* Add Event Listener */
    UserRole.Components.AddEventListener();

    /* Populate the Data */
    UserRole.Components.Populate($("#hdnUserRoleId").val());
}
/* ==== */

/* ==== */
/* UserRole Components Clean Up */
UserRole.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        UserRoleName: ""
    }
    UserRole.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* UserRole Components Add Event Listener */
UserRole.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    UserRole.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click" , function () {
        UserRole.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        UserRole.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* UserRole Components Remove Active Event Listener */
UserRole.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* UserRole Button Processing Icon */
UserRole.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */