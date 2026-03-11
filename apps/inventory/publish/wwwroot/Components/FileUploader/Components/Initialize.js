/* ==== */
/* File Uploader Components Objects */
var FileUploader = {};
FileUploader.Components = {};
FileUploader.Components.ChunkSize = 1024 * 1024; /* 1 MB  */
FileUploader.Components.MaxFileSize = (FileUploader.Components.ChunkSize * 25); /* 25 MB  */
FileUploader.Components.TotalChunkTransfered = 0;
FileUploader.Components.RandomFolder = "";
FileUploader.Components.StyleName = "";
FileUploader.Components.IsSkiped = false;
FileUploader.Components.AcceptableFormat = [];
/* ==== */

/* ==== */
/* File Uploader Components Initialize */
FileUploader.Components.Initialize = function (Params) {

    /* Once Initialize Completed then Goto Ready State */
    FileUploader.Components.Ready(Params);
}
/* ==== */

/* ==== */
/* File Uploader Components Ready */
FileUploader.Components.Ready = function (Params) {


    /* Set the File Category Name */
    if (typeof Params.StyleName !== "undefined") {
        FileUploader.Components.StyleName = Params.StyleName;
    }

    /* Set the File Max File Size */
    if (typeof Params.MaxFileSize !== "undefined") {
        FileUploader.Components.MaxFileSize = (FileUploader.Components.ChunkSize * parseInt(Params.MaxFileSize));
    }

    /* Set the File Max File Size */
    if (typeof Params.RandomKey !== "undefined") {
        FileUploader.Components.RandomFolder = Params.RandomKey;
    }

    /* Set the File Acceptable Format  */
    if (typeof Params.AcceptableFormat !== "undefined") {
        FileUploader.Components.AcceptableFormat = Params.AcceptableFormat;
    }

    /* Create New File Uploader Element */
    FileUploader.Components.CreateFileUploader(Params);

    /* Once Components Ready then Clean the Values  */
    FileUploader.Components.Cleaner(Params);

    /* Once Init the Components Validation */
    FileUploader.Components.Validation.Initialize();


    /* Add Event Listener */
    FileUploader.Components.AddEventListener(Params);

}
/* ==== */

/* ==== */
/* File Uploader Components Clean Up */
FileUploader.Components.Cleaner = function (Params) {

    /* Clean the Chunk Details */
    var ObjResponse = {
        ElementName: Params.TargetId.replace("#", "").replace(".", ""),
        FileSize: 0,
        TotalChunks: 0,
        ActiveChunks: 0,
        ProgresssRate: 0,
        TrasferCompletedRate: 0,
    };
    FileUploader.Components.Setter(ObjResponse);

    /* Clean the Progress Bar */
    FileUploader.Components.ProgressSetter({
        ElementName: Params.TargetId.replace("#", "").replace(".", ""),
        ProgressRate: 0
    });

    
}
/* ==== */

