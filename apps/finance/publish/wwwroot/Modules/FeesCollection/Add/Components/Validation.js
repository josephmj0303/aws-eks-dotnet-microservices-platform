/* ==== */
/* Assign Fees Validation Components Objects */
FeesCollection.Components.Validation = {};
/* ==== */

/* ==== */
/* Assign Fees Components Validation */
FeesCollection.Components.Validation.Initialize = function (Params) {

    /* Home Screen Validation */
    $('#frmFeesCollection').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            AdmissionNo: {
                required: true
            },
            PaidDate: {
                required: true
            }
        },

        messages: {
            AdmissionNo: {
                required: "Admission No Is Required."
            },
            PaidDate: {
                required: "Paid Date Is Required."
            }
        },

        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },

        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error'); //.addClass('has-info');
            $(e).remove();
        }
    });

}
/* ==== */

/* ==== */
/* Assign Fees Components Validation Status */
FeesCollection.Components.Validation.Status = function (Params) {

    var t_Boolean = true;
    if (!$('#frmFeesCollection').valid()) {
        t_Boolean = false;
    }
    else if ($(FeesCollection.Components.Table.BodyId + " tr").length == 0) {

        /* ==== */
        /* Message Box */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Required",
            Message: "Fees information is required. Please ensure that the fees information is completed before proceeding."
        });
        /* ==== */
        t_Boolean = false;

    }
    else {

        var lstFeesDetails = [];
        var lstInvalidFeesDetails = [];
        $(FeesCollection.Components.Table.BodyId + ' tr').each(function () {

            /* Push the Values to list */
            var CurrentRow = $(this);
            if ($($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.Selection]).find(".chkFeesSelect")).prop("checked")) {

                /* Push the Selected Fees Only */
                if (parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()) > 0) {
                    

                    /* ==== */
                    /* Maximum Amount Received Validation */
                    $(CurrentRow).removeClass("Highlighted");
                    if (parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()) > parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.Balance]).text())) {
                        $(CurrentRow).addClass("Highlighted");
                        lstInvalidFeesDetails.push({
                            PaidDate: moment($("#txtPaidDate").val() + " " + moment(new Date(new Date())).format('hh:mm A')).format('YYYY-MMM-DD HH:mm'),
                            FeesId: $(CurrentRow.find("td")[FeesCollection.Components.TableColumns.FeesId]).text(),
                            PaidAmount: parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()).toFixed(2),
                            Notes: $("#txtNotes").val()
                        });
                    }
                    else {
                        lstFeesDetails.push({
                            PaidDate: moment($("#txtPaidDate").val() + " " + moment(new Date(new Date())).format('hh:mm A')).format('YYYY-MMM-DD HH:mm'),
                            FeesId: $(CurrentRow.find("td")[FeesCollection.Components.TableColumns.FeesId]).text(),
                            PaidAmount: parseFloat($(CurrentRow.find("td")[FeesCollection.Components.TableColumns.PayAmount]).text()).toFixed(2),
                            Notes: $("#txtNotes").val()
                        });
                    }
                    /* ==== */

                }
            }
        });

        if (lstInvalidFeesDetails.length > 0) {
            /* ==== */
            /* Message Box */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Required",
                Message: "It appears that the pay amount for the highlighted row exceeds the available balance."
            });
            /* ==== */
            t_Boolean = false;
        }
        else if (lstFeesDetails.length == 0) {
            /* ==== */
            /* Message Box */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Required",
                Message: "Kindly ensure that payment information is provided for at least one entry."
            });
            /* ==== */
            t_Boolean = false;
        }

        /* ==== */
        /* Check It's a Bank Transfer then Reference No Is Mandatory */
        if (t_Boolean) {
            if ($('#rdbOnline').is(':checked') && $("#txtTransferReference").val() == "") {

                /* ==== */
                /* Message Box */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Required",
                    Message: "Transfer Reference No Is Required."
                });
                /* ==== */

                t_Boolean = false;

            }
        }
        /* ==== */

        /* ==== */
        /* Check Required Fields */
        if (t_Boolean) {
            if ($("#hdnClassId").val() == "0" || $("#hdnSecId").val() == "0" || $("#hdnStudentId").val() == "0") {

                /* ==== */
                /* Message Box */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Required",
                    Message: "Required Fields Is Missing."
                });
                /* ==== */

                t_Boolean = false;
            }
        }
        /* ==== */

    }
    return t_Boolean;
}
/* ==== */