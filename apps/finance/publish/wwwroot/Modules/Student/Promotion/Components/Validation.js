/* ==== */
/* StudentPromotion Validation Components Objects */
StudentPromotion.Components.Validation = {};
/* ==== */

/* ==== */
/* StudentPromotion Components Validation */
StudentPromotion.Components.Validation.Initialize = function (Params) {

}
/* ==== */

/* ==== */
/* Organization Components Validation Status */
StudentPromotion.Components.Validation.Status = function (Params) {

    var t_Boolean = false;
    var t_InvalidCase = false;
    var t_ValidRecords = 0;

    switch (Params.Form) {

        case "Migration":
            /* ===== */
            /* Append the Selected To Target List */
            $(StudentPromotion.Components.Table.BodyId + " tr").each(function () {

                var t_SourceClassId = 0, t_SourceSecId = 0;
                var t_TargetClassId = 0, t_TargetSecId = 0;


                /* Current Row */
                var t_CurrentRow = $(this);
                $(t_CurrentRow).removeClass("Highlighted");
                var t_SClassSecId = t_CurrentRow.find("td:eq(0)").text().trim();
                var t_DClassSecId = t_CurrentRow.find("select").val();

                var t_ClassSecId = t_SClassSecId;
                if (t_ClassSecId != null && t_ClassSecId != "") {
                    t_SourceClassId = t_ClassSecId.split("_")[0];
                    t_SourceSecId = t_ClassSecId.split("_")[1]
                }

                var t_ClassSecId = t_DClassSecId;
                if (t_ClassSecId != null && t_ClassSecId != "") {
                    t_TargetClassId = t_ClassSecId.split("_")[0];
                    t_TargetSecId = t_ClassSecId.split("_")[1]
                }

                if (t_SourceClassId == t_TargetClassId) {
                    $(t_CurrentRow).addClass("Highlighted");
                    t_InvalidCase = true;
                }
                else if (t_DClassSecId != "0_0" && t_InvalidCase == false) {
                    t_ValidRecords += 1;
                    t_Boolean = true;
                }
            });

            if (t_InvalidCase) {
                /* ==== */
                /* Message Box */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Required",
                    Message: "The marked line is not a valid case, please check once again"
                });
                /* ==== */
            }
            else if (t_Boolean == false) {
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Please select your migrate class and then continue"
                });
            } else {
                /* Set Total Percentage */
                StudentPromotion.Components.RecordPercent = parseInt((1 / parseInt(t_ValidRecords)) * 100);
            }
            break;
    }
    return t_Boolean;
}
/* ==== */