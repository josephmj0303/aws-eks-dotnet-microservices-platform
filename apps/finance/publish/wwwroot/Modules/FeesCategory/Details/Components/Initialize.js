/* ==== */
/* Fees Category Details Components Objects */
var FeesCategoryDet = {};
FeesCategoryDet.Components = {};
/* ==== */

/* ==== */
/* Fees Category Details Components Initialize */
FeesCategoryDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Scheme Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    FeesCategoryDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesCategoryDet.Components.Ready();

    /* Get the FeesCategory Details */
    FeesCategoryDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Fees Category Details Components Ready */
FeesCategoryDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    FeesCategoryDet.Components.Cleaner();

    /* Add Event Listener */
    FeesCategoryDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Fees Category Details Components Clean Up */
FeesCategoryDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Fees Category Details Components Add Event Listener */
FeesCategoryDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesCategoryDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            FeesCategoryDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        FeesCategoryDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }
}
/* ==== */

/* ==== */
/* Fees Category Details Components Remove Active Event Listener */
FeesCategoryDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Fees Category Details Data Processing PreLoader */
FeesCategoryDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-FeesCategoryDetails-Content", Status);
}
/* ==== */