

/* ==== */
/* Student Migration Components Setter */
StudentMigration.Components.Setter = function (Param) {
    for (var i = 0; i < Param.Data.length; i++) {
        /* Set the Pagination Data */
        Param.Data[i].Status = true;
        StudentMigration.Components.Pagination.TableBody(Param.TargetId, Param.Data[i]);
    }
}
/* ==== */

/* ==== */
/* Student Migration Components Getter */
StudentMigration.Components.GetterSource = function (Param) {

    /* Get the Student Migration Response */
    /* Decleartion */
    var t_ClassId = 0, t_SecId = 0;
    var t_StartYear = '2023'; var t_EndYear = '2024';

    /* Get the Admistion Year */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divSourceAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1]
    }

    /* Get the Class & Section Details */
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSourceClassSection" }).Value;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_ClassId = t_ClassSecId.split("_")[0];
        t_SecId = t_ClassSecId.split("_")[1]
    }

    /* Get the Component Values */
    var Response = {
        ClassId: t_ClassId,
        SecId: t_SecId,
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        Pagination: Pagination.GetProperties()
    }
    return Response;
}
/* ==== */


/* ==== */
/* Student Migration Components Getter */
StudentMigration.Components.GetterTarget = function (Param) {

    /* Get the Student Migration Response */
    /* Decleartion */
    var t_ClassId = 0, t_SecId = 0;
    var t_StartYear = '01-Jun-2023'; var t_EndYear = '31-May-2024';

    /* Get the Admistion Year */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divTargetAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_StartYear = t_AdmissionYear.split('-')[0];
        t_EndYear = t_AdmissionYear.split('-')[1]
    }

    /* Get the Class & Section Details */
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divTargetClassSection" }).Value;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_ClassId = t_ClassSecId.split("_")[0];
        t_SecId = t_ClassSecId.split("_")[1]
    }

    /* Get the Component Values */
    var Response = {
        ClassId: t_ClassId,
        SecId: t_SecId,
        StartYear: t_StartYear,
        EndYear: t_EndYear,
        Pagination: Pagination.GetProperties()
    }
    return Response;
}
/* ==== */

/* ==== */
/* Get the Migration Student Details */
StudentMigration.Components.Getter = function (Params) {

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
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSourceClassSection" }).Value;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_SourceClassId = t_ClassSecId.split("_")[0];
        t_SourceSecId = t_ClassSecId.split("_")[1]
    }
    lstMigrationDetails.push({
        StudentId: Params.StudentId,
        ClassId: t_SourceClassId,
        SecId: t_SourceSecId,
        StartYear: t_SourceStartYear,
        EndYear: t_SourceEndYear,
        IsActiveAcademy: false
    })
    /* ===== */

    /* ===== */
    /* Bind the Target Admission Details */
    var t_AdmissionYear = Dropdown.GetSelectedOption({ TargetId: ".divTargetAdmissionYear" }).Value;
    if (t_AdmissionYear != "" && t_AdmissionYear !== undefined) {
        t_TargetStartYear = t_AdmissionYear.split('-')[0];
        t_TargetEndYear = t_AdmissionYear.split('-')[1];
    }
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divTargetClassSection" }).Value;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_TargetClassId = t_ClassSecId.split("_")[0];
        t_TargetSecId = t_ClassSecId.split("_")[1]
    }
    lstMigrationDetails.push({
        StudentId: Params.StudentId,
        ClassId: t_TargetClassId,
        SecId: t_TargetSecId,
        StartYear: t_TargetStartYear,
        EndYear: t_TargetEndYear,
        IsActiveAcademy: true
    })
    /* ===== */

    return { MigrationDetails: lstMigrationDetails };
}
/* ==== */