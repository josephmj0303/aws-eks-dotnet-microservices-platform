

/* ==== */
/* Form Components Setter */
Form.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.FormName !== "undefined" ? $("#txtFormName").val(Param.FormName) : $("#txtFormName").val("");

}
/* ==== */

/* ==== */
/* Form Components Getter */
Form.Components.Getter = function (Param) {

    /* Get the Form Response */
    var Response = {
        FormId: $("#hdnFormId").val(),
        FormName: $("#txtFormName").val()
    }
    return Response;
}
/* ==== */
