
/* ==== */
/* Student Details Component Back */
StudentDet.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Student Details Component Populate */
StudentDet.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {

        /* Reset the Current Page Configuration */
        if (typeof Params.ResetPagination !== "undefined") {

            if (Params.ResetPagination) {
                /* Student Academy History Pagination Clean-Up */
                StudentDet.Components.Setter({
                    PageNo: 1,
                    TotalPages: 1,
                    Data: []
                });
            }

        }

        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clear the Search History Cookies */
                GeneralFunction.RemoveCookies({
                    CookieName: GeneralFunction.GetCurrentHashName()
                });

                /* Clean the Data */
                StudentDet.Components.Pagination.Cleaner();
            }
        }
    }

    /* Load the Student Details Details */
    DataControllers_StudentDet.Pop(StudentDet.Components.Getter());
    /* ==== */
}
/* ==== */

/* ==== */
/* Student Details Component Delete */
StudentDet.Components.Delete = function (RouteId) {
    DataControllers_StudentDet.Delete({
        StudentId: RouteId
    });
}
/* ==== */


/* ==== */
/* Student Details Component Router */
StudentDet.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Student Routing */
            GeneralFunction.SetRouting("EditStudent", RouteId);
            break;

        case "Delete":
            StudentDet.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
