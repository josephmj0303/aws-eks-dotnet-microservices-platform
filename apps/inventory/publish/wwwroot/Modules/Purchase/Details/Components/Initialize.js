/* ==== */
/* Purchase Details Components Objects */
var PurchaseDet = {};
PurchaseDet.Components = {};
/* ==== */

/* ==== */
/* Purchase Details Components Initialize */
PurchaseDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Purchase Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    PurchaseDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    PurchaseDet.Components.Ready();

    /* Get the Purchase Details */
    PurchaseDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Purchase Details Components Ready */
PurchaseDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    PurchaseDet.Components.Cleaner();

    /* Add Event Listener */
    PurchaseDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Purchase Details Components Clean Up */
PurchaseDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    PurchaseDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Purchase Details Components Add Event Listener */
PurchaseDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    PurchaseDet.Components.RemoveEventListener();

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
            PurchaseDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        PurchaseDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        PurchaseDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = PurchaseDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Purchase Details Details */
            DataControllers_PurchaseDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = PurchaseDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Purchase Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "Purchase_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {
    

        /* Bind the Excel Header Information */
        var t_FilterCondition = PurchaseDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Purchase Details Details */
            DataControllers_PurchaseDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = PurchaseDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Purchase Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "Purchase_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Purchase Details Components Remove Active Event Listener */
PurchaseDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $(".btn-Search").on("click");
    $("#btnExcelDownload").on("click");
    $("#btnPdfDownload").on("click");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
PurchaseDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Purchase Details Data Processing PreLoader */
PurchaseDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-PurchaseDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Purchase Details Generate Download Data */
PurchaseDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "GRN", "Date", "Supplier Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].GRNNo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].GRNDate));
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