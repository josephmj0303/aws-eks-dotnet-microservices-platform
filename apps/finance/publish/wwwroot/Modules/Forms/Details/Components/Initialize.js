/* ==== */
/* Form Details Components Objects */
var FormDet = {};
FormDet.Components = {};
/* ==== */

/* ==== */
/* Form Details Components Initialize */
FormDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Forms Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    FormDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FormDet.Components.Ready();

    /* Get the Form Details */
    FormDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Form Details Components Ready */
FormDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    FormDet.Components.Cleaner();

    /* Add Event Listener */
    FormDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Form Details Components Clean Up */
FormDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Form Details Components Add Event Listener */
FormDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FormDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the Class Details */
            FormDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        FormDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }
}
/* ==== */

/* ==== */
/* Form Details Components Remove Active Event Listener */
FormDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Form Details Data Processing PreLoader */
FormDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-FormDetails-Content", Status);
}
/* ==== */