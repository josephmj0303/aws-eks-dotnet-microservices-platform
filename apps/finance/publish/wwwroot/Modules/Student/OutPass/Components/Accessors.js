

/* ==== */
/* OutPass Components Setter */
OutPass.Components.Setter = function (Param) {

   
    /* Clear the Current Student Data */
    OutPass.Components.CurrentStudentData = {}

    /* Set the Component Values */
    typeof Param.OutPassNo !== "undefined" ? $("#txtOutPassNo").val(Param.OutPassNo) : $("#txtOutPassNo").val("New");
    typeof Param.OutPassDate !== "undefined" ? $("#txtOutPassDate").val(moment(new Date(Param.OutPassDate)).format('DD-MMM-YYYY HH:mm A')) : $("#txtOutPassDate").val(moment(new Date()).format('DD-MMM-YYYY HH:mm A'));
    typeof Param.AttenderImage !== "undefined" ? $("#ImgAttenderCapturedPhoto").attr("src", Param.AttenderImage) : $("#ImgAttenderCapturedPhoto").val("");
    typeof Param.StudentImage !== "undefined" ? $("#ImgStudentCapturedPhoto").attr("src", Param.StudentImage) : $("#ImgStudentCapturedPhoto").val("");
    typeof Param.AdmissionNo !== "undefined" ? $("#txtAdmissionNo").val(Param.AdmissionNo) : $("#txtAdmissionNo").val("");
    typeof Param.AttenderName !== "undefined" ? $("#txtAttenderName").val(Param.AttenderName) : $("#txtAttenderName").val("");
    typeof Param.Relation !== "undefined" ? $("#txtRelation").val(Param.Relation) : $("#txtRelation").val("");
    typeof Param.Place !== "undefined" ? $("#txtPlace").val(Param.Place) : $("#txtPlace").val("");
    typeof Param.PhoneNo !== "undefined" ? $("#txtPhoneNo").val(Param.PhoneNo) : $("#txtPhoneNo").val
   
    /* Load the Files */
    if (typeof Param.Files !== "undefined") {
        if (Param.Files.length != 0) {

            for (var i = 0; i < Param.Files.length; i++) {

                /* ==== */
                /* Set the Gallery Viewer */
                FileUploader.Components.SetGalleryList({
                    TargetId: ".divAttachFiles",
                    Image: Param.Files[i].ImagePath + "/" + Param.Files[i].FileName,
                    FilePath: Param.Files[i].ImagePath + "/" + Param.Files[i].FileName,
                    Filetype: Param.Files[i].FileType
                });
                /* ==== */

            }
        }
        else {
            $(".divAttachFiles").html("");
        }
    }

    /* Visiblity */
    $(".div-StudentInformation").hide();
    OutPass.Components.Visiblity();

    /* Default */
    $(".DivCamera").show();
    $(".DivLocalDrive").hide();

}
/* ==== */

/* ==== */
/* OutPass Components Getter */
OutPass.Components.Getter = function (Param) {

    /* ==== */
    /* Attached Document List */
    let t_lstAttachFiles = [];
    let t_DocumentHtml = $(".divAttachFiles").html();
    if (t_DocumentHtml != "") {
        let t_ImageLists = $(".divAttachFiles").find("li").length;
        for (let i = 0; i < t_ImageLists; i++) {
            t_lstAttachFiles.push({
                DataPath: $($(".divAttachFiles").find("li")[i]).find("img").attr("data-src")
            });
        }
    }
    /* ==== */

    /* Decleartion */
    var t_ClassId = OutPass.Components.CurrentStudentData.StudentDetails.ClassId;
    var t_SecId = OutPass.Components.CurrentStudentData.StudentDetails.SecId;
    var t_StudentId = OutPass.Components.CurrentStudentData.StudentDetails.StudentId;

    /* Get the OutPass Response */
    var Response = {
        OutPassNo: $("#txtOutPassNo").val(),
        OutPassDate: $("#txtOutPassDate").val(),
        ClassId: t_ClassId,
        SecId: t_SecId,
        StudentId: t_StudentId,
        AttenderImage: $("#ImgAttenderCapturedPhoto").attr("src"),
        StudentImage: $("#ImgStudentCapturedPhoto").attr("src"),
        AttenderName: $("#txtAttenderName").val(),
        Relation: $("#txtRelation").val(),
        Place: $("#txtPlace").val(),
        PhoneNo: $("#txtPhoneNo").val(),
        BusId: $("#txtBusNo").attr("data-value"),
        BusNo: $("#txtBusNo").val(),
        Files: t_lstAttachFiles,
        Remark: $("#txtNotes").val()
    }
    return Response;
}
/* ==== */

/* ==== */
/* Out Pass Components Student Setter */
OutPass.Components.StudentSetter = function (Param) {

    /* Set the Component Values */
    typeof Param.StudentName !== "undefined" ? $("#lblStudentName").html(Param.StudentName) : $("#lblStudentName").html("");
    typeof Param.ClassName !== "undefined" ? $("#lblClassName").html(Param.ClassName) : $("#lblClassName").html("");
    typeof Param.Section !== "undefined" ? $("#lblSection").html(Param.Section) : $("#lblSection").html("");
    typeof Param.FathersTelephoneNo !== "undefined" ? $("#lblFathersTelephoneNo").html(Param.FathersTelephoneNo) : $("#lblFathersTelephoneNo").html("");
    typeof Param.MothersTelephoneNo !== "undefined" ? $("#lblMothersTelephoneNo").html(Param.MothersTelephoneNo) : $("#lblMothersTelephoneNo").html("");
    typeof Param.PresentAddress !== "undefined" ? $("#txtPlace").val(Param.PresentAddress) : $("#txtPlace").val("");
    typeof Param.BusNo !== "undefined" ? $("#txtBusNo").val(Param.BusNo) : $("#txtBusNo").val("");
    typeof Param.BusId !== "undefined" ? $("#txtBusNo").attr("data-value", Param.BusId) : $("#txtBusNo").attr("data-value", 0);
    typeof Param.StudentImage !== "undefined" ? $("#ImgStudentCapturedPhoto").attr("src", Param.StudentImage) : $("#ImgStudentCapturedPhoto").val("");

    /* ==== */
    /* Find the Given Attender Name From History */
    $("#txtAttenderName").attr("autocomplete", "off");
    if (typeof OutPass.Components.CurrentStudentData !== "undefined") {
        if (typeof OutPass.Components.CurrentStudentData.AttenderDetails !== "undefined") {
            /* ==== */
            /*  Set the Attender Details */
            $("#txtAttenderName").autocomplete({
                source: OutPass.Components.CurrentStudentData.AttenderDetails.map(F => F.AttenderName),
                select: OutPass.Components.StudentAttenderSetter
            });
                ;
            $("#txtAttenderName").attr("autocomplete", "on");
            /* ==== */
        }
    }
    /* ==== */

    $(".div-StudentInformation").show();
    OutPass.Components.Visiblity();
    
}
/* ==== */

