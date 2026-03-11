

/* ==== */
/* Student Components Setter */
Student.Components.Setter = function (Param) {

    /* Init the Cities */
    typeof Param.State !== "undefined" ? Student.Components.SetStateReleventCities(Param.State) : "";

    /* Set the Component Values */
    typeof Param.AdmissionNo !== "undefined" ? $("#txtAdmissionNo").val(Param.AdmissionNo) : $("#txtAdmissionNo").val("");
    typeof Param.AdmissionDate !== "undefined" ? $("#txtAdmissionDate").val(GeneralFunction.DateFormat(Param.AdmissionDate)) : $("#txtAdmissionDate").val("");
    typeof Param.YearofAdmission !== "undefined" ? $("#txtAdmissionYear").val(Param.YearofAdmission) : $("#txtAdmissionYear").val("");
    typeof Param.StudentName !== "undefined" ? $("#txtStudentName").val(Param.StudentName) : $("#txtStudentName").val("");
    typeof Param.DOB !== "undefined" ? $("#txtDOB").val(GeneralFunction.DateFormat(Param.DOB)) : $("#txtDOB").val("");
    typeof Param.PlaceofBirth !== "undefined" ? $("#txtPlaceofBirth").val(Param.PlaceofBirth) : $("#txtPlaceofBirth").val("");
    typeof Param.AadharCardNo !== "undefined" ? $("#txtAadharCardNo").val(Param.AadharCardNo) : $("#txtAadharCardNo").val("");
    typeof Param.EMISNo !== "undefined" ? $("#txtEMISNo").val(Param.EMISNo) : $("#txtEMISNo").val("");
    typeof Param.FathersName !== "undefined" ? $("#txtFathersName").val(Param.FathersName) : $("#txtFathersName").val("");
    typeof Param.FathersQualification !== "undefined" ? $("#txtFathersQualification").val(Param.FathersQualification) : $("#txtFathersQualification").val("");
    typeof Param.FathersOccupation !== "undefined" ? $("#txtFathersOccupation").val(Param.FathersOccupation) : $("#txtFathersOccupation").val("");
    typeof Param.FathersTelephoneNo !== "undefined" ? $("#txtFathersTelephoneNo").val(Param.FathersTelephoneNo) : $("#txtFathersTelephoneNo").val("");
    typeof Param.FathersWhatsappNo !== "undefined" ? $("#txtFathersWhatsappNo").val(Param.FathersWhatsappNo) : $("#txtFathersWhatsappNo").val("");
    typeof Param.MothersName !== "undefined" ? $("#txtMothersName").val(Param.MothersName) : $("#txtMothersName").val("");
    typeof Param.MothersQualification !== "undefined" ? $("#txtMothersQualification").val(Param.MothersQualification) : $("#txtMothersQualification").val("");
    typeof Param.MothersOccupation !== "undefined" ? $("#txtMothersOccupation").val(Param.MothersOccupation) : $("#txtMothersOccupation").val("");
    typeof Param.MothersTelephoneNo !== "undefined" ? $("#txtMothersTelephoneNo").val(Param.MothersTelephoneNo) : $("#txtMothersTelephoneNo").val("");
    typeof Param.MothersWhatsappNo !== "undefined" ? $("#txtMothersWhatsappNo").val(Param.MothersWhatsappNo) : $("#txtMothersWhatsappNo").val("");
    typeof Param.MotherTongue !== "undefined" ? $("#txtMotherTongue").val(Param.MotherTongue) : $("#txtMotherTongue").val("");
    typeof Param.AnnualIncome !== "undefined" ? $("#txtAnnualIncome").val(Param.AnnualIncome) : $("#txtAnnualIncome").val("");
    typeof Param.Religion !== "undefined" ? $("#SelReligion").val(Param.Religion) : $("#SelReligion").val("");
    typeof Param.Nationality !== "undefined" ? $("#txtNationality").val(Param.Nationality) : $("#txtNationality").val("");
    typeof Param.Category !== "undefined" ? $("#SelCategory").val(Param.Category) : $("#SelCategory").val("");
    typeof Param.Caste !== "undefined" ? $("#txtCaste").val(Param.Caste) : $("#txtCaste").val("");
    typeof Param.DoorNo !== "undefined" ? $("#txtDoorNo").val(Param.DoorNo) : $("#txtDoorNo").val("");
    typeof Param.Street !== "undefined" ? $("#txtStreet").val(Param.Street) : $("#txtStreet").val("");
    typeof Param.Area !== "undefined" ? $("#txtArea").val(Param.Area) : $("#txtArea").val("");
    typeof Param.PresentAddress !== "undefined" ? $("#txtPresentAddress").val(Param.PresentAddress) : $("#txtPresentAddress").val("");
    typeof Param.PermanentAddress !== "undefined" ? $("#txtPermanentAddress").val(Param.PermanentAddress) : $("#txtPermanentAddress").val("");
    typeof Param.State !== "undefined" ? $("#SelState").val(Param.State) : $("#SelState").val("");
    typeof Param.City !== "undefined" ? $("#SelDistrict").val(Param.City) : $("#SelDistrict").val("");
    typeof Param.PINCode !== "undefined" ? $("#txtPINCode").val(Param.PINCode) : $("#txtPINCode").val("");
    typeof Param.Studenttype !== "undefined" ? $("#SelStudentType").val(Param.Studenttype) : $("#SelStudentType").val("");
    typeof Param.StageId !== "undefined" ? $("#txtStage").attr("StageId", Param.StageId) : $("#txtStage").val("StageId", 0);
    typeof Param.Stage !== "undefined" ? $("#txtStage").val(Param.Stage) : $("#txtStage").val("");
    typeof Param.DiscontinueDate !== "undefined" ? $("#txtDiscontinueDate").val(GeneralFunction.DateFormat(Param.DiscontinueDate)) : $("#txtDiscontinueDate").val("");


    if (typeof Param.Gender !== "undefined") {
        switch (Param.Gender) {
            case "Male":
                /* Enable Male */
                $('#rdbMaleOpt').prop('checked', true);
                break;
            case "Fe-Male":
                /* Enable Fe-Male */
                $('#rdbFeMaleOpt').prop('checked', true);
                break;
        }
    }

    if (typeof Param.IsDiscontinue !== "undefined") {
        switch (Param.IsDiscontinue) {
            case true:
                /* Enable Yes */
                $('#rdbDiscontinueYesOpt').prop('checked', true);
                $('.divDiscontinueDate').show();
                break;
            case false:
                /* Enable No */
                $('#rdbDiscontinueNoOpt').prop('checked', true);
                $('.divDiscontinueDate').hide();
                break;
        }
    }

    /* Student Academy History */
    if (typeof Param.AcademyHistory !== "undefined") {
        if (Param.AcademyHistory.length == 0) {

            /* Clear the Academy Details table */
            Student.Components.Pagination.Cleaner();
        }
        else {

            /* ==== */
            /* Bind the Academy History */
            for (var i = 0; i < Param.AcademyHistory.length; i++) {
                Student.Components.Pagination.TableBody({
                    UniqId: 0,
                    ClassId: Param.AcademyHistory[i].ClassId,
                    SecId: Param.AcademyHistory[i].SecId,
                    ClassSection: Param.AcademyHistory[i].ClassSection,
                    StartYear: Param.AcademyHistory[i].StartYear,
                    EndYear: Param.AcademyHistory[i].EndYear,
                    AcademyYear: Param.AcademyHistory[i].StartYear + "-" + Param.AcademyHistory[i].EndYear,
                    IsActiveAcademy: Param.AcademyHistory[i].IsActiveAcademy,
                    TransferId: Param.AcademyHistory[i].TransferId
                });
            }
            Student.Components.Pagination.SortTableRecords();
            /* ==== */

        }
    }

    /* Student Profile Image */
    if (typeof Param.StudentImagePath !== "undefined") {
        if (Param.StudentImagePath != "") {
            $("#ImgStudentCapturedPhoto").attr("src", Param.StudentImagePath);
        }
    }

    /* Student type base Visible the Stage Details */
    Student.Components.Visibility("BusStages", $("#SelStudentType").val() == "VAN" ? true : false);

}
/* ==== */

/* ==== */
/* Student Components Getter */
Student.Components.Getter = function (Param) {

    /* Get the Student Response */
    var StudentReq = {
        StudentId: $("#hdnStudentId").val(),
        AdmissionNo: $("#txtAdmissionNo").val(),
        AdmissionDate: $("#txtAdmissionDate").val(),
        YearofAdmission: $("#txtAdmissionYear").val(),
        StudentName: $("#txtStudentName").val(),
        Gender: $('#rdbMaleOpt').prop('checked') ? "Male" : "Fe-Male",
        DOB: $("#txtDOB").val(),
        PlaceofBirth: $("#txtPlaceofBirth").val(),
        AadharCardNo: $("#txtAadharCardNo").val(),
        EMISNo: $("#txtEMISNo").val(),
        FathersName: $("#txtFathersName").val(),
        FathersQualification: $("#txtFathersQualification").val(),
        FathersOccupation: $("#txtFathersOccupation").val(),
        FathersTelephoneNo: $("#txtFathersTelephoneNo").val(),
        FathersWhatsappNo: $("#txtFathersWhatsappNo").val(),
        MothersName: $("#txtMothersName").val(),
        MothersQualification: $("#txtMothersQualification").val(),
        MothersOccupation: $("#txtMothersOccupation").val(),
        MothersTelephoneNo: $("#txtMothersTelephoneNo").val(),
        MothersWhatsappNo: $("#txtMothersWhatsappNo").val(),
        MotherTongue: $("#txtMotherTongue").val(),
        AnnualIncome: $("#txtAnnualIncome").val(),
        Religion: $("#SelReligion").val(),
        Nationality: $("#txtNationality").val(),
        Category: $("#SelCategory").val(),
        Caste: $("#txtCaste").val(),
        DoorNo: "-",
        Street: "-",
        Area: "-",
        PresentAddress: $("#txtPresentAddress").val(),
        PermanentAddress: $("#txtPermanentAddress").val(),
        State: $("#SelState").val(),
        City: $("#SelDistrict").val(),
        PINCode: $("#txtPINCode").val(),
        Studenttype: $("#SelStudentType").val(),
        StageId: $("#txtStage").attr("StageId"),
        Stage: $("#txtStage").val(),
        IsDiscontinue: $('#rdbDiscontinueYesOpt').prop('checked') ? true : false,
        DiscontinueDate: $("#txtDiscontinueDate").val(),
        LocalStorageURL: $("#ImgStudentCapturedPhoto").attr("src"),
    }

    /* Bind the Academyic Details */
    var lstAcademyHistory = [{
        ClassId: 1,
        SecId: 1,
        ClassSection: "",
        StartYear: 2024,
        EndYear: 2025,
        IsActiveAcademy: true,
        TransferId: 0
    }];
    $('#tbdAcademyHistoryDet tr').each(function () {

        /* Push the Values to list */
        var CurrentRow = $(this);
        var t_RowId = $(CurrentRow).attr("id");
        t_RowId = t_RowId.replaceAll("Row_", "");

        lstAcademyHistory.push({
            ClassId: $(CurrentRow.find("td")[Student.Components.TableColumns.ClassId]).text(),
            SecId: $(CurrentRow.find("td")[Student.Components.TableColumns.SecId]).text(),
            ClassSection: $(CurrentRow.find("td")[Student.Components.TableColumns.ClassSection]).text(),
            StartYear: $(CurrentRow.find("td")[Student.Components.TableColumns.StartYear]).text(),
            EndYear: $(CurrentRow.find("td")[Student.Components.TableColumns.EndYear]).text(),
            IsActiveAcademy: $("#chkYesOrNo_" + t_RowId).prop('checked'),
            TransferId: $(CurrentRow.find("td")[Student.Components.TableColumns.TransferId]).text()
        });

    });


    var Response = {
        ReqStudent: StudentReq,
        ReqAcademyHistory: lstAcademyHistory
    }
    return Response;
}
/* ==== */

/* ==== */
/* Student Components Academy Setter */
Student.Components.AcademySetter = function (Param) {

    typeof Param.UniqId !== "undefined" ? $("#hdnAcademyRowRandamId").val(Param.UniqId) : $("#hdnAcademyRowRandamId").val("0");
    typeof Param.ClassId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divClassSection", Value: Param.ClassId + "_" + Param.SecId }) : "";
    Dropdown.SetSelectedOption({ TargetId: ".divAdmissionYear", Value: Param.StartYear + "-" + Param.EndYear })

}
/* ==== */

/* ==== */
/* Student Components Academy Setter */
Student.Components.AcademyGetter = function (Param) {

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

    /* Get the Admistion Year */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1]
    }
    
    var Response = {
        UniqId: 0,
        ClassId: t_ClassId,
        SecId: t_SecId,
        ClassSection: t_ClassSec,
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        AcademyYear: t_AdmissionYear,
        IsActiveAcademy: 1,
        TransferId: 0,
    }
    return Response;
}
/* ==== */

/* ==== */
/* Student Components Visibility */
Student.Components.Visibility = function (ActionName, IsVisibile) {

    switch (ActionName) {

        case "Discontinue":
            if (IsVisibile) {
                $(".divDiscontinue").show();
            }
            else {
                $(".divDiscontinue").hide();
            }
            break;

        case "BusStages":
            if (IsVisibile) {
                $(".Bus-Stage").show();
            }
            else {
                $(".Bus-Stage").hide();
            }
            break;

    }

}
/* ==== */
