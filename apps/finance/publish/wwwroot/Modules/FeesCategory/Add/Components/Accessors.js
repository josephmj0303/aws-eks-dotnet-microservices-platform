

/* ==== */
/* Fees Category Components Setter */
FeesCategory.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.FeesName !== "undefined" ? $("#txtFeesCategory").val(Param.FeesName) : $("#txtFeesCategory").val("");
    typeof Param.Amount !== "undefined" ? $("#txtFeesAmount").val(parseFloat(Param.Amount).toFixed(2)) : $("#txtFeesAmount").val("");
    typeof Param.Notes !== "undefined" ? $("#txtNotes").val(Param.Notes) : $("#txtNotes").val("");

}
/* ==== */

/* ==== */
/* Fees Category Components Getter */
FeesCategory.Components.Getter = function (Param) {

    /* Get the FeesCategory Response */
    var Response = {
        FeesCatId: $("#hdnFeesCatId").val(),
        FeesName: $("#txtFeesCategory").val(),
        Amount: $("#txtFeesAmount").val(),
        Notes: $("#txtNotes").val()
    }
    return Response;
}
/* ==== */
