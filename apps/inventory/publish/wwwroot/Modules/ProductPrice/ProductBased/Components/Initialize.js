/* ==== */
/* Stock Details Components Objects */
var ProductPrice = {};
ProductPrice.Components = {};
/* ==== */

/* ==== */
/* Stock Details Components Initialize */
ProductPrice.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Product Price", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ProductPrice.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ProductPrice.Components.Ready();

    /* Get the Stock Details */
    ProductPrice.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Stock Details Components Ready */
ProductPrice.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ProductPrice.Components.Cleaner();

    /* Add Event Listener */
    ProductPrice.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Stock Details Components Clean Up */
ProductPrice.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    ProductPrice.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Stock Details Components Add Event Listener */
ProductPrice.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ProductPrice.Components.RemoveEventListener();

    /* ==== */
    /* DateTime Picker */
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'dd-M-yyyy',
        defaultDate: new Date()
    });
    /* ==== */

    /*  Search Click Event */
    $(".Search-Keyword-Input").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Class Details */
            ProductPrice.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        ProductPrice.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        ProductPrice.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

}
/* ==== */

/* ==== */
/* Stock Details Components Remove Active Event Listener */
ProductPrice.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
ProductPrice.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Stock Details Data Processing PreLoader */
ProductPrice.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-ProductPriceDetails-Content", Status);
}
/* ==== */
