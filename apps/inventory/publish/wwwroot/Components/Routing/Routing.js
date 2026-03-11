/* ==== */
/* Routing Components Objects */
var Routing = {};
Routing.Components = {};
Routing.MenuList = [];
/* ==== */

/* ==== */
/* Routing Components Initialize */
Routing.Components.Initialize = function () {

    Routing.Components.Ready();
}
/* ==== */


/* ==== */
/* Routing Components Ready */
Routing.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Routing.Components.Cleaner();

    /* Add Event Listener */
    Routing.Components.AddEventListener();
}
/* ==== */

/* ==== */
/* Routing Components Clean Up */
Routing.Components.Cleaner = function () {


}
/* ==== */

/* ==== */
/* Routing Components Add Event Listener */
Routing.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Routing.Components.RemoveEventListener();


    /* jQuery hashchange event */
    $(window).on('hashchange', function (e) {

        /* Declearation */
        var ObjRouteConfig = {};

        try {

            /* Hide the Filter Option */
            GeneralFunction.Filter({ Enable: false });

            /* Start the Page Loader */
            PageLoader.Show();

            /* Remove the Previous Events */
            Routing.Components.RemoveEventListener();

            $(".navbar-fixed-top").show();
            $("#divChatbot").html("");
            $(".nav-search").hide();

            /* Get the Route Configuration */
            ObjRouteConfig = Routing.Components.TableConfig({
                HashName: window.location.hash
            });

            /* ==== */
            /* Get the Content and Load the to Main Container */
            if (ObjRouteConfig != null) {

                /* Set the Route Page Name */
                $("#hdnRouteName").val(ObjRouteConfig.Result.RoutePageName);

                if (ObjRouteConfig.Status == "Success") {

                    /* ==== */
                    /* Get the Page HTML Content */
                    $.get(ObjRouteConfig.Result.RouteURL, function (t_HtmlContent) {

                    }).done(function (t_HtmlContent) {

                        /* Declearation */
                        let t_MainContent = null;
                        let t_BodyContent = null;

                        /* Bind the Route Page */
                        t_MainContent = $(document.createElement("div"));
                        t_MainContent.html(t_HtmlContent);

                        /* Bind the Fiter Condition Content */
                        GeneralFunction.Filter({ Enable: ObjRouteConfig.Result.RouteFilter });
                        if ($("#btnFilters").is(":visible")) {

                            $(".filter-target").html($(t_MainContent.find(".filter-source").html()));
                            $(t_MainContent.find(".filter-source")).remove();

                        }

                        /* Bind the Body Content */
                        $(".root-body").html($(t_MainContent.find(".root-body").html()));


                        /* Clear the Breadcums */
                        GeneralFunction.ClearBreadCrumb();

                        /* Configure the Filter DatePicker and Close */
                        if (ObjRouteConfig.Result.RouteFilter) $(".nav-search").show();
                        $(".nav-search-input").val("");
                        if ($("#btnFilters").is(":visible")) {

                            /* ==== */
                            /* Date Filter Show the Model Popup */
                            $("#right-menu > .external-textbox").click(function () {
                                $('#top-menu').addClass('in');
                                $('#top-menu').css("display", "block");
                            });
                            /* ==== */

                            /* ==== */
                            /* Filter Button Close */
                            $(".btnFilterClose").click(function () {
                                $('#top-menu').removeClass('in');
                                $('#top-menu').removeClass('aside-hz');
                                $('#top-menu').css("display", "none");
                            });
                            $("#btnFilters").click(function () {
                                $('#top-menu').addClass('aside-hz');
                            });
                            /* ==== */
                        }

                        /* ==== */
                        /* Initialize the User Rights Form Menu */
                        Routing.Components.SetUserRightsMenus();
                        /* ==== */

                        /* Initialize the User Rights Components */
                        Routing.Components.SetUserRights(ObjRouteConfig.Result.RouteFormName);

                        /* Initialize the Components */
                        eval(ObjRouteConfig.Result.RouteComponents);

                        /* Stop the Page Loader */
                        PageLoader.Hide();

                    }).fail(function (data, textStatus, xhr) {

                        /* ==== */
                        /* This shows status code eg. 403 */
                        if (data.status == 403) {

                            window.location.href = "#AccessDenied";
                        }
                        /* ==== */

                    });
                    /* ==== */

                }
            }
            /* ==== */

        }
        catch (e) {

            /* ==== */
            /* Exception Message */
            ObjResponse = {
                Status: "Failure",
                Message: e.message,
                Result: null
            }
            /* ==== */

        }
    }).trigger('hashchange');


}
/* ==== */

