
/* ==== */
/* Assign Fees Details Component Back */
StudentSummary.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */


/* ==== */
/* Student Summary Populate Component */
StudentSummary.Components.Populate = function (Params) {

    /* Clean the Pagination Components */
    if (typeof Params !== "undefined") {
        if (typeof Params.Reset !== "undefined") {
            if (Params.Reset) {

                /* Clear the Search History Cookies */
                GeneralFunction.RemoveCookies({
                    CookieName: GeneralFunction.GetCurrentHashName()
                });

            }
        }
    }

    /* ==== */
    /* Get the Report Details */
    StudentSummary.Components.Cleaner();
    StudentSummary.Components.Pagination.Cleaner();
    //var t_StudentId = Dropdown.GetSelectedOption({ TargetId: ".divStudent" }).Value;
    //if (typeof t_StudentId !== "undefined") {
    //    if (t_StudentId != 0) {
            /* ==== */
            /* Load the Section Details Details */
            StudentSummary.Components.Pagination.Cleaner();
            StudentSummary.Components.PopulateStudent();
            StudentSummary.Components.PopulatePayments();
            StudentSummary.Components.PopulateSettlement();
            StudentSummary.Components.PopulateReceipt();
            /* ==== */
    //    }
    //}
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
StudentSummary.Components.PopulateStudent = function (Params) {

    /* Load the Student Details Details */
    var Response = StudentSummary.Components.Getter();
    if (Response != null) {
        DataControllers_StudentSummary.PopStudent(Response);
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
StudentSummary.Components.PopulatePayments = function (Params) {

    /* Load the Student Details Details */
    var Response = StudentSummary.Components.Getter();
    if (Response != null) {
        DataControllers_StudentSummary.PopPendingPayments(Response);
    }
    /* ==== */

}
/* ==== */


/* ==== */
/* Assign Fees Details Component Populate */
StudentSummary.Components.PopulateSettlement = function (Params) {

    /* Load the Student Details Details */
    var Response = StudentSummary.Components.Getter();
    if (Response != null) {
        DataControllers_StudentSummary.PopSettlementPayments(Response);
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Details Component Populate */
StudentSummary.Components.PopulateReceipt = function (Params) {

    /* Load the Student Details Details */
    var Response = StudentSummary.Components.Getter();
    if (Response != null) {
        DataControllers_StudentSummary.PopReceipt(Response);
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Assign Fees Details Component Router */
StudentSummary.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Assign Fees Routing */
            GeneralFunction.SetRouting("EditFeesCollection", RouteId);
            break;

        case "Delete":
            StudentSummary.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
