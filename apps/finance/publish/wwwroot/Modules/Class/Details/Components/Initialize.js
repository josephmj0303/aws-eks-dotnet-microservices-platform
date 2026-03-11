/* ==== */
/* Class Details Components Objects */
var ClassDet = {};
ClassDet.Components = {};
/* ==== */

/* ==== */
/* Class Details Components Initialize */
ClassDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Team Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ClassDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ClassDet.Components.Ready();

    /* Get the Class Details */
    ClassDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Class Details Components Ready */
ClassDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    ClassDet.Components.Cleaner();

    /* Add Event Listener */
    ClassDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Class Details Components Clean Up */
ClassDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Class Details Components Add Event Listener */
ClassDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ClassDet.Components.RemoveEventListener();

    /* Search Click Event */
    $(".btnSearch").on('click', function () {

        /* Load the Class Details */
        ClassDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });

    });


    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        ClassDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }
}
/* ==== */

/* ==== */
/* Class Details Components Remove Active Event Listener */
ClassDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".btnSearch").off("click");
}
/* ==== */

/* ==== */
/* Class Details Data Processing PreLoader */
ClassDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-ClassDetails-Content", Status);
}
/* ==== */