/* ==== */
/* Student Components Save */
StudentPromotion.Components.Save = function () {
    /* Send Resquest Server */

    /* Progress Percent */
    StudentPromotion.Components.SetProgressPercent("0%");

    /* Transation Preloader Start */
    StudentPromotion.Components.SetProcessingState(true);

    /* Set Progress Bar Calculation */
    StudentPromotion.Components.Pagination.SetProgressCalculation();
    
    $(StudentPromotion.Components.Table.BodyId + " tr").each(function () {
        if (StudentPromotion.Components.IsCanceled == false) {

            /* Current Row */
            var t_CurrentRow = $(this);
            var t_SourceClassSecId = t_CurrentRow.find("td:eq(0)").text().trim();
            var t_TargetClassSecId = t_CurrentRow.find("select").val();

            if (t_TargetClassSecId != "0_0") {

                /* Set Pproceessing Status */
                $(".RN" + t_SourceClassSecId).find(".Status").html("<i class=\"fa-solid fa-spinner fa-2x pink fa fa-spin\"></i>");

                /* Send the Request */
                DataControllers_StudentPromotion.Puch(StudentPromotion.Components.Getter({
                    SourceClassSecId: t_SourceClassSecId,
                    TargetClassSecId: t_TargetClassSecId,
                }));
            }

        }
    });
    /* ===== */

}
/* ==== */

/* ==== */
/* Section Details Component Back */
StudentPromotion.Components.Back = function () {
    /* Goto Previows Screen */
}
/* ==== */

/* ==== */
/* Section Details Component Router */
StudentPromotion.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Edit":
            /* Set the Modify Section Routing */
            GeneralFunction.SetRouting("EditSection", RouteId);
            break;

        case "Delete":
            StudentPromotion.Components.Pagination.DeleteRecord(RouteId);
            break;
    }
}
/* ==== */
