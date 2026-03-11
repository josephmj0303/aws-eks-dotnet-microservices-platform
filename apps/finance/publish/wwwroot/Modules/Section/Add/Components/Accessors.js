

/* ==== */
/* Section Components Setter */
Section.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ClassId !== "undefined" ? Dropdown.SetSelectedOption({ TargetId: ".divClass", Value: Param.ClassId }) : "";
    typeof Param.Section !== "undefined" ? $("#txtSectionName").val(Param.Section) : $("#txtSectionName").val("");
    typeof Param.SeqNo !== "undefined" ? $("#txtSequenceNo").val(Param.SeqNo) : $("#txtSequenceNo").val("");
    typeof Param.IsActive !== "undefined" ? $('#chkActive').prop('checked', Param.IsActive) : $('#chkActive').prop('checked', false);

}
/* ==== */

/* ==== */
/* Section Components Getter */
Section.Components.Getter = function (Param) {

    /* Get the Section Response */
    var Response = {
        SecId: $("#hdnSecId").val(),
        ClassId: Dropdown.GetSelectedOption({ TargetId: ".divClass" }).Value,
        Section: $("#txtSectionName").val(),
        SeqNo: $("#txtSequenceNo").val(),
        IsActive: $("#chkActive").is(':checked')
    }
    return Response;
}
/* ==== */
