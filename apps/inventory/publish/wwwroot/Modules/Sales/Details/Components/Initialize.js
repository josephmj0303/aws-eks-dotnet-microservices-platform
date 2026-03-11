/* ==== */
/* Sales Details Components Objects */
var SalesDet = {};
SalesDet.Components = {};
/* ==== */

/* ==== */
/* Sales Details Components Initialize */
SalesDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Sales Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    SalesDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesDet.Components.Ready();

    /* Get the Sales Details */
    SalesDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Sales Details Components Ready */
SalesDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesDet.Components.Cleaner();

    /* Add Event Listener */
    SalesDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Sales Details Components Clean Up */
SalesDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    SalesDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Sales Details Components Add Event Listener */
SalesDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesDet.Components.RemoveEventListener();

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
            SalesDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        SalesDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        SalesDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Sales Details Details */
            DataControllers_SalesDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesDet.Components.GenerateData(Response)

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
        var t_FilterCondition = SalesDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the Sales Details Details */
            DataControllers_SalesDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Invoice Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
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
/* Sales Details Components Remove Active Event Listener */
SalesDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $(".btn-Search").on("click");
    $("#btnExcelDownload").on("click");
    $("#btnPdfDownload").on("click");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
SalesDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Sales Details Data Processing PreLoader */
SalesDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-SalesDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Sales Details Generate Download Data */
SalesDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "Inv No", "Inv Date", "Buyer Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].BillNo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].BillDate));
        lstRows.push(Result[i].CustomerName);
        lstRows.push(Result[i].ContactNo);
        lstRows.push(Result[i].TotalQty);
        lstRows.push(parseFloat(Result[i].TotalWeight).toFixed(3));
        lstRows.push(parseFloat(Result[i].SubTotal).toFixed(2));
        lstRows.push(parseFloat(Result[i].TaxAmount).toFixed(2));
        lstRows.push(parseFloat(Result[i].TotalAmount).toFixed(2));
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */