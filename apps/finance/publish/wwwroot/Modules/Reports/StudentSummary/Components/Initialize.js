/* ==== */
/* Assign Fees Details Components Objects */
var StudentSummary = {};
StudentSummary.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
StudentSummary.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Customer Summary Report", Action: "#", Active: true }]);

    /* Initialize the Dropdown */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divClassSection", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divStudent", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Load the Pagination Header  */
    StudentSummary.Components.Pagination.Initialize();

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Initialize Completed then Goto Ready State */
    StudentSummary.Components.Ready();

}
/* ==== */

/* ==== */
/* Assign Fees Details Components Ready */
StudentSummary.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    StudentSummary.Components.Cleaner();

    /* Add Event Listener */
    StudentSummary.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: true });

    Dropdown.ClassSection.LoadData({ TargetId: ".divClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClassSection", Enable: true });

    /* Get the Studen Summary Details */
    StudentSummary.Components.Populate({
        Reset: false
    });

}
/* ==== */


/* ==== */
/* Assign Fees Details Components Clean Up */
StudentSummary.Components.Cleaner = function () {

    StudentSummary.Components.StudentSetter({
        AdmissionNo: "",
        YearofAdmission: "",
        StudentName: "",
        Gender: "",
        FathersName: "",
        FathersTelephoneNo: "",
        FathersWhatsappNo: "",
        MothersName: "",
        MothersTelephoneNo: "",
        MothersWhatsappNo: "",
        PresentAddress: "",
        PermanentAddress: "",
        Studenttype: "",
        Stage: ""
    });
}
/* ==== */


/* ==== */
/* Assign Fees Details Components Add Event Listener */
StudentSummary.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentSummary.Components.RemoveEventListener();

    /* Search Click */
    $(".btnSearch").click(function () {
        /* Get the Section Details */
        StudentSummary.Components.Populate({
            Reset: true
        });
    });


    /* ==== */
    /* Get the Pending Payment Details */
    $("#txtAdmissionNo").on("keydown", function (event) {
        if (event.key == 'Enter') {
            /* Get the Section Details */
            StudentSummary.Components.Populate({
                Reset: true
            });
        }
    });
    /* ==== */


    Dropdown.OnChanged = function (Params) {

        /* Decleartion */
        var t_ClassId = 0, t_SecId = 0;
        var t_StartYear = "", t_EndYear = "";

        /* Get the Class & Section Details */
        var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Value;
        var t_ClassSec = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Text;
        if (t_ClassSecId != null && t_ClassSecId != "") {
            t_ClassId = t_ClassSecId.split("_")[0];
            t_SecId = t_ClassSecId.split("_")[1]
        }

        /* Get the Academy Year */
        var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        if (t_AcademyYear != "") {
            t_StartYear = t_AcademyYear.split("-")[0];
            t_EndYear = t_AcademyYear.split("-")[1];
        }

        /* ==== */
        /* Load the Students */
        if (t_ClassId != 0) {
            Dropdown.Student.LoadData({ TargetId: ".divStudent", StartYear: t_StartYear, EndYear: t_EndYear, ClassId: t_ClassId, SecId: t_SecId, PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
        }
        /* ==== */

    }
    /* ==== */
}

/* ==== */
/* Assign Fees Details Components Remove Active Event Listener */
StudentSummary.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClassSection", Enable: false });
    $("#txtAdmissionNo").off("keydown");
    $(".btnSearch").off("click");
}
/* ==== */

/* ==== */
/* Assign Fees Details Data Processing PreLoader */
StudentSummary.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-StudentSummary-Content", Status);
}
/* ==== */