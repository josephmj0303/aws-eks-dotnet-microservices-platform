/* ==== */
/* Product Validation Components Objects */
Product.Components.Validation = {};
/* ==== */

/* ==== */
/* Product Components Validation */
Product.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* Product Components Validation Status */
Product.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    try {

        if (Params.ProductCode == "") {
            /* ==== */
            /* Message Box */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Required",
                Message: "Product Code is Required"
            });
            /* ==== */

            t_Boolean = false;
        }
        else if (Params.ProductName == "") {

            /* ==== */
            /* Message Box */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Required",
                Message: "Product Name is Required"
            });
            /* ==== */

            t_Boolean = false;
        }
    }
    catch (e) {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Error",
            Message: e.message
        });
        /* ==== */

        t_Boolean = false;
    }
    return t_Boolean;
}
/* ==== */