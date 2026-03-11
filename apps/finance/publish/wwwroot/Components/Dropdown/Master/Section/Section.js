/* ==== */
/* Initialization Of Section Dropdown */
Dropdown.Section = {};
Dropdown.Section.TargetId = "";
Dropdown.Section.DialogId = "";
Dropdown.Section.MultiSelect = [];
Dropdown.Section.EnableOnChanged = false;
Dropdown.Section.AllFlag = true;
/* ==== */


/* ==== */
/* Get the Section Details */
Dropdown.Section.LoadData = function (Params) {

    /* Declearation */
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_EnableOnChanged = true;
    var t_Batch = "";
    var t_ClassId = 0;
    var t_TargetId = "";
    var t_PageName = "";
    var t_ComponentValue = 0;

    /* ==== Mandatory Params ==== */
    /* ==== Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== ClassId ==== */
    if (typeof Params.ClassId !== "undefined") {
        t_ClassId = Params.ClassId;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== Page Name ==== */
    if (typeof Params.PageName !== "undefined") {
        t_PageName = Params.PageName;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== OnChnage Event ==== */
    if (typeof Params.EnableOnChanged !== "undefined") {
        t_EnableOnChanged = Params.EnableOnChanged;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== TopicId ==== */
    if (typeof Params.AllFlag !== "undefined") {
        Dropdown.Section.AllFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== MultiSelect ==== */
    Dropdown.Section.MultiSelect[t_TargetId] == false;
    if (typeof Params.MultiSelect !== "undefined") {
        Dropdown.Section.MultiSelect[t_TargetId] = Params.MultiSelect;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== Component Value ==== */
    if (typeof Params.ComponentValue !== "undefined") {
        t_ComponentValue = Params.ComponentValue;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    if (t_ClassId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "ClassId is Required"; }   
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        try {

            /* Preloader Start */
            Dropdown.Preloader({ TargetId: t_TargetId, Status: true });

            $.ajax({
                type: 'POST',
                cache: false,
                async: true,
                url: '/Section/LoadAllSections',
                dataType: 'json',
                data: {
                    ClassId: t_ClassId,
                    ComponentId: t_TargetId,
                    ComponentValue: t_ComponentValue,
                },
                error: function (error) {

                    $.gritter.add({
                        title: "Failure",
                        text: "Oops! Something went to wrong",
                        Section_name: 'gritter-warning gritter-center'
                    });

                    /* Preloader Stop */
                    Dropdown.Preloader({ TargetId: Result.result.componentId, Status: false });

                },
                success: function (Result) {
                    if (Result != null) {
                        if (Result.status == "Success") {

                            /* ==== */
                            /* Bind the Option List */
                            Dropdown.Options({
                                AllFlag: Dropdown.Section.AllFlag,
                                TargetId: Result.result.componentId,
                                ComponentValue: Result.result.componentValue,
                                TextFieldName: "section",
                                ValueFieldName: "secId",
                                EnableOnChanged: Dropdown.Section.EnableOnChanged,
                                MultiSelect: Dropdown.Section.MultiSelect[Result.result.componentId],
                                Result: Result.result.result
                            });
                            /* ==== */

                            /* Preloader Stop */
                            Dropdown.Preloader({ TargetId: Result.result.componentId, Status: false });

                        }
                    }
                }
            });

            /* Preloader Start */
            Dropdown.Preloader({ TargetId: ObjResult.componentId, Status: false });

            /* Set the Values */
            Dropdown.Section.ComponentId = t_TargetId;

        }
        catch (e) {

            /* ==== */
            /* Exception Message */
            t_ReturnMessage = e.message;
            /* ==== */

        }
    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;
}
/* ==== */
