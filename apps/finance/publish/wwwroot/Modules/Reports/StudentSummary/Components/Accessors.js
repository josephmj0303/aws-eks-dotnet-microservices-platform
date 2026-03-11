/* ==== */
/* Assign Fees Details Component Setter */
StudentSummary.Components.StudentSetter = function (Param) {


    var t_ClassSec = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Text;
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;

    typeof t_AcademyYear !== "undefined" ? $(".txtBatch").html(t_AcademyYear) : $(".txtBatch").html("");
    typeof t_ClassSec !== "undefined" ? $(".txtClass").html(t_ClassSec) : $(".txtClass").html("");
    typeof Param.AdmissionNo !== "undefined" ? $(".txtAdmissionNo").html(Param.AdmissionNo) : $(".txtAdmissionNo").html("");
    typeof Param.YearofAdmission !== "undefined" ? $(".txtAdmissionYear").html(Param.YearofAdmission) : $(".txtAdmissionYear").html("");
    typeof Param.StudentName !== "undefined" ? $(".txtStudentName").html(Param.StudentName) : $(".txtStudentName").html("");
    typeof Param.Gender !== "undefined" ? $(".txtGender").html(Param.Gender) : $(".txtGender").html("");
    typeof Param.FathersName !== "undefined" ? $(".txtFathersName").html(Param.FathersName) : $(".txtFathersName").html("");
    typeof Param.FathersTelephoneNo !== "undefined" ? $(".txtFathersTelephoneNo").html(Param.FathersTelephoneNo) : $(".txtFathersTelephoneNo").html("");
    typeof Param.FathersWhatsappNo !== "undefined" ? $(".txtFathersWhatsappNo").html(Param.FathersWhatsappNo) : $(".txtFathersWhatsappNo").html("");
    typeof Param.MothersName !== "undefined" ? $(".txtMothersName").html(Param.MothersName) : $(".txtMothersName").val("");
    typeof Param.MothersTelephoneNo !== "undefined" ? $(".txtMothersTelephoneNo").html(Param.MothersTelephoneNo) : $(".txtMothersTelephoneNo").html("");
    typeof Param.MothersWhatsappNo !== "undefined" ? $(".txtMothersWhatsappNo").html(Param.MothersWhatsappNo) : $(".txtMothersWhatsappNo").html("");
    typeof Param.PresentAddress !== "undefined" ? $(".txtPresentAddress").html(Param.PresentAddress) : $(".txtPresentAddress").html("");
    typeof Param.PermanentAddress !== "undefined" ? $(".txtPermanentAddress").html(Param.PermanentAddress) : $(".txtPermanentAddress").html("");
    typeof Param.Studenttype !== "undefined" ? $(".txtStudentType").html(Param.Studenttype) : $(".txtStudentType").html("");
    typeof Param.Stage !== "undefined" ? $(".txtStage").html(Param.Stage) : $(".txtStage").html("");

}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
StudentSummary.Components.FilterSetter = function (Param) {


}
/* ==== */

/* ==== */
/* Assign Fees Details Component Getter */
StudentSummary.Components.Getter = function (Param) {

    /* Get the Student Id */
    var Response = null;
    var t_AdmissionNo = "";

    /* Get the Student Details */
    if ($("#txtAdmissionNo").val() == "") {
        var t_StudentId = Dropdown.GetSelectedOption({ TargetId: ".divStudent" }).Value;
        if (typeof t_StudentId !== "undefined") {
            t_AdmissionNo = JSON.parse($("#divStudent_dropdown :selected").attr("data-value")).admissionNo;
        }
    }
    else {
        t_AdmissionNo = $("#txtAdmissionNo").val();
    }

    /* Check the Cookies Name & Configure the Search Component */
    GeneralFunction.GetSearchHistory(GeneralFunction.GetCurrentHashName(), function (Params) {

        /* Set the User Roles Dropdown */
        Dropdown.SetSelectedOption({ TargetId: ".divAdmissionYear", Value: Params.AdmissionYear });

        /* Set the Student Id */
        t_StudentId = Params.StudentId;
        t_AdmissionNo = Params.AdmissionNo;

        /* Set Pagination Component */
        Pagination.SetProperties({
            PageNo: Params.Pagination.PageNo,
            TotalPages: Params.Pagination.TotalPages
        });
    });


    var t_StartYear = "", t_EndYear = "";
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divAdmissionYear" }).Value;
    if (t_AcademyYear != "") {
        t_StartYear = t_AcademyYear.split("-")[0];
        t_EndYear = t_AcademyYear.split("-")[1];
    }

    /* Get the Component Values */
    Response = {
        StudentId: t_StudentId,
        AdmissionNo: t_AdmissionNo,
        PaymentMode: "All",
        StartDate: "01-Jun-" + t_StartYear,
        EndDate: "31-May-" + t_EndYear,
        Pagination: {
            PageNo: 1,
            TotalPage: 1,
            Sort: "",
            SortBy: "",
            Search: ""
        },
        AdmissionYear: t_AcademyYear
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */
