/* ==== */
/* File Uploader Components Populate */
FileUploader.Components.Upload = function (Params) {
    /* Load the FileUploader Details */
    if (FileUploader.Components.Validation.Status(Params)) {

        /* Calculate the Total Transfer Chunk */
        var t_CResponse = FileUploader.Components.CalculateChunkProgresssRate(Params);
        if (t_CResponse != null) {
            FileUploader.Components.Setter(t_CResponse);

            /* Initiate the Recursive Requests */
            FileUploader.Components.RecursiveFileReader({
                ElementName: Params.ElementName,   /* File Uploader ElementId */
                FileData: Params.FileData,         /* Actual File */
                StartRange: 0                      /* Starting Offset Range (Startwith 0) */
            });
        }
    }
    /* ==== */
}
/* ==== */

/* ==== */
/* Read the File Data & Convert into Base64 */
FileUploader.Components.PauseRecursiveParams = null;
FileUploader.Components.RecursiveFileReader = function (Params) {

    /* Declearation */
    var t_FileReader = new FileReader();
    var t_SlicedChunkFile = null;
    var t_ChunkEndRange = 0;

    try {


        if (Params.FileData != null) {

            /* Set the Chunk Slice End Range */
            t_ChunkEndRange = (Params.StartRange + FileUploader.Components.ChunkSize);


            /* Get the Start & End Range */
            t_SlicedChunkFile = Params.FileData.slice(Params.StartRange, t_ChunkEndRange);

            /* Prepare reader with an event listener */
            t_FileReader.addEventListener('load', function (e) {

                /* Send the Current File Base64 String */
                Params.Base64String = e.target.result.split(';base64,')[1];
                var t_RequestParams = FileUploader.Components.Getter(Params);
                FileUploader.Components.Push(t_RequestParams);

                /* Check Is It Last Chunk */
                FileUploader.Components.PauseRecursiveParams = Params;
                if (!t_RequestParams.IsEOF && !FileUploader.Components.IsSkiped && !FileUploader.Components.IsWait) {

                    /* Read Next Chunk Using Recursive Method */
                    FileUploader.Components.RecursiveFileReader({

                        ElementName: Params.ElementName,   /* File Uploader ElementId */
                        FileData: Params.FileData,         /* Actual File */
                        StartRange: t_ChunkEndRange        /* Starting Range */

                    });

                } else {

                    /* ==== */
                    /* Upload Cancel then hide the Progress bar */
                    if (FileUploader.Components.IsSkiped && !FileUploader.Components.IsWait) {

                        /* Reset the Progress bar */
                        FileUploader.Components.Cleaner({
                            TargetId: Params.ElementName.replace("_FileUploader", "")  /* File Uploader ElementId */
                        });

                    }
                    /* ==== */
                }

            }, { once: true }); // register as a once handler!
            t_FileReader.readAsDataURL(t_SlicedChunkFile);

        }
    }
    catch (e) {

    }
}
/* ==== */

/* ==== */
/* File Uplader Data Recursively Send to Server */
FileUploader.Components.Push = function (Params) {
    if (Params != null) {
        DataControllers_FileUploader.Push(Params);
    }
}
/* ==== */