/* ==== */
/* Purchase Return Details Components Objects */
var PurchaseReturnDet = {};
PurchaseReturnDet.Components = {};
/* ==== */

/* ==== */
/* Purchase Return Details Components Initialize */
PurchaseReturnDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Purchase Return Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    PurchaseReturnDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    PurchaseReturnDet.Components.Ready();

    /* Get the Purchase Return Details */
    PurchaseReturnDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Purchase Return Details Components Ready */
PurchaseReturnDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    PurchaseReturnDet.Components.Cleaner();

    /* Add Event Listener */
    PurchaseReturnDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Purchase Return Details Components Clean Up */
PurchaseReturnDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    PurchaseReturnDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Purchase Return Details Components Add Event Listener */
PurchaseReturnDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    PurchaseReturnDet.Components.RemoveEventListener();

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
            PurchaseReturnDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        PurchaseReturnDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        PurchaseReturnDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = PurchaseReturnDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Purchase Return Details Details */
            DataControllers_PurchaseReturnDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = PurchaseReturnDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Purchase Return From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "PurchaseReturn_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = PurchaseReturnDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Purchase Return Details Details */
            DataControllers_PurchaseReturnDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = PurchaseReturnDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Purchase Return Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "PurchaseReturn_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Purchase Return Details Components Remove Active Event Listener */
PurchaseReturnDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
PurchaseReturnDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Purchase Return Details Data Processing PreLoader */
PurchaseReturnDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-PurchaseReturnDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Purchase Return Details Generate Download Data */
PurchaseReturnDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "PRN", "Date", "Supplier Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].GRNRetNo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].GRNRetDate));
        lstRows.push(Result[i].SupplierName);
        lstRows.push(Result[i].ContactNo);
        lstRows.push(Result[i].TotalQty);
        lstRows.push(parseFloat(Result[i].TotalWeight).toFixed(3));
        lstRows.push(parseFloat(Result[i].SubTotalAmount).toFixed(2));
        lstRows.push(parseFloat(Result[i].TotalTaxAmount).toFixed(2));
        lstRows.push(parseFloat(Result[i].GrandTotalAmount).toFixed(2));
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */