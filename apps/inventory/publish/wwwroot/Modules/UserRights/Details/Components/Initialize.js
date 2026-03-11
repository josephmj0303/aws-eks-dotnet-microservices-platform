/* ==== */
/* User Rights Details Components Objects */
var UserRights = {};
UserRights.Components = {};
/* ==== */

/* ==== */
/* User Rights Details Components Initialize */
UserRights.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "User Rights Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    UserRights.Components.Pagination.Initialize();

    /* Init the User Roles Dropdown */
    Dropdown.Init({ TargetId: ".divUserRoles", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Initialize Completed then Goto Ready State */
    UserRights.Components.Ready();
}
/* ==== */

/* ==== */
/* User Rights Details Components Ready */
UserRights.Components.Ready = function () {

    /* Initialize the User Rights */
    //if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values */
    UserRights.Components.Cleaner();

    /* Add Event Listener */
    UserRights.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.UserRoles.LoadData({ TargetId: ".divUserRoles", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divUserRoles", Enable: true });

    /* Call the User Roles Populate */
    UserRights.Components.Populate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */


/* ==== */
/* User Rights Details Components Clean Up */
UserRights.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* User Rights Details Components Add Event Listener */
UserRights.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    UserRights.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").on("keydown",function (event) {
        if (event.key == 'Enter') {

            /* Load the User Roles Details */
            UserRights.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the User Roles Populate */
        UserRights.Components.Populate({
            Reset: true,
            ResetPagination: false
        });

    }

    /* Click to Save */
    $(".btn-SaveRights").on("click", function () {
        UserRights.Components.Save();
    });


    /* ==== */
    /* Dropdown Change Event */
    Dropdown.OnChanged = function (Params) {

        /* ==== */
        /* Dropdown Changed Target Id */
        switch (Params.TargetId) {

            case "divUserRoles":
                /* Get the User Rights Details */
                UserRights.Components.Populate({
                    Reset: true,
                    ResetPagination: true
                });
                break;
        }
    }
    /* ==== */
}
/* ==== */

/* ==== */
/* User Rights Details Components Remove Active Event Listener */
UserRights.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $(".btn-SaveRights").off("keydown");
    Dropdown.SetChangeEvent({ TargetId: ".divUserRoles", Enable: false });
}
/* ==== */

/* ==== */
/* User Rights Details Data Processing PreLoader */
UserRights.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-UserRightsdetails-Content", Status);
}
/* ==== */


/* ==== */
/* User Rights Details Save Button Processing Icon */
UserRights.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-SaveRights", Status, "Processing...", false);
}
/* ==== */