/* ==== */
/* Routing Components Remove Active Event Listener */
Routing.Components.RemoveEventListener = function () {
    $(window).off("scroll");
}
/* ==== */

/* ==== */
/* Routing Table Configuation */
Routing.Components.TableConfig = function (Params) {

    /* Declearation */
    var t_HashCode = "";
    var ObjResponse = {};
    var t_RoutePath = "";
    var t_RouteInitCall = "";
    var t_LayoutType = "";
    var t_FilterOption = false;
    var t_PageName = "";
    var t_FormName = "";
    var ObjRouteHash = {};

    try {

        /* ==== */
        /* Mandatory Fields */
        if (typeof Params.HashName !== "undefined") {
            t_HashCode = Params.HashName;
        }
        /* ==== */

        /* ==== */
        /* Find the Routing Index */
        ObjRouteHash = Routing.Components.GetRouteHashCode({ HashName: t_HashCode });
        if (ObjRouteHash != null) {

            /* Set the Route Details */
            t_HashCode = ObjRouteHash.HashName;
            switch (t_HashCode) {

                /* ==== */
                /* Master Page Details */
                case "#Home":
                    t_RoutePath = "/Home/Index";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Home Details";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Transaction Page Details */
                case "#Transaction":
                    t_RoutePath = "/Home/Index";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Transaction";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Reports Page Details */
                case "#Reports":
                    t_RoutePath = "/Home/Reports";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Reports";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */
                

                /* ==== */
                /* Dashboard Details */
                case "#Dashboard":
                    t_RoutePath = "/Dashboard/Details";
                    t_RouteInitCall = "Dashboard.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Dashboard Details";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */
                
                /* ==== */
                /* Forms Details */
                case "#FormDetails":
                    t_RoutePath = "/Form/Details";
                    t_RouteInitCall = "FormDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Form Details";
                    t_FormName = "Forms";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddForm":
                    t_RoutePath = "/Form/Index";
                    t_RouteInitCall = "Form.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Form";
                    t_FormName = "Form";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditForm":
                    t_RoutePath = "/Form/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Form.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Form";
                    t_FormName = "Form";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* User Details */
                case "#UserDetails":
                    t_RoutePath = "/UserAccount/Details";
                    t_RouteInitCall = "UserDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "User Details";
                    t_FormName = "Users";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddUser":
                    t_RoutePath = "/UserAccount/AddNew";
                    t_RouteInitCall = "User.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Users";
                    t_FormName = "Users";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditUser":
                    t_RoutePath = "/UserAccount/Edit/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "User.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Users";
                    t_FormName = "Users";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#Login":
                    t_RoutePath = "/UserAccount/SignIn";
                    t_RouteInitCall = "Login.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Users";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* User Details */
                case "#UserRoleDetails":
                    t_RoutePath = "/UserRoles/Details";
                    t_RouteInitCall = "UserRoleDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "User Role Details";
                    t_FormName = "Roles";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddUserRole":
                    t_RoutePath = "/UserRoles/AddNew";
                    t_RouteInitCall = "UserRole.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "User Role";
                    t_FormName = "Roles";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditUserRole":
                    t_RoutePath = "/UserRoles/Edit/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "UserRole.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "User Role";
                    t_FormName = "Roles";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Product Details */
                case "#ProductDetails":
                    t_RoutePath = "/Product/Details";
                    t_RouteInitCall = "ProductDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Product";
                    t_FormName = "Product";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddProduct":
                    t_RoutePath = "/Product/Index";
                    t_RouteInitCall = "Product.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Product";
                    t_FormName = "Product";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditProduct":
                    t_RoutePath = "/Product/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Product.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Product";
                    t_FormName = "Product";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Product Details */
                case "#ProductPrice":
                    t_RoutePath = "/ProductPrice/ProductPrice";
                    t_RouteInitCall = "ProductPrice.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "ProductPrice";
                    t_FormName = "ProductPrice";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Weight Price Details */
                case "#WeightPrice":
                    t_RoutePath = "/ProductPrice/WeightPrice";
                    t_RouteInitCall = "ProductWeightPrice.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "ProductWeightPrice";
                    t_FormName = "ProductWeightPrice";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Purchase Details */
                case "#PurchaseDetails":
                    t_RoutePath = "/Purchase/Details";
                    t_RouteInitCall = "PurchaseDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase";
                    t_FormName = "Purchase";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddPurchase":
                    t_RoutePath = "/Purchase/Index";
                    t_RouteInitCall = "Purchase.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase";
                    t_FormName = "Purchase";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditPurchase":
                    t_RoutePath = "/Purchase/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Purchase.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase";
                    t_FormName = "Purchase";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintPurchase":
                    t_RoutePath = "/Purchase/Print/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "PurchasePrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Sales Details */
                case "#SaleDetails":
                    t_RoutePath = "/Sales/Details";
                    t_RouteInitCall = "SalesDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Sale";
                    t_FormName = "Sale";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddSale":
                    t_RoutePath = "/Sales/Index";
                    t_RouteInitCall = "Sale.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Sale";
                    t_FormName = "Sale";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditSale":
                    t_RoutePath = "/Sales/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Sale.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Sale";
                    t_FormName = "Sale";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintInvoice":
                    t_RoutePath = "/Sales/PrintInvoice/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Purchase Return Details */
                case "#PurchaseReturnDetails":
                    t_RoutePath = "/PurchaseReturn/Details";
                    t_RouteInitCall = "PurchaseReturnDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase";
                    t_FormName = "Purchase";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddPurchaseReturn":
                    t_RoutePath = "/PurchaseReturn/Index";
                    t_RouteInitCall = "PurchaseReturn.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase Return";
                    t_FormName = "Purchase Return";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditPurchaseReturn":
                    t_RoutePath = "/PurchaseReturn/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "PurchaseReturn.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Purchase Return";
                    t_FormName = "Purchase Return";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintPurchaseReturn":
                    t_RoutePath = "/PurchaseReturn/Print/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "PurchaseReturnPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Sales Return Details */
                case "#SaleReturnDetails":
                    t_RoutePath = "/SalesReturn/Details";
                    t_RouteInitCall = "SalesReturnDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "SaleReturn";
                    t_FormName = "SaleReturn";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddSaleReturn":
                    t_RoutePath = "/SalesReturn/Index";
                    t_RouteInitCall = "SalesReturn.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "SaleReturn";
                    t_FormName = "SaleReturn";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditSaleReturn":
                    t_RoutePath = "/SalesReturn/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesReturn.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "SaleReturn";
                    t_FormName = "SaleReturn";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintSaleReturn":
                    t_RoutePath = "/SalesReturn/PrintSalesReturn/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesReturnPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "SaleReturn";
                    t_FormName = "SaleReturn";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Repair Inward Details */
                case "#RepairInwardDetails":
                    t_RoutePath = "/RepairInward/Details";
                    t_RouteInitCall = "RepairInwardDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Inward";
                    t_FormName = "RepairInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddRepairInward":
                    t_RoutePath = "/RepairInward/Index";
                    t_RouteInitCall = "RepairInward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Inward";
                    t_FormName = "RepairInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditRepairInward":
                    t_RoutePath = "/RepairInward/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "RepairInward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Inward";
                    t_FormName = "RepairInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintRepairInward":
                    t_RoutePath = "/RepairInward/PrintRepairInward/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "RepairInwardPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Salesman Inward Details */
                case "#SalesmanInwardDetails":
                    t_RoutePath = "/SalesmanInward/Details";
                    t_RouteInitCall = "SalesmanInwardDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Inward";
                    t_FormName = "SalesmanInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddSalesmanInward":
                    t_RoutePath = "/SalesmanInward/Index";
                    t_RouteInitCall = "SalesmanInward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Inward";
                    t_FormName = "SalesmanInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditSalesmanInward":
                    t_RoutePath = "/SalesmanInward/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesmanInward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Inward";
                    t_FormName = "SalesmanInward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintSalesmanInward":
                    t_RoutePath = "/SalesmanInward/PrintSalesmanInward/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesmanInwardPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Salesman Outward Details */
                case "#SalesmanOutwardDetails":
                    t_RoutePath = "/SalesmanOutward/Details";
                    t_RouteInitCall = "SalesmanOutwardDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Outward";
                    t_FormName = "SalesmanOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddSalesmanOutward":
                    t_RoutePath = "/SalesmanOutward/Index";
                    t_RouteInitCall = "SalesmanOutward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Outward";
                    t_FormName = "SalesmanOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditSalesmanOutward":
                    t_RoutePath = "/SalesmanOutward/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesmanOutward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Salesman Outward";
                    t_FormName = "SalesmanOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintSalesmanOutward":
                    t_RoutePath = "/SalesmanOutward/PrintInvoice/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "SalesmanOutwardPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Repair Outward Details */
                case "#RepairOutwardDetails":
                    t_RoutePath = "/RepairOutward/Details";
                    t_RouteInitCall = "RepairOutwardDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Outward";
                    t_FormName = "RepairOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddRepairOutward":
                    t_RoutePath = "/RepairOutward/Index";
                    t_RouteInitCall = "RepairOutward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Outward";
                    t_FormName = "RepairOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditRepairOutward":
                    t_RoutePath = "/RepairOutward/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "RepairOutward.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Repair Outward";
                    t_FormName = "RepairOutward";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#PrintRepairOutward":
                    t_RoutePath = "/RepairOutward/PrintRepairOutward/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "RepairOutwardPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Print";
                    t_FormName = "Print";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Customer Details */
                case "#CustomerDetails":
                    t_RoutePath = "/Customer/Details";
                    t_RouteInitCall = "CustomerDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Customer";
                    t_FormName = "Customer";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddCustomer":
                    t_RoutePath = "/Customer/Index";
                    t_RouteInitCall = "Customer.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Customer";
                    t_FormName = "Customer";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditCustomer":
                    t_RoutePath = "/Customer/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Customer.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Customer";
                    t_FormName = "Customer";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Stock Details */
                case "#StockDetails":
                    t_RoutePath = "/Reports/StockDetails";
                    t_RouteInitCall = "StockDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Stock Details";
                    t_FormName = "Stock Details";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Tax Details */
                case "#TaxReportDetails":
                    t_RoutePath = "/Reports/TaxDetails";
                    t_RouteInitCall = "TaxReportDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Tax Details";
                    t_FormName = "Tax Details";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */
                
                /* ==== */
                /* User Rights Details */
                case "#UserRightsDetails":
                    t_RoutePath = "/UserRights/Details";
                    t_RouteInitCall = "UserRights.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "User Rights Details";
                    t_FormName = "Rights";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Tax Details */
                case "#TaxDetails":
                    t_RoutePath = "/Master/TaxDetails/Tax";
                    t_RouteInitCall = "TaxDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Tax";
                    t_FormName = "Tax";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#AddTax":
                    t_RoutePath = "/Master/TaxIndex/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Tax.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Tax";
                    t_FormName = "Tax";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditTax":
                    t_RoutePath = "/Master/TaxIndex/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Tax.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Tax";
                    t_FormName = "Tax";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */
                
                
                /* ==== */
                /* Organization Details */
                case "#OrganizationDetails":
                    t_RoutePath = "/Organization/Index/1";
                    t_RouteInitCall = "Organization.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Organization Details";
                    t_FormName = "Organization";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* DataBase Backup Details */
                case "#DataBaseBackup":
                    t_RoutePath = "/DataBaseBackup/Details";
                    t_RouteInitCall = "DataBaseBackupDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "DataBase Backup Details";
                    t_FormName = "DataBase Backup";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */


                /* ==== */
                /* TroubleShoot */
                case "#TroubleShoot":
                    t_RoutePath = "/TroubleShoot/Index";
                    t_RouteInitCall = "TroubleShoot.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "TroubleShoot";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Settings Details */
                case "#Settings":
                    t_RoutePath = "/Home/Settings";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Setting Details";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */


            }
        }
        /* ==== */

        /* ==== */
        /* Success Message */
        ObjResponse = {
            Status: "Success",
            Message: "Route Matched Successfully",
            Result: {
                RouteName: t_HashCode.replace('#', ''),
                RouteURL: t_RoutePath,
                RouteComponents: t_RouteInitCall,
                RouteLayout: t_LayoutType,
                RouteFilter: t_FilterOption,
                RoutePageName: t_PageName,
                RouteFormName: t_FormName
            }
        }
        /* ==== */

    } catch (e) {

        /* ==== */
        /* Exception Message */
        ObjResponse = {
            Status: "Failure",
            Message: e.message,
            Result: null
        }
        /* ==== */

    }
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Clear the Query Params FROM URL */
Routing.Components.ClearQueryParams = function (Params) {
    //window.location.href = window.location.origin + '/Home' + window.location.hash;
    //window.location.replace(window.location.origin + '/Home' + window.location.hash);
}
/* ==== */

/* ==== */
/* Splite the Route HashCode */
Routing.Components.GetRouteHashCode = function (Params) {

    /* Declearation */
    var t_HashName = "";
    var t_RouteId = 0;
    var ObjResponse = {};

    if (typeof Params.HashName !== "undefined") {
        let lstHashKeys = Params.HashName.split("-");

        /* Set the HashName  */
        t_HashName = lstHashKeys[0];
        if (lstHashKeys.length == 2) {
            let t_ReadCookies = GeneralFunction.ReadCookies({ CookieName: lstHashKeys[1] });
            if (t_ReadCookies.Status == "Success") {
                /* Get the RouteId */
                t_RouteId = JSON.parse(t_ReadCookies.CookieValue).RouteId;
            }
        }
        else {
            /* ==== */
            /* Clear the Module Cookies */
            //GeneralFunction.RemoveCookies({ CookieName: t_HashName.replace('#', '') });
            /* ==== */
        }
    }

    /* Set the Response */
    ObjResponse = {
        RouteId: t_RouteId,
        HashName: t_HashName
    };
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Load the Menu Event */
Routing.Components.Menu = function (t_HashName) {
    /* ==== */
    /* Clear the Module Cookies */
    GeneralFunction.RemoveCookies({ CookieName: t_HashName.replace('#', '') });
    window.location.hash = t_HashName;
    /* ==== */
}
/* ==== */

/* ==== */
/* Load the User Rights Event */
Routing.Components.SetUserRights = function (FormName) {
    /* Read the Local Storage */
    var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
        StorageName: "UserRolesRights"
    });

    /* Read the Data From Cookies */
    if (ObjLocalStorageResponse.Status == "Success") {

        /* Set the Local Values */
        var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);
        if (ObjResult != null) {
            var ObjMatchedFormRights = JSON.parse(ObjResult).filter(F => F.FormName == FormName);
            if (ObjMatchedFormRights.length > 0) {

                /* ==== */
                /* Set Form Rights */
                $("#hdnDisplayRights").val(ObjMatchedFormRights[0].DisplayFlag);
                $("#hdnAddRights").val(ObjMatchedFormRights[0].AddFlag);
                $("#hdnEditRights").val(ObjMatchedFormRights[0].EditFlag);
                $("#hdnDeleteRights").val(ObjMatchedFormRights[0].DeleteFlag);
                /* ==== */

            } else {
                /* ==== */
                /* Set Default Rights */
                $("#hdnDisplayRights").val(false);
                $("#hdnAddRights").val(false);
                $("#hdnEditRights").val(false);
                $("#hdnDeleteRights").val(false);
                /* ==== */
            }
        }
    }
}
/* ==== */

/* ==== */
/* Load the User Menu Based On UserRights */
Routing.Components.SetUserRightsMenus = function () {

    /* Read the Local Storage */
    var ObjLocalStorageResponse = GeneralFunction.ReadlocalStorage({
        StorageName: "UserRolesRights"
    });

    /* Read the Data From Cookies */
    if (ObjLocalStorageResponse.Status == "Success") {

        var ObjResult = JSON.parse(ObjLocalStorageResponse.StorageValue);
        if (ObjResult != null) {

            /* ===== */
            /* Set the Local Values */
            var lstForms = JSON.parse(ObjResult);
            if (lstForms.length > 0) {
                for (var i = 0; i < lstForms.length; i++) {
                    /* Remove the Menus */
                    if (!lstForms[i].DisplayFlag) {
                        $("." + lstForms[i].FormName).remove();
                    }

                    /* Remove Short Cut Menus */
                    if (!lstForms[i].AddFlag) {
                        $(".Menu_" + lstForms[i].FormName).remove();
                    }

                }
            }
            /* ===== */

        }
    }
}
/* ==== */