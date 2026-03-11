/* ==== */
/* Dashboard Details Pagination Components Objects */
Dashboard.Components.Pagination = {}
Dashboard.Components.Table = {
    HeadId: "#tbhBackupLogDet",
    BodyId: "#tbdBackupLogDet"
}
/* ==== */

/* ==== */
/* Dashboard Details Components Initialize */
Dashboard.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    Dashboard.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    Dashboard.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Class Components Table Clean */
Dashboard.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(Dashboard.Components.Table.BodyId).html("");

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
/* Dashboard Details Components Pagination Table Header */
Dashboard.Components.Pagination.TableHead = function () {


}
/* ==== */

/* ==== */
/* Dashboard Details Components Pagination Table Body */
Dashboard.Components.Pagination.TableBody = function (Result) {

}
/* ==== */


/* ==== */
/* Bind the Yearwise Outsanding Amount */
Dashboard.Components.Pagination.BindYearwiseOutsanding = function (Params) {
    var fill = false;
    $("#divYearwiseOutstandingDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_YearwiseOutsandingDetails");
    t_canvas.appendTo("#divYearwiseOutstandingDetails");


    try {

        Array.prototype.sum = function (prop) {
            var total = 0
            for (var i = 0, _len = this.length; i < _len; i++) {
                total += this[i][prop]
            }
            return total
        }

        /* ==== */
        /* Bind the Bar Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_YearwiseOutsandingDetails",
            ChartType: "bar",
            Data: {
                labels: Params.map(F => F.StartYear + "-" + F.EndYear),
                datasets: [{
                    label: "Outstanding",
                    data: Params.map(F => (F.TotalFeesAmount - F.TotalReceivedAmount)),
                    borderWidth: 1,
                    borderColor: "#d8504d",
                    fill: fill,
                    backgroundColor: "#d8504d "//'#9661c3'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        bounds: 'ticks',
                        scaleLabel: {
                            display: true,
                            labelString: 'Batch',
                            fontStyle: 'bold',
                            fontSize: 15,
                            fontColor: '#00000091'

                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Outstanding',
                            fontSize: 15,
                            fontStyle: 'bold',
                            fontColor: '#00000091'

                        }
                    }]
                }
            }
        });
        /* ==== */


    }
    catch (ex) {
        /* ==== */
        /* Execption Message Box Show */
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
/* Bind the Classwise Outsanding Amount */
Dashboard.Components.Pagination.BindClasswiseOutsanding = function (Params) {
    var fill = false;
    $("#divClasswiseOutstandingDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_ClasswiseOutsandingDetails");
    t_canvas.appendTo("#divClasswiseOutstandingDetails");


    try {

        Array.prototype.sum = function (prop) {
            var total = 0
            for (var i = 0, _len = this.length; i < _len; i++) {
                total += this[i][prop]
            }
            return total
        }

        /* ==== */
        /* Bind the Bar Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_ClasswiseOutsandingDetails",
            ChartType: "bar",
            Data: {
                labels: Params.map(F => F.ClassName),
                datasets: [{
                    label: "Outstanding",
                    data: Params.map(F => (F.TotalFeesAmount - F.TotalReceivedAmount)),
                    borderWidth: 1,
                    borderColor: "#d8504d",
                    fill: fill,
                    backgroundColor: "#d8504d "//'#9661c3'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        bounds: 'ticks',
                        scaleLabel: {
                            display: true,
                            labelString: 'Loan Scheme',
                            fontStyle: 'bold',
                            fontSize: 15,
                            fontColor: '#00000091'

                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Outstanding',
                            fontSize: 15,
                            fontStyle: 'bold',
                            fontColor: '#00000091'

                        }
                    }]
                }
            }
        });
        /* ==== */


    }
    catch (ex) {
        /* ==== */
        /* Execption Message Box Show */
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
/* Bind the Payment Method Analysis: Cash vs. Card Receipts */
Dashboard.Components.Pagination.BindPaymentMethodDetails = function (Params) {
    var fill = false;
    $("#divPaymentMethodDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_PaymentMethodDetails");
    t_canvas.appendTo("#divPaymentMethodDetails");
    var lstData = [];


    try {

        lstData = [{
            "PaymentMode": "Cash",
            "Amount": Params.CashAmount
        },
        {
            "PaymentMode": "Bank Transfer",
            "Amount": Params.BankTransferAmount
        }];

        /* ==== */
        /* Bind the Pie Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_PaymentMethodDetails",
            ChartType: "doughnut",
            Data: {
                labels: lstData.map(f => f.PaymentMode),
                datasets: [{
                    label: "Amount",
                    data: lstData.map(f => f.Amount),
                    borderWidth: 1,
                    backgroundColor: [
                        '#0088ce',
                        '#8064a1',
                        '#F3BB45',
                        '#A069C3',
                        '#478FCA'
                    ],
                    fill: fill
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                },
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                            var total = meta.total;
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                            return currentValue + ' (' + percentage + '%)';
                        },
                        title: function (tooltipItem, data) {
                            return data.labels[tooltipItem[0].index];
                        }
                    }
                }
            }
        });
        /* ==== */


    }
    catch (ex) {
        /* ==== */
        /* Execption Message Box Show */
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
/* Bind the Payment Method Analysis: Cash vs. Card Receipts */
Dashboard.Components.Pagination.BindApplicationPaymentMethodDetails = function (Params) {
    var fill = false;
    $("#divApplicationPaymentMethodDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_ApplicationPaymentMethodDetails");
    t_canvas.appendTo("#divApplicationPaymentMethodDetails");
    var lstData = [];


    try {

        lstData = [{
            "PaymentMode": "Cash",
            "Amount": Params.ApplicationCashAmount
        },
        {
            "PaymentMode": "Bank Transfer",
            "Amount": Params.ApplicationBankTransferAmount
        }];

        /* ==== */
        /* Bind the Pie Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_ApplicationPaymentMethodDetails",
            ChartType: "doughnut",
            Data: {
                labels: lstData.map(f => f.PaymentMode),
                datasets: [{
                    label: "Amount",
                    data: lstData.map(f => f.Amount),
                    borderWidth: 1,
                    backgroundColor: [
                        '#0088ce',
                        '#8064a1',
                        '#F3BB45',
                        '#A069C3',
                        '#478FCA'
                    ],
                    fill: fill
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                },
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                            var total = meta.total;
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                            return currentValue + ' (' + percentage + '%)';
                        },
                        title: function (tooltipItem, data) {
                            return data.labels[tooltipItem[0].index];
                        }
                    }
                }
            }
        });
        /* ==== */


    }
    catch (ex) {
        /* ==== */
        /* Execption Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */
    }
}
/* ==== */