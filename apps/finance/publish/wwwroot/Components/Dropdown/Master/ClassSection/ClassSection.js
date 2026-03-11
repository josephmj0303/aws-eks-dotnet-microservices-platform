/* ==== */
/* Initialization Of ClassSection Dropdown */
Dropdown.ClassSection = {};
Dropdown.ClassSection.TargetId = "";
Dropdown.ClassSection.DialogId = "";
Dropdown.ClassSection.MultiSelect = [];
Dropdown.ClassSection.EnableOnChanged = false;
Dropdown.ClassSection.AllFlag = true;
/* ==== */


/* ==== */
/* Get the ClassSection Details */
Dropdown.ClassSection.LoadData = function (Params) {

    /* Declearation */
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_EnableOnChanged = true;
    var t_TargetId = "";
    var t_PageName = "";
    var t_ComponentValue = 0;
    var t_AllFlag = false;

    /* ==== Mandatory Params ==== */
    /* ==== Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
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
    /* ==== All Flag ==== */
    if (typeof Params.AllFlag !== "undefined") {
        t_AllFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== MultiSelect ==== */
    Dropdown.ClassSection.MultiSelect[t_TargetId] == false;
    if (typeof Params.MultiSelect !== "undefined") {
        Dropdown.ClassSection.MultiSelect[t_TargetId] = Params.MultiSelect;
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

            /* Read the Local Storage */
            var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
                StorageName: "DropdownClassSection_" + t_PageName
            });

            /* Read the Data From Cookies */
            if (ObjLocalStorageResponse.Status == "Success") {

                /* Set the Local Values */
                var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);

                /* ==== */
                /* Bind the Option List */
                Dropdown.Options({
                    AllFlag: t_AllFlag,
                    TargetId: t_TargetId,
                    ComponentValue: t_ComponentValue,
                    TextFieldName: "classSection",
                    ValueFieldName: "classSecId",
                    EnableOnChanged: t_EnableOnChanged,
                    MultiSelect: Dropdown.ClassSection.MultiSelect[t_TargetId],
                    Result: ObjResult.result
                });
                /* ==== */

            }

            /* Preloader Start */
            Dropdown.Preloader({ TargetId: t_TargetId, Status: false });

            /* Set the Values */
            Dropdown.ClassSection.ComponentId = t_TargetId;

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

/* ==== */
/* Get the Data From Server */
Dropdown.ClassSection.LoadDataFromServer = function (Params) {

    /* Preloader Start */
    Dropdown.Preloader({ TargetId: Params.ComponentId, Status: true });

    $.ajax({
        type: 'POST',
        cache: false,
        async: false,
        url: '/Section/LoadAllClassSection',
        dataType: 'json',
        data: {
            ComponentId: Params.ComponentId,
            ComponentValue: Params.ComponentValue,
        },
        error: function () {

            $.gritter.add({
                title: "Failure",
                text: "Oops! Something went to wrong",
                class_name: 'gritter-warning gritter-center'
            });

            /* Preloader Start */
            Dropdown.Preloader({ TargetId: Result.result.componentId, Status: false });

        },
        success: function (Result) {
            if (Result != null) {
                if (Result.status == "Success") {

                    /* ==== */
                    /* Remove the Local Storage */
                    if (GeneralFunction.ReadlocalStorage({ StorageName: "DropdownClassSection_" + Params.PageName }).StorageValue != "") {
                        GeneralFunction.RemovelocalStorage({
                            StorageName: "DropdownClassSection_" + Params.PageName
                        });
                    }
                    /* ==== */

                    /* ==== */
                    /* Create Local Storage */
                    GeneralFunction.CreatelocalStorage({
                        StorageName: "DropdownClassSection_" + Params.PageName,
                        StorageValue: JSON.stringify(Result.result)
                    });
                    /* ==== */

                    /* ==== */
                    /* Bind the Option List */
                    Dropdown.Options({
                        AllFlag: Dropdown.ClassSection.AllFlag,
                        TargetId: Result.result.componentId,
                        ComponentValue: Result.result.componentValue,
                        TextFieldName: "classSection",
                        ValueFieldName: "classSecId",
                        EnableOnChanged: Dropdown.ClassSection.EnableOnChanged,
                        MultiSelect: Dropdown.ClassSection.MultiSelect[Result.result.componentId],
                        Result: Result.result.result
                    });
                    /* ==== */

                }
            }


        }
    });
}
/* ==== */
