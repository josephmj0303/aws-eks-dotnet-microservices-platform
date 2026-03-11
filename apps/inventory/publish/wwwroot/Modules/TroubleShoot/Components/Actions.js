
/* ==== */
/* Trouble Shoot Components Save */
TroubleShoot.Components.Save = function () {
    /* Send Resquest Server */
    if (TroubleShoot.Components.Validation.Status(TroubleShoot.Components.Getter({}))) {
        DataControllers_TroubleShoot.Puch(TroubleShoot.Components.Getter({}));
    }
}
/* ==== */

/* ==== */
/* Trouble Shoot Components Back */
TroubleShoot.Components.Back = function () {
    /* Goto Previows Screen */
    window.history.back();
}
/* ==== */
