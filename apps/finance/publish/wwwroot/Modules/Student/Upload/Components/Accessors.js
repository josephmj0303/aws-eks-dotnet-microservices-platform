

/* ==== */
/* Student Components Setter */
StudentUpload.Components.Setter = function (Param) {

    /* Bind the Excel Data */
    StudentUpload.Components.Pagination.TableBody(Param)

}
/* ==== */

/* ==== */
/* Student Components Getter */
StudentUpload.Components.Getter = function (Object) {

    /* Get the Student Response */
    var StudentReq = {
        StudentId: 0,
        AdmissionNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.AdmissionNo).text(),
        AdmissionDate: $(Object).find('td').eq(StudentUpload.Components.TableColumns.AdmissionDate).text(),
        YearofAdmission: $(Object).find('td').eq(StudentUpload.Components.TableColumns.YearOfAdmission).text(),
        StudentName: $(Object).find('td').eq(StudentUpload.Components.TableColumns.StudentName).text(),
        Gender: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Gender).text(),
        DOB: $(Object).find('td').eq(StudentUpload.Components.TableColumns.DOB).text(),
        PlaceofBirth: $(Object).find('td').eq(StudentUpload.Components.TableColumns.PlaceOfBirth).text(),
        AadharCardNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.AadharCardNo).text(),
        EMISNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.EMISNo).text(),
        FathersName: $(Object).find('td').eq(StudentUpload.Components.TableColumns.FathersName).text(),
        FathersQualification: $(Object).find('td').eq(StudentUpload.Components.TableColumns.FathersQualification).text(),
        FathersOccupation: $(Object).find('td').eq(StudentUpload.Components.TableColumns.FathersOccupation).text(),
        FathersTelephoneNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.FathersTelephoneNo).text(),
        FathersWhatsappNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.FathersWhatsappNo).text(),
        MothersName: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MothersName).text(),
        MothersQualification: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MothersQualification).text(),
        MothersOccupation: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MothersOccupation).text(),
        MothersTelephoneNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MothersTelephoneNo).text(),
        MothersWhatsappNo: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MothersWhatsappNo).text(),
        MotherTongue: $(Object).find('td').eq(StudentUpload.Components.TableColumns.MotherTongue).text(),
        AnnualIncome: $(Object).find('td').eq(StudentUpload.Components.TableColumns.AnnualIncome).text(),
        Religion: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Religion).text(),
        Nationality: GeneralFunction.CapitalizetheFirstLetter({ Keyword: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Nationality).text() }),
        Category: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Category).text(),
        Caste: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Caste).text(),
        DoorNo: "-",
        Street: "-",
        Area: "-",
        PresentAddress: $(Object).find('td').eq(StudentUpload.Components.TableColumns.PresentAddress).text(),
        PermanentAddress: $(Object).find('td').eq(StudentUpload.Components.TableColumns.PermanentAddress).text(),
        State: "Tamil Nadu",
        City: GeneralFunction.CapitalizetheFirstLetter({ Keyword: $(Object).find('td').eq(StudentUpload.Components.TableColumns.District).text() }),
        PINCode: $(Object).find('td').eq(StudentUpload.Components.TableColumns.PINCode).text(),
        Studenttype: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Studenttype).text(),
        Stage: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Stage).text(),
        IsDiscontinue: 0,
        DiscontinueDate: new Date()
    }

    /* Push the Values to list */
    var lstAcademyHistory = [];
    var t_StartYear = "", t_EndYear = "";
    var t_AcademyYear = $(Object).find('td').eq(StudentUpload.Components.TableColumns.YearOfAdmission).text();
    if (t_AcademyYear != "") {
        var t_Split = t_AcademyYear.split('-');
        if (t_Split.length == 2) {
            t_StartYear = t_Split[0];
            t_EndYear = t_Split[1];
        }
    }

    lstAcademyHistory.push({
        ClassId: $(Object).find('td').eq(StudentUpload.Components.TableColumns.ClassId).text(),
        SecId: $(Object).find('td').eq(StudentUpload.Components.TableColumns.SecId).text(),
        ClassSection: $(Object).find('td').eq(StudentUpload.Components.TableColumns.Class).text(),
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        IsActiveAcademy: true,
        TransferId: 0
    });

    var Response = {
        ReqStudent: StudentReq,
        ReqAcademyHistory: lstAcademyHistory
    }
    return Response;
}
/* ==== */
