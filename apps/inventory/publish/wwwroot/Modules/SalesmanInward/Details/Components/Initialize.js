/* ==== */
/* Salesman Inward Details Components Objects */
var SalesmanInwardDet = {};
SalesmanInwardDet.Components = {};
/* ==== */

/* ==== */
/* Salesman Inward Details Components Initialize */
SalesmanInwardDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Salesman Return Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    SalesmanInwardDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesmanInwardDet.Components.Ready();

    /* Get the SalesmanInward Details */
    SalesmanInwardDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Salesman Inward Details Components Ready */
SalesmanInwardDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanInwardDet.Components.Cleaner();

    /* Add Event Listener */
    SalesmanInwardDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Salesman Inward Details Components Clean Up */
SalesmanInwardDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    SalesmanInwardDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Salesman Inward Details Components Add Event Listener */
SalesmanInwardDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanInwardDet.Components.RemoveEventListener();

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
            SalesmanInwardDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        SalesmanInwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        SalesmanInwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesmanInwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesmanInward Details Details */
            DataControllers_SalesmanInwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesmanInwardDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Service Inward From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "ServiceInward_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesmanInwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesmanInward Details Details */
            DataControllers_SalesmanInwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesmanInwardDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Service Inward Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "ServiceInward_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Salesman Inward Details Components Remove Active Event Listener */
SalesmanInwardDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Salesman Inward Button Processing Icon */
SalesmanInwardDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Salesman Inward Details Data Processing PreLoader */
SalesmanInwardDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-SalesmanInwardDetails-Content", Status);
}
/* ==== */


/* ==== */
/*  Salesman Inward Details Generate Download Data */
SalesmanInwardDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "RSI No", "Date", "Customer Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].RSINo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].RSIDate));
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