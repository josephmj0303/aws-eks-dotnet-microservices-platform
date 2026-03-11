/* ==== */
/* Initialization Of PageLoader  */
PageLoader = {};
/* ==== */

/* ==== */
/* Page Loader Show */
PageLoader.Show = function () {

    /* Hide the Page Body Content */
    $(".page-body").hide();

    /* Remove the Background Walpaper Image */
    $(".background-image-container").removeClass("background-image");

    /* Show the Preloader */
    $(".page-loader").show();

}
/* ==== */

/* ==== */
/* Page Loader Show */
PageLoader.Hide = function () {

    setTimeout(function () {

        /* Show the Preloader */
        $(".page-loader").hide();

        /* Remove the Background Walpaper Image */
        $(".background-image-container").addClass("background-image");

        /* Hide the Page Body Content */
        $(".page-body").show();

    }, 500);

}
/* ==== */


/* ==== */
/* Page Transation Start */
PageLoader.TransStart = function () {

    /* Show the Preloader */
    $(".Trans-Preloader").show();

    /* Hide the Page Body Content */
    $(".Trans-Content").hide();

}
/* ==== */


/* ==== */
/* Page Transation Stop */
PageLoader.TransStop = function () {

    setTimeout(function () {

        /* Show the Preloader */
        $(".Trans-Preloader").hide();

        /* Hide the Page Body Content */
        $(".Trans-Content").show();

    }, 500);

}
/* ==== */
