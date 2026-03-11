/* ==== */
/* Organization Components Objects */
var Organization = {};
Organization.Components = {};
/* ==== */

/* ==== */
/* Organization Components Initialize */
Organization.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Company", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    Organization.Components.Validation.Initialize();

    /* Generate the New Random Key */
    Organization.Components.RandomKey = GeneralFunction.GetRandomKey().RandomKey;

    /* Once Initialize Completed then Goto Ready State */
    Organization.Components.Ready();
}
/* ==== */

/* ==== */
/* Organization Components Ready */
Organization.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    Organization.Components.Cleaner();

    /* Init the File Uploader */
    FileUploader.Components.Initialize({
        TargetId: ".divUploadFiles",
        CategoryName: "OrganizationLetterPad",
        RandomKey: Organization.Components.RandomKey
        [
            {
                Extension: "jpeg",
                MIMEType: "image/jpeg"
            },
            {
                Extension: "jpg",
                MIMEType: "image/jpg"
            },
            {
                Extension: "png",
                MIMEType: "image/png"
            }
        ]
    });

    /* Add Event Listener */
    Organization.Components.AddEventListener();

    /* Populate the Data */
    Organization.Components.Populate($("#hdnOrgId").val());
}
/* ==== */

/* ==== */
/* Organization Components Clean Up */
Organization.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {
        OrganizationName: "",
        Phone: "",
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
        City: "",
        State: "",
        PINCode: "",
        Files : []
    }



    Organization.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* Organization Components Add Event Listener */
Organization.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    Organization.Components.RemoveEventListener();

   

    /* ==== */
    /* File Uploaded After Completed Event Listener */
    FileUploader.Components.UploadCompleted = function (Params) {

        /* Uploader Target Based Upload Files */
        switch (Params.TargetId) {

            case "divUploadFiles":
                /* Expense Components Receipt File Gallery List */
                FileUploader.Components.SetGalleryList({
                    TargetId: ".divAttachFiles",
                    Image: Params.FileIconPath,
                    FilePath: Params.FilePath,
                    Filetype: Params.FileType,
                    Size: 800
                });
                break;
        }
    }
    /* ==== */

    /* ==== */
    /* Save Click */
    $(".btn-save").on("click",function () {
        Organization.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        Organization.Components.Back();
    });
    /* ==== */

}
/* ==== */

/* ==== */
/* Organization Components Remove Active Event Listener */
Organization.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
}
/* ==== */

/* ==== */
/* Organization Button Processing Icon */
Organization.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */