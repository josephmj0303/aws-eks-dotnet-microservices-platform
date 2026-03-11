/* ==== */
/* Application Form Details Components Objects */
var ApplicationFormDet = {};
ApplicationFormDet.Components = {};
/* ==== */

/* ==== */
/* Application Form Details Components Initialize */
ApplicationFormDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Admission Forms Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ApplicationFormDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    ApplicationFormDet.Components.Ready();

    /* Get the Form Details */
    ApplicationFormDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* Application Form Details Components Ready */
ApplicationFormDet.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ApplicationFormDet.Components.Cleaner();

    /* Add Event Listener */
    ApplicationFormDet.Components.AddEventListener();

}
/* ==== */

/* ==== */
/* Application Form Details Components Clean Up */
ApplicationFormDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    ApplicationFormDet.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });

}
/* ==== */

/* ==== */
/* Application Form Details Components Add Event Listener */
ApplicationFormDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ApplicationFormDet.Components.RemoveEventListener();

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
            ApplicationFormDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });
        }
    });

    /* Search Button Click */
    $(".btn-Search").on("click", function () {
        /* Load the Student Details */
        ApplicationFormDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var lst_ExcelData = ApplicationFormDet.Components.GenerateDownloadData();
        GeneralFunction.CreateExcelDownload({
            Title: "Admission Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: "AdmissionReceipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click", function () {

        /* Bind the PDF Header Information */
        var lst_PDFData = ApplicationFormDet.Components.GenerateDownloadData();
        GeneralFunction.CreatePDFDownload({
            Title: "Admission Receipt Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: "AdmissionReceipt_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        ApplicationFormDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
        
    }
}
/* ==== */

/* ==== */
/* Form Details Components Remove Active Event Listener */
ApplicationFormDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
    $(".btn-Search").off("click");
}
/* ==== */

/* ==== */
/* Form Details Data Processing PreLoader */
ApplicationFormDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-FormDetails-Content", Status);
}
/* ==== */


/* ==== */
/* Fees Collection Details Generate Download Data */
ApplicationFormDet.Components.GenerateDownloadData = function () {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No", "Application No", "Application Date", "Student Name", "Class Name", "Parent Name", "Contact No", "Fee Amount"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    var lst_TableRows = document.getElementById("tbdFormDet").rows;
    for (var i = 0; i < lst_TableRows.length; i++) {
        var el = lst_TableRows[i].children;
        var lstRows = [];

        /* Add the Rows */
        lstRows.push((i + 1));
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.ApplicationNo].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.Date].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.StudentName].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.ClassName].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.ParentName].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.ContactNo].innerText);
        lstRows.push(el[ApplicationFormDet.Components.TableColumns.FeeAmount].innerText);
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */