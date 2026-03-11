

/* ==== */
/* Dashboard Details Data Controllers */
class DataControllers_Dashboard {

    /* Receiver the Data from Server */
    static Pop_OverallSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetOverallSummaryDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        
                        /* Set Account Summery Details */
                        Dashboard.Components.QuickSummarySetter(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallJathaUsersSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetCategoeywiseGenderDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.QuickJathaUsersSummarSetter(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallCasteWiseSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetCastewiseGenderDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindJathagamCastewiseGenderDetails(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallCityWiseSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetCitywiseGenderDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindJathagamCitywiseGenderDetails(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallAgeWiseSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetAgewiseGenderDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindJathagamAgewiseGenderDetails(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallIncomeWiseSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetMonthlyIncomeWiseSummary",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindMonthlyIncomeWiseChart(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallYearWiseSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetYearWiseGenderSummary",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindYearWiseChart(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

    /* Receiver the Data from Server */
    static Pop_OverallYearWiseMarriedSummary(Params) {

        /* Load the Data Preloader Start */
        Dashboard.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Dashboard/GetYearWiseMarriedGenderSummary",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {


                        /* Set Account Summery Details */
                        Dashboard.Components.Pagination.BindYearWiseMarriedChart(JSON.parse(Response.result));
                    }
                }

            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                Dashboard.Components.DataProcessing(false);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error
                });
                /* ==== */
            }
        });


    }

}
/* ==== */