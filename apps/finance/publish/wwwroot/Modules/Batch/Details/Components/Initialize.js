/* ==== */
/* Batch Details Components Objects */
var BatchDet = {};
BatchDet.Components = {};
/* ==== */

/* ==== */
/* Batch Details Components Initialize */
BatchDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Batch Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    BatchDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    BatchDet.Components.Ready();

    /* Get the Batch Details */
    BatchDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Batch Details Components Ready */
BatchDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    BatchDet.Components.Cleaner();

    /* Add Event Listener */
    BatchDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Batch Details Components Clean Up */
BatchDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Batch Details Components Add Event Listener */
BatchDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    BatchDet.Components.RemoveEventListener();

    /* Search Click Event */
    $(".btnSearch").on('click', function () {

        /* Load the Batch Details */
        BatchDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });

    });


    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        BatchDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }
}
/* ==== */

/* ==== */
/* Batch Details Components Remove Active Event Listener */
BatchDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".btnSearch").off("click");
}
/* ==== */

/* ==== */
/* Batch Details Data Processing PreLoader */
BatchDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-batchdetails-Content", Status);
}
/* ==== */