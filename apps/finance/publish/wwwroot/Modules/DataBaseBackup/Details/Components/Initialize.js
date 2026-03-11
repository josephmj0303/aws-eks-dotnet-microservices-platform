/* ==== */
/* DataBase Backup Details Components Objects */
var DataBaseBackupDet = {};
DataBaseBackupDet.Components = {};
/* ==== */

/* ==== */
/* DataBase Backup Details Components Initialize */
DataBaseBackupDet.Components.Initialize = function () {

    /* Set Bread Crumb */
    GeneralFunction.SetBreadCrumb([{ Title: "DataBase Backup Details", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    DataBaseBackupDet.Components.Pagination.Initialize();

    /* Once Initialize Completed then Goto Ready State */
    DataBaseBackupDet.Components.Ready();

    /* Get the DataBase Backup Details */
    DataBaseBackupDet.Components.Populate({
        Reset: false,
        ResetPagination: false
    });
}
/* ==== */

/* ==== */
/* DataBase Backup Details Components Ready */
DataBaseBackupDet.Components.Ready = function () {

    /* Initialize the User Rights */
    if (!GeneralFunction.ReadAddRights()) $(".btn-AddNew").remove();

    /* Once Components Ready then Clean the Values  */
    DataBaseBackupDet.Components.Cleaner();

    /* Add Event Listener */
    DataBaseBackupDet.Components.AddEventListener();

}
/* ==== */


/* ==== */
/* DataBase Backup Details Components Clean Up */
DataBaseBackupDet.Components.Cleaner = function () {

    /* Clean Up */
    $(".Search-Keyword-Input").val("");

}
/* ==== */


/* ==== */
/* DataBase Backup Details Components Add Event Listener */
DataBaseBackupDet.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    DataBaseBackupDet.Components.RemoveEventListener();

     /* ==== */
    /* Save Click */
    $(".btn-Backup").click(function () {
        DataBaseBackupDet.Components.Pagination.BackupRecord();
    });
    /* ==== */

    /*  Search Click Event */
    $(".Search-Keyword-Input").keydown(function (event) {
        if (event.key == 'Enter') {

            /* Load the DataBase Backup Details */
            DataBaseBackupDet.Components.Populate({
                Reset: true,
                ResetPagination: true
            });

        }
    });

    /* Pagination Populate Event */
    Pagination.Populate = function (Params) {

        /* Call the Class Populate */
        DataBaseBackupDet.Components.Populate({
            Reset: true,
            ResetPagination: false
        });
    }
}
/* ==== */

/* ==== */
/* DataBase Backup Details Components Remove Active Event Listener */
DataBaseBackupDet.Components.RemoveEventListener = function () {
    /* Best Practices For Remove Unused Event Listener */
    $(".Search-Keyword-Input").off("keydown");
    $(".btn-Backup").off("click");
}
/* ==== */

/* ==== */
/* DataBase Backup Details Data Processing PreLoader */
DataBaseBackupDet.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-DataBaseBackup-Content", Status);
}
/* ==== */


/* ==== */
/* DataBase Backup Processing Icon */
DataBaseBackupDet.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-Backup", Status, "Processing...", false);
}
/* ==== */