

/* ==== */
/* Class Components Setter */
Class.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.ClassName !== "undefined" ? $("#txtClassName").val(Param.ClassName) : $("#txtClassName").val("");
    typeof Param.SeqNo !== "undefined" ? $("#txtSequenceNo").val(Param.SeqNo) : $("#txtSequenceNo").val("");
    typeof Param.IsActive !== "undefined" ? $('#chkActive').prop('checked', Param.IsActive) : $('#chkActive').prop('checked', false);

}
/* ==== */

/* ==== */
/* Class Components Getter */
Class.Components.Getter = function (Param) {

    /* Get the Class Response */
    var Response = {
        ClassId: $("#hdnClassId").val(),
        ClassName: $("#txtClassName").val(),
        SeqNo: $("#txtSequenceNo").val(),
        IsActive: $("#chkActive").is(':checked')
    }
    return Response;
}
/* ==== */
