/* ==== */
/* User Details Components Objects */
var UserDet = {};
UserDet.Components = {};
/* ==== */

/* ==== */
/* User Details Components Initialize */
UserDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "User Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    UserDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    UserDet.Components.Ready();

    /* Get the User Details */
    UserDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* User Details Components Ready */
UserDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    UserDet.Components.Cleaner();

    /* Add Event Listener */
    UserDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* User Details Components Clean Up */
UserDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* User Details Components Add Event Listener */
UserDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    UserDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the User Details */
            UserDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the User Populate */
        UserDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });

    }
}
/* ==== */

/* ==== */
/* User Details Components Remove Active Event Listener */
UserDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* User Details Data Processing PreLoader */
UserDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Userdetails-Content", Status);
}
/* ==== */