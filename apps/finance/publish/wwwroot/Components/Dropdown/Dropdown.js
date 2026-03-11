/* ==== */
/* Initialization Of Dropdown */
Dropdown = {};
Dropdown.TargetId = "";
/* ==== */

/* ==== */
/* Dropdown UI Initialization */
Dropdown.Init = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_SelectTag = null;
    var t_IconSpanTag = null;
    var t_IconTag = null;
    var t_MultiSelect = false;
    var t_MultiSelectWidth = 0;
    var t_IconAddButton = false;
    var t_IconEditButton = false;

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Dropdown Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning M ==== */
    if (typeof Params.MultiSelect !== "undefined") {
        t_MultiSelect = Params.MultiSelect;
    }
    if (typeof Params.MultiSelectWidth !== "undefined") {
        t_MultiSelectWidth = Params.MultiSelectWidth;
    }
    /* ===== */

    if (typeof Params.AddFlag !== "undefined") {
        t_IconAddButton = Params.AddFlag;
    }

    if (typeof Params.EditFlag !== "undefined") {
        t_IconEditButton = Params.EditFlag;
    }

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        try {

            /* ==== */
            /* Create Select Element */
            t_SelectTag = $(document.createElement("select"));
            t_SelectTag.addClass("form-control external-textbox");
            /* ==== */

            /* ==== */
            /* Create Icon Span Element */
            t_IconSpanTag = $(document.createElement("span"));
            t_IconSpanTag.addClass("input-group-addon no-padding-left");
            /* ==== */

            /* ==== */
            /* Append to Target Div */
            t_SelectTag.attr("id", t_TargetId.substring(1) + "_dropdown");
            t_SelectTag.attr("name", t_TargetId.substring(1));
            t_IconSpanTag.attr("id", t_TargetId.substring(1) + "_Icons");
            t_SelectTag.appendTo(t_TargetId);
            t_IconSpanTag.appendTo(t_TargetId);
            /* ==== */


            /* Add Button Icon */
            if (t_IconAddButton) {

                t_IconSpanTag = $(document.createElement("span"));
                t_IconSpanTag.addClass("input-group-addon no-padding-right");
                t_IconSpanTag.attr("id", t_TargetId.substring(1) + "_AddIcons");
                t_IconTag = $(document.createElement("i"));
                t_IconTag.addClass("ace-icon fa fa-plus blue bigger-150 pointer");
                t_IconTag.attr("title", "Add New");
                $(t_IconSpanTag).html(t_IconTag);
                t_IconSpanTag.appendTo(t_TargetId);
            }

            /* Edit Button Icon */
            if (t_IconEditButton) {
                t_IconSpanTag = $(document.createElement("span"));
                t_IconSpanTag.addClass("input-group-addon no-padding-right");
                t_IconSpanTag.attr("id", t_TargetId.substring(1) + "_EditIcons");
                t_IconTag = $(document.createElement("i"));
                t_IconTag.addClass("ace-icon fa fa-pencil red bigger-150 pointer");
                t_IconTag.attr("title", "Edit");
                $(t_IconSpanTag).html(t_IconTag);
                t_IconSpanTag.appendTo(t_TargetId);
            }



            /* Set Loder Icon */
            Dropdown.Preloader({ TargetId: t_TargetId, Status: false });

            /* Assign Item Group Class */
            $(t_TargetId).addClass("input-group");

            /* ==== */
            /* Activate the MultiSelect */
            if (t_MultiSelect) {

                $("#" + t_TargetId.substring(1) + "_dropdown").addClass("multiselect");
                $("#" + t_TargetId.substring(1) + "_dropdown").attr("multiple", "");
                $("#" + t_TargetId.substring(1) + "_dropdown").multiselect({
                    enableFiltering: true,
                    enableHTML: true,
                    buttonClass: 'btn btn-white btn-primary',
                    templates: {
                        button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> &nbsp;<b class="fa fa-caret-down"></b></button>',
                        ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                        filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="fa fa-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                        filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default btn-white btn-grey multiselect-clear-filter" type="button"><i class="fa fa-times-circle red2"></i></button></span>',
                        li: '<li><a tabindex="0"><label></label></a></li>',
                        divider: '<li class="multiselect-item divider"></li>',
                        liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
                    }
                    //buttonWidth: t_MultiSelectWidth
                });
                $("#" + t_TargetId.substring(1) + "_dropdown").multiselect('rebuild');
            }
            /* ==== */

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
/* Dropdown Preloader */
Dropdown.Preloader = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_Status = false;
    var t_IsValidParams = true;
    var t_ReturnMessage = "";

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Preloader ==== */
    if (typeof Params.Status !== "undefined") {
        t_Status = Params.Status;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        /* Icon TargetId */
        t_TargetId = t_TargetId.substring(1) + "_Icons";

        if (t_Status) {

            /* ==== */
            /* Create Icon Span Element */
            t_IconSpanTag = $("#" + t_TargetId);
            t_IconTag = $(document.createElement("i"));
            t_IconTag.addClass("ace-icon fa fa-refresh fa-spin icon-color");
            $(t_IconSpanTag).html(t_IconTag);
            /* ==== */

        } else {

            /* ==== */
            /* Create Icon Span Element */
            t_IconSpanTag = $("#" + t_TargetId);
            t_IconTag = $(document.createElement("i"));
            t_IconTag.addClass("ace-icon fa fa-check green");
            $(t_IconSpanTag).html(t_IconTag);
            /* ==== */
        }

    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Bind the Dropdown Options  */
Dropdown.Options = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_TargetParent = "";
    var t_TextName = "";
    var t_ValName = "";
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_Result = [];
    var t_SelectTag = null;
    var t_OptionTag = null;
    var t_SelResponse = null;
    var t_AllFlag = false;
    var t_EnableOnChanged = true;
    var t_MultiSelect = false;
    var t_SeqNo = 0;
    var t_ComponentValue = 0;

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Grade Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetParent = Params.TargetId;
    }
    /* ===== */


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Value Field Name ==== */
    if (typeof Params.ValueFieldName !== "undefined") {
        t_ValName = Params.ValueFieldName;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Text Field Name ==== */
    if (typeof Params.TextFieldName !== "undefined") {
        t_TextName = Params.TextFieldName;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Sequence Number ==== */
    if (typeof Params.ValueSeqNo !== "undefined") {
        t_SeqNo = Params.ValueSeqNo;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Grade Load Data ==== */
    if (typeof Params.Result !== "undefined") {
        t_Result = Params.Result;
    }
    /* ===== */


    /* ==== Optional Params ==== */
    /* ==== E-Learning Display All Option ==== */
    if (typeof Params.EnableOnChanged !== "undefined") {
        t_EnableOnChanged = Params.EnableOnChanged;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== E-Learning Display All Option ==== */
    if (typeof Params.AllFlag !== "undefined") {
        t_AllFlag = Params.AllFlag;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== E-Learning MultiSelect ==== */
    if (typeof Params.MultiSelect !== "undefined") {
        t_MultiSelect = Params.MultiSelect;
    }
    /* ===== */

    /* ==== Optional Params ==== */
    /* ==== E-Learning Default Component Value ==== */
    if (typeof Params.ComponentValue !== "undefined") {
        t_ComponentValue = Params.ComponentValue;
    }
    /* ===== */



    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetParent == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    if (t_TextName == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Text Field Name is Required"; }
    if (t_ValName == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Value Field Name is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        try {

            /* ==== */
            /* Get the Gride Dropdown Options */
            t_TargetId = t_TargetParent.substring(1) + '_dropdown'; /* Remove Idendifier Symbol */
            t_SelectTag = $("#" + t_TargetId);
            t_SelectTag.html("");

            /* ==== */
            /* Show the All Option in the list */
            if (t_AllFlag) {

                /* Bind the all Option */
                t_OptionTag = $(document.createElement("option"));
                t_OptionTag.val("0");
                t_OptionTag.text("ALL");

                /* Default Select All Option */
                t_OptionTag.attr("selected", true);
                t_OptionTag.appendTo(t_SelectTag);
            }
            /* ==== */

            /* ==== */
            /* Bind the Grade Details */
            if (t_Result != null) {
                if (t_Result.length > 0) {
                    for (var i = 0; i < t_Result.length; i++) {

                        /* ==== */
                        /* Bind the Dropdown Options */
                        t_OptionTag = $(document.createElement("option"));
                        t_OptionTag.val(t_Result[i][t_ValName].toString());
                        t_OptionTag.text(t_Result[i][t_TextName].toString());
                        /* ==== */

                        /* ==== */
                        /* Select Default First Options */
                        if (i == 0 && !t_AllFlag) t_OptionTag.attr("selected", true);
                        t_OptionTag.appendTo(t_SelectTag);
                        /* ==== */

                        /* ==== */
                        /* Set the Sequence No */
                        t_OptionTag.attr("Data-SeqNo", t_Result[i][t_SeqNo]);
                        t_OptionTag.attr("data-value", JSON.stringify(t_Result[i]));
                        /* ==== */
                    }
                }
            }
            /* ==== */

            /* ==== */
            /* Set the Component Value */
            if (t_ComponentValue != 0 && t_ComponentValue != null) {
                t_SelectTag.val(t_ComponentValue);
            }
            /* ==== */



            /* ==== */
            /* Trigger Changed Event First Time */
            if (t_EnableOnChanged) {
                if (typeof Dropdown.OnChanged !== "undefined") {

                    Dropdown.OnChanged({
                        TargetId: t_TargetId.replace('_dropdown', ''),
                        Value: $("#" + t_TargetId + " option:selected").val(),
                        Text: $("#" + t_TargetId + " option:selected").text
                    });

                }
            }
            /* ==== */


            /* ==== */
            /* Multiple Select Options */
            if (t_MultiSelect) {
                $("#" + t_TargetId).multiselect('rebuild');
            }
            /* ==== */

            /* ==== */
            /* Dropdown List Completed */
            if (typeof Dropdown.DataBoundState !== "undefined") {
                Dropdown.DataBoundState({
                    TargetId: t_TargetParent.substring(1),
                    Status: true
                });
            }
            /* ==== */


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
/* Activate Trigger Event */
Dropdown.SetChangeEvent = function (Params) {

    /* ==== */
    /* Trigger On Change Event */
    if (Params.Enable) {
        $("#" + Params.TargetId.substring(1) + "_dropdown").off("change", function () { return false; });
        $("#" + Params.TargetId.substring(1) + "_dropdown").on('change', function () {
            if (typeof Dropdown.OnChanged !== "undefined") {

                Dropdown.OnChanged({
                    TargetId: this.id.replace('_dropdown', ''),
                    Value: $("#" + this.id + " option:selected").val(),
                    Text: $("#" + this.id + " option:selected").text()
                });
            }
        });
    } else {
        /* Stop the Change Event */
        $("#" + Params.TargetId.substring(1) + "_dropdown").off('change', function (e) { e.preventDefault() });
    }
    /* ==== */
}
/* ==== */

/* ==== */
/* Get the Selected Options */
Dropdown.GetSelectedOption = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_Value = "";
    var t_Text = "";
    var t_MultiSelect = false;

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning MultiSelect ==== */
    if (typeof Params.MultiSelect !== "undefined") {
        t_MultiSelect = Params.MultiSelect;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        if (t_MultiSelect) {
            t_Value = $("#" + t_TargetId.substring(1) + "_dropdown").val();
        } else {
            t_Value = $("#" + t_TargetId.substring(1) + "_dropdown option:selected").val();
            t_Text = $("#" + t_TargetId.substring(1) + "_dropdown option:selected").text();
        }

        ObjResponse = {
            Value: t_Value,
            Text: t_Text
        }
    }
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Set the Select Options */
Dropdown.SetSelectedOption = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_IsValidParams = true;
    var t_ReturnMessage = "";
    var t_Value = "";
    var t_Text = "";
    var t_MultiSelect = false;

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.Value !== "undefined") {
        t_Value = Params.Value;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning MultiSelect ==== */
    if (typeof Params.MultiSelect !== "undefined") {
        t_MultiSelect = Params.MultiSelect;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    if (t_Value == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Value is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        if (t_MultiSelect) {
            /* Set the Selected Value */
            $("#" + t_TargetId.substring(1) + "_dropdown").val(t_Value);
        } else {
            /* Set the Selected Value */
            $("#" + t_TargetId.substring(1) + "_dropdown").val(t_Value);
        }
    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Delete the Dropdown Options */
Dropdown.DeleteOption = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_IsValidParams = true;
    var t_ReturnMessage = "";


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.Value !== "undefined") {
        t_Value = Params.Value;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    if (t_Value == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Value is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        /* ==== */
        /* Delete the Dropdown Option */
        $('#' + t_TargetId.substring(1) + '_dropdown option[value=' + t_Value + ']').remove();
        /* ==== */
    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;

}
/* ==== */

/* ==== */
/* Push the Dropdown Options */
Dropdown.AddOption = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_Value = "";
    var t_Text = "";
    var t_Data = {};
    var t_IsValidParams = true;
    var t_ReturnMessage = "";


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Layout Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */


    /* ==== Mandatory Params ==== */
    /* ==== E-Learning DropDown Value ==== */
    if (typeof Params.Value !== "undefined") {
        t_Value = Params.Value;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning DropDown Text ==== */
    if (typeof Params.Text !== "undefined") {
        t_Text = Params.Text;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning DropDown Data ==== */
    if (typeof Params.Data !== "undefined") {
        t_Data = Params.Data;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning MultiSelect ==== */
    if (typeof Params.MultiSelect !== "undefined") {
        t_MultiSelect = Params.MultiSelect;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    if (t_Value == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "Value is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

         /* ==== */
        /* Delete the Dropdown Matched Option */
        $('#' + t_TargetId.substring(1) + '_dropdown option[value=' + t_Value + ']').remove();
        /* ==== */

        /* ==== */
        /* Bind the Dropdown Options */
        var t_OptionTag = $(document.createElement("option"));
        t_OptionTag.val(t_Value);
        t_OptionTag.text(t_Text);
        t_OptionTag.attr("data-value", JSON.stringify(t_Data));
        /* ==== */

        /* ==== */
        /* Get the Gride Dropdown Options */
        t_TargetId = t_TargetId.substring(1) + '_dropdown'; /* Remove Idendifier Symbol */
        t_SelectTag = $("#" + t_TargetId);
        /* ==== */

        /* ==== */
        /* Select Default First Options */
        t_OptionTag.attr("selected", true);
        t_OptionTag.appendTo(t_SelectTag);
        /* ==== */

    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;
}
/* ==== */


