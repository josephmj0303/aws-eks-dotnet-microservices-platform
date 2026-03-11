/* ==== */
/* Stock Details Components Objects */
var StockDet = {};
StockDet.Components = {};
/* ==== */

/* ==== */
/* Stock Details Components Initialize */
StockDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Stock Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StockDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    StockDet.Components.Ready();

    /* Get the Stock Details */
    StockDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Stock Details Components Ready */
StockDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    StockDet.Components.Cleaner();

    /* Add Event Listener */
    StockDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Stock Details Components Clean Up */
StockDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    StockDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Stock Details Components Add Event Listener */
StockDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StockDet.Components.RemoveEventListener();

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
            StockDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        StockDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        StockDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = StockDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Stock Details Details */
            DataControllers_StockDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = StockDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Invoice Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "Invoice_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = StockDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Stock Details Details */
            DataControllers_StockDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = StockDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Stock Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "Invoice_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Stock Details Components Remove Active Event Listener */
StockDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
StockDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Stock Details Data Processing PreLoader */
StockDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-StockDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Stock Details Generate Download Data */
StockDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "Product Code", "Product Name", "Purchase Weight", "Invoice Weight", "Available Weight", "Purchase Qty", "Invoice Qty", "Available Qty"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].ProductCode);
        lstRows.push(Result[i].ProductName);
        lstRows.push(parseFloat(Result[i].PurchasedWeight).toFixed(3));
        lstRows.push(parseFloat(Result[i].SoldWeight).toFixed(3));
        lstRows.push(parseFloat(Result[i].CurrentStockWeight).toFixed(3));
        lstRows.push(parseFloat(Result[i].PurchasedQty).toFixed(0));
        lstRows.push(parseFloat(Result[i].SoldQty).toFixed(0));
        lstRows.push(parseFloat(Result[i].CurrentStockQty).toFixed(0));
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */