/* ==== */
/* User Roles Details Components Objects */
var UserRoleDet = {};
UserRoleDet.Components = {};
/* ==== */

/* ==== */
/* User Roles Details Components Initialize */
UserRoleDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "User Role Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    UserRoleDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    UserRoleDet.Components.Ready();

    /* Get the User Roles Details */
    UserRoleDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */

/* ==== */
/* User Roles Details Components Ready */
UserRoleDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    UserRoleDet.Components.Cleaner();

    /* Add Event Listener */
    UserRoleDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* User Roles Details Components Clean Up */
UserRoleDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* User Roles Details Components Add Event Listener */
UserRoleDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    UserRoleDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            UserRoleDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the User Roles Populate */
        UserRoleDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
        
    }
}
/* ==== */

/* ==== */
/* User Roles Details Components Remove Active Event Listener */
UserRoleDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* User Roles Details Data Processing PreLoader */
UserRoleDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-UserRoleDetails-Content", Status);
}
/* ==== */