/* ==== */
/* Sales Return Details Components Objects */
var RepairOutwardDet = {};
RepairOutwardDet.Components = {};
/* ==== */

/* ==== */
/* Sales Return Details Components Initialize */
RepairOutwardDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Service Delivery Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    RepairOutwardDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    RepairOutwardDet.Components.Ready();

    /* Get the RepairOutward Details */
    RepairOutwardDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Sales Return Details Components Ready */
RepairOutwardDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    RepairOutwardDet.Components.Cleaner();

    /* Add Event Listener */
    RepairOutwardDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Sales Return Details Components Clean Up */
RepairOutwardDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    RepairOutwardDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Sales Return Details Components Add Event Listener */
RepairOutwardDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    RepairOutwardDet.Components.RemoveEventListener();

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
            RepairOutwardDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        RepairOutwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        RepairOutwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = RepairOutwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the RepairOutward Details Details */
            DataControllers_RepairOutwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = RepairOutwardDet.Components.GenerateData(Response)

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
        var t_FilterCondition = RepairOutwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the RepairOutward Details Details */
            DataControllers_RepairOutwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = RepairOutwardDet.Components.GenerateData(Response)

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
/* Sales Return Details Components Remove Active Event Listener */
RepairOutwardDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Sale Button Processing Icon */
RepairOutwardDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Sales Return Details Data Processing PreLoader */
RepairOutwardDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-RepairOutwardDetails-Content", Status);
}
/* ==== */



/* ==== */
/*  Sales Return Details Generate Download Data */
RepairOutwardDet.Components.GenerateData = function (Result) {

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