/* ==== */
/* Fees Collection Details Components Objects */
var FeesCollectionDet = {};
FeesCollectionDet.Components = {};
/* ==== */

/* ==== */
/* Fees Collection Details Components Initialize */
FeesCollectionDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Receipt Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    FeesCollectionDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesCollectionDet.Components.Ready();

    /* Get the Fees Collection Details */
    FeesCollectionDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Ready */
FeesCollectionDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    FeesCollectionDet.Components.Cleaner();

    /* Add Event Listener */
    FeesCollectionDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Fees Collection Details Components Clean Up */
FeesCollectionDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    FeesCollectionDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Fees Collection Details Components Add Event Listener */
FeesCollectionDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesCollectionDet.Components.RemoveEventListener();

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
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            FeesCollectionDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* ==== */
    /* Payment Mode Click Event */
    $(".PaymentType").click(function () {
        FeesCollectionDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });
    /* ==== */

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        FeesCollectionDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }

    /* Search Button Click */
    $(".btn-Search").click(function () {
        /* Load the Student Details */
        FeesCollectionDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Excel Download Click */
    $("#btnExcelDownload").click(function () {

        /* Bind the Excel Header Information */
        var lst_ExcelData = FeesCollectionDet.Components.GenerateDownloadData();
        GeneralFunction.CreateExcelDownload({
            Title: "Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: "Receipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").click(function () {

        /* Bind the PDF Header Information */
        var lst_PDFData = FeesCollectionDet.Components.GenerateDownloadData();
        GeneralFunction.CreatePDFDownload({
            Title: "Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: "Receipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

}
/* ==== */

/* ==== */
/* Fees Collection Details Components Remove Active Event Listener */
FeesCollectionDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
    $(".btn-Search").off("click");

}
/* ==== */

/* ==== */
/* Fees Collection Details Data Processing PreLoader */
FeesCollectionDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-FeesCollectionDetails-Content", Status);
}
/* ==== */



/* ==== */
/* Fees Collection Details Generate Download Data */
FeesCollectionDet.Components.GenerateDownloadData = function () {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "Receipt No", "Receipt Date", "Team Name", "Customer Code", "Customer Name", "Contact No", "Receipt Amount", "Payment Mode"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    var lst_TableRows = document.getElementById("tbdFeesCollectionDet").rows;
    for (var i = 0; i < lst_TableRows.length; i++) {
        var el = lst_TableRows[i].children;
        var lstRows = [];

        /* Add the Rows */
        // lstRows.push(el[FeesCollectionDet.Components.TableColumns.AcademicYear].innerText);
        lstRows.push((i + 1));
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.ReceiptNo].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.ReceiptDate].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.ClassName].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.AdmissionNo].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.StudentName].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.ContactNo].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.ReceiptAmount].innerText);
        lstRows.push(el[FeesCollectionDet.Components.TableColumns.PaymentMode].innerText);
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */