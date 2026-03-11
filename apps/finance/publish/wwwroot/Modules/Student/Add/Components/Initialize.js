/* ==== */
/* Student Components Objects */
var Student = {};
Student.Components = {};
/* ==== */

/* ==== */
/* Student Components Initialize */
Student.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Customer Details", Action: "#StudentDetails" }, { Title: $("#hdnStudentId").val() == "0" ? "Add New" : "Edit Customer", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    Student.Components.Pagination.TableHead();

    /* Once Init the Components Validation */
    Student.Components.Validation.Initialize();

    /* Init the Class Section Dropdown */
    Dropdown.Init({ TargetId: ".divClassSection", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });

    /* Init the Visibility */
    Student.Components.Visibility("Discontinue", $("#hdnStudentId").val() != "0" ? true : false);
    Student.Components.Visibility("BusStages", false);

    /* Generate the New Random Key */
    Student.Components.RandomKey = GeneralFunction.GetRandomKey().RandomKey;

    /* Init the File Uploader */
    FileUploader.Components.Initialize({
        TargetId: ".divUploadStudentPhoto",
        CategoryName: "Student",
        RandomKey: Student.Components.RandomKey
    });

    /* Once Initialize Completed then Goto Ready State */
    Student.Components.Ready();
}
/* ==== */

/* ==== */
/* Student Components Ready */
Student.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Student.Components.Cleaner();

    /* Add Event Listener */
    Student.Components.AddEventListener();

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });
    Dropdown.ClassSection.LoadData({ TargetId: ".divClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: true });

    /* Populate the Data */
    Student.Components.Populate($("#hdnStudentId").val());
}
/* ==== */

/* ==== */
/* Student Components Clean Up */
Student.Components.Cleaner = function () {

    /* Get the Admission Year */
    var ObjAdmissionYear = GeneralFunction.GetDefaultAdmissionYear();

    /* Set the Default Values */
    var CleanUp = {
        AdmissionNo: "",
        AdmissionDate: new Date(),
        YearofAdmission: ObjAdmissionYear.StartYear,
        StudentName: "",
        StudentImagePath: "/assets/images/placeholder/Profile.jpg",
        Gender: "Male",
        DOB: "",
        PlaceofBirth: "",
        AadharCardNo: "",
        EMISNo: "",
        FathersName: "",
        FathersQualification: "",
        FathersOccupation: "",
        FathersTelephoneNo: "",
        FathersWhatsappNo: "",
        MothersName: "",
        MothersQualification: "",
        MothersOccupation: "",
        MothersTelephoneNo: "",
        MothersWhatsappNo: "",
        MotherTongue: "",
        AnnualIncome: 0.00,
        Religion: "Hindus",
        Nationality: "Indian",
        Category: "",
        Caste: "",
        DoorNo: "",
        Street: "",
        Area: "",
        PresentAddress: "",
        PermanentAddress: "",
        State: "Tamil Nadu",
        City: "Erode",
        PINCode: "",
        Studenttype: "None",
        StageId : 0,
        Stage: "",
        IsDiscontinue: false,
        DiscontinueDate: new Date(),
        AcademyHistory: []
    }
    Student.Components.Setter(CleanUp);

    /* Init Clear the Academy Details */
    Student.Components.AcademyCleaner();

    /* Clear the Academy Details table */
    Student.Components.Pagination.Cleaner();

}
Student.Components.AcademyCleaner = function () {

  /* Get the Admission Year */
  var ObjAdmissionYear = GeneralFunction.GetDefaultAdmissionYear();

    /* Set the Default Values */
    Student.Components.AcademySetter({
        UniqId: 0,
        ClassId: 0,
        SecId: 0,
        StartYear: ObjAdmissionYear.StartYear,
        EndYear: ObjAdmissionYear.EndYear,
        IsActiveAcademy: 1,
        TransferId: 0,
    });
}
/* ==== */

/* ==== */
/* Student Components Add Event Listener */
Student.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Student.Components.RemoveEventListener();

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
    $(".btn-save").on("click", function () {
        Student.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Student.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Save Click */
    $(".btn-academysave").on("click", function () {
        Student.Components.SaveAcademyDetails();
        Student.Components.Pagination.SortTableRecords();
    });
    /* ==== */

    /* ==== */
    /* Clear Click */
    $(".btn-academyclear").on("click" , function () {
        Student.Components.AcademyCleaner();
    });
    /* ==== */

    /* ==== */
    /* Present Address Applied as Permanent Address */
    $("#txtPresentAddress").on("input", function () {
        if ($("#ChckSameAsPresentAddress").is(":Checked")) {
            $("#txtPermanentAddress").val(this.value);
        }
    });
    $("#ChckSameAsPresentAddress").on("click", function () {
        $("#txtPermanentAddress").attr("disabled", false);
        if ($("#ChckSameAsPresentAddress").is(":Checked")) {
            $("#txtPermanentAddress").val($("#txtPresentAddress").val());
            $("#txtPermanentAddress").attr("disabled", true);
        }
    });
    /* ==== */

    /* ==== */
    /* Get the State Relevent Distict */
    $("#SelState").on("change", function () {
        Student.Components.SetStateReleventCities($(this).val());
    });
    /* ==== */

    /* ==== */
    /* StudentType Based Visible the Stage Details */
    $("#SelStudentType").on("change", function () {
        /* Student type base Visible the Stage Details */
        Student.Components.Visibility("BusStages", $("#SelStudentType").val() == "VAN" ? true : false);
    });
    /* ==== */

    /* ==== */
    /* Get the Stage Suggestion */
    $("#txtStage").autocomplete({
        source: function (request, response) {

            /* Reset the Value */
            $("#txtStage").attr("data-value", 0);

            $.ajax({
                url: '/Student/StageAutoComplete/',
                data: {
                    "prefix": request.term
                },
                type: "POST",
                success: function (data) {
                    response($.map(data, function (item) {
                        return item;
                    }))
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        },
        select: function (e, i) {
            $("#txtStage").attr("StageId", i.item.val);
        },
        minLength: 0
    });
    /* ==== */

    /* ==== */
    /* Take Photo Click */
    $(".btnTakePhoto").on("click", function () {


        /* Show the Pop Window */
        var $window = $(window);
        var windowsize = $window.width();
        var width = "600";
        if (windowsize <= 480) {
            width = "95%";
        }

        $("#MdlTakePhotoConfirm").removeClass('hide').dialog({
            resizable: false,
            width: width,
            modal: true,
            title: "Upload Photo",
            title_html: true,
            buttons: [
                {
                    html: "Close",
                    "class": "btn btn-white btn-xs btn-round bolder",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });
    /* ==== */

    /* ==== */
    /* Photo Capture Click */
    $(".PhotoCapture").on("click", function () {
        $(".DivLocalDrive").show();
        $(".DivCamera").hide();
    });
    /* ==== */

    /* ==== */
    /* Discountine Status */
    $(".Discontinue").on("click", function () {
        if ($('#rdbDiscontinueYesOpt').prop('checked')) {
            $('.divDiscontinueDate').show();
        }
        else {
            $('.divDiscontinueDate').hide();
        }
    });
    /* ==== */

    /* ==== */
    /* File Uploaded After Completed Event Listener */
    FileUploader.Components.UploadCompleted = function (Params) {

        /* Uploader Target Based Upload Files */
        switch (Params.TargetId) {

            case "divUploadStudentPhoto":

                /* Display the captured photo */
                $("#MdlTakePhotoConfirm").dialog("close");

                /* ===== */
                /* Set Image Based On Upload Click */
                $("#ImgStudentCapturedPhoto").attr("src", Params.FilePath);
                /* ===== */
                break;
        }
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Student Components Remove Active Event Listener */
Student.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
    $(".btn-academysave").off("click");
    $(".btn-academyclear").off("click");
    $("#txtPresentAddress").off("input");
    $("#txtStage").off("autocomplete");
    $(".btnTakePhoto").off("click");

    $(".PhotoCapture").off("click");
    $("#ChckSameAsPresentAddress").off("click");
    $("#txtPresentAddress").off("input");
    $("#SelState").off("change");
    $("#SelStudentType").off("change");
    $(".Discontinue").on("click");
}
/* ==== */

/* ==== */
/* Student Button Processing Icon */
Student.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */

/* ==== */
/* Bind the Cities List */
Student.Components.SetStateReleventCities = function (StateName) {

    /* Clear the Previews Cities */
    $("#SelDistrict").html("");

    /* Get the Matched State Cities */
    var lstDistrict = GeneralFunction.GetCities(StateName);

    /* ===== */
    /* Bind the Cities */
    for (var i = 0; i < lstDistrict.length; i++) {
        var OptionElement = $(document.createElement("option"));
        OptionElement.attr("value", lstDistrict[i]);
        OptionElement.html(lstDistrict[i]);
        OptionElement.appendTo("#SelDistrict");
    }
    /* ===== */

}
/* ==== */