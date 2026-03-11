/* ==== */
/* Initialization Of Admission Year Dropdown */
Dropdown.AdmissionYear = {};
Dropdown.AdmissionYear.TargetId = "";
Dropdown.AdmissionYear.DialogId = "";
Dropdown.AdmissionYear.MultiSelect = [];
Dropdown.AdmissionYear.EnableOnChanged = false;
Dropdown.AdmissionYear.AllFlag = false;
/* ==== */


/* ==== */
/* Get the Admission Year Details */
Dropdown.AdmissionYear.LoadData = function (Params) {

    /* Declearation */
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_EnableOnChanged = true;
    var t_TargetId = "";
    var t_PageName = "";
    var t_ComponentValue = 0;
    var t_ALLFlag = false;


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
    /* ==== TopicId ==== */
    if (typeof Params.AllFlag !== "undefined") {
        t_ALLFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== MultiSelect ==== */
    Dropdown.AdmissionYear.MultiSelect[t_TargetId] == false;
    if (typeof Params.MultiSelect !== "undefined") {
        Dropdown.AdmissionYear.MultiSelect[t_TargetId] = Params.MultiSelect;
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
                StorageName: "DropdownAdmissionYear_" + t_PageName
            });

            /* Read the Data From Cookies */
            if (ObjLocalStorageResponse.Status == "Success") {

                /* Set the Local Values */
                var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);

                /* ==== */
                /* Bind the Option List */
                Dropdown.Options({
                    AllFlag: t_ALLFlag,
                    TargetId: t_TargetId,
                    ComponentValue: t_ComponentValue,
                    TextFieldName: "textFieldName",
                    ValueFieldName: "textFieldName",
                    EnableOnChanged: t_EnableOnChanged,
                    MultiSelect: Dropdown.AdmissionYear.MultiSelect[t_TargetId],
                    Result: ObjResult.result
                });
                /* ==== */

            }

            /* Preloader Start */
            Dropdown.Preloader({ TargetId: t_TargetId, Status: false });

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
Dropdown.AdmissionYear.LoadDataFromServer = function (Params) {

    /* Preloader Start */
    Dropdown.Preloader({ TargetId: Params.ComponentId, Status: true });

    $.ajax({
        type: 'POST',
        cache: false,
        async: false,
        url: '/Batch/LoadAdmissionYears',
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
                    if (GeneralFunction.ReadlocalStorage({ StorageName: "DropdownAdmissionYear_" + Params.PageName }).StorageValue != "") {
                        GeneralFunction.RemovelocalStorage({
                            StorageName: "DropdownAdmissionYear_" + Params.PageName
                        });
                    }
                    /* ==== */

                    /* ==== */
                    /* Create Local Storage */
                    GeneralFunction.CreatelocalStorage({
                        StorageName: "DropdownAdmissionYear_" + Params.PageName,
                        StorageValue: JSON.stringify(Result.result)
                    });
                    /* ==== */

                    /* ==== */
                    /* Bind the Option List */
                    Dropdown.Options({
                        AllFlag: Dropdown.AdmissionYear.AllFlag,
                        TargetId: Result.result.componentId,
                        ComponentValue: Result.result.componentValue,
                        TextFieldName: "textFieldName",
                        ValueFieldName: "textFieldName",
                        EnableOnChanged: Dropdown.AdmissionYear.EnableOnChanged,
                        MultiSelect: Dropdown.AdmissionYear.MultiSelect[Result.result.componentId],
                        Result: Result.result.result
                    });
                    /* ==== */

                }
            }


        }
    });

    //var JSONDATA = '{"componentId":".divAdmissionYear","componentValue":"0","result":[{"textFieldName":"2024-2025"},{"textFieldName":"2023-2024"},{"textFieldName":"2022-2023"},{"textFieldName":"2021-2022"},{"textFieldName":"2020-2021"},{"textFieldName":"2019-2020"},{"textFieldName":"2018-2019"},{"textFieldName":"2017-2018"},{"textFieldName":"2016-2017"},{"textFieldName":"2015-2016"},{"textFieldName":"2014-2015"},{"textFieldName":"2013-2014"}]}'

    //var Result = {};
    //Result.result = JSON.parse(JSONDATA);

    /* ==== */
    /* Remove the Local Storage */
    //if (GeneralFunction.ReadlocalStorage({ StorageName: "DropdownAdmissionYear_" + Params.PageName }).StorageValue != "") {
    //    GeneralFunction.RemovelocalStorage({
    //        StorageName: "DropdownAdmissionYear_" + Params.PageName
    //    });
    //}
    ///* ==== */

    ///* ==== */
    ///* Create Local Storage */
    //GeneralFunction.CreatelocalStorage({
    //    StorageName: "DropdownAdmissionYear_" + Params.PageName,
    //    StorageValue: JSON.stringify(Result.result)
    //});
    ///* ==== */

    ///* ==== */
    ///* Bind the Option List */
    //Dropdown.Options({
    //    AllFlag: Dropdown.AdmissionYear.AllFlag,
    //    TargetId: Result.result.componentId,
    //    ComponentValue: Result.result.componentValue,
    //    TextFieldName: "textFieldName",
    //    ValueFieldName: "textFieldName",
    //    EnableOnChanged: Dropdown.AdmissionYear.EnableOnChanged,
    //    MultiSelect: Dropdown.AdmissionYear.MultiSelect[Result.result.componentId],
    //    Result: Result.result.result
    //});
    /* ==== */
}
/* ==== */
