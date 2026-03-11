/* ==== */
/* OutPass Report Details Components Objects */
var OutPassReport = {};
OutPassReport.Components = {};
/* ==== */

/* ==== */
/* OutPass Report Details Components Initialize */
OutPassReport.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Outpass Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    OutPassReport.Components.Pagination.Initialize();

    /* Init the Class Section Dropdown */
    Dropdown.Init({ TargetId: ".divClassSection", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Initialize Completed then Goto Ready State */
    OutPassReport.Components.Ready();

    
}
/* ==== */

/* ==== */
/* OutPass Report Details Components Ready */
OutPassReport.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    OutPassReport.Components.Cleaner();

   
    /* Load the Dropdown Details */
    //Dropdown.ClassSection.LoadData({ TargetId: ".divClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    //Dropdown.SetChangeEvent({ TargetId: ".divClassSection", Enable: true });

    /* Add Event Listener */
    OutPassReport.Components.AddEventListener();

    /* Load the Student Details */
    OutPassReport.Components.Populate({
        Reset: true,
        ResetPagination: true
    });

}
/* ==== */


/* ==== */
/* OutPass Report Details Components Clean Up */
OutPassReport.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    OutPassReport.Components.FilterSetter({
        StartDate: new Date(),
        EndDate: new Date(),
    });
}
/* ==== */


/* ==== */
/* OutPass Report Details Components Add Event Listener */
OutPassReport.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    OutPassReport.Components.RemoveEventListener();

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

            /* Load the FeesCategory Details */
            OutPassReport.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Search Button Click */
    $(".btn-Search").on("click", function () {
        /* Load the Student Details */
        OutPassReport.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

    /* Excel Download Click */
    $("#btnExcelDownload").on("click", function () {

        /* Bind the Excel Header Information */
        var lst_ExcelData = OutPassReport.Components.GenerateDownloadData();
        GeneralFunction.CreateExcelDownload({
            Title: "OutPass Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: "OutPass_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").on("click",function () {

        /* Bind the PDF Header Information */
        var lst_PDFData = OutPassReport.Components.GenerateDownloadData();
        GeneralFunction.CreatePDFDownload({
            Title: "OutPass Details on " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: "Outpassdetails_" + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        OutPassReport.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }


}
/* ==== */

/* ==== */
/* OutPass Report Details Components Remove Active Event Listener */
OutPassReport.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#txtStartDate").off("change");
    $("#txtEndDate").off("change");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
}
/* ==== */

/* ==== */
/* OutPass Report Details Data Processing PreLoader */
OutPassReport.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-classwiseoutstanding-Content", Status);
}
/* ==== */


/* ==== */
/* OutPass Report Details Generate Download Data */
OutPassReport.Components.GenerateDownloadData = function () {

    /* Bind the PDF Header Information */
    var lst_DownloadData = []
    var lstHeaderRows = ["S.No","OutPass No", "OutPass Date", "Class/Sec", "Admission No", "Student Name", "Attender Name", "Relation", "Phone No", "Place", "Issue By"];
    lst_DownloadData.push(lstHeaderRows);

    /* Bind the PDF Data Information */
    var lst_TableRows = document.getElementById("tbdOutPassReport").rows;
    for (var i = 0; i < lst_TableRows.length; i++) {
        var el = lst_TableRows[i].children;
        var lstRows = [];

        /* Add the Rows */
        lstRows.push(el[OutPassReport.Components.TableColumns.SNo].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.OutPassNo].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.OutPassDate].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.ClassSec].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.AdmissionNo].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.StudentName].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.AttenderName].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.Relation].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.PhoneNo].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.Place].innerText);
        lstRows.push(el[OutPassReport.Components.TableColumns.IssueBy].innerText);
        lst_DownloadData.push(lstRows);
    }
    return lst_DownloadData;
}
/* ==== */