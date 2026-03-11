/* ==== */
/* User Rights Details Component Setter */
UserRights.Components.Setter = function (Param) {


    /* Set the Pagination Configuration */
    Pagination.SetProperties({
        PageNo: Param.PageNo,
        TotalPages: Param.TotalPages
    })

    /* Set the Pagination Data */
    UserRights.Components.Pagination.TableBody(Param.Data);
}
/* ==== */

/* ==== */
/* User Rights Details Component Getter */
UserRights.Components.Getter = function (Param) {

    /* Check the Cookies Name & Configure the Search Component */
    GeneralFunction.GetSearchHistory(GeneralFunction.GetCurrentHashName(), function (Params) {

        /* Set the User Roles Dropdown */
        Dropdown.SetSelectedOption({ TargetId: ".divUserRoles", Value: Params.RoleId });

        /* Set the Search Keyword */
        $(".Search-Keyword-Input").val(Params.Pagination.Search);

        /* Set Pagination Component */
        Pagination.SetProperties({
            PageNo: Params.Pagination.PageNo,
            TotalPages: Params.Pagination.TotalPages
        });

    });

    /* Get the Component Values */
    var Response = {
        RoleId: Dropdown.GetSelectedOption({ TargetId: ".divUserRoles" }).Value,
        Pagination: Pagination.GetProperties()
    }

    /* Set Search History Details */
    GeneralFunction.SetCookies(GeneralFunction.GetCurrentHashName(), JSON.stringify(Response));
    return Response;
}
/* ==== */


/* ==== */
/* Get the User Rights Detalls */
UserRights.Components.GetterUserRightsDetails = function (Param) {

    var t_ColFormId = 0;
    var t_ColFormName = 1;
    var t_ColDisplayFlag = 2;
    var t_ColAddFlag = 3;
    var t_ColEditFlag = 4;
    var t_ColDeleteFlag = 5;

    /* ==== */
    /* Get the User Rights Details */
    var lstUserRights = [];
    for (var i = 0; i < $("#tbdUserRights").find("tr").length; i++) {

        /* Get the FormId */
        var t_FormId = $($($("#tbdUserRights").find("tr")[i]).find("td")[t_ColFormId]).text();

        lstUserRights.push({
            FormId: t_FormId,
            DisplayFlag: $('#DisplayFlag_' + t_FormId).is(':checked'),
            AddFlag: $('#AddFlag_' + t_FormId).is(':checked'),
            EditFlag: $('#EditFlag_' + t_FormId).is(':checked'),
            DeleteFlag: $('#DeleteFlag_' + t_FormId).is(':checked')
        });
    }
    /* ==== */
    var ObjResponse = {
        RoleId: Dropdown.GetSelectedOption({ TargetId: ".divUserRoles" }).Value,
        RolesRights: lstUserRights
    }
    return ObjResponse;
}
/* ==== */
