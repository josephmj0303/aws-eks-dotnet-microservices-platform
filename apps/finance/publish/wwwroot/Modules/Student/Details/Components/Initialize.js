/* ==== */
/* Student Details Components Objects */
var StudentDet = {};
StudentDet.Components = {};
/* ==== */

/* ==== */
/* Student Details Components Initialize */
StudentDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Customer Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StudentDet.Components.Pagination.Initialize();

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divClass", AddFlag: false, EditFlag: false, AllFlag: true });
    Dropdown.Init({ TargetId: ".divSection", AddFlag: false, EditFlag: false, AllFlag: true });

    /* Once Initialize Completed then Goto Ready State */
    StudentDet.Components.Ready();

    /* Load the Student Details */
    StudentDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });

}
/* ==== */

/* ==== */
/* Student Details Components Ready */
StudentDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    StudentDet.Components.Cleaner();

    /* Add Event Listener */
    StudentDet.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: false });

    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClass", Enable: true });

    

}
/* ==== */


/* ==== */
/* Student Details Components Clean Up */
StudentDet.Components.Cleaner = function () {

    /* Clean Up */


}
/* ==== */


/* ==== */
/* Student Details Components Add Event Listener */
StudentDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentDet.Components.RemoveEventListener();

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the Student Details */
            StudentDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });


    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Student Populate */
        StudentDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }

    Dropdown.OnChanged = function (Params) {

        /* Load the Student Details */
        switch (Params.TargetId) {

            case "divClass":
                Dropdown.Section.LoadData({ ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value, TargetId: ".divSection", PageName: "Cookies", AllFlag: true, EnableOnChanged: false });
                break;
        }

        
        //StudentDet.Components.Populate({
        //    Reset: true,
        //    ResetPagination: true
        //});

    }

    /* Download Click */
    $(".btn-Download").on("click", function () {

        /* Get the Admistion Year */
        var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
        var t_ClassSec = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Text;


        GeneralFunction.CustomFieldsDownload({
            Title: t_AdmissionYear + " Batch " + t_ClassSec + " Student Details",
            Fields: [
                //{
                //    Text: "Academic Year",
                //    Value: "AcademicYear"
                //},
                //{
                //    Text: "Class",
                //    Value: "Class"
                //},
                {
                    Text: "Customer Code",
                    Value: "AdmissionNo"
                },
                {
                    Text: "Date",
                    Value: "AdmissionDate"
                },
                {
                    Text: "Customer Name",
                    Value: "StudentName"
                },
                {
                    Text: "Gender",
                    Value: "Gender"
                },
                {
                    Text: "Date Of Birth",
                    Value: "DOB"
                },
                {
                    Text: "Age",
                    Value: "Age"
                },
                {
                    Text: "Place of Birth",
                    Value: "PlaceofBirth"
                },
                {
                    Text: "AadharCard No",
                    Value: "AadharCardNo"
                },
                {
                    Text: "EMISNo",
                    Value: "EMISNo"
                },
                {
                    Text: "Relative Name1",
                    Value: "FathersName"
                },
                {
                    Text: "Qualification",
                    Value: "FathersQualification"
                },
                {
                    Text: "Occupation",
                    Value: "FathersOccupation"
                },
                {
                    Text: "TelephoneNo",
                    Value: "FathersTelephoneNo"
                },
                {
                    Text: "WhatsappNo",
                    Value: "FathersWhatsappNo"
                },
                {
                    Text: "Relative Name2",
                    Value: "MothersName"
                },
                {
                    Text: "Qualification",
                    Value: "MothersQualification"
                },
                {
                    Text: "Occupation",
                    Value: "MothersOccupation"
                },
                {
                    Text: "TelephoneNo",
                    Value: "MothersTelephoneNo"
                },
                {
                    Text: "WhatsappNo",
                    Value: "MothersWhatsappNo"
                },
                {
                    Text: "Tongue",
                    Value: "MotherTongue"
                },
                {
                    Text: "Annual Income",
                    Value: "AnnualIncome"
                },
                {
                    Text: "Religion",
                    Value: "Religion"
                },
                {
                    Text: "Nationality",
                    Value: "Nationality"
                },
                {
                    Text: "Category",
                    Value: "Category"
                },
                {
                    Text: "Caste",
                    Value: "Caste"
                },
                {
                    Text: "Present Address",
                    Value: "PresentAddress"
                },
                {
                    Text: "Permanent Address",
                    Value: "PermanentAddress"
                },
                {
                    Text: "State",
                    Value: "State"
                },
                {
                    Text: "City",
                    Value: "City"
                },
                {
                    Text: "PINCode",
                    Value: "PINCode"
                },
                {
                    Text: "Student type",
                    Value: "Studenttype"
                },
                {
                    Text: "Stage",
                    Value: "Stage"
                },
                {
                    Text: "Discontinue",
                    Value: "IsDiscontinue"
                }
            ],
            Data: StudentDet.Components.Pagination.Data
        });
    });

    /* Search Button Click */
    $(".btn-Search").click(function () {
        /* Load the Student Details */
        StudentDet.Components.Populate({
            Reset: true,
            ResetPagination: true
        });
    });

}
/* ==== */

/* ==== */
/* Student Details Components Remove Active Event Listener */
StudentDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClassSection", Enable: false });
    $(".btn-Download").off("click");
}
/* ==== */

/* ==== */
/* Student Details Data Processing PreLoader */
StudentDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Studentdetails-Content", Status);
}
/* ==== */

