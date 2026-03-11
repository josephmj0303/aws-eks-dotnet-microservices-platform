/* ==== */
/* StudentMigration Validation Components Objects */
StudentMigration.Components.Validation = {};
/* ==== */

/* ==== */
/* StudentMigration Components Validation */
StudentMigration.Components.Validation.Initialize = function (Params) {

}
/* ==== */

/* ==== */
/* Organization Components Validation Status */
StudentMigration.Components.Validation.Status = function (Params) {

    var t_Boolean = true;

    switch (Params.Form) {

        case "Migration":
            if ($("#tbdTargetStudentList tr").length == 0) {
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Please add a student from the source to the destination  list"
                });
                t_Boolean = false;
            }
            break;
    }
    return t_Boolean;
}
/* ==== */