/* ==== */
/* Assign Student Fees Objects Components */
var AssignStudentFees = {};
AssignStudentFees.Components = {};
/* ==== */

/* ==== */
/* Assign Student Fees Initialize Components */
AssignStudentFees.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Student Fees Details", Action: "#AssignStudentFeesDetails" }, { Title: $("#hdnFeesId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divClassSection", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divFeesCategory", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Init the Components Validation */
    AssignStudentFees.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    AssignStudentFees.Components.Ready();
}
/* ==== */

/* ==== */
/* Assign Student Fees Ready Components */
AssignStudentFees.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    AssignStudentFees.Components.Cleaner();

    /* Add Event Listener */
    AssignStudentFees.Components.AddEventListener();

    /* Load the Details */
    Dropdown.ClassSection.LoadData({ TargetId: ".divClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.SetChangeEvent({ TargetId: ".divClassSection", Enable: false });

    Dropdown.FeesCategory.LoadData({ TargetId: ".divFeesCategory", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.SetChangeEvent({ TargetId: ".divFeesCategory", Enable: false });

    /* Populate the Data */
    AssignStudentFees.Components.Populate($("#hdnFeesId").val(),);
}
/* ==== */

/* ==== */
/* Assign Student Fees Clean Up Components */
AssignStudentFees.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        ClassId: 0,
        SecId: 0,
        FeesCatId: 0,
        StartDate: new Date(),
        EndDate: new Date(),
        DueDate: new Date(),
        Amount: "0.00",
        Notes: ""
    }
    AssignStudentFees.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Assign Student Fees Add Event Listener Components  */
AssignStudentFees.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    AssignStudentFees.Components.RemoveEventListener();

    /* ==== */
    /* DateTime Picker */
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        format: 'dd-M-yyyy',
        defaultDate: new Date()
    });
    /* ==== */

    /* ==== */
    /* Save Click */
    $(".btn-save").click(function () {
        AssignStudentFees.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        AssignStudentFees.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Class Entry Screen */
    $("#divClass_AddIcons").click(function () {
        GeneralFunction.SetRouting("AddClass", 0);
    });
    $("#divClass_EditIcons").click(function () {
        var ClassId = Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value;
        GeneralFunction.SetRouting("EditClass", ClassId);
    });
    /* ==== */

    /* ==== */
    /* Fees Category Screen */
    $("#divFeesCategory_AddIcons").click(function () {
        GeneralFunction.SetRouting("AddFeesCategory", 0);
    });
    $("#divFeesCategory_EditIcons").click(function () {
        var FeeCatId = Dropdown.GetSelectedOption({ TargetId: ".divFeesCategory" }).Value;
        GeneralFunction.SetRouting("EditFeesCategory", FeeCatId);
    });
    /* ==== */

    /* ==== */
    /* Select All For Source Table */
    $("#Student_SelectAll").click(function () {
        $("#tbdStudentList .StudentCheckbox").prop("checked", $('#Student_SelectAll').prop('checked'));
    });
    /* ==== */

    /* ==== */
    /* Dropdown Change Event */
    Dropdown.OnChanged = function (Params) {

        /* ==== */
        /* Dropdown Changed Target Id */
        switch (Params.TargetId) {

            case "divFeesCategory":
                /* Get the User Rights Details */
                var ObjFeesAmount = $('#divFeesCategory_dropdown :selected').attr("data-value");
                if (ObjFeesAmount != "") {
                    ObjFeesAmount = JSON.parse(ObjFeesAmount);
                    $("#txtAmount").val(parseFloat(ObjFeesAmount.amount).toFixed(2));
                }
                break;

            case "divClass":
                /* Get the Student Details */
                AssignStudentFees.Components.PopulateStudent();
                break;

            case "divAdmissionYear":
                /* Get the Admission Year Details */
                AssignStudentFees.Components.PopulateStudent();
                break;


        }
    }
    /* ==== */

    /* ==== */
    /* Student Search */
    $(".Search-Keyword-Input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(AssignStudentFees.Components.Table.BodyId + " tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Student Fees Remove Active Event Listener Components */
AssignStudentFees.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
    $("#Student_SelectAll").off("click");
    $("#divFeesCategory_AddIcons").off("click");
    $("#divFeesCategory_EditIcons").off("click");
    $("#divClass_AddIcons").off("click");
    $("#divClass_EditIcons").off("click");
    $(".Search-Keyword-Input").off("keyup");
}
/* ==== */

/* ==== */
/* Assign Student Fees Button Processing Icon */
AssignStudentFees.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */


/* ==== */
/* Assign Student Fees Details Data Processing PreLoader */
AssignStudentFees.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".tableStudent", Status);
}
/* ==== */