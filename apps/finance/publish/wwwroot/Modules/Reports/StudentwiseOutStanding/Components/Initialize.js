/* ==== */
/* Assign Fees Details Components Objects */
var StudentwiseOutStanding = {};
StudentwiseOutStanding.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
StudentwiseOutStanding.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Student Outstanding Report", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StudentwiseOutStanding.Components.Pagination.Initialize();

    /* Init the Class Section Dropdown */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divClass", AddFlag: false, EditFlag: false, AllFlag: true });
    Dropdown.Init({ TargetId: ".divSection", AddFlag: false, EditFlag: false, AllFlag: true });

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Initialize Completed then Goto Ready State */
    StudentwiseOutStanding.Components.Ready();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: true });

    /* Load the Dropdown Details */
    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClass", Enable: true });

}
/* ==== */

/* ==== */
/* Assign Fees Details Components Ready */
StudentwiseOutStanding.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    StudentwiseOutStanding.Components.Cleaner();

    /* Add Event Listener */
    StudentwiseOutStanding.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Clean Up */
StudentwiseOutStanding.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

    StudentwiseOutStanding.Components.FilterSetter({
        AppearPendingOnly: false
    });

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Add Event Listener */
StudentwiseOutStanding.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentwiseOutStanding.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the FeesCategory Details */
            StudentwiseOutStanding.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Search Button Click */
    $(".btn-Search").click(function () {
        /* Load the Student Details */
        StudentwiseOutStanding.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });



    /* Excel Download Click */
    $("#btnExcelDownload").click(function () {

        /* Get the Admistion Year */
        var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        var t_Class = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Text;

        /* Bind the Excel Header Information */
        var lst_ExcelData = []
        var lstHeaderRows = ["S.No","Class", "Admission No", "Student Name", "Contact No", "Fees Amount", "Received Amount", "Outstanding Amount"];
        lst_ExcelData.push(lstHeaderRows);

        /* Bind the Excel Data Information */
        var lst_TableRows = document.getElementById("tbdStudentwiseOutStanding").rows;
        for (var i = 0; i < lst_TableRows.length; i++) {
            var el = lst_TableRows[i].children;
            var lstRows = [];

            /* Add the Rows */
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.SNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.Class].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.AdmissionNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.StudentName].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.ContactNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.FeesAmount].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.ReceivedAmount].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.OutstandingAmount].innerText);

            lst_ExcelData.push(lstRows)
        }

        GeneralFunction.CreateExcelDownload({
            Title: t_AdmissionYear + " Batch " + t_Class + " Class Student Outstanding Report On " + GeneralFunction.DateFormat(new Date()),
            Data: lst_ExcelData,
            FileName: t_AdmissionYear + "_Batch_" + t_Class + "_Class_Student_Outstanding_Report_On " + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* PDF Download Link */
    $("#btnPdfDownload").click(function () {

        /* Get the Admistion Year */
        var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        var t_Class = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Text;

        /* Bind the PDF Header Information */
        var lst_PDFData = []
        var lstHeaderRows = ["S.No","Class","Admission No", "Student Name", "Contact No", "Fees Amount", "Received Amount", "Outstanding Amount"];
        lst_PDFData.push(lstHeaderRows);

        /* Bind the PDF Data Information */
        var lst_TableRows = document.getElementById("tbdStudentwiseOutStanding").rows;
        for (var i = 0; i < lst_TableRows.length; i++) {
            var el = lst_TableRows[i].children;
            var lstRows = [];

            /* Add the Rows */
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.SNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.Class].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.AdmissionNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.StudentName].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.ContactNo].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.FeesAmount].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.ReceivedAmount].innerText);
            lstRows.push(el[StudentwiseOutStanding.Components.TableColumns.OutstandingAmount].innerText);

            lst_PDFData.push(lstRows)
        }

        GeneralFunction.CreatePDFDownload({
            Title:  t_AdmissionYear + " Batch " + t_Class + " Class Student Outstanding Report On " + GeneralFunction.DateFormat(new Date()),
            Data: lst_PDFData,
            FileName: t_AdmissionYear + "_Batch_" + t_Class + "_Class_Student_Outstanding_Report_On " + GeneralFunction.DateFormat(new Date()),
        });

    });

    /* Appear Fees Pending Students only */
    $("#chkPendingStudent").click(function () {
        if ($("#chkPendingStudent").is(":checked")) {
            $(".ZeroOutstanding").hide();
        }
        else {
            $(".ZeroOutstanding").show();
        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the FeesCategory Populate */
        StudentwiseOutStanding.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }


    /* ==== */
    /* Dropdown Change Event */
    Dropdown.OnChanged = function (Params) {

        /* Load the Student Details */
        switch (Params.TargetId) {

            case "divClass":
                Dropdown.Section.LoadData({ ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value, TargetId: ".divSection", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });
                break;
        }

    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Details Components Remove Active Event Listener */
StudentwiseOutStanding.Components.RemoveEventListener = function () {
    
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $("#txtStartDate").off("change");
    $("#txtEndDate").off("change");
    $("#btnPdfDownload").off("click");
    $("#btnExcelDownload").off("click");
}
/* ==== */

/* ==== */
/* Assign Fees Details Data Processing PreLoader */
StudentwiseOutStanding.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-classwiseoutstanding-Content", Status);
}
/* ==== */