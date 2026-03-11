/* ==== */
/* Customer Components Objects */
var Customer = {};
Customer.Components = {};
/* ==== */

/* ==== */
/* Customer Components Initialize */
Customer.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Party Ledger", Action: "#CustomerDetails" }, { Title: $("#hdnCustId").val() == "0" ? "Add New" : "Edit", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Customer.Components.Validation.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    Customer.Components.Ready();
}
/* ==== */

/* ==== */
/* Customer Components Ready */
Customer.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Customer.Components.Cleaner();

    /* Add Event Listener */
    Customer.Components.AddEventListener();

    /* Populate the Data */
    Customer.Components.Populate($("#hdnCustId").val());
}
/* ==== */

/* ==== */
/* Customer Components Clean Up */
Customer.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        CustId: 0,
        CustomerName: "",
        ContactNo: "",
        EMail: "",
        AddressLine1: "",
        AddressLine2: "",
        PostCode: "",
        City: "",
        State: "",
        GSTNo: ""
    }

    Customer.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Customer Components Add Event Listener */
Customer.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Customer.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        Customer.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Customer.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Get the PostCode Info */
    $("#txtPostCode").on("input", function (e) {

        // Remove all non-digit characters
        let t_PostCode = $(this).val().replace(/\D/g, "").substring(0, 6);

        // Update the textbox with cleaned value
        $(this).val(t_PostCode);
        if (!t_PostCode || t_PostCode.length < 6) {
            return;
        }
        

        // API URL (Replace with your own or use another suitable API)
        const url = `/Customer/GetPincodeInfo/${t_PostCode}`;
        $.get(url, function (data) {
            if (data.Status === "Success") {
                if (data.PostOffice.length > 0) {
                    // Extract the first post office data
                    const firstPostOffice = data.PostOffice[0];

                    // Set the extracted values to respective fields
                    $("#txtCity").val(firstPostOffice.District);
                    $("#txtState").val(firstPostOffice.State);
                }
            } else {
                // Clear fields in case of an error or no result
                $("#txtCity, #txtState").val("");
                alert("Invalid or unavailable postcode.");
            }
        }).fail(function (e) {
            // Handle API failure
            $("#txtCity, #txtState").val("");
            alert("Unable to fetch data. Please try again later.");
        });

    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Customer Components Remove Active Event Listener */
Customer.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Customer Button Processing Icon */
Customer.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */