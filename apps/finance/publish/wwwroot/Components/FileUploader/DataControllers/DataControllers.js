

/* ==== */
/* Help Guide Documents Data Controllers */
class DataControllers_FileUploader {

    /* Receiver the Data from Server */
    static Push(Params) {


        /* ==== */
        /* Set the Progress Bar (Request) */
        if (!FileUploader.Components.IsSkiped) {
            FileUploader.Components.ProgressSetter({
                ElementName: Params.ElementName.replace("_FileUploader", ""),
                ProgressRate: FileUploader.Components[Params.ElementName.replace("_FileUploader", "") + "_ProgresssRate"]
            });
        }
        /* ==== */

        /* Move to Next Chunk */
        FileUploader.Components[Params.ElementName.replace("_FileUploader", "") + "_ActiveChunks"] += 1;

        $.ajax({
            type: "POST",
            url: "/FileUploader/SetFileChunks",
            data: Params,
            dataType: "text",
            async: false,
            success: function (Response) {
                if (Response != null) {
                    Response = JSON.parse(Response);
                    if (Response.status == "Success") {

                        var t_ElementName = Response.result.data1;
                        if (t_ElementName != "") {

                            t_ElementName = t_ElementName.replace("_FileUploader", "");

                            /* ==== */
                            /* Set the Progress Bar (Response) */
                            if (!FileUploader.Components.IsSkiped) {
                                FileUploader.Components.ProgressSetter({
                                    ElementName: t_ElementName,
                                    ProgressRate: FileUploader.Components[t_ElementName.replace("_FileUploader", "") + "_ProgresssRate"]
                                });
                            }
                            /* ==== */

                            /* ==== */
                            /* Success & Is Is Last Callback Function */
                            if (Response.result.data2) { /* EOF Flag */

                                /* Call the Clean Function */
                                FileUploader.Components.Cleaner({
                                    TargetId: t_ElementName
                                });

                                /* Reset the Uploader */
                                FileUploader.Components.UploaderReset();

                                /* Once Completed Callback */
                                if (typeof FileUploader.Components.UploadCompleted !== "undefined") {
                                    FileUploader.Components.UploadCompleted({
                                        TargetId: t_ElementName,
                                        FileIconPath: Response.result.data3,
                                        FilePath: Response.result.data4,
                                        FileType: Response.result.data5
                                    });
                                }
                            }
                            /* ==== */
                        }
                    }
                }
            },
            error: function (req, status, error) {
                alert(error);

            }
        });
    }
}
/* ==== */