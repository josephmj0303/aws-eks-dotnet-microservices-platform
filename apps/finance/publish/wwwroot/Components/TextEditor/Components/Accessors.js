
/* ==== */
/* Get the Text Editor Html */
TextEditor.Components.Getter = function (Params) {

    /* Declearation */
    var t_TextEditorContent = "";

    try {
        if (typeof Params.TargetId !== "undefined") {
            /* Get Text Editor Html Content Without Script Injection */
            t_TextEditorContent = GeneralFunction.PreventScriptInjections($(Params.TargetId).html());
        }
    }
    catch(e) {
        t_TextEditorContent = "";
    }
    return t_TextEditorContent;
}
/* ==== */

/* ==== */
/* Set the Text Editor Html */
TextEditor.Components.Setter = function (Params) {

    /* Declearation */
    var t_BindState = false;

    try {
        if (typeof Params.TargetId !== "undefined") {
            /* Set Text Editor Html Content */
            $(Params.TargetId).html(Params.Content);
            t_BindState = true;
        }
    }
    catch (e) {
        t_BindState = false;
    }
    return t_BindState;
}
/* ==== */