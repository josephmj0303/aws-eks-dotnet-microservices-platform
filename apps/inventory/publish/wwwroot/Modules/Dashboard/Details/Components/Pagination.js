/* ==== */
/* Dashboard Details Pagination Components Objects */
Dashboard.Components.Pagination = {}
/* ==== */

/* ==== */
/* Dashboard Details Components Initialize */
Dashboard.Components.Pagination.Initialize = function () {

    /* Initialize Pagination Components */
    Pagination.Initialize({ EnableLazyLoad: true });

    /* Once Components Ready then Clean the Component Values */
    Dashboard.Components.Pagination.Cleaner();


}
/* ==== */

/* ==== */
/* Class Components Table Clean */
Dashboard.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        

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
/* Bind the Categorywise Jatham Details */
Dashboard.Components.Pagination.BindJathagamCategoryDetails = function (Params) {
    var fill = false;
    $("#divJathagamOutstandingDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_JathagamOutstandingDetails");
    t_canvas.appendTo("#divJathagamOutstandingDetails");
    var lstData = [];


    try {

        lstData = [{
            "JathagamCategory": "செவ்வாய் ஜாதகம்",
            "TotalMembers": Params.TotalCevvayJathagam
        },
        {
            "JathagamCategory": "ராகு கேது ஜாதகம்",
            "TotalMembers": Params.TotalRahuKetuJathagam
        },
        {
            "JathagamCategory": "ராகு கேது செவ்வாய் ஜாதகம்",
            "TotalMembers": Params.TotalRahuKetuCevvayJathagam
        },
        {
            "JathagamCategory": "சுத்த ஜாதகம்",
            "TotalMembers": Params.TotalSuthaJathagam
        }];

        /* ==== */
        /* Bind the Pie Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_JathagamOutstandingDetails",
            ChartType: "doughnut",
            Data: {
                labels: lstData.map(f => f.JathagamCategory),
                datasets: [{
                    label: "மணமக்கள்",
                    data: lstData.map(f => f.TotalMembers),
                    borderWidth: 1,
                    backgroundColor: [
                        '#f44336',
                        '#9c27b0',
                        '#3f51b5',
                        '#4caf50'
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
/* Bind the Categorywise Gender Details */
Dashboard.Components.Pagination.BindJathagamCategoryGenderDetails = function (Params) {
    var fill = false;
    $("#divJathagamCategorywiseGenderDetails").html("");
    var t_canvas = $(document.createElement('canvas'));
    t_canvas.attr("Id", "Canvas_JathagamCategorywiseGenderDetails");
    t_canvas.appendTo("#divJathagamCategorywiseGenderDetails");


    try {


        /* ==== */
        /* Bind the Bar Chart */
        GeneralFunction.RenderChart({
            TargetId: "Canvas_JathagamCategorywiseGenderDetails",
            ChartType: "bar",
            Data: {
                labels: Params.map(F => F.CategoryName),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(F => F.MaleCount),
                        borderWidth: 1,
                        borderColor: "#3498db",
                        backgroundColor: "#3498db"
                    },
                    {
                        label: "பெண்",
                        data: Params.map(F => F.FemaleCount),
                        borderWidth: 1,
                        borderColor: "#ff66cc",
                        backgroundColor: "#ff66cc"
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        bounds: 'ticks',
                        scaleLabel: {
                            display: false,
                            labelString: 'ஜாதகம்',
                            fontStyle: 'bold',
                            fontSize: 15,
                            fontColor: '#00000091'
                        },
                        stacked: false // set true for stacked bar if needed
                    }],
                    yAxes: [{
                        stacked: false,
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'எண்ணிக்கை',
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
/* Bind the Caste Gender Details */
Dashboard.Components.Pagination.BindJathagamCastewiseGenderDetails = function (Params) {
    $("#divJathagamCastewiseGenderDetails").html("");

    var t_canvas = $('<canvas id="Canvas_JathagamCastewiseGenderDetails"></canvas>');
    t_canvas.appendTo("#divJathagamCastewiseGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_JathagamCastewiseGenderDetails",
            ChartType: "horizontalBar", // 👈 horizontal bar chart for v2
            Data: {
                labels: Params.map(F => F.CasteName),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(F => F.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(F => F.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'சாதி விவரங்கள்'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'சாதி விவரங்கள்',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
    }
}
/* ==== */

/* ==== */
/* Bind the Citywise Gender Details */
Dashboard.Components.Pagination.BindJathagamCitywiseGenderDetails = function (Params) {
    $("#divJathagamCitywiseGenderDetails").html(""); // Reuse the same div

    var t_canvas = $('<canvas id="Canvas_JathagamCitywiseGenderDetails"></canvas>');
    t_canvas.appendTo("#divJathagamCitywiseGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_JathagamCitywiseGenderDetails",
            ChartType: "horizontalBar", // For Chart.js v2
            Data: {
                labels: Params.map(F => F.CityName),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(F => F.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(F => F.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'நகர வாரியாக ஆண் / பெண் விவரங்கள்'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'மாவட்டம்',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
    }
}
/* ==== */

/* ==== */
/* Bind the Agewise Gender Details */
Dashboard.Components.Pagination.BindJathagamAgewiseGenderDetails = function (Params) {
    $("#divJathagamAgewiseGenderDetails").html(""); // Reuse existing div

    var t_canvas = $('<canvas id="Canvas_JathagamAgewiseGenderDetails"></canvas>');
    t_canvas.appendTo("#divJathagamAgewiseGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_JathagamAgewiseGenderDetails",
            ChartType: "bar",
            Data: {
                labels: Params.map(F => F.AgeGroup),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(F => F.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(F => F.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'வயது பிரிவின்படி ஆண் / பெண் விவரங்கள்'
                },
                scales: {
                    xAxes: [{
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'வயது',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
    }
};
/* ==== */

/* ==== */
/* Bind the Incomewise Gender Details */
Dashboard.Components.Pagination.BindMonthlyIncomeWiseChart = function (Params) {
    $("#divJathagamIncomewiseGenderDetails").html("");

    var t_canvas = $('<canvas id="Canvas_MonthlyIncomeWise"></canvas>');
    t_canvas.appendTo("#divJathagamIncomewiseGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_MonthlyIncomeWise",
            ChartType: "bar",
            Data: {
                labels: Params.map(f => f.IncomeRange ?? "Not specified"),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(f => f.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(f => f.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: { display: true, position: 'top' },
                title: {
                    display: false,
                    text: 'மாத வருமான அடிப்படையிலான ஆண் / பெண் விவரங்கள்'
                },
                scales: {
                    xAxes: [{
                        ticks: { beginAtZero: true, precision: 0 },
                        scaleLabel: {
                            display: true,
                            labelString: 'மாத வருமானம்',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Error",
            Message: ex.message,
        });
    }
};
/* ==== */

/* ==== */
/* Bind the Year-wise Gender Details */
Dashboard.Components.Pagination.BindYearWiseChart = function (Params) {
    $("#divJathagamYearwiseGenderDetails").html("");

    var t_canvas = $('<canvas id="Canvas_YearWise"></canvas>');
    t_canvas.appendTo("#divJathagamYearwiseGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_YearWise",
            ChartType: "bar",
            Data: {
                labels: Params.map(f => f.Year),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(f => f.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(f => f.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: { display: true, position: 'top' },
                title: {
                    display: false,
                    text: 'ஆண்டு வாரியாக ஆண் / பெண் பதிவு விவரங்கள்',
                    fontSize: 16
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (value) {
                                return value.toString(); // Ensure year displays properly
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'ஆண்டு',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        ticks: { beginAtZero: true, precision: 0 },
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Error",
            Message: ex.message,
        });
    }
};
/* ==== */


/* ==== */
/* Bind the Year wise Married Gender Details */
Dashboard.Components.Pagination.BindYearWiseMarriedChart = function (Params) {
    $("#divJathagamYearwiseMarriedGenderDetails").html("");

    var t_canvas = $('<canvas id="Canvas_YearWiseMarried"></canvas>');
    t_canvas.appendTo("#divJathagamYearwiseMarriedGenderDetails");

    try {
        GeneralFunction.RenderChart({
            TargetId: "Canvas_YearWiseMarried",
            ChartType: "bar",
            Data: {
                labels: Params.map(f => f.Year),
                datasets: [
                    {
                        label: "ஆண்",
                        data: Params.map(f => f.MaleCount),
                        backgroundColor: "rgba(52, 152, 219, 0.7)",
                        borderColor: "rgba(52, 152, 219, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "பெண்",
                        data: Params.map(f => f.FemaleCount),
                        backgroundColor: "rgba(255, 105, 180, 0.7)",
                        borderColor: "rgba(255, 105, 180, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                legend: { display: true, position: 'top' },
                title: {
                    display: false,
                    text: 'ஆண்டு வாரியாக ஆண் / பெண் பதிவு விவரங்கள்',
                    fontSize: 16
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (value) {
                                return value.toString(); // Ensure year displays properly
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'ஆண்டு',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        ticks: { beginAtZero: true, precision: 0 },
                        scaleLabel: {
                            display: true,
                            labelString: 'எண்ணிக்கை',
                            fontSize: 14,
                            fontStyle: 'bold'
                        }
                    }]
                }
            }
        });
    } catch (ex) {
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Error",
            Message: ex.message,
        });
    }
};
/* ==== */
