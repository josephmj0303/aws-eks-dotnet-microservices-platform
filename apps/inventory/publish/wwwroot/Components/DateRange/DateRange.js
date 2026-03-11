/* ==== */
/* Initialization Of Date Range */
var DateRange = {};
DateRange.StartDate = new Date();
DateRange.EndDate = new Date();
DateRange.DateRange = "Today";
/* ==== */

/* ==== */
/* Date Range UI Initialization */
DateRange.Init = function (Params) {

    /* Declearation */
    var t_TargetId = "";
    var t_RangeName = "";
    var t_IsValidParams = true;
    var t_DatePickerDiv = null;
    var t_ReturnMessage = "";



    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Date Range Load targetId ==== */
    if (typeof Params.RangeName !== "undefined") {
        t_RangeName = Params.RangeName;
    }
    /* ===== */

    /* ==== Mandatory Params ==== */
    /* ==== E-Learning Date Range Load targetId ==== */
    if (typeof Params.TargetId !== "undefined") {
        t_TargetId = Params.TargetId;
    }
    /* ===== */

    /* ===== */
    /* ==== Mandatory Params Validation ==== */
    if (t_TargetId == "" && t_IsValidParams == true) { t_IsValidParams = false; t_ReturnMessage = "TargetId is Required"; }
    /* ===== */

    var ObjResponse;
    if (t_IsValidParams) {

        try {

            /* Clear the Previous Element */
            $(t_TargetId).html("");

            /* Bind the Date Range */
            $(t_TargetId).append("<div class=\"input-daterange input-group hide\">"
                + "<input type=\"text\" id=\"txtStartDate\" class=\"form-control external-textbox\" name=\"start\">"
                + "<span class=\"input-group-addon\">"
                + "<i class=\"fa fa-exchange\"></i>"
                + "</span>"
                + "<input type=\"text\" id=\"txtEndDate\" class=\"form-control external-textbox\" name=\"end\">"
                + "</div>");

            /* Bind the Display */
            $(t_TargetId).append("<span class=\"form-control external-textbox DateRange\">"
                + t_RangeName
                + "</span>");

            /* Enable the Events */
            setTimeout(DateRange.AddEventListener(Params), 500);

        }
        catch (e) {

            /* ==== */
            /* Exception Message */
            t_ReturnMessage = e.message;
            /* ==== */

        }
    }
    ObjResponse = { Status: (t_IsValidParams ? "Sucess" : "Failure"), Message: t_ReturnMessage };
    return ObjResponse;
}
/* ==== */

/* ==== */
/* Date Range Add Event Listener */
DateRange.AddEventListener = function (Params) {

    var t_StartDate = null;
    var t_EndDate = null;

    switch (Params.RangeName) {
        case "Today":
            t_StartDate = moment();
            t_EndDate = moment();
            break;

        case "Yesterday":
            t_StartDate = moment().subtract(1, 'days');
            t_EndDate = moment().subtract(1, 'days');
            break;

        case "Tomorrow":
            t_StartDate = moment().add(1, 'days');
            t_EndDate = moment().add(1, 'days');
            break;

        case "Last 7 Days":
            t_StartDate = moment().subtract(6, 'days');
            t_EndDate = moment();
            break;

        case "Last 30 Days":
            t_StartDate = moment().subtract(29, 'days');
            t_EndDate = moment();
            break;

        case "This Month":
            t_StartDate = moment().startOf('month');
            t_EndDate = moment().endOf('month');
            break;

        case "Next Month":
            t_StartDate = moment().add(1, 'month').startOf('month');
            t_EndDate = moment().add(1, 'month').endOf('month');
            break;

        case "Last Month":
            t_StartDate = moment().subtract(1, 'month').startOf('month');
            t_EndDate = moment().subtract(1, 'month').endOf('month');
            break;
    }

    /* Set the Start & End Date */
    DateRange.DateRange = Params.RangeName;
    DateRange.StartDate = t_StartDate.format('DD-MMM-YYYY');
    DateRange.EndDate = t_EndDate.format('DD-MMM-YYYY');

    $("#txtStartDate").val(t_StartDate.format('DD-MMM-YYYY'));
    $("#txtEndDate").val(t_EndDate.format('DD-MMM-YYYY'));

    function cb(start, end, label) {
        $("#txtStartDate").val(start.format('DD-MMM-YYYY'));
        $("#txtEndDate").val(end.format('DD-MMM-YYYY'));

        DateRange.DateRange = label;
        DateRange.StartDate = start.format('DD-MMM-YYYY');
        DateRange.EndDate = end.format('DD-MMM-YYYY');

        $('.DateRange').html(label);
        $('.DateRange .red').hide();

        if (typeof DateRange.OnChanged !== "undefined") {
            DateRange.OnChanged();
        }
    }

    $('.DateRange').daterangepicker({
        startDate: t_StartDate,
        endDate: t_EndDate,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Tomorrow': [moment().add(1, 'days'), moment().add(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Next Month': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')],
            'This Year': [moment().startOf('year'), moment().endOf('year')],
            'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
        }
    }, cb);
    cb(start, end);
}
/* ==== */

/* ==== */
/* Get the Date Values */
DateRange.GetDate = function (Params) {
    var Response = {
        StartDate: DateRange.StartDate,
        EndDate: DateRange.EndDate
    }
    return Response;
}
/* ==== */


/* ==== */
/* Get the Date Values */
DateRange.SetDate = function (Params) {

    var t_StartDate = null;
    var t_EndDate = null;

    switch (Params.RangeName) {
        case "Today":
            t_StartDate = moment();
            t_EndDate = moment();
            break;

        case "Yesterday":
            t_StartDate = moment().subtract(1, 'days');
            t_EndDate = moment().subtract(1, 'days');
            break;

        case "Last 7 Days":
            t_StartDate = moment().subtract(6, 'days');
            t_EndDate = moment();
            break;

        case "Last 30 Days":
            t_StartDate = moment().subtract(29, 'days');
            t_EndDate = moment();
            break;

        case "This Month":
            t_StartDate = moment().startOf('month');
            t_EndDate = moment().endOf('month');
            break;

        case "Last Month":
            t_StartDate = moment().subtract(1, 'month').startOf('month');
            t_EndDate = moment().subtract(1, 'month').endOf('month');
            break;
    }

    /* Set the Start & End Date */
    DateRange.StartDate = t_StartDate.format('DD-MMM-YYYY');
    DateRange.EndDate = t_EndDate.format('DD-MMM-YYYY');
    DateRange.DateRange = Params.RangeName;

    $("#txtStartDate").val(t_StartDate.format('DD-MMM-YYYY'));
    $("#txtEndDate").val(t_EndDate.format('DD-MMM-YYYY'));

    function cb(start, end, label) {
        $("#txtStartDate").val(start.format('DD-MMM-YYYY'));
        $("#txtEndDate").val(end.format('DD-MMM-YYYY'));

        DateRange.DateRange = label;
        DateRange.StartDate = start.format('DD-MMM-YYYY');
        DateRange.EndDate = end.format('DD-MMM-YYYY');

        $('.DateRange').html(label);
        $('.DateRange .red').hide();

        if (typeof DateRange.OnChanged !== "undefined") {
            DateRange.OnChanged();
        }
    }

    $("#txtStartDate").val(Params.StartDate);
    $("#txtEndDate").val(Params.EndDate);
    return Response;
}
/* ==== */