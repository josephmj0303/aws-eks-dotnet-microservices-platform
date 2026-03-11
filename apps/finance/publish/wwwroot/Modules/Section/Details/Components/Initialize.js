/* ==== */
/* Section Details Components Objects */
var SectionDet = {};
SectionDet.Components = {};
/* ==== */

/* ==== */
/* Section Details Components Initialize */
SectionDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Group Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    SectionDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SectionDet.Components.Ready();

    /* Get the Section Details */
    SectionDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */

/* ==== */
/* Section Details Components Ready */
SectionDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    SectionDet.Components.Cleaner();

    /* Add Event Listener */
    SectionDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Section Details Components Clean Up */
SectionDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Section Details Components Add Event Listener */
SectionDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SectionDet.Components.RemoveEventListener();

    /* Search Click Event */
    $(".btnSearch").on('click', function () {

         /* Load the Section Details */
         SectionDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });

    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Section Populate */
        SectionDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });

    }
}
/* ==== */

/* ==== */
/* Section Details Components Remove Active Event Listener */
SectionDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".btnSearch").off("click");
}
/* ==== */

/* ==== */
/* Section Details Data Processing PreLoader */
SectionDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Sectiondetails-Content", Status);
}
/* ==== */