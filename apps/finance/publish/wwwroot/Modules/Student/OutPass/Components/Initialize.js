/* ==== */
/* OutPass Components Objects */
var OutPass = {};
OutPass.Components = {};
OutPass.Components.CurrentStudentData = {};
OutPass.Components.CurrentStudentAttenderData = {};
OutPass.Components.ImageUploaderFor = "";
/* ==== */

/* ==== */
/* OutPass Components Initialize */
OutPass.Components.Initialize = function () {

    /* Set the BreadCrumb */
    GeneralFunction.SetBreadCrumb([{ Title: "Student Out Pass", Action: "#", Active: true }]);

    /* Once Init the Components Validation */
    OutPass.Components.Validation.Initialize();

    /* Once Init the Pagination Components */
    OutPass.Components.Pagination.Initialize();

    /* Generate the New Random Key */
    OutPass.Components.RandomKey = GeneralFunction.GetRandomKey().RandomKey;

    /* Init the File Uploader */
    FileUploader.Components.Initialize({
        TargetId: ".divUploadFiles",
        CategoryName: "OutPassDocument",
        RandomKey: OutPass.Components.RandomKey
    });

    /* Init the File Uploader */
    FileUploader.Components.Initialize({
        TargetId: ".divUploadAttenderPhoto",
        CategoryName: "OutPassAttender",
        RandomKey: OutPass.Components.RandomKey
    });

    /* Once Initialize Completed then Goto Ready State */
    OutPass.Components.Ready();
}
/* ==== */

/* ==== */
/* OutPass Components Ready */
OutPass.Components.Ready = function () {

    /* Once Components Ready then Clean the Values  */
    OutPass.Components.Cleaner();

    /* Add Event Listener */
    OutPass.Components.AddEventListener();

}
/* ==== */

/* ==== */
/* OutPass Components Clean Up */
OutPass.Components.Cleaner = function () {

    OutPass.Components.CurrentStudentData = {};
    OutPass.Components.CurrentStudentAttenderData = {};

    /* Set the Default Values */
    var CleanUp = {
        OutPassNo: "New",
        OutPassDate: new Date(),
        AttenderImage: "/assets/images/placeholder/Profile.jpg",
        StudentImage: "/assets/images/placeholder/Profile.jpg",
        txtAdmissionNo: "",
        AttenderName: "",
        Relation: "Father",
        Place: "",
        PhoneNo: "",
        BusNo: "",
        BusId : 0
    }
    OutPass.Components.Setter(CleanUp);
}
/* ==== */

/* ==== */
/* OutPass Components Add Event Listener */
OutPass.Components.AddEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    OutPass.Components.RemoveEventListener();

    /* ==== */
    /* Save Click */
    $(".btn-save").click(function () {
        OutPass.Components.Save();
    });
    /* ==== */

    /* ==== */
    /* Back Click */
    $(".btn-back").on("click", function () {
        OutPass.Components.Back();
    });
    /* ==== */

    /* ==== */
    /* Take Photo Click */
    $(".btnTakePhoto").on("click", function () {


        /* Set Image Uploader Name */
        OutPass.Components.ImageUploaderFor = $(this).attr("data-value");

        /* Web Cam On Event */
        GeneralFunction.WebCamOn(function (VideoStream) {

            /* Set the Live Stram */
            const ObjVideoElement = document.getElementById('CameraLivePreview');
            ObjVideoElement.srcObject = VideoStream;

        });


        /* Show the Pop Window */
        var $window = $(window);
        var windowsize = $window.width();
        var width = "600";
        if (windowsize <= 480) {
            width = "95%";
        }

        $("#MdlTakePhotoConfirm").removeClass('hide').dialog({
            resizable: false,
            width: width,
            modal: true,
            title: "Take Photo",
            title_html: true,
            buttons: [
                {
                    html: "Capture",
                    "class": "btn btn-primary btn-xs btn-round bolder",
                    click: function () {
                        $(this).dialog("close");

                        const ObjVideoElement = document.getElementById('CameraLivePreview');

                        const canvas = document.getElementById('photo-canvas');
                        const context = canvas.getContext('2d');
                        context.drawImage(ObjVideoElement, 0, 0, canvas.width, canvas.height);


                        /* ===== */
                        /* Set Image Based On Upload Click */
                        switch (OutPass.Components.ImageUploaderFor) {

                            case "Attender":
                                /* Display the captured Attender photo */
                                $("#ImgAttenderCapturedPhoto").attr("src", canvas.toDataURL('image/png'));
                                break;

                            case "Student":
                                /* Display the captured Student photo */
                                $("#ImgStudentCapturedPhoto").attr("src", canvas.toDataURL('image/png'));
                                break;
                        }
                        /* ===== */
                        
                        /* Swith Off Webcam */
                        GeneralFunction.WebCamOFF(ObjVideoElement.srcObject);

                    }
                },
                {
                    html: "Close",
                    "class": "btn btn-white btn-xs btn-round bolder",
                    click: function () {

                        const ObjVideoElement = document.getElementById('CameraLivePreview');
                        GeneralFunction.WebCamOFF(ObjVideoElement.srcObject);
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });
    /* ==== */

    /* ==== */
    /* Relation Click */
    $(".Relation").on("click", function () {
        OutPass.Components.Visiblity();
    });
    /* ==== */

    /* ==== */
    /* Photo Capture Click */
    $(".PhotoCapture").on("click", function () {
        if ($('#rdbCameraOpt').is(':checked')) {
           
            /* Web Cam On Event */
            GeneralFunction.WebCamOn(function (VideoStream) {

                /* Set the Live Stram */
                const ObjVideoElement = document.getElementById('CameraLivePreview');
                ObjVideoElement.srcObject = VideoStream;

            });

            $(".DivCamera").show();
            $(".DivLocalDrive").hide();

        }
        else if ($('#rdbLocalDriveOpt').is(':checked')) {
            const ObjVideoElement = document.getElementById('CameraLivePreview');
            GeneralFunction.WebCamOFF(ObjVideoElement.srcObject);
            $(".DivLocalDrive").show();
            $(".DivCamera").hide();
        }
    });
    /* ==== */

    /* ==== */
    /* Get the Student Details */
    $("#txtAdmissionNo").on("keydown", function (event) {
        if (event.key == 'Enter') {

            /* Load the Student Details */
            OutPass.Components.Populate(this.value);

        }
    });
    /* ==== */

    /* ==== */
    /* Find the Attened Details */
    //$("#txtAttenderName").on("input", function (event) {
    //    OutPass.Components.StudentAttenderSetter();
    //});
    /* ==== */

    /* ==== */
    /* File Uploaded After Completed Event Listener */
    FileUploader.Components.UploadCompleted = function (Params) {

        /* Uploader Target Based Upload Files */
        switch (Params.TargetId) {

            case "divUploadAttenderPhoto":
                /* Display the captured photo */
                $("#MdlTakePhotoConfirm").dialog("close");

                /* ===== */
                /* Set Image Based On Upload Click */
                switch (OutPass.Components.ImageUploaderFor) {

                    case "Attender":
                        /* Display the captured Attender photo */
                        $("#ImgAttenderCapturedPhoto").attr("src", $(".divUploadAttenderPhoto").find("img").css("background-image").replace('url("', "").replace('")', ""));
                        break;

                    case "Student":
                        /* Display the captured Student photo */
                        $("#ImgStudentCapturedPhoto").attr("src", $(".divUploadAttenderPhoto").find("img").css("background-image").replace('url("', "").replace('")', ""));
                        break;
                }
                /* ===== */
                break;

            case "divAttachFiles":
                /* File Gallery List */
                FileUploader.Components.SetGalleryList({
                    TargetId: ".divAttachFiles",
                    Image: Params.FileIconPath,
                    FilePath: Params.FilePath,
                    Filetype: Params.FileType,
                    Size: 100
                });
                break;
        }
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* OutPass Components Remove Active Event Listener */
OutPass.Components.RemoveEventListener = function () {

    /* Best Practices For Remove Unused Event Listener */
    $(".btn-save").off("click");
    $(".btn-back").off("click");
    $(".btnTakePhoto").off("click");
}
/* ==== */

/* ==== */
/* OutPass Button Processing Icon */
OutPass.Components.SetProcessingState = function (Status) {

    /* Declearaction */
    GeneralFunction.TransPreloader(".btn-save", Status, "Processing...", false);
}
/* ==== */


/* ==== */
/* Fees Collection Details Data Processing PreLoader */
OutPass.Components.DataProcessing = function (Status) {
    GeneralFunction.DataProcessing(".table-OutPassHistory-Content", Status);
}
/* ==== */

/* ==== */
/* Fees Collection Details Data Processing PreLoader */
OutPass.Components.DataImageProcessing = function (Status) {
    GeneralFunction.DataProcessing(".ImagePreview", Status);
}
/* ==== */


