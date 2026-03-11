/* ==== */
/* Login Components Objects */
var Login = {};
Login.Components = {};
/* ==== */

/* ==== */
/* Login Components Initialize */
Login.Components.Initialize = function () {

    /* Once Initialize Completed then Goto Ready State */
    Login.Components.Ready();
}
/* ==== */

/* ==== */
/* Login Components Ready */
Login.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Login.Components.Cleaner();

    /* Once Init the Components Validation */
    Login.Components.Validation.Initialize();

    /* Add Event Listener */
    Login.Components.AddEventListener();
}
/* ==== */

/* ==== */
/* Login Components Clean Up */
Login.Components.Cleaner = function () {

    /* Clear the Cookies */
    GeneralFunction.DeleteAllCookies();

    /* Clean UnWanted Elements */
    Login.Components.CleanUnwantedElements();

    /* Set the Default Values */
    var CleanUp = {
        UserName: "",
        Password: ""
    }
    Login.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Login Components Add Event Listener */
Login.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Login.Components.RemoveEventListener();

    /* Login Authentication */
    $("#SubmitLogin").on("click",function () {
        /* Check the User Authentication */
        Login.Components.Authentication();
    });

    
    /* Login Authentication In Enter Event */
    $('#frmLogin input').on("keydown", function (e) {
        if (e.keyCode == 13) {
            // Cancel the default action, if needed
            e.preventDefault();
            // Trigger the button element with a click
            document.getElementById("SubmitLogin").click();
        }
    });


    /* Form Slide Event */
    $(document).on('click', '.toolbar a[data-target]', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.widget-box.visible').removeClass('visible');//hide others
        $(target).addClass('visible');//show target
    });

    
}
/* ==== */

/* ==== */
/* Login Components Remove Active Event Listener */
Login.Components.RemoveEventListener = function () {

    /* Button Reset */
    $(document).off('click');
    $("#SubmitLogin").off("click");
    $("#frmLogin input").off("keydown");
    $(document).off('click', '.toolbar a[data-target]');

}
/* ==== */

/* ==== */
/* Login Button Processing Icon */
Login.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader("#SubmitLogin", Status, "Authenticating...", false);
}
/* ==== */

/* ==== */
/* Login Component Unwanted Elements */
Login.Components.CleanUnwantedElements = function () {

    /* Hide the Menu Bar */
    $(".nav-header-menu").hide();
    $(".navbar-fixed-top + .main-container").css("padding-top", "0px");

    /* Hide the Filters Button */
    $(".btnFilters").remove();

    /* Hide the Footer */
    $("footer").hide();

}
/* ==== */

/* ==== */
/* Sign out Elements */
Login.Components.SignOut = function(){

    var $window = $(window);
    var windowsize = $window.width();
    var width = "300";
    if (windowsize <= 480) {
        width = "63%";
    }

    /* Hide the Title Menu */
    $(".ui-dialog-titlebar").hide();

    $("#ModelLogout").removeClass('hide').dialog({
        resizable: false,
        width: width,
        title: "Logout Confirmation",
        modal: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round",
                click: function () {
                    $(this).dialog("close");

                    /* Logout */
                    window.location.href = "/#Login"

                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    /* Hide the Title Menu */
    $(".ui-dialog-titlebar").hide();
}
/* ==== */