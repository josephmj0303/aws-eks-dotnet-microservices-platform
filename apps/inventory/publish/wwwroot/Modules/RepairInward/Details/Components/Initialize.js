/* ==== */
/* Repair Inward Details Components Objects */
var RepairInwardDet = {};
RepairInwardDet.Components = {};
/* ==== */

/* ==== */
/* Repair Inward Details Components Initialize */
RepairInwardDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Service Collection Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    RepairInwardDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    RepairInwardDet.Components.Ready();

    /* Get the RepairInward Details */
    RepairInwardDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Repair Inward Details Components Ready */
RepairInwardDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    RepairInwardDet.Components.Cleaner();

    /* Add Event Listener */
    RepairInwardDet.Components.AddEventListener();
}
/* ==== */


/* ==== */
/* Repair Inward Details Components Clean Up */
RepairInwardDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    RepairInwardDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Repair Inward Details Components Add Event Listener */
RepairInwardDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    RepairInwardDet.Components.RemoveEventListener();

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
            RepairInwardDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /*  Search Click Event */
    $(".btn-Search").on("click", function (event) {
        /* Load the Class Details */
        RepairInwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        RepairInwardDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var t_FilterCondition = RepairInwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the RepairInward Details Details */
            DataControllers_RepairInwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = RepairInwardDet.Components.GenerateData(Response)

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
        var t_FilterCondition = RepairInwardDet.Components.Getter();
        if (t_FilterCondition != null) {
            t_FilterCondition.Pagination.PageNo = 1;
            t_FilterCondition.Pagination.TotalPages = 1;
            t_FilterCondition.Pagination.PageSize = 100000;

            /* Load the RepairInward Details Details */
            DataControllers_RepairInwardDet.GenerateDownloadData(t_FilterCondition, function (Response) {

                /* Generate the Excel Download Data */
                var Data = RepairInwardDet.Components.GenerateData(Response)

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
/* Repair Inward Details Components Remove Active Event Listener */
RepairInwardDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
}
/* ==== */


/* ==== */
/* Repair Inward Button Processing Icon */
RepairInwardDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Search", Status, "Searching...", false);
}
/* ==== */

/* ==== */
/* Repair Inward Details Data Processing PreLoader */
RepairInwardDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-RepairInwardDetails-Content", Status);
}
/* ==== */


/* ==== */
/*  Repair Inward Details Generate Download Data */
RepairInwardDet.Components.GenerateData = function (Result) {

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