/* ==== */
/* Product Details Components Objects */
var ProductDet = {};
ProductDet.Components = {};
/* ==== */

/* ==== */
/* Product Details Components Initialize */
ProductDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Products Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ProductDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ProductDet.Components.Ready();

    /* Get the Product Details */
    ProductDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Product Details Components Ready */
ProductDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ProductDet.Components.Cleaner();

    /* Add Event Listener */
    ProductDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Product Details Components Clean Up */
ProductDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* Product Details Components Add Event Listener */
ProductDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ProductDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Class Details */
            ProductDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        ProductDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }
}
/* ==== */

/* ==== */
/* Product Details Components Remove Active Event Listener */
ProductDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */

/* ==== */
/* Product Details Data Processing PreLoader */
ProductDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-ProductDetails-Content", Status);
}
/* ==== */