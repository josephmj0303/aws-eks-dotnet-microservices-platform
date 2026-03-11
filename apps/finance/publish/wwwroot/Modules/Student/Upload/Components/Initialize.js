/* ==== */
/* Student Components Objects */
var StudentUpload = {};
StudentUpload.Components = {};
StudentUpload.IsWarningConform = true;
/* ==== */

/* ==== */
/* Student Components Initialize */
StudentUpload.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Student Upload", Action: "#", Active: true }]);

    /* Load the Pagination Header  */
    StudentUpload.Components.Pagination.Initialize();

    /* Once Init the Components Validation */
    StudentUpload.Components.Validation.Initialize();

    /* Generate the New Random Key */
    StudentUpload.Components.RandomKey = GeneralFunction.GetRandomKey().RandomKey;

    /* Init the File Uploader */
    FileUploader.Components.Initialize({
        TargetId: ".divUploadFiles",
        CategoryName: "Students",
        RandomKey: StudentUpload.Components.RandomKey,
        AcceptableFormat: [{
            Extension: "xls",
            MIMEType: "application/vnd.ms-excel"
        }, {
            Extension: "xlsx",
            MIMEType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }]
    });

    /* Once Initialize Completed then Goto Ready State */
    StudentUpload.Components.Ready();
}
/* ==== */

/* ==== */
/* Student Components Ready */
StudentUpload.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    StudentUpload.Components.Cleaner();

    /* Add Event Listener */
    StudentUpload.Components.AddEventListener();

}
/* ==== */

/* ==== */
/* Student Components Clean Up */
StudentUpload.Components.Cleaner = function () {

    /* Set the Default Values */
    var CleanUp = {

    }
    StudentUpload.Components.Setter(CleanUp);

}
/* ==== */

/* ==== */
/* Student Components Add Event Listener */
StudentUpload.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    StudentUpload.Components.RemoveEventListener();

    /* ==== */
    /* File Uploaded After Completed Event Listener */
    FileUploader.Components.UploadCompleted = function (Params) {

        /* Expense Components Receipt File Gallery List */
        FileUploader.Components.SetGalleryList({
            TargetId: ".divAttachFiles",
            Image: Params.FileIconPath,
            FilePath: Params.FilePath,
            Filetype: Params.FileType,
            Size: 100
        });

        /* Import the Excel Data & Retrive the Temp Data */
        StudentUpload.Components.Populate({
            ResetPagination: true,
            Reset: true,
            ExcelPath: window.location.origin + "/" + Params.FilePath
        });

        /* Set the Flag */
        StudentUpload.IsWarningConform = false;

        /* Move to Next Slide */
        $(".btn-next").click();


    }
    /* ==== */

    /* Init Wizard */
    $('[data-rel=tooltip]').tooltip();
    var $validation = false;
    $('.fuelux-wizard-container')
        .ace_wizard({
            //step: 2 //optional argument. wizard will jump to step "2" at first
            //buttons: '.wizard-actions:eq(0)'
        })
        .on('actionclicked.fu.wizard', function (e, info) {
            if (info.direction == "next") {
                if (info.step == 1 && $validation == false) {
                    if (!StudentUpload.Components.Validation.Status({ Form: "UploadSheet" })) {
                        e.preventDefault();
                    }
                }
                else if (info.step == 2 && $validation == false) {

                    if (!StudentUpload.IsWarningConform) {
                        e.preventDefault();
                        if (!StudentUpload.Components.Validation.Status({ Form: "Publish" })) {
                            StudentUpload.Components.Pagination.Warning();
                        }
                        else{
                            StudentUpload.IsWarningConform = true;
                            $(".btn-next").click();
                        }
                    }

                }
            }
        }).on('finished.fu.wizard', function (e) {
            /* Save Students */
            StudentUpload.Components.Pagination.PublishConformation();
        }).on('stepclick.fu.wizard', function (e) {
            //e.preventDefault();//this will prevent clicking and selecting steps
        });

}
/* ==== */

/* ==== */
/* Student Components Remove Active Event Listener */
StudentUpload.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */

}
/* ==== */


/* ==== */
/* Student Details Data Processing PreLoader */
StudentUpload.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-Studentdetails-Content", Status);
}
/* ==== */

/* ==== */
/* Student Button Processing Icon */
StudentUpload.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-prev", Status, "Processing...", false);
    GeneralFunction.TransPreloader(".btn-next", Status, "Processing...", false);
}
/* ==== */