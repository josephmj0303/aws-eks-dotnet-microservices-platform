
/* ==== */
/* OutPass Components Save */
OutPass.Components.Save = function () {
    /* Send Resquest Server */
    if (OutPass.Components.Validation.Status()) {
        DataControllers_OutPass.Puch(OutPass.Components.Getter({}));
    }
}
/* ==== */

/* ==== */
/* OutPass Components Back */
OutPass.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */

/* ==== */
/* OutPass Components Populate */
OutPass.Components.Populate = function (t_RouteId) {
    /* Load the OutPass Details */
    if (t_RouteId != "") {

        /* Once Components Ready then Clean the Component Values */
        OutPass.Components.Pagination.Cleaner();

        /* Load the Student Details */
        DataControllers_OutPass.Pop({
            AdmissionNo: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */


/* ==== */
/* OutPass Components Populate */
OutPass.Components.PopulateImage = function () {

        var t_StudentId = OutPass.Components.CurrentStudentData.StudentDetails.StudentId;

        /* Load the Student Details */
        DataControllers_OutPass.PopImage({
            StudentId: t_StudentId,
            Relation: $("#txtRelation").val()
        });
}
/* ==== */


/* ==== */
/* OutPass Delete Components */
OutPass.Components.Delete = function (t_RouteId) {
    /* Load the OutPass Details */
    if (t_RouteId != "0") {
        DataControllers_OutPass.Delete({
            OutPassId: t_RouteId
        });
    }
    /* ==== */
}
/* ==== */


/* ==== */
/* OutPass Delete Conformation */
OutPass.Components.DeleteConformation = function () {

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

                    /* Delete the OutPass */
                    OutPass.Components.Delete($("#hdnOutPassId").val());
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
/* OutPass Component Router */
OutPass.Components.Router = function (RouteId, RoutePage) {
    switch (RoutePage) {

        case "Print":
            /* Set the Modify Form Routing */
            GeneralFunction.SetRouting("StudentOutPassPrint", RouteId);
            break;

    }
}
/* ==== */
