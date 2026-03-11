/* ==== */
/* RepairInward Validation Components Objects */
RepairInward.Components.Validation = {};
/* ==== */

/* ==== */
/* RepairInward Components Validation */
RepairInward.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */

}
/* ==== */

/* ==== */
/* RepairInward Components Validation Status */
RepairInward.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    switch (Params.FormName) {
        case "RepairInward":

            if (typeof Params.Data !== "undefined") {

                if (Params.Data.RSIDate == "") {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Date is Required"
                    });
                    t_Boolean = false;
                    /* ==== */
                }
                else if (Params.Data.SupplierName == "") {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Supplier Name is Required"
                    });
                    t_Boolean = false;
                    /* ==== */
                }
                else if (Params.Data.ContactNo === "" || Params.Data.ContactNo.length < 10 || !/^\d{10}$/.test(Params.Data.ContactNo)) {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Contact No is Required"
                    });
                    t_Boolean = false;
                    /* ==== */
                }
                else {

                    /* Check Product Details */
                    var t_ValidRows = 0;
                    var t_InValidRows = 0;
                    if (typeof Params.Data.ProductDetails !== "undefined") {
                        if (Params.Data.ProductDetails.length >= 0) {
                            for (var i = 0; i < Params.Data.ProductDetails.length; i++) {

                                var t_ProductCode = Params.Data.ProductDetails[i].ProductCode || "";
                                var t_ProductName = Params.Data.ProductDetails[i].ProductName || "";
                                var t_Rate = parseFloat(Params.Data.ProductDetails[i].Rate) || 0;
                                var t_Qty = parseFloat(Params.Data.ProductDetails[i].Qty) || 0;
                                var t_Weight = parseFloat(Params.Data.ProductDetails[i].SIWight) || 0;

                                if (t_ProductCode == "" || t_ProductName == "" || t_Qty <= 0 || t_Weight <= 0) {
                                    t_InValidRows += 1;
                                    $("#" + Params.Data.ProductDetails[i].RowIndex).addClass("alert alert-danger");
                                }
                                else {
                                    t_ValidRows += 1;
                                    $("#" + Params.Data.ProductDetails[i].RowIndex).removeClass("alert alert-danger");
                                }
                            }
                            if (t_ValidRows == 0) {

                                /* ==== */
                                /* Message Box */
                                GeneralFunction.Message({
                                    Status: "Failure",
                                    Title: "Required",
                                    Message: "Product is Required"
                                });
                                /* ==== */

                                t_Boolean = false;
                            }
                            else if (t_InValidRows > 0) {

                                /* ==== */
                                /* Message Box */
                                GeneralFunction.Message({
                                    Status: "Failure",
                                    Title: "Required",
                                    Message: "Kindly Complete All Product Details or Delete the row."
                                });
                                /* ==== */

                                t_Boolean = false;
                            }
                        }
                        else {
                            /* ==== */
                            /* Message Box */
                            GeneralFunction.Message({
                                Status: "Failure",
                                Title: "Required",
                                Message: "Product is Required"
                            });
                            /* ==== */
                            t_Boolean = false;
                        }
                    }
                }
            }

        case "Supplier":
            if (typeof Params.Data !== "undefined") {
                if (Params.Data.CustomerName == "") {
                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Customer Name is Required"
                    });
                    t_Boolean = false;
                    /* ==== */
                }
                else if (Params.Data.ContactNo == "") {
                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Contact No is Required"
                    });
                    t_Boolean = false;
                    /* ==== */
                }
            }
            break;
    }
    return t_Boolean;
}
/* ==== */