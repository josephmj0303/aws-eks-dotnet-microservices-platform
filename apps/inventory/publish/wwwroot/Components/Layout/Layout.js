/* ==== */
/* Layout Components Objects */
var Layout = {};
Layout.Components = {};
Layout.Components.PurchasePrice = 0;
Layout.Components.SalesPrice = 0;
Layout.Components.RepairPrice = 0;
/* ==== */

/* ==== */
/* Layout Components Initialize */
Layout.Components.Initialize = function () {

    /* Init the Routing List */
    Routing.Components.Initialize();
    
    /* Once Initialize Completed then Goto Ready State */
    Layout.Components.Ready();

}
/* ==== */

/* ==== */
/* Layout Components Ready */
Layout.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Layout.Components.Cleaner();

    /* Add Event Listener */
    Layout.Components.AddEventListener();

    /* Initialize the Local Database */
    Dropdown.UserRoles.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divUserRoles", ComponentValue: 0 });
    
    /* Init the Roles Rights */
    UserRights.Components.PopulateRoleBasedRights($("#hdnRoleId").val());

    /* Init the Product Weight Price Components */
    ProductWeightPrice.Components.Populate(1);

    /* Int the Source Prevent */
    GeneralFunction.PreventSourceInspect({ Activate: true });

    /* Layout Menu Configuration */
    Routing.Components.SetUserRightsMenus();

}
/* ==== */

/* ==== */
/* Layout Components Clean Up */
Layout.Components.Cleaner = function () {


}
/* ==== */

/* ==== */
/* Layout Components Add Event Listener */
Layout.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Layout.Components.RemoveEventListener();

    document.addEventListener("DOMContentLoaded", function (event) {
        $('body').addClass('loaded');
        $("#content").css("display", "block");
    });
    
}
/* ==== */

/* ==== */
/* Layout Components Remove Active Event Listener */
Layout.Components.RemoveEventListener = function () {
    $(window).off('scroll');
}
/* ==== */