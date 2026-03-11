/* ==== */
/* Trouble Shoot Components Objects */
var TroubleShoot = {};
TroubleShoot.Components = {};
/* ==== */

/* ==== */
/* Trouble Shoot Components Initialize */
TroubleShoot.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Trouble Shoot", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    TroubleShoot.Components.Validation.Initialize();

    /* Generate the New Random Key */
    TroubleShoot.Components.RandomKey = GeneralFunction.GetRandomKey().RandomKey;

    /* Once Initialize Completed then Goto Ready State */
    TroubleShoot.Components.Ready();

}
/* ==== */

/* ==== */
/* Trouble Shoot Components Ready */
TroubleShoot.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    TroubleShoot.Components.Cleaner();

    /* Add Event Listener */
    TroubleShoot.Components.AddEventListener();
    
}
/* ==== */

/* ==== */
/* Trouble Shoot Components Clean Up */
TroubleShoot.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
       
    }
    TroubleShoot.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Trouble Shoot Components Add Event Listener */
TroubleShoot.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    TroubleShoot.Components.RemoveEventListener();

   
    /* ==== */
    /* Save Click */
    $(".btn-save").on("click", function () {
        TroubleShoot.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        TroubleShoot.Components.Back();
    });
    /* ==== */
}
/* ==== */

/* ==== */
/* Trouble Shoot Components Remove Active Event Listener */
TroubleShoot.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Trouble Shoot Button Processing Icon */
TroubleShoot.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "TroubleShooting...", false);
}
/* ==== */