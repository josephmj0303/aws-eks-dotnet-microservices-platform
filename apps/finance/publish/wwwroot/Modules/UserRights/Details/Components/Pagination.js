/* ==== */
/* User Rights Details Pagination Components Objects */
UserRights.Components.Pagination = {}
UserRights.Components.Table = {
    HeadId: "#tbhUserRights",
    BodyId: "#tbdUserRights"
}
/* ==== */

/* ==== */
/* User Rights Details Components Initialize */
UserRights.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    UserRights.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    UserRights.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* User Rights Components Table Clean */
UserRights.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(UserRights.Components.Table.BodyId).html("");

    }
    catch (ex) {

        /* ==== */
        /* Exception Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */
    }
}
/* ==== */


/* ==== */
/* User Rights Details Components Pagination Table Header */
UserRights.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("FormId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Form Name");
        t_th.addClass("text-left bolder");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.html("<i class=\"fa fa-television\" aria-hidden=\"true\"></i>&nbsp;Display");
        t_th.addClass("text-center bolder col-xs-1");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.html("<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>&nbsp;Add");
        t_th.addClass("text-center bolder col-xs-1");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.html("<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>&nbsp;Edit");
        t_th.addClass("text-center bolder col-xs-1");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.html("<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;Delete");
        t_th.addClass("text-center bolder col-xs-1");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(UserRights.Components.Table.HeadId);

    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* User Rights Details Components Pagination Table Body */
UserRights.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].FormId);

            /* Form Id */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FormId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Form Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].FormName);
            t_td.appendTo(t_tr);

            /* Display Flag */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.append(UserRights.Components.Pagination.CreateCheckbox({ Id: "DisplayFlag_" + Result[i].FormId, Status: Result[i].DisplayFlag }));
            t_td.appendTo(t_tr);


            /* Add Flag */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.append(UserRights.Components.Pagination.CreateCheckbox({ Id: "AddFlag_" + Result[i].FormId, Status: Result[i].AddFlag }));
            t_td.appendTo(t_tr);

            /* Edit Flag */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.append(UserRights.Components.Pagination.CreateCheckbox({ Id: "EditFlag_" + Result[i].FormId, Status: Result[i].EditFlag }));
            t_td.appendTo(t_tr);

            /* Delete Flag */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.append(UserRights.Components.Pagination.CreateCheckbox({ Id: "DeleteFlag_" + Result[i].FormId, Status: Result[i].DeleteFlag }));
            t_td.appendTo(t_tr);


           t_tr.appendTo(UserRights.Components.Table.BodyId);
        }
        /* ==== */

    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }

}


/* ==== */
/* UserRights Record Delete */
UserRights.Components.Pagination.DeleteRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlDeleteConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Delete",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Delete the Product */
                    UserRights.Components.Delete(RouteId);
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */


/* ==== */
/* UserRights Record Delete */
UserRights.Components.Pagination.CreateCheckbox = function (Params) {

    var t_Checkbox = $(document.createElement("div"));

    var t_label = $(document.createElement("label"));
    t_label.addClass("block");

    var t_InputBox = $(document.createElement("input"));
    t_InputBox.addClass("ace input-md");
    t_InputBox.attr("Id", Params.Id);
    t_InputBox.attr("name", "form-field-checkbox");
    t_InputBox.attr("type", "checkbox");
    t_InputBox.prop('checked', Params.Status);
    t_InputBox.appendTo(t_label);

    var t_Span = $(document.createElement("span"));
    t_Span.addClass("lbl bigger-120");
    t_Span.appendTo(t_label);
    t_label.appendTo(t_Checkbox);

    return t_Checkbox;
}
/* ==== */