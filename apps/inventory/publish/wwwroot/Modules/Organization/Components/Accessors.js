

/* ==== */
/* Organization Components Setter */
Organization.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.OrganizationName !== "undefined" ? $("#txtOrganizationName").val(Param.OrganizationName) : $("#txtOrganizationName").val("");
    typeof Param.Phone !== "undefined" ? $("#txtPhone").val(Param.Phone) : $("#txtPhone").val("");
    typeof Param.AddressLine1 !== "undefined" ? $("#txtAddressLine1").val(Param.AddressLine1) : $("#txtOrganizationName").val("");
    typeof Param.AddressLine2 !== "undefined" ? $("#txtAddressLine2").val(Param.AddressLine2) : $("#txtOrganizationName").val("");
    typeof Param.AddressLine3 !== "undefined" ? $("#txtAddressLine3").val(Param.AddressLine3) : $("#txtAddressLine3").val("");
    typeof Param.City !== "undefined" ? $("#txtCity").val(Param.City) : $("#txtCity").val("");
    typeof Param.State !== "undefined" ? $("#txtState").val(Param.State) : $("#txtState").val("");
    typeof Param.PINCode !== "undefined" ? $("#txtPINCode").val(Param.PINCode) : $("#txtPINCode").val("");

    if (typeof Param.Files !== "undefined") {
        if (Param.Files.length != 0) {

            for (var i = 0; i < Param.Files.length; i++) {

                /* ==== */
                /* Set the Gallery Viewer */
                FileUploader.Components.SetGalleryList({
                    TargetId: ".divAttachFiles",
                    Image: (Param.Files[i].FileType == "Image" ? Param.Files[i].ImagePath + "/" + Param.Files[i].FileName : "/assets/images/LetterHead/" + Param.Files[i].FileExtension.replace(".", "") + ".png"),
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

}
/* ==== */

/* ==== */
/* Organization Components Getter */
Organization.Components.Getter = function (Param) {

    /* ==== */
    /* Attached Document List */
    let t_lstAttachFiles = [];
    let t_LetterHeadHtml = $(".divAttachFiles").html();
    if (t_LetterHeadHtml != "") {
        let t_ImageLists = $(".divAttachFiles").find("li").length;
        for (let i = 0; i < t_ImageLists; i++) {
            t_lstAttachFiles.push({
                DataPath: $($(".divAttachFiles").find("li")[i]).find("img").attr("data-src")
            });
        }
    }
    /* ==== */

    /* Get the Organization Response */
    var Response = {
        OrgId: $("#hdnOrgId").val(),
        OrganizationName: GeneralFunction.DataClearning($("#txtOrganizationName").val()),
        Phone: GeneralFunction.DataClearning($("#txtPhone").val()),
        AddressLine1: GeneralFunction.DataClearning($("#txtAddressLine1").val()),
        AddressLine2: GeneralFunction.DataClearning($("#txtAddressLine2").val()),
        AddressLine3: GeneralFunction.DataClearning($("#txtAddressLine3").val()),
        City: GeneralFunction.DataClearning($("#txtCity").val()),
        State: GeneralFunction.DataClearning($("#txtState").val()),
        PINCode: GeneralFunction.DataClearning($("#txtPINCode").val()),

        /* Attached Details  */
        Files: t_lstAttachFiles,
    }
    return Response;
}
/* ==== */
