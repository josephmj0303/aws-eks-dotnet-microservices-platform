/* ==== */
/* Stock Details Pagination Components Objects */
ProductPrice.Components.Pagination = {}
ProductPrice.Components.Table = {
    HeadId: "#tbhProductPrice",
    BodyId: "#tbdProductPrice"
}
ProductPrice.Components.TableColumns = {};
/* ==== */

/* ==== */
/* Stock Details Components Initialize */
ProductPrice.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    ProductPrice.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    ProductPrice.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Stock Components Table Clean */
ProductPrice.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(ProductPrice.Components.Table.BodyId).html("");

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
/* Stock Details Components Pagination Table Header */
ProductPrice.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("ProductId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("Product Code");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Product Name");
        t_th.addClass("text-left bolder background-gradient");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Price");
        t_th.addClass("text-right bolder background-gradient");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(ProductPrice.Components.Table.HeadId);

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
/* Stock Details Components Pagination Table Body */
ProductPrice.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        /* ==== */
        /* Bind Table Column Values */
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].ProductId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].ProductId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Product Code */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ProductCode);
            t_td.appendTo(t_tr);

            /* Product Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].ProductName);
            t_td.appendTo(t_tr);
            
            /* Product Price */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-right");
            t_td.text(parseFloat(Result[i].Price * 1).toFixed(2));
            t_td.appendTo(t_tr);

            t_tr.appendTo(ProductPrice.Components.Table.BodyId);
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
/* ProductPrice Record Delete */
ProductPrice.Components.Pagination.DeleteRecord = function (RouteId) {

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

                    /* Delete the Stock */
                    ProductPrice.Components.Delete(RouteId);
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
