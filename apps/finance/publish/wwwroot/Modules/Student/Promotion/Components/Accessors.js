/* ==== */
/* Section Details Component Setter */
StudentPromotion.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    StudentPromotion.Components.Pagination.TableBody(Param.Data);
}
/* ==== */

/* ==== */
/* Get the Promotion Student Details */
StudentPromotion.Components.Getter = function (Params) {

    /* Declearation */
    var lstMigrationDetails = [];
    var t_SourceClassId = 0, t_SourceSecId = 0;
    var t_SourceStartYear = ""; var t_SourceEndYear = "";
    var t_TargetClassId = 0, t_TargetSecId = 0;
    var t_TargetStartYear = ""; var t_TargetEndYear = "";


    /* ===== */
    /* Bind the Source Admission Details */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divSourceAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_SourceStartYear = t_AdmissionYear.split('-')[0];
        t_SourceEndYear = t_AdmissionYear.split('-')[1];
    }
    var t_ClassSecId = Params.SourceClassSecId;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_SourceClassId = t_ClassSecId.split("_")[0];
        t_SourceSecId = t_ClassSecId.split("_")[1]
    }
    lstMigrationDetails.push({
        StudentId: 0,
        ClassId: t_SourceClassId,
        SecId: t_SourceSecId,
        StartYear: t_SourceStartYear,
        EndYear: t_SourceEndYear,
        IsActiveAcademy: false
    });
    /* ===== */

    /* ===== */
    /* Bind the Target Admission Details */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divTargetAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_TargetStartYear = t_AdmissionYear.split('-')[0];
        t_TargetEndYear = t_AdmissionYear.split('-')[1];
    }
    var t_ClassSecId = Params.TargetClassSecId;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_TargetClassId = t_ClassSecId.split("_")[0];
        t_TargetSecId = t_ClassSecId.split("_")[1]
    }
    lstMigrationDetails.push({
        StudentId: 0,
        ClassId: t_TargetClassId,
        SecId: t_TargetSecId,
        StartYear: t_TargetStartYear,
        EndYear: t_TargetEndYear,
        IsActiveAcademy: true
    });
    /* ===== */

    return { MigrationDetails: lstMigrationDetails };
}
/* ==== */