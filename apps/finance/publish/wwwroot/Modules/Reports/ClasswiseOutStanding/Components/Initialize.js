/* ==== */
/* Assign Fees Details Components Objects */
var ClasswiseOutStanding = {};
ClasswiseOutStanding.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
ClasswiseOutStanding.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Classwise Outstanding Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    ClasswiseOutStanding.Components.Pagination.Initialize();

    /* Initialize Pagination Components */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divClass", AddFlag: false, EditFlag: false, AllFlag: true });

    /* Once Initialize Completed then Goto Ready State */
    ClasswiseOutStanding.Components.Ready();

    /* Get the Assign Fees Details */
    ClasswiseOutStanding.Components.Populate({
        Reset: true,
        ResetPagination: true
    });
}
/* ==== */

/* ==== */
/* Assign Fees Details Components Ready */
ClasswiseOutStanding.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    ClasswiseOutStanding.Components.Cleaner();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });

    /* Load the Details */
    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });

    /* Add Event Listener */
    ClasswiseOutStanding.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Clean Up */
ClasswiseOutStanding.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    ClasswiseOutStanding.Components.FilterSetter({

    });

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Add Event Listener */
ClasswiseOutStanding.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ClasswiseOutStanding.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            ClasswiseOutStanding.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Search Button Click */
    $(".btn-Search").click(function () {
        /* Load the Student Details */
        ClasswiseOutStanding.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });
    

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        ClasswiseOutStanding.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }

    Dropdown.OnChanged = function (Params) {

        /* Load the Outstanding Details */
        ClasswiseOutStanding.Components.Populate({
            Reset: true,
            ResetPagination: true
        });

    }

    /* Excel Download Click */
    $("#btnExcelDownload").click(function () {

        /* Get the Admistion Year */
        var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        var t_Class = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Text;

        /* Bind the Excel Header Information */
        var lst_ExcelData = []
        var lstHeaderRows = ["S.No","Academic Year", "Class", "Fees Amount", "Received Amount", "Outstanding Amount"];
        lst_ExcelData.push(lstHeaderRows);

        /* Bind the Excel Data Information */
        var lst_TableRows = document.getElementById("tbdClasswiseOutStanding").rows;
        for (var i = 0; i < lst_TableRows.length; i++) {
            var el = lst_TableRows[i].children;
            var lstRows = [];

            /* Add the Rows */
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.SNo].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.AcademicYear].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.Class].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalFeesAmount].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalReceivedAmount].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalOutstandingAmount].innerText);

            lst_ExcelData.push(lstRows)
        }

        GeneralFunction.CreateExcelDownload({
            Title: t_AdmissionYear + " Batch " + t_Class + " Class Outstanding Report On " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: t_AdmissionYear + "_Batch_" + t_Class + "_Class_Outstanding_Report_On_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").click(function () {

        /* Get the Admistion Year */
        var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        var t_Class = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Text;
    
        /* Bind the PDF Header Information */
        var lst_PDFData = []
        var lstHeaderRows = ["S.No","Academic Year", "Class", "Fees Amount", "Received Amount", "Outstanding Amount"];
        lst_PDFData.push(lstHeaderRows);

        /* Bind the PDF Data Information */
        var lst_TableRows = document.getElementById("tbdClasswiseOutStanding").rows;
        for (var i = 0; i < lst_TableRows.length; i++) {
            var el = lst_TableRows[i].children;
            var lstRows = [];

            /* Add the Rows */
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.SNo].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.AcademicYear].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.Class].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalFeesAmount].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalReceivedAmount].innerText);
            lstRows.push(el[ClasswiseOutStanding.Components.TableColumns.TotalOutstandingAmount].innerText);
            lst_PDFData.push(lstRows)
        }

        GeneralFunction.CreatePDFDownload({
            Title: t_AdmissionYear + " Batch " + t_Class + " Class Outstanding Report On " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: t_AdmissionYear + "_Batch_" + t_Class + "_Class_Outstanding_Report_On_" + GeneralFunction.DateFormat(new Date()),
        });

    });
}
/* ==== */

/* ==== */
/* Assign Fees Details Components Remove Active Event Listener */
ClasswiseOutStanding.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
    $(".btn-Search").off("click");
}
/* ==== */

/* ==== */
/* Assign Fees Details Data Processing PreLoader */
ClasswiseOutStanding.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-classwiseoutstanding-Content", Status);
}
/* ==== */