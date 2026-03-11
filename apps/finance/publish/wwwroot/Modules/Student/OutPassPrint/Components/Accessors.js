

/* ==== */
/* Fees Collection Components Setter */
OutPassPrint.Components.Setter = function (Param) {

    /* Set the Component Values */
    typeof Param.OrganizationName !== "undefined" ? $(".lblOrganizationName").html(Param.OrganizationName) : $(".lblOrganizationName").html("");
    typeof Param.AddressLine1 !== "undefined" ? $(".lblAddressLine1").html(Param.AddressLine1) : $(".lblAddressLine1").html("");
    typeof Param.AddressLine2 !== "undefined" ? $(".lblAddressLine2").html(Param.AddressLine2) : $(".lblAddressLine2").html("");
    typeof Param.AddressLine3 !== "undefined" ? $(".lblAddressLine3").html("Land Mark : " + Param.AddressLine3) : $(".lblAddressLine3").html("");
    typeof Param.Phone !== "undefined" ? $(".lblPhone").html("Phone : " + Param.Phone) : $(".lblPhone").html("");
    typeof Param.City !== "undefined" ? $(".lblCity").html(Param.City + "-" + Param.PINCode) : $(".lblCity").html("");
    typeof Param.State !== "undefined" ? $(".lblState").html(Param.State) : $(".lblState").html("");

    Param = Param.OutPassDetails;
    typeof Param.OutPassNo !== "undefined" ? $(".lblOutPassNo").html(Param.OutPassNo) : $(".lblOutPassNo").html("");
    typeof Param.OutPassDate !== "undefined" ? $(".lblOutPassDate").html(moment(new Date(Param.OutPassDate)).format('DD-MMM-YYYY HH:mm A')) : $(".lblOutPassDate").html("");
    typeof Param.ClassName !== "undefined" ? $(".lblClassName").html(Param.ClassName) : $(".lblClassName").html("");
    typeof Param.Section !== "undefined" ? $(".lblSection").html(Param.Section) : $(".lblSection").html("");
    typeof Param.StudentName !== "undefined" ? $(".lblStudentName").html(Param.StudentName) : $(".lblStudentName").html("");
    typeof Param.AdmissionNo !== "undefined" ? $(".lblAdmissionNo").html(Param.AdmissionNo) : $(".lblAdmissionNo").html("");
    typeof Param.AttenderName !== "undefined" ? $(".lblAttenderName").html(Param.AttenderName) : $(".lblAttenderName").html("");
    typeof Param.Relation !== "undefined" ? $(".lblRelation").html(Param.Relation) : $(".lblRelation").html("");
    typeof Param.Place !== "undefined" ? $(".lblPlace").html(Param.Place) : $(".lblPlace").html("");
    typeof Param.PhoneNo !== "undefined" ? $(".lblPhoneNo").html(Param.PhoneNo) : $(".lblPhoneNo").html("");
    typeof Param.BusNo !== "undefined" ? $(".lblBusNo").html(Param.BusNo) : $(".lblBusNo").html("");
    typeof Param.Remark !== "undefined" ? $(".lblRemark").html(Param.Remark) : $(".lblRemark").html("");
    typeof Param.AttenderImage !== "undefined" ? $(".imgAttenderImage").attr("src", Param.AttenderImage) : $(".imgAttenderImage").html("");
    typeof Param.StudentImage !== "undefined" ? $(".imgStudentImage").attr("src", Param.StudentImage) : $(".imgStudentImage").html("");
    
}
/* ==== */

/* ==== */
/* Assign Fees Components Getter */
OutPassPrint.Components.Getter = function (Param) {

    /* Get the Fees Details */
    var Response = {
        OutPassId: $("#hdnOutPassId").val()
    }
    return Response;
}
/* ==== */
