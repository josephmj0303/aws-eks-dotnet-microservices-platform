

/* ==== */
/* TroubleShoot Data Controllers */
class DataControllers_TroubleShoot {

    /* Send the Data to Server */
    static Puch(Params) {

        /* Transation Preloader Start */
        TroubleShoot.Components.SetProcessingState(true);

        $.ajax({
            type: "POST",
            url: "/TroubleShoot/SetTroubleShoot",
            data: Params,
            dataType: "text",
            success: function (Response) {

                /* Transation Preloader Stop */
                TroubleShoot.Components.SetProcessingState(false);

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
                        TroubleShoot.Components.Cleaner();

                        /* Init the Dropdown List */
                        if (typeof Dropdown !== "undefined") {
                            if (typeof Dropdown.TroubleShoot !== "undefined") {
                                Dropdown.TroubleShoot.LoadDataFromServer({ PageName: "Cookies", ComponentId: ".divTroubleShoot", ComponentValue: 0 });
                            }
                        }

                        /* Goto Back  */
                        if ($("#hdnTroubleShootId").val() != "0") TroubleShoot.Components.Back();
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
                TroubleShoot.Components.SetProcessingState(false);
            }
        });

    }

    /* Receiver the Data from Server */
    static Pop(Params) {

        $.ajax({
            type: "POST",
            url: "/TroubleShoot/GetTroubleShoot",
            data: Params,
            dataType: "text",
            success: function (Response) {

                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        /* ==== */
                        /* Set the Components Values */
                        var ObjResult = JSON.parse(Response.result);
                        var ObjResponse = JSON.parse(ObjResult.Data1);
                        ObjResponse.Files = JSON.parse(ObjResult.Data2);
                        TroubleShoot.Components.Setter(ObjResponse);
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