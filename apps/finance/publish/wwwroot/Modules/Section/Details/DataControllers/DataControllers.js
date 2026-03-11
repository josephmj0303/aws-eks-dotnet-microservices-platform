

/* ==== */
/* Section Details Data Controllers */
class DataControllers_SectionDet {

    /* Send the Data to Server */
    static Puch(Params) {

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        /* Load the Data Preloader Start */
        SectionDet.Components.DataProcessing(true);

        $.ajax({
            type: "POST",
            url: "/Section/GetSectionsDetails",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                /* Load the Data Preloader Stop */
                SectionDet.Components.DataProcessing(false);


                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        SectionDet.Components.Setter({
                            PageNo: Response.result.value.pageNo,
                            TotalPages: Response.result.value.totalPages,
                            Data: JSON.parse(Response.result.value.data)
                        });

                    }
                }
            },
            error: function (req, status, error) {

                /* Load the Data Preloader Stop */
                SectionDet.Components.DataProcessing(false);

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

    /* Delete the Data from Server */
    static Delete(Params) {

        $.ajax({
            type: "POST",
            url: "/Section/DeleteSection",
            data: Params,
            dataType: "text",
            async: true,
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);

                    /* ==== */
                    /* Message */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message
                    });
                    /* ==== */

                    if (Response.status == "Success") {
                        /* Refresh */
                        $(".RN" + Params.SecId).remove();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.ClassSection !== "undefined") {
                                Dropdown.ClassSection.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divClassSection", ComponentValue: 0 });
                            }
                        }
                    }
                }
            },
            error: function (req, status, error) {
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