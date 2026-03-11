/* ==== */
/* Pagination Components Objects */
Pagination = {}
/* ==== */

/* ==== */
/* Pagination Components Initialize */
Pagination.Initialize = function (Param) {

    /* Init the Events */
    Pagination.AddEventListener(Param);

}
/* ==== */

/* ==== */
/* Pagination Components Add Active Event Listener */
Pagination.AddEventListener = function (Param) {

    /* Best Practices For Remove Unused Event Listener */
    Pagination.RemoveEventListener();

    /* ==== */
    /* Add the Pagination Events */
    $("#btnMFirst").click(function () {

        /* Clear the User Details Cookies */
        GeneralFunction.RemoveCookies({
            CookieName: GeneralFunction.GetCuurentHashName()
        });

        /* Move to First Record */
        $("#hdnPageNo").val("1");

        /* Send the Pagination Populate Request */
        if (typeof Pagination.Populate !== "undefined") {
            Pagination.Populate();
        }

    });

    $("#btnMLast").click(function () {

        /* Clear the User Details Cookies */
        GeneralFunction.RemoveCookies({
            CookieName: GeneralFunction.GetCuurentHashName()
        });

        /* Move to Last Record */
        $("#hdnPageNo").val($("#hdnTotalPage").val());

        /* Send the Pagination Populate Request */
        if (typeof Pagination.Populate !== "undefined") {
            Pagination.Populate();
        }

    });

    $("#btnMNext").click(function () {
        if (parseInt($("#hdnPageNo").val()) != parseInt($("#hdnTotalPage").val())) {

            /* Clear the User Details Cookies */
            GeneralFunction.RemoveCookies({
                CookieName: GeneralFunction.GetCuurentHashName()
            });

            /* Move to Next Record */
            if (parseInt($("#hdnPageNo").val()) < parseInt($("#hdnTotalPage").val())) {
                $("#hdnPageNo").val(parseInt(($("#hdnPageNo").val() * 1) + 1));
            } else {
                $("#hdnPageNo").val($("#hdnTotalPage").val());
            }

            /* Send the Pagination Populate Request */
            if (typeof Pagination.Populate !== "undefined") {
                Pagination.Populate();
            }

        }
    });

    $("#btnPreviews").click(function () {

        /* Clear the User Details Cookies */
        GeneralFunction.RemoveCookies({
            CookieName: GeneralFunction.GetCuurentHashName()
        });

        if (parseInt($("#hdnPageNo").val()) > 1) {
            $("#hdnPageNo").val(parseInt(($("#hdnPageNo").val() * 1) - 1));
        } else {
            $("#hdnPageNo").val(1);
        }

        /* Send the Pagination Populate Request */
        if (typeof Pagination.Populate !== "undefined") {
            Pagination.Populate();
        }

    });
    /* ==== */

    /* ==== */
    /* Load Details based on Lasy Loading scroll */
    if (typeof Param.EnableLazyLoad !== "undefined") {
        if (GeneralFunction.IsMobileMode()) {
            $(window).scroll(function () {

                let wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
                let scrolltrigger = 0.85;
                if ((wintop / (docheight - winheight)) > scrolltrigger) {
                    /* Call Next Page */
                    $("#btnMNext").click();
                }

            });
        }
    }
    /* ==== */
}
/* ==== */

/* ==== */
/* Pagination Components Remove Active Event Listener */
Pagination.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $("#btnMFirst").off("click");
    $("#btnMLast").off("click");
    $("#btnMNext").off("click");
    $("#btnPreviews").off("click");

}
/* ==== */

/* ==== */
/* Set the Pagination Value */
Pagination.SetProperties = function (Params) {
    $("#hdnPageNo").val(Params.PageNo);
    $("#hdnTotalPage").val(Params.TotalPages);
    $("#lblCurrentPage").html((Params.TotalPages == 0 ? 0 : Params.PageNo));
    $("#lblTotalPages").html(Params.TotalPages);
}
/* ==== */

/* ==== */
/* Get the Pagination Value */
Pagination.GetProperties = function () {
    var Response = {
        PageNo: $("#hdnPageNo").val(),
        TotalPage: $("#hdnTotalPage").val(),
        Sort: "",
        SortBy: "",
        Search: $(".Search-Keyword-Input").val()
    }
    return Response;
}
/* ==== */