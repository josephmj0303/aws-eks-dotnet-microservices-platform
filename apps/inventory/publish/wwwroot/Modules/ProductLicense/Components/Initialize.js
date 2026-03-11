/* ==== */
/* Product License Components Objects */
var ProductLicense = {};
ProductLicense.Components = {};
/* ==== */

/* ==== */
/* Product License Components Initialize */
ProductLicense.Components.Initialize = function () {

    /* Once Initialize Completed then Goto Ready State */
    ProductLicense.Components.Ready();
}
/* ==== */

/* ==== */
/* Product License Components Ready */
ProductLicense.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    ProductLicense.Components.Cleaner();

    /* Once Init the Components Validation */
    ProductLicense.Components.Validation.Initialize();

    /* Add Event Listener */
    ProductLicense.Components.AddEventListener();
}
/* ==== */

/* ==== */
/* Product License Components Clean Up */
ProductLicense.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        UserName: "",
        Password: ""
    }
    ProductLicense.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Product License Components Add Event Listener */
ProductLicense.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    ProductLicense.Components.RemoveEventListener();

    /* ProductLicense Authentication */
    $("#SubmitProductLicense").on("click", function () {
        /* Check the User Authentication */
        ProductLicense.Components.Authentication();
    });

}
/* ==== */

/* ==== */
/* Product License Components Remove Active Event Listener */
ProductLicense.Components.RemoveEventListener = function () {

    /* Button Reset */
    $(document).off('click');
    $("#SubmitProductLicense").off("click");
    $("#frmProductLicense input").off("keydown");
}
/* ==== */

/* ==== */
/* Product License Button Processing Icon */
ProductLicense.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader("#SubmitProductLicense", Status, "Authenticating...", false);
}
/* ==== */
