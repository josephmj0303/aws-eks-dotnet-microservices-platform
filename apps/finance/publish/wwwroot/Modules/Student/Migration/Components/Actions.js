/* ==== */
/* Student Components Save */
StudentMigration.Components.Save = function () {
    /* Send Resquest Server */


    /* Progress Percent */
    StudentMigration.Components.SetProgressPercent("0%");

    /* Transation Preloader Start */
    StudentMigration.Components.SetProcessingState(true);

    /* ===== */
    /* Bind the Student List */
    StudentMigration.Components.TotalRecords = $("#tbdTargetStudentList tr").length;
    StudentMigration.Components.CompletedRecord = 0;
    StudentMigration.Components.IsCanceled = false;
    $("#tbdTargetStudentList tr").each(function () {
        if (StudentMigration.Components.IsCanceled == false) {

            /* Current Row */
            var t_CurrentRow = $(this);
            var t_StudentId = t_CurrentRow.find("td:eq(0)").text().trim();

            /* Send the Request */
            DataControllers_StudentMigration.Puch(StudentMigration.Components.Getter({
                StudentId: t_StudentId
            }));

        }
    });
    /* ===== */

}
/* ==== */


/* ==== */
/* Student Migration Components Populate */
StudentMigration.Components.PopulateSource = function () {
    /* Load the Source Student Details */
    StudentMigration.Components.Pagination.Cleaner("Source");
    DataControllers_StudentMigration.PopSource((StudentMigration.Components.GetterSource({})));
    /* ==== */
}
/* ==== */

/* ==== */
/* Student Migration Components Populate */
StudentMigration.Components.PopulateDestination = function () {
    /* Load the Source Student Details */
    StudentMigration.Components.Pagination.Cleaner("Target");
    DataControllers_StudentMigration.PopDestination((StudentMigration.Components.GetterTarget({})));
    /* ==== */
}
/* ==== */
