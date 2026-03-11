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
                /* Dashboard */
                case "#Dashboard":
                    t_RoutePath = "/Dashboard/Details";
                    t_RouteInitCall = "Dashboard.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Dashboard";
                    t_FormName = "Dashboard";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Class Details */
                case "#BatchDetails":
                    t_RoutePath = "/Batch/Details";
                    t_RouteInitCall = "BatchDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Batch Details";
                    t_FormName = "Batch";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddBatch":
                    t_RoutePath = "/Batch/Index";
                    t_RouteInitCall = "Batch.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Batch";
                    t_FormName = "Batch";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditBatch":
                    t_RoutePath = "/Batch/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Batch.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Batch";
                    t_FormName = "Batch";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Class Details */
                case "#ClassDetails":
                    t_RoutePath = "/Class/Details";
                    t_RouteInitCall = "ClassDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Class Details";
                    t_FormName = "Class";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddClass":
                    t_RoutePath = "/Class/Index";
                    t_RouteInitCall = "Class.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Class";
                    t_FormName = "Class";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditClass":
                    t_RoutePath = "/Class/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Class.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Class";
                    t_FormName = "Class";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Section Details */
                case "#SectionDetails":
                    t_RoutePath = "/Section/Details";
                    t_RouteInitCall = "SectionDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Section Details";
                    t_FormName = "Section";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddSection":
                    t_RoutePath = "/Section/Index";
                    t_RouteInitCall = "Section.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Section";
                    t_FormName = "Section";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditSection":
                    t_RoutePath = "/Section/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Section.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Section";
                    t_FormName = "Section";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* FeesCategory Details */
                case "#FeesCategoryDetails":
                    t_RoutePath = "/FeesCategory/Details";
                    t_RouteInitCall = "FeesCategoryDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Fees Category Details";
                    t_FormName = "FeesCategory";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddFeesCategory":
                    t_RoutePath = "/FeesCategory/Index";
                    t_RouteInitCall = "FeesCategory.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "FeesCategory";
                    t_FormName = "FeesCategory";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditFeesCategory":
                    t_RoutePath = "/FeesCategory/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "FeesCategory.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "FeesCategory";
                    t_FormName = "FeesCategory";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Assign Fees Details */
                case "#AssignFeesDetails":
                    t_RoutePath = "/AssignFees/Details";
                    t_RouteInitCall = "AssignFeesDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Assign Fees Details";
                    t_FormName = "AssignFees";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddAssignFees":
                    t_RoutePath = "/AssignFees/Index";
                    t_RouteInitCall = "AssignFees.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "AssignFees";
                    t_FormName = "AssignFees";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditAssignFees":
                    t_RoutePath = "/AssignFees/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "AssignFees.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "AssignFees";
                    t_FormName = "AssignFees";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#AssignedStudentFees":
                    t_RoutePath = "/AssignFees/StudentFeeDetails/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "AssignStudentFeesDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Assigned Student Fees";
                    t_FormName = "AssignedStudentFees";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#EditStudentFees":
                    t_RoutePath = "/AssignFees/StudentFees/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "AssignStudentFees.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Assigned Student Fees";
                    t_FormName = "AssignedStudentFees";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Fees Collection Details */
                case "#FeesCollectionDetails":
                    t_RoutePath = "/FeesCollection/Details";
                    t_RouteInitCall = "FeesCollectionDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Fees Collection Details";
                    t_FormName = "FeesCollection";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#CancelCollectionDetails":
                    t_RoutePath = "/FeesCollection/CancelDetails";
                    t_RouteInitCall = "FeesCollectionCancelDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Fees Cancel Collection Details";
                    t_FormName = "FeesCancelCollection";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddFeesCollection":
                    t_RoutePath = "/FeesCollection/Index";
                    t_RouteInitCall = "FeesCollection.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "FeesCollection";
                    t_FormName = "FeesCollection";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#FeesReceipt":
                    t_RoutePath = "/FeesCollection/Receipt/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "FeesReceipt.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Fees Receipt";
                    t_FormName = "FeesReceipt";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Classwise Details */
                case "#ClasswiseOutStanding":
                    t_RoutePath = "/Reports/ClasswiseOutStanding";
                    t_RouteInitCall = "ClasswiseOutStanding.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "ClasswiseOutStandingReport";
                    t_FormName = "ClasswiseOutStandingReport";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Studentwise Details */
                case "#StudentwiseOutStanding":
                    t_RoutePath = "/Reports/StudentwiseOutStanding";
                    t_RouteInitCall = "StudentwiseOutStanding.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "StudentwiseOutStandingReport";
                    t_FormName = "StudentwiseOutStandingReport";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Student Summery */
                case "#StudentSummary":
                    t_RoutePath = "/Reports/StudentSummary";
                    t_RouteInitCall = "StudentSummary.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "StudentSummary";
                    t_FormName = "StudentSummary";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* OutPass Details Report */
                case "#OutPassDetails":
                    t_RoutePath = "/Reports/OutPassReport";
                    t_RouteInitCall = "OutPassReport.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "OutPassReport";
                    t_FormName = "OutPassReport";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */


                /* ==== */
                /* Buswise OutPass Report Details Report */
                case "#BuswiseOutPassReport":
                    t_RoutePath = "/Reports/BuswiseOutPassReport";
                    t_RouteInitCall = "BuswiseOutPassDetails.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "BuswiseOutPassReport";
                    t_FormName = "BuswiseOutPassReport";
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
                /* Application Forms Details */
                case "#ApplicationFormDetails":
                    t_RoutePath = "/ApplicationForm/Details";
                    t_RouteInitCall = "ApplicationFormDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Application Form Details";
                    t_FormName = "Application Form";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#AddApplicationForm":
                    t_RoutePath = "/ApplicationForm/Index";
                    t_RouteInitCall = "ApplicationForm.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Application Form";
                    t_FormName = "Application Form";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#EditApplicationForm":
                    t_RoutePath = "/ApplicationForm/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "ApplicationForm.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Application Form";
                    t_FormName = "Application Form";
                    Routing.Components.ClearQueryParams();
                    break;
                case "#ApplicationFeesReceipt":
                    t_RoutePath = "/ApplicationForm/Receipt/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "ApplicationFeesReceipt.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Application Fees Receipt";
                    t_FormName = "ApplicationFeesReceipt";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Student Details */
                case "#StudentDetails":
                    t_RoutePath = "/Student/Details";
                    t_RouteInitCall = "StudentDet.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Student Details";
                    t_FormName = "Student";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#AddStudent":
                    t_RoutePath = "/Student/Index";
                    t_RouteInitCall = "Student.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Student";
                    t_FormName = "Student";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#EditStudent":
                    t_RoutePath = "/Student/Index/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "Student.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Student";
                    t_FormName = "Student";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#BulkStudentUpload":
                    t_RoutePath = "/Student/StudentUpload";
                    t_RouteInitCall = "StudentUpload.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Student";
                    t_FormName = "Student";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#StudentMigration":
                    t_RoutePath = "/Student/Migration";
                    t_RouteInitCall = "StudentMigration.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "StudentMigration";
                    t_FormName = "StudentMigration";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#StudentPromotion":
                    t_RoutePath = "/Student/Promotion";
                    t_RouteInitCall = "StudentPromotion.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "StudentPromotion";
                    t_FormName = "StudentPromotion";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#StudentOutPass":
                    t_RoutePath = "/Student/OutPass";
                    t_RouteInitCall = "OutPass.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "StudentOutPass";
                    t_FormName = "StudentOutPass";
                    Routing.Components.ClearQueryParams();
                    break;

                case "#StudentOutPassPrint":
                    t_RoutePath = "/Student/OutPassPrint/" + ObjRouteHash.RouteId;
                    t_RouteInitCall = "OutPassPrint.Components.Initialize()";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "OutPassPrint";
                    t_FormName = "OutPassPrint";
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
                /* Report Details */
                case "#Reports":
                    t_RoutePath = "/Menu/Reports";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Report Details";
                    t_FormName = "";
                    Routing.Components.ClearQueryParams();
                    break;
                /* ==== */

                /* ==== */
                /* Settings Details */
                case "#Settings":
                    t_RoutePath = "/Menu/Settings";
                    t_RouteInitCall = "";
                    t_LayoutType = "BackendEnd";
                    t_FilterOption = false;
                    t_PageName = "Setting Details";
                    t_FormName = "";
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
    var t_RouteFilters = null;
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
                t_RouteFilters = JSON.parse(t_ReadCookies.CookieValue).RouteFilters;
            }
        }
    }

    /* Set the Response */
    ObjResponse = {
        HashName: t_HashName,
        RouteId: t_RouteId,
        RouteFilters: t_RouteFilters
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