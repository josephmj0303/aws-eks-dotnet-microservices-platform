/* ==== */
/* Customer Details Components Objects */
var CustomerDet = {};
CustomerDet.Components = {};
/* ==== */

/* ==== */
/* Customer Details Components Initialize */
CustomerDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Party Ledger", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    CustomerDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    CustomerDet.Components.Ready();

    /* Get the Customer Details */
    CustomerDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Customer Details Components Ready */
CustomerDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    CustomerDet.Components.Cleaner();

    /* Add Event Listener */
    CustomerDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Customer Details Components Clean Up */
CustomerDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Customer Details Components Add Event Listener */
CustomerDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    CustomerDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Class Details */
            CustomerDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        CustomerDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }
}
/* ==== */

/* ==== */
/* Customer Details Components Remove Active Event Listener */
CustomerDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Customer Details Data Processing PreLoader */
CustomerDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-CustomerDetails-Content", Status);
}
/* ==== */