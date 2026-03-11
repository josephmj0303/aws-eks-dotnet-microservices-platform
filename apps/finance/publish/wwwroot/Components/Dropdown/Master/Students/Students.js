/* ==== */
/* Initialization Of Student Dropdown */
Dropdown.Student = {};
Dropdown.Student.TargetId = "";
Dropdown.Student.DialogId = "";
Dropdown.Student.MultiSelect = [];
Dropdown.Student.EnableOnChanged = false;
Dropdown.Student.AllFlag = true;
/* ==== */


/* ==== */
/* Get the Student Details */
Dropdown.Student.LoadData = function (Params) {

    /* Declearation */
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_EnableOnChanged = true;
    var t_Batch = "";
    var t_ClassId = 0;
    var t_TargetId = "";
    var t_PageName = "";
    var t_ComponentValue = 0;
    var t_StartYear = new Date().getFullYear();
    var t_EndYear = new Date().getFullYear() + 1;

    /* ==== Mandatory Params ==== */
    /* ==== Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== Batch Start Year ==== */
    if (typeof Params.StartYear !== "undefined") {
        t_StartYear = Params.StartYear;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== Batch End Year ==== */
    if (typeof Params.EndYear !== "undefined") {
        t_EndYear = Params.EndYear;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== ClassId ==== */
    if (typeof Params.ClassId !== "undefined") {
        t_ClassId = Params.ClassId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== SecId ==== */
    if (typeof Params.SecId !== "undefined") {
        t_SecId = Params.SecId;
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
        Dropdown.Student.AllFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== MultiSelect ==== */
    Dropdown.Student.MultiSelect[t_TargetId] == false;
    if (typeof Params.MultiSelect !== "undefined") {
        Dropdown.Student.MultiSelect[t_TargetId] = Params.MultiSelect;
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
    if (t_SecId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "SectionId is Required"; }
    if (t_StartYear == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Start Year is Required"; }
    if (t_EndYear == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "End Year is Required"; }
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
                url: '/Student/LoadAllStudent',
                dataType: 'json',
                data: {
                    ClassId: t_ClassId,
                    SecId: t_SecId,
                    StartYear: t_StartYear,
                    EndYear: t_EndYear,
                    ComponentId: t_TargetId,
                    ComponentValue: t_ComponentValue,
                },
                error: function (error) {

                    $.gritter.add({
                        title: "Failure",
                        text: "Oops! Something went to wrong",
                        Student_name: 'gritter-warning gritter-center'
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
                                AllFlag: Dropdown.Student.AllFlag,
                                TargetId: Result.result.componentId,
                                ComponentValue: Result.result.componentValue,
                                TextFieldName: "studentName",
                                ValueFieldName: "studentId",
                                EnableOnChanged: Dropdown.Student.EnableOnChanged,
                                MultiSelect: Dropdown.Student.MultiSelect[Result.result.componentId],
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
            Dropdown.Student.ComponentId = t_TargetId;

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
