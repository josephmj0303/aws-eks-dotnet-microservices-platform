/* ==== */
/* User Components Objects */
var User = {};
User.Components = {};
/* ==== */

/* ==== */
/* User Components Initialize */
User.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "User Details", Action: "#UserDetails" }, { Title: $("#hdnUserId").val() == "0" ? "Add New" : "Edit User", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    User.Components.Validation.Initialize();

    /* Init the User Roles Dropdown */
    Dropdown.Init({ TargetId: ".divUserRoles", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Initialize Completed then Goto Ready State */
    User.Components.Ready();
}
/* ==== */

/* ==== */
/* User Components Ready */
User.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    User.Components.Cleaner();

    /* Add Event Listener */
    User.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.UserRoles.LoadData({ TargetId: ".divUserRoles", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });

    /* Populate the Data */
    User.Components.Populate($("#hdnUserId").val());
}
/* ==== */

/* ==== */
/* User Components Clean Up */
User.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        FirstName: "",
        LastName: "",
        Mobile: "",
        Email: "",
        Password: "",
        UserType: ""
    }
    User.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* User Components Add Event Listener */
User.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    User.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        User.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        User.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* User Components Remove Active Event Listener */
User.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* User Button Processing Icon */
User.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */