/* ==== */
/* Sales Return Details Components Objects */
var SalesReturnDet = {};
SalesReturnDet.Components = {};
/* ==== */

/* ==== */
/* Sales Return Details Components Initialize */
SalesReturnDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Sales Return Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    SalesReturnDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesReturnDet.Components.Ready();

    /* Get the SalesReturn Details */
    SalesReturnDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Sales Return Details Components Ready */
SalesReturnDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesReturnDet.Components.Cleaner();

    /* Add Event Listener */
    SalesReturnDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Sales Return Details Components Clean Up */
SalesReturnDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    SalesReturnDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Sales Return Details Components Add Event Listener */
SalesReturnDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesReturnDet.Components.RemoveEventListener();

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
            SalesReturnDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        SalesReturnDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        SalesReturnDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesReturnDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesReturn Details Details */
            DataControllers_SalesReturnDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesReturnDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Invoice Return Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "InvoiceReturn_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesReturnDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesReturn Details Details */
            DataControllers_SalesReturnDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesReturnDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Invoice Return Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "InvoiceReturn_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Sales Return Details Components Remove Active Event Listener */
SalesReturnDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
SalesReturnDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Sales Return Details Data Processing PreLoader */
SalesReturnDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-SalesReturnDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Sales Return Details Generate Download Data */
SalesReturnDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "SRN", "Date", "Buyer Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].InvRetNo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].InvRetDate));
        lstRows.push(Result[i].CustomerName);
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