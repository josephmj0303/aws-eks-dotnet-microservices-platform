/* ==== */
/* Assign Fees Components Objects */
var AssignFees = {};
AssignFees.Components = {};
/* ==== */

/* ==== */
/* Assign Fees Components Initialize */
AssignFees.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Loan Details", Action: "#AssignFeesDetails" }, { Title: $("#hdnFeesAssignId").val() == "0" ? "Add New" : "Edit Loan", Action: "#", Active: true }]);

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divClass", AddFlag: true, EditFlag: true, AllFlag: false });
    Dropdown.Init({ TargetId: ".divFeesCategory", AddFlag: true, EditFlag: true, AllFlag: false });
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Once Init the Components Validation */
    AssignFees.Components.Validation.Initialize();

    /* Initialize Student List */
    AssignFees.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    AssignFees.Components.Ready();
}
/* ==== */

/* ==== */
/* Assign Fees Components Ready */
AssignFees.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    AssignFees.Components.Cleaner();

    /* Add Event Listener */
    AssignFees.Components.AddEventListener();

    /* Load the Admission ear */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divAdmissionYear", Enable: true });

    /* Load the Details */
    Dropdown.Class.LoadData({ TargetId: ".divClass", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.SetChangeEvent({ TargetId: ".divClass", Enable: true });

    Dropdown.FeesCategory.LoadData({ TargetId: ".divFeesCategory", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.SetChangeEvent({ TargetId: ".divFeesCategory", Enable: true });

    /* Populate the Data */
    AssignFees.Components.PopulateStudent();
}
/* ==== */

/* ==== */
/* AssignFees Components Clean Up */
AssignFees.Components.Cleaner = function () {

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
    AssignFees.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* AssignFees Components Add Event Listener */
AssignFees.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    AssignFees.Components.RemoveEventListener();

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
        AssignFees.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").click(function () {
        AssignFees.Components.Back();
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
                AssignFees.Components.PopulateStudent();
                break;

            case "divAdmissionYear":
                /* Get the Admission Year Details */
                AssignFees.Components.PopulateStudent();
                break;


        }
    }
    /* ==== */

    /* ==== */
    /* Student Search */
    $(".Search-Keyword-Input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(AssignFees.Components.Table.BodyId + " tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Components Remove Active Event Listener */
AssignFees.Components.RemoveEventListener = function () {

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
/* Assign Fees Button Processing Icon */
AssignFees.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */


/* ==== */
/* Assign Fees Details Data Processing PreLoader */
AssignFees.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".tableStudent", Status);
}
/* ==== */