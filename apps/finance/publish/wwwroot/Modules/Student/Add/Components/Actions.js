
/* ==== */
/* Student Components Save */
Student.Components.Save = function () {
    /* Send Resquest Server */
    if (Student.Components.Validation.Status({ Form: "Student" })) {
        DataControllers_Student.Puch((Student.Components.Getter({})));
    }
}
/* ==== */


/* ==== */
/* Student Components Save */
Student.Components.SaveAcademyDetails = function () {
    /* Send Resquest Server */
    if (Student.Components.Validation.Status({ Form: "AcademyHistory" })) {
        Student.Components.Pagination.TableBody((Student.Components.AcademyGetter({})));
    }
}
/* ==== */

/* ==== */
/* Student Components Back */
Student.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* Student Components Populate */
Student.Components.Populate = function (t_RouteId) {
    /* Load the Student Details */
    if (t_RouteId != "0") {

        /* Clean the Pagination Components */
        if (typeof Params !== "undefined") {

            /* Reset the Current Page Configuration */
            if (typeof Params.ResetPagination !== "undefined") {

                if (Params.ResetPagination) {
                    /* Student Academy History Pagination Clean-Up */
                    Student.Components.Setter({
                        PageNo: 1,
                        TotalPages: 1,
                        Data: []
                    });
                }

            }

            if (typeof Params.Reset !== "undefined") {
                if (Params.Reset) {

                    /* Clean the Data */
                    Student.Components.Pagination.Cleaner();
                }
            }
        }

        DataControllers_Student.Pop({
            StudentId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */



/* ==== */
/* Student Details Component Router */
Student.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "DeleteAcademy":
            Student.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */