/* ==== */
/* Fees Collection Details Components Objects */
var FeesCollectionCancelDet = {};
FeesCollectionCancelDet.Components = {};
/* ==== */

/* ==== */
/* Fees Collection Details Components Initialize */
FeesCollectionCancelDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Cancel Receipt Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    FeesCollectionCancelDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    FeesCollectionCancelDet.Components.Ready();

    /* Get the Fees Collection Details */
    FeesCollectionCancelDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Fees Collection Details Components Ready */
FeesCollectionCancelDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    FeesCollectionCancelDet.Components.Cleaner();

    /* Add Event Listener */
    FeesCollectionCancelDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Fees Collection Details Components Clean Up */
FeesCollectionCancelDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    FeesCollectionCancelDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */


/* ==== */
/* Fees Collection Details Components Add Event Listener */
FeesCollectionCancelDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    FeesCollectionCancelDet.Components.RemoveEventListener();

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
            FeesCollectionCancelDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* ==== */
    /* Payment Mode Click Event */
    $(".PaymentType").click(function () {
        FeesCollectionCancelDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });
    /* ==== */

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        FeesCollectionCancelDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }

    /* Search Button Click */
    $(".btn-Search").click(function () {
        /* Load the Student Details */
        FeesCollectionCancelDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Excel Download Click */
    $("#btnExcelDownload").click(function () {

        /* Bind the Excel Header Information */
        var lst_ExcelData = FeesCollectionCancelDet.Components.GenerateDownloadData();
        GeneralFunction.CreateExcelDownload({
            Title: "Cancel Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: "CancelReceipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").click(function () {

        /* Bind the PDF Header Information */
        var lst_PDFData = FeesCollectionCancelDet.Components.GenerateDownloadData();
        GeneralFunction.CreatePDFDownload({
            Title: "Cancel Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: "CancelReceipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

}
/* ==== */

/* ==== */
/* Fees Collection Details Components Remove Active Event Listener */
FeesCollectionCancelDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
    $(".btn-Search").off("click");

}
/* ==== */

/* ==== */
/* Fees Collection Details Data Processing PreLoader */
FeesCollectionCancelDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-FeesCollectionCancelDetails-Content", Status);
}
/* ==== */



/* ==== */
/* Fees Collection Details Generate Download Data */
FeesCollectionCancelDet.Components.GenerateDownloadData = function () {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["Batch", "Receipt No", "Receipt Date", "Class", "Admission No", "Student Name", "Receipt Amount", "Cancel By", "Cencel On"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    var lst_TableRows = document.getElementById("tbdFeesCollectionCancelDet").rows;
    for (var i = 0; i < lst_TableRows.length; i++) {
        var el = lst_TableRows[i].children;
        var lstRows = [];

        /* Add the Rows */
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.AcademicYear].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.ReceiptNo].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.ReceiptDate].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.ClassName].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.AdmissionNo].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.StudentName].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.ReceiptAmount].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.CancelBy].innerText);
        lstRows.push(el[FeesCollectionCancelDet.Components.TableColumns.CancelOn].innerText);
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */