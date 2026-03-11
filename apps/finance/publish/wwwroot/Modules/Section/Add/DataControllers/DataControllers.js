

/* ==== */
/* Organization Data Controllers */
class DataControllers_Section {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        Section.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/Section/SetSections",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                Section.Components.SetProcessingState(false);

                Response = JSON.parse(Response);
                if (Response != null) {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: Response.status,
                        Title: Response.status,
                        Message: Response.message
                    });
                    /* ==== */

                    /* ==== */
                    /* Response Routing */
                    if (Response.status == "Success") {

                        /* Clean Up */
                        Section.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.ClassSection !== "undefined") {
                                Dropdown.ClassSection.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divClassSection", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnSecId").val() != "0") Section.Components.Back();
                    }
                    /* ==== */
                }
            },
            error: function (req, status, error) {

                /* ==== */
                /* Exception Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error,
                });
                /* ==== */

                /* Transation Preloader Stop */
                Section.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/Section/GetSections",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        Section.Components.Setter(JSON.parse(Response.result));
                        /* ==== */

                    }
                }
            },
            error: function (req, status, error) {

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: error,
                });
                /* ==== */
            }
        });

    }


}
/* ==== */