/* ==== */
/* Salesman Outward Components Objects */
var SalesmanOutwardDet = {};
SalesmanOutwardDet.Components = {};
/* ==== */

/* ==== */
/* Salesman Outward Initialize Components */
SalesmanOutwardDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Saleman Dispatch Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    SalesmanOutwardDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    SalesmanOutwardDet.Components.Ready();

    /* Get the SalesmanOutward Details */
    SalesmanOutwardDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Salesman Outward Ready Components */
SalesmanOutwardDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    SalesmanOutwardDet.Components.Cleaner();

    /* Add Event Listener */
    SalesmanOutwardDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Salesman Outward Clean Up Components */
SalesmanOutwardDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    SalesmanOutwardDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Salesman Outward Add Event Listener Components  */
SalesmanOutwardDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    SalesmanOutwardDet.Components.RemoveEventListener();

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
            SalesmanOutwardDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        SalesmanOutwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        SalesmanOutwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesmanOutwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesmanOutward Details Details */
            DataControllers_SalesmanOutwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesmanOutwardDet.Components.GenerateData(Response)

                GeneralFunction.CreateExcelDownload({
                    Title: "Service Outward From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "ServiceOutward_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
        
    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = SalesmanOutwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the SalesmanOutward Details Details */
            DataControllers_SalesmanOutwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = SalesmanOutwardDet.Components.GenerateData(Response)

                GeneralFunction.CreatePDFDownload({
                    Title: "Service Outward Details From " + GeneralFunction.DateFormat(new Date($("#txtStartDate").val())) +
                        " to " + GeneralFunction.DateFormat(new Date($("#txtEndDate").val())),
                    Data: Data, // use the actual callback data
                    FileName: "ServiceOutward_" + GeneralFunction.DateFormat(new Date()),
                });
            });
            /* ==== */
        }
    });
}
/* ==== */

/* ==== */
/* Salesman Outward Remove Active Event Listener Components  */
SalesmanOutwardDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Salesman Outward Button Processing Icon */
SalesmanOutwardDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Salesman Outward Data Processing PreLoader */
SalesmanOutwardDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-SalesmanOutwardDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Salesman Outward Generate Download Data */
SalesmanOutwardDet.Components.GenerateData = function (Result) {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "RSO No", "Date", "Customer Name", "Contact No", "Total Qty", "Total Weight", "Total Amount", "Tax Amount", "Grand Total"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    for (var i = 0; i < Result.length; i++) {
        lstRows = [];
        lstRows.push((i + 1));
        lstRows.push(Result[i].RSONo);
        lstRows.push(GeneralFunction.DateFormat(Result[i].RSODate));
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