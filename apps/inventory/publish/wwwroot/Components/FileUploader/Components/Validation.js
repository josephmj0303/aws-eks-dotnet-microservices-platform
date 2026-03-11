/* ==== */
/* FileUploader Validation Components Objects */
FileUploader.Components.Validation = {};
/* ==== */

/* ==== */
/* FileUploader Components Validation */
FileUploader.Components.Validation.Initialize = function () {

}
/* ==== */

/* ==== */
/* File Uploader Components Validation Status */
FileUploader.Components.Validation.Status = function (Params) {

    /* Declearation */
    var t_Boolean = false;
    var t_FileData = null;
    var t_ChunkSize = null;
    var t_MaxFileSize = null;

    /* ==== Mandatory Params ==== */
    /* Active File Data */
    if (typeof Params.FileData !== "undefined") {
        t_FileData = Params.FileData;
    }

    /* ==== Mandatory Params ==== */
    /* Default File Chunk Size Limit */
    if (typeof Params.ChunkSize !== "undefined") {
        t_ChunkSize = Params.ChunkSize;
    }

    /* ==== Mandatory Params ==== */
    /* Max File Upload Size Limit */
    if (typeof Params.MaxFileSize !== "undefined") {
        t_MaxFileSize = Params.MaxFileSize;
    }

    if (t_FileData == null) {
       
        /* Call the Clean Function */
        FileUploader.Components.Cleaner({
            TargetId: ".divUploadFiles"
        });

        /* Reset the Uploader */
        FileUploader.Components.UploaderReset();
        
    }
    else if (t_FileData.size > t_MaxFileSize) {

        /* ==== */
        /* File Size too large Message */
        $.gritter.add({
            title: "Warning",
            text: "Your File larger then 25MB",
            class_name: 'gritter-warning gritter-center'
        });
        /* ==== */

    }
    else {
        t_Boolean = true;
    }
    return t_Boolean;
}
/* ==== */