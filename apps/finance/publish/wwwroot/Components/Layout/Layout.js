/* ==== */
/* Layout Components Objects */
var Layout = {};
Layout.Components = {};
/* ==== */

/* ==== */
/* Layout Components Initialize */
Layout.Components.Initialize = function () {

    /* Init the Routing List */
    Routing.Components.Initialize();

    /* Initialize Dropdown */
    Dropdown.Init({ TargetId: ".divSearchAdmissionYear", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divSearchClassSection", AddFlag: false, EditFlag: false, AllFlag: false });
    Dropdown.Init({ TargetId: ".divSearchStudents", AddFlag: false, EditFlag: false, AllFlag: false });

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
    Dropdown.Class.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divClass", ComponentValue: 0 });
    Dropdown.ClassSection.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divClassSection", ComponentValue: 0 });
    Dropdown.FeesCategory.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divFeesCategory", ComponentValue: 0 });
    Dropdown.AdmissionYear.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divAdmissionYear", ComponentValue: 0 });

    /* Load the Dropdown Details */
    Dropdown.AdmissionYear.LoadData({ TargetId: ".divSearchAdmissionYear", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    Dropdown.ClassSection.LoadData({ TargetId: ".divSearchClassSection", PageName: "Cookies", AllFlag: false, EnableOnChanged: false });

    /* Init the Roles Rights */
    UserRights.Components.PopulateRoleBasedRights($("#hdnRoleId").val());

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

    /* Inline scripts related to this page */
    jQuery(function ($) {
        $('.modal.aside').ace_aside();
        $('#aside-inside-modal').addClass('aside').ace_aside({ container: '#my-modal > .modal-dialog' });
        $(document).one('ajaxloadstart.page', function (e) {
            $('.modal.aside').remove();
            $(window).off('.aside')
        });
    });

    /* Load Student Event */
    $("#divSearchAdmissionYear_dropdown").change(function () {
        Layout.Components.LoadStudent();
    });

    /* Load Student Event */
    $("#divSearchClassSection_dropdown").change(function () {
        Layout.Components.LoadStudent();
    });

    /* Load Student Event */
    $(".btnSearchCopybutton").click(function () {

        if ($("#divSearchStudents_dropdown :selected").text() != '') {

            /* Read the Values From Dropdown */
            var t_AdmissionNo = JSON.parse($("#divSearchStudents_dropdown :selected").attr("data-value")).admissionNo
            navigator.clipboard.writeText(t_AdmissionNo)
                .then(() => {
                    /* Copy Message */
                    GeneralFunction.Message({
                        Status: "Success",
                        Title: "Success",
                        Message: "Copied the text",
                    });
                })
                .catch(err => {
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Failure",
                        Message: err,
                    });
                });
        }

    });


    /* Load Student Event */
    $(".btnSearchViewDetails").on('click', function () {
        $.ajax({
            type: "POST",
            url: "/Student/GetStudent",
            data: {
                StudentId: $("#divSearchStudents_dropdown").val(),
            },
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        var ObjResponse = JSON.parse(Response.result.data1);
                        if (ObjResponse != null) {
                            typeof ObjResponse.FathersName !== "undefined" ? $(".txtSearchFathersName").html(ObjResponse.FathersName) : $(".txtSearchFathersName").html("");
                            typeof ObjResponse.FathersTelephoneNo !== "undefined" ? $(".txtSearchFathersTelephoneNo").html(ObjResponse.FathersTelephoneNo) : $(".txtSearchFathersTelephoneNo").html("");
                            typeof ObjResponse.FathersWhatsappNo !== "undefined" ? $(".txtSearchFathersWhatsappNo").html(ObjResponse.FathersWhatsappNo) : $(".txtSearchFathersWhatsappNo").html("");
                            typeof ObjResponse.MothersName !== "undefined" ? $(".txtSearchMothersName").html(ObjResponse.MothersName) : $(".txtSearchMothersName").val("");
                            typeof ObjResponse.MothersTelephoneNo !== "undefined" ? $(".txtSearchMothersTelephoneNo").html(ObjResponse.MothersTelephoneNo) : $(".txtSearchMothersTelephoneNo").html("");
                            typeof ObjResponse.MothersWhatsappNo !== "undefined" ? $(".txtSearchMothersWhatsappNo").html(ObjResponse.MothersWhatsappNo) : $(".txtSearchMothersWhatsappNo").html("");
                            typeof ObjResponse.PresentAddress !== "undefined" ? $(".txtSearchPresentAddress").html(ObjResponse.PresentAddress) : $(".txtSearchPresentAddress").html("");
                            typeof ObjResponse.PermanentAddress !== "undefined" ? $(".txtSearchPermanentAddress").html(ObjResponse.PermanentAddress) : $(".txtSearchPermanentAddress").html("");
                            typeof ObjResponse.Studenttype !== "undefined" ? $(".txtSearchStudentType").html(ObjResponse.Studenttype) : $(".txtSearchStudentType").html("");
                            typeof ObjResponse.Stage !== "undefined" ? $(".txtSearchStage").html(ObjResponse.Stage) : $(".txtSearchStage").html("");
                        }
                        /* ==== */

                    }
                }
            },
            error: function (req, status, error) {

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error,
                });
                /* ==== */
            }
        });

    });

}
/* ==== */

/* ==== */
/* Layout Components Remove Active Event Listener */
Layout.Components.RemoveEventListener = function () {
    $(window).off('scroll');
    $("#divSearchAdmissionYear_dropdown").off('change');
    $("#divSearchClassSection_dropdown").off('change');
    $(".btnSearchCopybutton").off('click');
    $(".btnSearchViewDetails").off('click');
}
/* ==== */


/* ==== */
/* Load the Student Based On Batch & Class */
Layout.Components.LoadStudent = function () {

    /* Decleartion */
    var t_ClassId = 0, t_SecId = 0;
    var t_StartYear = "", t_EndYear = "";

    /* Get the Class & Section Details */
    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divSearchClassSection" }).Value;
    var t_ClassSec = Dropdown.GetSelectedOption({ TargetId: ".divSearchClassSection" }).Text;
    if (t_ClassSecId != null && t_ClassSecId != "") {
        t_ClassId = t_ClassSecId.split("_")[0];
        t_SecId = t_ClassSecId.split("_")[1]
    }

    /* Get the Academy Year */
    var t_AcademyYear = Dropdown.GetSelectedOption({ TargetId: ".divSearchAdmissionYear" }).Value;
    if (t_AcademyYear != "") {
        t_StartYear = t_AcademyYear.split("-")[0];
        t_EndYear = t_AcademyYear.split("-")[1];
    }

    /* ==== */
    /* Load the Students */
    if (t_ClassId != 0) {
        Dropdown.Student.LoadData({ TargetId: ".divSearchStudents", StartYear: t_StartYear, EndYear: t_EndYear, ClassId: t_ClassId, SecId: t_SecId, PageName: "Cookies", AllFlag: false, EnableOnChanged: false });
    }
    /* ==== */

}
/* ==== */