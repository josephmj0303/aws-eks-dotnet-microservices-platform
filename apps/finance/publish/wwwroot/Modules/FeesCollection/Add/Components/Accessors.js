

/* ==== */
/* Fees Collection Components Setter */
FeesCollection.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.AdmissionNo !== "undefined" ? $("#txtAdmissionNo").val(Param.AdmissionNo) : $("#txtAdmissionNo").val("");
    typeof Param.PaidDate !== "undefined" ? $("#txtPaidDate").val(GeneralFunction.DateFormat(Param.PaidDate)) : $("#txtPaidDate").val("");
    typeof Param.Notes !== "undefined" ? $("#txtNotes").val(Param.Notes) : $("#txtNotes").val("");

    /* Payment Mode Visiblity */
    FeesCollection.Components.PaymentModeVisiblity();

}
/* ==== */


/* ==== */
/* Fees Collection Components Setter */
FeesCollection.Components.PendingFeesSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.ClassId !== "undefined" ? $("#hdnClassId").val(Param.ClassId) : $(".lblStudentName").val(0);
    typeof Param.SecId !== "undefined" ? $("#hdnSecId").val(Param.SecId) : $("#hdnSecId").val(0);
    typeof Param.StudentId !== "undefined" ? $("#hdnStudentId").val(Param.StudentId) : $("#hdnStudentId").val(0);

    typeof Param.StudentName !== "undefined" ? $(".lblStudentName").html(Param.StudentName) : $(".lblStudentName").html("");
    typeof Param.ClassSection !== "undefined" ? $(".lblClassSection").html(Param.ClassSection) : $(".lblClassSection").html("");

}
/* ==== */



/* ==== */
/* Pending Fees Components Getter */
FeesCollection.Components.PendingFeesGetter = function (Param) {

    /* Get the FeesCollection Response */
    var Response = {
        AdmissionNo: $("#txtAdmissionNo").val(),
    }
    return Response;
}
/* ==== */

/* ==== */
/* Assign Fees Components Getter */
FeesCollection.Components.Getter = function (Param) {

    /* Get the Fees Details */
    var lstFeesDetails = [];
    $(FeesCollection.Components.Table.BodyId + ' tr').each(function () {

        /* Push the Values to list */
        var CurrentRow = $(this);
        if ($($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.Selection]).find(".chkFeesSelect")).prop("checked")) {

            /* Push the Selected Fees Only */
            if (parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()) > 0) {
                lstFeesDetails.push({
                    ClassId: $("#hdnClassId").val(),
                    SecId: $("#hdnSecId").val(),
                    StudentId: $("#hdnStudentId").val(),
                    FeesId: $(CurrentRow.find("td")[FeesCollection.Components.TableColumns.FeesId]).text(),
                    PaidDate: moment($("#txtPaidDate").val() + " " + moment(new Date(new Date())).format('hh:mm A')).format('YYYY-MMM-DD HH:mm'),
                    PaidAmount: parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()).toFixed(2),
                    PaymentMode: $('#rdbCash').is(':checked') ? "Cash" : "Bank Transfer",
                    PaymentReference: $("#txtTransferReference").val(),
                    Notes: $("#txtNotes").val()
                });
            }

        }

    });

    var Response = {
        ReqFeesCollection: lstFeesDetails
    }
    return Response;
}
/* ==== */

/* ==== */
/* Payment Mode Based Visiblity */
FeesCollection.Components.PaymentModeVisiblity = function () {
    if ($('#rdbCash').is(':checked')) {
        $(".divReference").hide();
    }
    else {
        $(".divReference").show();
    }
}
/* ==== */