/* ==== */
/* Out Pass Components Student Attender Setter */
OutPass.Components.StudentAttenderSetter = function (event, ui, Relation) {

    /* ==== */
    /* Find the Given Attender Name From History */
    if (typeof ui.item.label !== "undefined") {
        var t_AttenderName = ui.item.label;
        if (typeof OutPass.Components.CurrentStudentData !== "undefined") {
            if (typeof OutPass.Components.CurrentStudentData.AttenderDetails !== "undefined") {

                /* Get Matched Attender Information */
                var lstMatched = OutPass.Components.CurrentStudentData.AttenderDetails.filter(function (ActiveElement) {
                    if (ActiveElement.AttenderName == t_AttenderName || ActiveElement.Relation == Relation) {
                        return ActiveElement;
                    }
                });

                /* Set the Attender Information */
                if (lstMatched.length > 0) {
                    if (lstMatched[0].Relation != "Father" && lstMatched[0].Relation != "Mother") {
                        $("#txtRelation").val(lstMatched[0].Relation);
                        $("#txtPhoneNo").val(lstMatched[0].PhoneNo);
                        $("#txtPlace").val(lstMatched[0].Place);
                    }
                    /* Get the Attender Image */
                    OutPass.Components.PopulateImage();
                   
                }

            }
        }
    }
    /* ==== */
}
OutPass.Components.StudentAttenderImage = function (Params) {

    /* Set Default Image */
    $("#ImgAttenderCapturedPhoto").attr("src", "/assets/images/placeholder/Profile.jpg");
    $("#ImgStudentCapturedPhoto").attr("src", "/assets/images/placeholder/Profile.jpg");

    if(Params.AttenderImage != null && Params.AttenderImage != "") {
        $("#ImgAttenderCapturedPhoto").attr("src", Params.AttenderImage);
    }
    if (Params.StudentImage != null && Params.StudentImage != "") {
        $("#ImgStudentCapturedPhoto").attr("src", Params.StudentImage);
    }
}
/* ==== */

/* ==== */
/* OutPass Components Visiblity */
OutPass.Components.Visiblity = function () {


    /* ===== */
    /* Reset the Values */
    $("#txtRelation").val("");
    $("#txtPhoneNo").val("");
    $("#txtPlace").val("-");
    $("#ImgAttenderCapturedPhoto").attr("src", "/assets/images/placeholder/Profile.jpg");
    //$("#ImgStudentCapturedPhoto").attr("src", "/assets/images/placeholder/Profile.jpg");
    /* ===== */

    if ($('#rdbFatherOpt').is(':checked')) {

        /* ===== */
        /* Father Or Mother then Hide the Formality */
        $(".divAttenderDetails").hide();
        /* ===== */

        /* ===== */
        /* Auto Fill the Father Information */
        $("#txtRelation").val("Father");
        if (typeof OutPass.Components.CurrentStudentData.StudentDetails !== "undefined") {
            $("#txtAttenderName").val(OutPass.Components.CurrentStudentData.StudentDetails.FathersName);
            $("#txtPhoneNo").val(OutPass.Components.CurrentStudentData.StudentDetails.FathersTelephoneNo);
            $("#txtPlace").val(OutPass.Components.CurrentStudentData.StudentDetails.PresentAddress);

            /* ===== */
            /* Load the Father Information */
            OutPass.Components.StudentAttenderSetter("", {
                item: {
                    label: "",
                }
            }, "Father");
            
        }
        /* ===== */

    }
    else if ($('#rdbMotherOpt').is(':checked'))
    {
        /* ===== */
        /* Father Or Mother then Hide the Formality */
        $(".divAttenderDetails").hide();
        /* ===== */

        /* ===== */
        /* Auto Fill the Father Information */
        $("#txtRelation").val("Mother");
        if (typeof OutPass.Components.CurrentStudentData.StudentDetails !== "undefined") {
            $("#txtAttenderName").val(OutPass.Components.CurrentStudentData.StudentDetails.MothersName);
            $("#txtPhoneNo").val(OutPass.Components.CurrentStudentData.StudentDetails.MothersTelephoneNo);
            $("#txtPlace").val(OutPass.Components.CurrentStudentData.StudentDetails.PresentAddress);
        }
        /* ===== */

        /* ===== */
        /* Load the Father Information */
        OutPass.Components.StudentAttenderSetter("", {
            item: {
                label: "",
            }
        }, "Mother");

    }
    else {

        $("#txtAttenderName").val("");

        /* ===== */
        /* Others then Show the Formality */
        $(".divAttenderDetails").show();
        /* ===== */

    }

}
/* ==== */