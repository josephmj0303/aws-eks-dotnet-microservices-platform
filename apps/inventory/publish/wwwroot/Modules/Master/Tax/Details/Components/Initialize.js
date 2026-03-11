/* ==== */
/* Product Details Components Objects */
var TaxDet = {};
TaxDet.Components = {};
/* ==== */

/* ==== */
/* Product Details Components Initialize */
TaxDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Tax Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    TaxDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    TaxDet.Components.Ready();

    /* Get the Product Details */
    TaxDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Product Details Components Ready */
TaxDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    TaxDet.Components.Cleaner();

    /* Add Event Listener */
    TaxDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Product Details Components Clean Up */
TaxDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Product Details Components Add Event Listener */
TaxDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    TaxDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Class Details */
            TaxDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        TaxDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* ==== */
    /* Dropdown Change Event */
    Dropdown.SetChangeEvent({ TargetId: ".divTaxFor", Enable: true });
    Dropdown.OnChanged = function (Params) {

        /* ==== */
        /* Dropdown Changed Target Id */
        switch (Params.TargetId) {

            case "divTaxFor":
                /* Get the User Rights Details */
                TaxDet.Components.Populate({
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
/* Product Details Components Remove Active Event Listener */
TaxDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Product Details Data Processing PreLoader */
TaxDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-TaxDetails-Content", Status);
}
/* ==== */