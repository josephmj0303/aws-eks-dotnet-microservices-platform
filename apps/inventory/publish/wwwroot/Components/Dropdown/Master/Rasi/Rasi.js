/* ==== */
/* Initialization Of Rasi Dropdown */
Dropdown.Rasi = {};
Dropdown.Rasi.TargetId = "";
Dropdown.Rasi.DialogId = "";
Dropdown.Rasi.MultiSelect = [];
Dropdown.Rasi.EnableOnChanged = false;
Dropdown.Rasi.AllFlag = true;
/* ==== */


/* ==== */
/* Get the Rasi Details */
Dropdown.Rasi.LoadData = function (Params) {

    /* Declearation */
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_EnableOnChanged = true;
    var t_NakshatraId = 0;
    var t_TargetId = "";
    var t_PageName = "";
    var t_ComponentValue = 0;

    /* ==== Mandatory Params ==== */
    /* ==== Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== Nakshatra Id ==== */
    if (typeof Params.NakshatraId !== "undefined") {
        t_NakshatraId = Params.NakshatraId;
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
        Dropdown.Rasi.AllFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== MultiSelect ==== */
    Dropdown.Rasi.MultiSelect[t_TargetId] == false;
    if (typeof Params.MultiSelect !== "undefined") {
        Dropdown.Rasi.MultiSelect[t_TargetId] = Params.MultiSelect;
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
                url: '/Master/LoadAllRasiDetails',
                dataType: 'json',
                data: {
                    NakshatraId: t_NakshatraId,
                    ComponentId: t_TargetId,
                    ComponentValue: t_ComponentValue,
                },
                error: function (req, status, error) {

                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Failure",
                        Message: error,
                    });

                    /* Preloader Start */
                    Dropdown.Preloader({ TargetId: Result.result.componentId, Status: false });

                },
                success: function (Result) {
                    if (Result != null) {
                        if (Result.status == "Success") {

                            /* ==== */
                            /* Bind the Option List */
                            Dropdown.Options({
                                AllFlag: Dropdown.Rasi.AllFlag,
                                TargetId: Result.result.componentId,
                                ComponentValue: Result.result.componentValue,
                                TextFieldName: "tamilName",
                                ValueFieldName: "rasiId",
                                EnableOnChanged: Dropdown.Rasi.EnableOnChanged,
                                MultiSelect: Dropdown.Rasi.MultiSelect[Result.result.componentId],
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
            Dropdown.Rasi.ComponentId = t_TargetId;

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