/* ==== */
/* File Uploader Components Add Event Listener */
FileUploader.Components.AddEventListener = function (Params) {

    /* Best Practices For Remove Unused Event Listener */
    FileUploader.Components.RemoveEventListener();

    /* File Upload By Chunk Based */
    if (typeof Params.TargetId !== "undefined") {

        /* Upload the File to Server */
        $("#" + Params.TargetId.substring(1) + "_FileUploader").ace_file_input({
            style: 'well',
            btn_choose: 'Click to choose file',
            btn_change: null,
            no_icon: 'ace-icon fa fa-cloud-upload',
            droppable: false,
            thumbnail: 'large'//large | fit
            , before_remove: function () {
                return true;
            },
            maxSize: FileUploader.Components.MaxFileSize,//bytes
            allowExt: FileUploader.Components.AcceptableFormat.map(m => m.Extension),
            allowMime: FileUploader.Components.AcceptableFormat.map(m => m.MIMEType)

        }).on('change', function (e) {

            const dotCount = (this.files[0].name.match(/\./g) || []).length;
            //if (dotCount > 1) {

            //    /* ==== */
            //    /* Exceoption Message Box Show */
            //    GeneralFunction.Message({
            //        Status: "Failure",
            //        Title: "Failure",
            //        Message: "Multiple File Extensions are not allowed. Please Check File Name",
            //    });
            //    /* ==== */

            //    /* Reset the Uploader */
            //    FileUploader.Components.UploaderReset("#" + this.id);

            //} else {

                /* Set the Progress bar Colour */
                $(".progress-bar").removeClass("progress-bar-danger");
                $(".progress-bar").addClass("progress-bar-success");

                /* ==== */
                /* Init Prgress bar */
                FileUploader.Components.ProgressSetter({
                    ElementName: this.id.replace("_FileUploader", ""),
                    ProgressRate: 2
                });
                /* ==== */

                /* ==== */
                /* Get the Uploaded File Details */
                var t_ActiveFile = this.files[0];
                FileUploader.Components.IsSkiped = false;
                FileUploader.Components.IsWait = false;

                /* Reset the Uploader */
                FileUploader.Components.UploaderReset("#" + this.id);

                /* Upload the Files to Server */
                FileUploader.Components.Upload({

                    ElementName: this.id,                              /* File Uploader ElementId */
                    ChunkSize: FileUploader.Components.ChunkSize,      /* Chunk Size  */
                    MaxFileSize: FileUploader.Components.MaxFileSize,  /* Chunk Max File Size */
                    FileData: t_ActiveFile,                            /* Upload File */

                });
                /* ==== */
           // }

        }).on('file.preview.ace', function (e, info) {

        }).on('file.error.ace', function (ev, info) {

            /* ==== */
            /* Exceoption Message For File Size */
            if (info.error_count['size']) {

                FileUploader.Components.IsSkiped = false;
                FileUploader.Components.IsWait = false;

                /* Call the Clean Function */
                FileUploader.Components.Cleaner({
                    TargetId: t_ElementName
                });

                /* Reset the Uploader */
                FileUploader.Components.UploaderReset("#" + this.id);

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Maximum file upload size 25MB",
                });
                /* ==== */

            }
            /* ==== */

            /* ==== */
            /* Exceoption Message For File Format */
            if (info.error_count['ext'] || info.error_count['mime']) {

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Invalid File, Accepted types : " + FileUploader.Components.AcceptableFormat.map(m => m.Extension),
                });
                /* ==== */

                FileUploader.Components.IsSkiped = false;
                FileUploader.Components.IsWait = false;

                /* Call the Clean Function */
                FileUploader.Components.Cleaner({
                    TargetId: ".divUploadFiles"
                });

                /* Reset the Uploader */
                FileUploader.Components.UploaderReset("#" + this.id);

            }
            /* ==== */
        });
    }

    /* File Remove Click */
    $(".btn-Cancel").click(function (event) {

        /* Declearation */
        let $window = $(window);
        var windowsize = $window.width();
        var width = "420";
        if (windowsize <= 480) {
            width = "95%";
        }

        /* Update the Waiting Status */
        FileUploader.Components.IsWait = true;

        /* Cancel Conformation */
        $("#ModelUploadCancel").removeClass('hide').dialog({
            resizable: false,
            width: width,
            modal: true,
            title: "Cancle Upload",
            title_html: true,
            buttons: [
                {
                    html: "Yes",
                    "class": "btn btn-warning btn-xs btn-round",
                    click: function () {

                        $(this).dialog("close");

                        /* Set the Progress bar Colour */
                        FileUploader.Components.PauseRecursiveParams = null;
                        $(".progress-bar").removeClass("progress-bar-success");
                        $(".progress-bar").addClass("progress-bar-danger");

                        /* Update the Cancel Status */
                        FileUploader.Components.IsWait = false;
                        FileUploader.Components.IsSkiped = true;

                        $("#divUploadFiles_DivProgress").attr("data-percent", "Canceled...");

                        setTimeout(function () {

                            /* ==== */
                            /* Reset the Prgress bar */
                            FileUploader.Components.ProgressSetter({
                                ElementName: "divUploadFiles",
                                ProgressRate: 0
                            });
                            /* ==== */

                            FileUploader.Components.IsSkiped = false;
                            FileUploader.Components.IsWait = false;

                            /* Call the Clean Function */
                            FileUploader.Components.Cleaner({
                                TargetId: ".divUploadFiles"
                            });

                            /* Reset the Uploader */
                            FileUploader.Components.UploaderReset();

                        }, 1000);

                    }
                },
                {
                    html: "No",
                    "class": "btn btn-white btn-xs btn-round",
                    click: function () {
                        FileUploader.Components.IsWait = false;
                        FileUploader.Components.RecursiveFileReader(FileUploader.Components.PauseRecursiveParams);
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

}
FileUploader.Components.UploaderReset = function (TargetId) {
    $(TargetId).ace_file_input('reset_input');
}
/* ==== */

/* ==== */
/* File Uploader Components Remove Active Event Listener */
FileUploader.Components.RemoveEventListener = function () {
    $(".remove").off("click");
}
/* ==== */

/* ==== */
/* Create New File Uploader Element */
FileUploader.Components.CreateFileUploader = function (Params) {

    /* Declearation */
    var t_FileTag = null;
    var t_NotesRootDiv = null;
    var t_PLoaderDiv = null;
    var t_H6Tag = null;
    var t_Icontag = null;


    /* Bind the File Uploader Components */
    if (typeof Params.TargetId !== "undefined") {

        /* ==== */
        /* Create New File Tag */
        t_FileTag = $(document.createElement("input"));
        t_FileTag.attr("type", "file");
        t_FileTag.attr("Id", Params.TargetId.substring(1) + "_FileUploader");
        t_FileTag.appendTo(Params.TargetId);
        /* ==== */

        /* ==== */
        /* File Attachment Description Details */
        t_NotesRootDiv = $(document.createElement("div"));
        t_NotesRootDiv.addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left no-padding");

        t_H6Tag = $(document.createElement("h6"));
        t_H6Tag.addClass("text-left");

        t_Icontag = $(document.createElement("i"));
        t_Icontag.addClass("fa fa-hand-o-right orange");
        t_Icontag.attr("aria-hidden", "true");
        t_Icontag.appendTo(t_H6Tag);
        t_H6Tag.append("&nbsp;Maximum file upload size 25MB");
        t_H6Tag.appendTo(t_NotesRootDiv);

        t_H6Tag = $(document.createElement("h6"));
        t_H6Tag.addClass("text-left");

        t_Icontag = $(document.createElement("i"));
        t_Icontag.addClass("fa fa-hand-o-right orange");
        t_Icontag.attr("aria-hidden", "true");
        t_Icontag.appendTo(t_H6Tag);
        t_H6Tag.append("&nbsp;Acceptable file types " + FileUploader.Components.AcceptableFormat.map(m => m.Extension));
        t_H6Tag.appendTo(t_NotesRootDiv);

        t_NotesRootDiv.appendTo(Params.TargetId);
        /* ==== */

        /* ==== */
        /* File Attachment Progress Bar Details */
        t_NotesRootDiv = $(document.createElement("div"));
        t_NotesRootDiv.addClass("col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-left no-padding ui-progressbar ui-widget ui-widget-content ui-corner-all progress progress-striped active");
        t_NotesRootDiv.attr("Id", Params.TargetId.substring(1) + "_DivProgress");
        t_NotesRootDiv.attr("data-percent", "0%");

        t_PLoaderDiv = $(document.createElement("div"));
        t_PLoaderDiv.addClass("ui-progressbar-value ui-widget-header ui-corner-left progress-bar progress-bar-success");
        t_PLoaderDiv.attr("Id", Params.TargetId.substring(1) + "_DivProgressBar");
        t_PLoaderDiv.css("width", "0%");
        t_PLoaderDiv.appendTo(t_NotesRootDiv);
        t_NotesRootDiv.appendTo(Params.TargetId);
        /* ==== */

        /* ==== */
        /* File Attachment Cancel */
        t_NotesRootDiv = $(document.createElement("div"));
        t_NotesRootDiv.addClass("col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center no-padding");
        t_NotesRootDiv.attr("Id", Params.TargetId.substring(1) + "_DivProgressCancel");
        t_NotesRootDiv.html("<i class=\"fa fa-times-circle bigger-120 red btn-Cancel\" aria-hidden=\"true\"></i>");
        t_NotesRootDiv.appendTo(Params.TargetId);
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* Calculate the Total Upload Chunks Details */
FileUploader.Components.CalculateChunkProgresssRate = function (Params) {

    /* Declearation */
    var t_TotalFileSize = 0;
    var t_ChunkSize = 0;
    var t_TotChunks = 0;
    var t_ProgresssRate = 0;
    var t_Response = null;


    try {
        if (typeof Params.FileData !== "undefined") {

            /* Calculate the Total Chunks */
            t_TotalFileSize = Params.FileData.size;
            t_ChunkSize = FileUploader.Components.ChunkSize;
            t_TotChunks = Math.ceil(t_TotalFileSize / t_ChunkSize);
            //t_ProgresssRate = ((t_ChunkSize / (t_TotalFileSize * 2)) * 100); /* Here I calculate For Sending & Ack Processing */
            t_ProgresssRate = (parseFloat(0.5 / (t_TotChunks + 1)).toFixed(4) * 100); /* Here I calculate For Sending & Ack Processing */

            /* Bind the Computed Result */
            t_Response = {
                ElementName: Params.ElementName.replace("_FileUploader", ""),
                FileSize: t_TotalFileSize,
                TotalChunks: t_TotChunks,
                ActiveChunks: 0,
                ProgresssRate: t_ProgresssRate,
                TrasferCompletedRate: 0,
            };

        }
    }
    catch (e) {
        t_Response = null;
    }
    return t_Response;
}
/* ==== */

/* ==== */
/* Set the File Gallery List */
FileUploader.Components.SetGalleryList = function (Params) {

    /* Declearation */
    var t_FileName = "";
    var t_Split = [];
    var t_RandomKey = GeneralFunction.GetRandomKey().RandomKey;
    var ObjResponse = {};

    var t_TargetId = "";
    var t_Image = "";
    var t_FilePath = "";
    var t_FileType = "";
    var t_Size = 100;
    var t_DownloadStatus = true;
    var t_ImageRomveStatus = true;
    var t_EnableScanNaughty = false;


    try {

        /* ==== Mandatory Params ==== */
        if (typeof Params.TargetId !== "undefined") {
            t_TargetId = Params.TargetId;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.Image !== "undefined") {
            t_Image = Params.Image;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.FilePath !== "undefined") {
            t_FilePath = Params.FilePath;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.Filetype !== "undefined") {
            t_FileType = Params.Filetype;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.Size !== "undefined") {
            t_Size = Params.Size;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.Download !== "undefined") {
            t_DownloadStatus = Params.Download;
        }

        /* ==== Mandatory Params ==== */
        if (typeof Params.Delete !== "undefined") {
            t_ImageRomveStatus = Params.Delete;
        }

        /* Check all the Mandatory Fileds Found or Not */
        if (t_TargetId != "" && t_Image != "" && t_FilePath != "") {


            /* Get the File Name */
            t_Split = t_FilePath.toString().split("/");
            t_FileName = t_Split[t_Split.length - 1];

            /* Create Gallery list Element */
            var t_listElement = $(document.createElement("li"));
            t_listElement.addClass(t_RandomKey);

            /* Create Link Element */
            var t_LinkElement = $(document.createElement("a"));
            if (t_FileType == "Image") {

                /* Image Preview */
                t_LinkElement.addClass("cboxElement");
                t_LinkElement.attr("title", "Click to Preview");
                t_LinkElement.attr("data-rel", "colorbox");
                t_LinkElement.attr("href", t_Image);
                t_EnableScanNaughty = false;
            }
            else {

                /* File Download */
                t_LinkElement.attr("href", "javascript:void(0);");
                t_LinkElement.attr("title", t_FileName);
                t_EnableScanNaughty = false;
            }

            /* Create Display Image */
            var t_ImgElement = $(document.createElement("img"));
            t_ImgElement.attr("width", t_Size);
            t_ImgElement.attr("height", t_Size);
            t_ImgElement.attr("data-src", t_FilePath);
            t_ImgElement.attr("alt", "150");
            t_ImgElement.attr("src", t_Image);
            t_ImgElement.attr("id", "Img" + t_RandomKey);
            if (t_EnableScanNaughty) t_ImgElement.addClass("Naughty-Scaning-Image hide");

            /* Create Tag Div */
            var t_TagElement = $(document.createElement("div"));
            t_TagElement.addClass("tags");

            var t_TagLinkElement = $(document.createElement("a"));
            t_TagLinkElement.attr("href", t_FilePath);
            t_TagLinkElement.attr("download");
            t_TagLinkElement.attr("title", "Click to Download");
            t_TagLinkElement.css("cursor", "pointer");
            t_TagLinkElement.html("<span class=\"label label-info\"><span class=\"label-holder\">" + t_FileName + "</span></span>");

            /* Create Tools Div */
            var t_ToolsElement = $(document.createElement("div"));
            t_ToolsElement.addClass("tools");

            /* Create Tools Div */
            if (t_ImageRomveStatus) {
                var t_Removetag = $(document.createElement("a"));
                t_Removetag.attr("href", "javascript:void(0);");
                t_TagLinkElement.attr("title", "Click to Remove");
                t_Removetag.attr("onclick", "FileUploader.Components.RemoveGalleryList('" + t_RandomKey + "')");
                t_Removetag.html("<i class=\"ace-icon fa fa-times white\"></i>");

                /* Append the Tool */
                t_Removetag.appendTo(t_ToolsElement);
            }

            /* Download Link */
            if (t_DownloadStatus) {

                var t_Downloadtag = $(document.createElement("a"));
                t_Downloadtag.attr("href", t_FilePath);
                t_Downloadtag.attr("download");
                t_Downloadtag.html("<i class=\"ace-icon fa fa-download white\"></i>");

                /* Append the Tool */
                t_Downloadtag.appendTo(t_ToolsElement);
            }

            /* Bind the Gallery List */
            t_ImgElement.appendTo(t_LinkElement);
            t_LinkElement.appendTo(t_listElement);
            t_TagElement.appendTo(t_listElement);
            if (t_ImageRomveStatus || t_DownloadStatus) t_ToolsElement.appendTo(t_listElement);

            /* Set the Naughty Image Root List */
            if (t_EnableScanNaughty) t_listElement.addClass("Naughty-Scaning-Root");
            t_listElement.appendTo(t_TargetId);

            /* Receipt Preview */
            jQuery(function ($) {
                var $overflow = '';
                var colorbox_params = {
                    rel: 'colorbox',
                    reposition: true,
                    scalePhotos: true,
                    scrolling: false,
                    previous: '<i class="ace-icon fa fa-arrow-left"></i>',
                    next: '<i class="ace-icon fa fa-arrow-right"></i>',
                    close: '&times;',
                    current: '{current} of {total}',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    onOpen: function () {
                        $overflow = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                    },
                    onClosed: function () {
                        document.body.style.overflow = $overflow;
                    },
                    onComplete: function () {
                        $.colorbox.resize();
                    }
                };

                $('.ace-thumbnails [data-rel="colorbox"]').colorbox(colorbox_params);
                $("#cboxLoadingGraphic").html("<i class='ace-icon fa fa-spinner orange fa-spin'></i>");//let's add a custom loading icon
                $(document).one('ajaxloadstart.page', function (e) {
                    $('#colorbox, #cboxOverlay').remove();
                });
            });

            /* Reset the File Uploader */
            FileUploader.Components.UploaderReset("#" + this.id);

            /* Scan the Naughty Image */
            if (t_EnableScanNaughty) FileUploader.Components.ScanNaughty(t_ImgElement);
        }

    }
    catch (e) {

        /* ==== */
        /* Exception Message */
        ObjResponse.Status = "Failure";
        ObjResponse.Message = e.Message;
        /* ==== */

        /* ==== */
        /* Exceoption Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: e.message,
        });
        /* ==== */
    }
    return ObjResponse;
}
FileUploader.Components.RemoveGalleryList = function (GalleryKey) {
    $('.' + GalleryKey).remove();
}
/* ==== */



/* ==== */
/* Scan the Naughty Image */
FileUploader.Components.ScanNaughty = function (Element) {

    /* Set the Image For Scaning (backendlayout) */
    $("#ImgNaughty").attr("src", $(Element).attr("src"));

    /* Set the Naughty Image Scaning Preloader */
    GeneralFunction.Scaning(".Naughty-Scaning-Image", true);

    /* ==== */
    /* Scan the Naughty Image */
    setTimeout(function () {
        nude.load('ImgNaughty');
        nude.scan(function (Response) {
            if (Response) {

                /* ==== */
                /* Delete the Naughty Image */
                $(".Naughty-Scaning-Root").remove();
                /* ==== */

                /* ==== */
                /* Naughty Image Warning Message */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "Improper image found."
                });
                /* ==== */

            } else {

                /* ==== */
                /* Show the Normal Image (Remove the Naughty-Scaning Class)*/
                $(".Naughty-Scaning-Root").removeClass("hide");
                $(".Naughty-Scaning-Root").removeClass("Naughty-Scaning-Root");
                /* ==== */

            }

            /* ==== */
            /* Clear the Naughty Image Source */
            $("#ImgNaughty").attr("src", "");
            /* ==== */

            /* Set the Naughty Image Scaning Preloader */
            GeneralFunction.Scaning(".Naughty-Scaning-Image", false);
            $(".Naughty-Scaning-Image").removeClass("hide");
            $(".Naughty-Scaning-Image").removeClass("Naughty-Scaning-Image");

        });
    }, 500);
    /* ==== */
}
/* ==== */
