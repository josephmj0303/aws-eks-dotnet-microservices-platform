

/* ==== */
/* File Uploader Components Setter */
FileUploader.Components.Setter = function (Params) {

    /* Declearation */
    var t_ElementName = "";

    /* Set the File Chunk Information */
    /* ==== Mandatory Params ==== */
    if (typeof Params.ElementName !== "undefined") t_ElementName = Params.ElementName;


    if (typeof Params.FileSize !== "undefined") FileUploader.Components[t_ElementName + "_FileSize"] = Params.FileSize;
    if (typeof Params.TotalChunks !== "undefined") FileUploader.Components[t_ElementName + "_TotalChunks"] = Params.TotalChunks;
    if (typeof Params.ActiveChunks !== "undefined") FileUploader.Components[t_ElementName + "_ActiveChunks"] = Params.ActiveChunks;

    /* Set the Progress Bar Status Information */
    if (typeof Params.ProgresssRate !== "undefined") FileUploader.Components[t_ElementName + "_ProgresssRate"] = Params.ProgresssRate;
    if (typeof Params.TrasferCompletedRate !== "undefined") FileUploader.Components[t_ElementName + "_TrasferCompletedRate"] = Params.TrasferCompletedRate;

}
/* ==== */

/* ==== */
/* File Uploader Progress Bar Components Setter */
FileUploader.Components.ProgressSetter = function (Params) {

    /* Declearation */
    var t_ElementName = "";
    var t_ProgressRate = 0;

    /* Uploader Element Name */
    if (typeof Params.ElementName !== "undefined") t_ElementName = Params.ElementName;
    if (typeof Params.ProgressRate !== "undefined") t_ProgressRate = (Params.ProgressRate * 1);

    if (t_ProgressRate > 0) {

        /* Add the Progress Completed Rate */
        FileUploader.Components[t_ElementName + "_TrasferCompletedRate"] += t_ProgressRate;

        /* ==== */
        /* Show the Progress Bar */
        $("#" + t_ElementName + "_DivProgress").show();
        $("#" + t_ElementName + "_DivProgressBar").show();
        $("#" + t_ElementName + "_DivProgressCancel").show();
        $("#" + t_ElementName + "_DivProgressBar").css("width", FileUploader.Components[t_ElementName + "_TrasferCompletedRate"] + "%");
        $("#" + t_ElementName + "_DivProgress").attr("data-percent", parseInt(FileUploader.Components[t_ElementName + "_TrasferCompletedRate"]).toFixed(0) + "%");
        /* ==== */

    }
    else {

        /* ==== */
        /* Hide the Progress Bar */
        $("#" + t_ElementName + "_DivProgress").hide();
        $("#" + t_ElementName + "_DivProgressBar").hide();
        $("#" + t_ElementName + "_DivProgressCancel").hide();
        $("#" + t_ElementName + "_DivProgressBar").css("width", "0%");
        $("#" + t_ElementName + "_DivProgress").attr("data-percent", "0%");
        FileUploader.Components[t_ElementName + "_ProgresssRate"] = 0;
        FileUploader.Components[t_ElementName + "_TrasferCompletedRate"] = 0;
        /* ==== */

    }
}
/* ==== */


/* ==== */
/* Help Guide Components Getter */
FileUploader.Components.Getter = function (Params) {

    /* Get the Component Values */
    var Response = {
        ElementName: Params.ElementName,
        FileName: Params.FileData.name,
        IsEOF: Params.StartRange >= Params.FileData.size ? true : false,
        ChunkIndex: FileUploader.Components[Params.ElementName.replace("_FileUploader", "") + "_ActiveChunks"],
        Base64String: Params.Base64String,
        DataPath: FileUploader.Components.RandomFolder,
        Category: FileUploader.Components.StyleName
    };
    return Response;
}
/* ==== */
