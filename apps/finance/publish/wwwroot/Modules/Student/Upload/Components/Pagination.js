/* ==== */
/* Student Details Pagination Components Objects */
StudentUpload.Components.Pagination = {}
StudentUpload.Components.Table = {
    HeadId: "#tbhExcelSheetData",
    BodyId: "#tbdExcelSheetData"
}
StudentUpload.Components.TableColumns = {

}
/* ==== */

/* ==== */
/* Student Details Components Initialize */
StudentUpload.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    StudentUpload.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    StudentUpload.Components.Pagination.TableHead();

}
/* ==== */


/* ==== */
/* Student Components Table Clean */
StudentUpload.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(StudentUpload.Components.Table.BodyId).html("");

    }
    catch (ex) {

        /* ==== */
        /* Exception Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */
    }
}
/* ==== */

/* ==== */
/* Student Details Components Pagination Table Header */
StudentUpload.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("UploadId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.UploadId = 0;

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        t_th.text("ClassId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.ClassId = 1;

        t_th = $(document.createElement("th"));
        t_th.html("STANDARD" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Class = 2;

        t_th = $(document.createElement("th"));
        t_th.text("SecId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.SecId = 3;

        t_th = $(document.createElement("th"));
        t_th.html("SECTION" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Section = 4;

        t_th = $(document.createElement("th"));
        t_th.html("ADMISSION NO" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.AdmissionNo = 5;

        t_th = $(document.createElement("th"));
        t_th.html("ADMISSION DATE" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.AdmissionDate = 6;

        t_th = $(document.createElement("th"));
        t_th.html("YEAR OF ADMISSION" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.YearOfAdmission = 7;

        t_th = $(document.createElement("th"));
        t_th.html("STUDENT NAME" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.StudentName = 8;

        t_th = $(document.createElement("th"));
        t_th.html("GENDER" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Gender = 9;

        t_th = $(document.createElement("th"));
        t_th.html("DATE OF BIRTH" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.DOB = 10;

        t_th = $(document.createElement("th"));
        t_th.text("PLACE OF BIRTH");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.PlaceOfBirth = 11;

        t_th = $(document.createElement("th"));
        t_th.text("AADHAR NO");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.AadharCardNo = 12;

        t_th = $(document.createElement("th"));
        t_th.text("EMIS NO");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.EMISNo = 13;

        t_th = $(document.createElement("th"));
        t_th.html("FATHER NAME" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.FathersName = 14;

        t_th = $(document.createElement("th"));
        t_th.text("FATHER QUALIFICATION");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.FathersQualification = 15;

        t_th = $(document.createElement("th"));
        t_th.text("FATHER OCCUPATION");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.FathersOccupation = 16;

        t_th = $(document.createElement("th"));
        t_th.html("FATHER MOBILE" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.FathersTelephoneNo = 17;

        t_th = $(document.createElement("th"));
        t_th.text("FATHER WHATSAPP");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.FathersWhatsappNo = 18;

        t_th = $(document.createElement("th"));
        t_th.html("MOTHER NAME" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MothersName = 19;

        t_th = $(document.createElement("th"));
        t_th.text("MOTHER QUALIFICATION");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MothersQualification = 20;

        t_th = $(document.createElement("th"));
        t_th.text("MOTHER OCCUPATION");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MothersOccupation = 21;

        t_th = $(document.createElement("th"));
        t_th.html("MOTHER MOBILE" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MothersTelephoneNo = 22;

        t_th = $(document.createElement("th"));
        t_th.text("MOTHER WHATSAPP");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MothersWhatsappNo = 23;

        t_th = $(document.createElement("th"));
        t_th.text("ANNUAL INCOME");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.AnnualIncome = 24;

        t_th = $(document.createElement("th"));
        t_th.text("MOTHER TONGUE");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.MotherTongue = 25;

        t_th = $(document.createElement("th"));
        t_th.html("RELIGION" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Religion = 26;

        t_th = $(document.createElement("th"));
        t_th.text("NATIONALITY");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Nationality = 27;

        t_th = $(document.createElement("th"));
        t_th.text("CATEGORY");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Category = 28;

        t_th = $(document.createElement("th"));
        t_th.text("CASTE");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Caste = 29;

        t_th = $(document.createElement("th"));
        t_th.text("BLOOD GROUP");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.BloodGroup = 30;

        t_th = $(document.createElement("th"));
        t_th.html("PRESENT ADDRESS" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.PresentAddress = 31;

        t_th = $(document.createElement("th"));
        t_th.text("PERMANENT ADDRESS");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.PermanentAddress = 32;

        t_th = $(document.createElement("th"));
        t_th.html("DISTRICT" + "<span class=\"red\">&nbsp;</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.District = 33;

        t_th = $(document.createElement("th"));
        t_th.html("PINCODE" + "<span class=\"red\">&nbsp;</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.PINCode = 34;

        t_th = $(document.createElement("th"));
        t_th.html("STUDENT TYPE" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Studenttype = 35;

        t_th = $(document.createElement("th"));
        t_th.html("STAGE" + "<span class=\"red\">&nbsp;*</span>");
        t_th.addClass("text-left bolder text-nowrap");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Stage = 36;

        t_th = $(document.createElement("th"));
        t_th.text("IsDuplicate");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.IsDuplicate = 37;

        t_th = $(document.createElement("th"));
        t_th.text("IsHasClass");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.IsHasClass = 38;

        t_th = $(document.createElement("th"));
        t_th.text("IsValidEntry");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.AcademicYear = 39;

        t_th = $(document.createElement("th"));
        t_th.text("IsValidAcademicYear");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.IsValidAcademicYear = 40;

        t_th = $(document.createElement("th"));
        t_th.text("IsSkipped");
        t_th.addClass("text-left bolder hide");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.IsSkipped = 41;

        t_th = $(document.createElement("th"));
        t_th.addClass("col-lg-1");
        t_th.text("Remove");
        t_th.appendTo(t_tr);
        StudentUpload.Components.TableColumns.Delete = 42;
        /* ==== */

        t_tr.appendTo(StudentUpload.Components.Table.HeadId);
        $("#tbhExecutionStudentDet").html($(StudentUpload.Components.Table.HeadId).html());


    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}
/* ==== */

/* ==== */
/* Student Details Components Pagination Table Body */
StudentUpload.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        for (var i = 0; i < Result.length; i++) {

            /* ==== */
            /* Bind Table Column Details */
            t_tr = $(document.createElement("tr"));
            t_tr.addClass("Row_" + Result[i].AdmissionNo);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].UploadId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].ClassId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Class);
            t_td.addClass("text-left bolder text-nowrap");
            if (!Result[i].IsHasClass) {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Class name does not exist in organization record");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].SecId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Section);
            if (!Result[i].IsHasClass) {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Class name does not exist in organization record");
                Result[i].IsSkipped = true;
            }
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].AdmissionNo);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].AdmissionNo) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Admission No Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(GeneralFunction.DateFormat(Result[i].AdmissionDate));
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].AdmissionDate) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Admission Date Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].YearOfAdmission);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].YearOfAdmission) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Year Of Admission Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].StudentName);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].StudentName) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Student Name Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Gender);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].Gender) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Gender Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(GeneralFunction.DateFormat(Result[i].DOB));
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].DOB) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Date Of Birth Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].PlaceOfBirth);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].AadharCardNo);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].EMISNo);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FathersName);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].FathersName) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Fathers Name Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FathersQualification);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FathersOccupation);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FathersTelephoneNo);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].FathersTelephoneNo) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Fathers Telephone No Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].FathersWhatsappNo);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MothersName);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].MothersName) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Mothers Name Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MothersQualification);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MothersOccupation);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MothersTelephoneNo);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].MothersTelephoneNo) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Mothers Telephone No Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MothersWhatsappNo);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].AnnualIncome);
            t_td.addClass("text-right bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].MotherTongue);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Religion);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].Religion) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Religion Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Nationality);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Category);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Caste);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].BloodGroup);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].PresentAddress);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].PresentAddress) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Present Address Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].PermanentAddress);
            t_td.addClass("text-left bolder text-nowrap");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].District);
            t_td.addClass("text-left bolder text-nowrap");
            // if (GeneralFunction.Trim(Result[i].District) == "") {
            //     t_td.addClass("bg-danger");
            //     t_td.attr("Title", "District Is Required");
            //     Result[i].IsSkipped = true;
            // }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].PINCode);
            t_td.addClass("text-left bolder text-nowrap");
            // if (GeneralFunction.Trim(Result[i].PINCode) == "") {
            //     t_td.addClass("bg-danger");
            //     t_td.attr("Title", "PIN Code Is Required");
            //     Result[i].IsSkipped = true;
            // }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Studenttype);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].Studenttype) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Student type Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].Stage);
            t_td.addClass("text-left bolder text-nowrap");
            if (GeneralFunction.Trim(Result[i].Stage) == "") {
                t_td.addClass("bg-danger");
                t_td.attr("Title", "Stage Is Required");
                Result[i].IsSkipped = true;
            }
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].IsDuplicate);
            t_td.addClass("text-left bolder hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].IsHasClass);
            t_td.addClass("text-left bolder hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].IsValidAcademicYear);
            t_td.addClass("text-left bolder hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].IsSkipped);
            t_td.addClass("text-left bolder hide");
            t_td.appendTo(t_tr);

            t_td = $(document.createElement("td"));
            t_td.addClass("text-center bolder");
            t_td.append('<a onclick =\"StudentUpload.Components.Router(' + "'" + "Row_" + Result[i].UploadId + "'" + ',' + "'DeleteAcademy'" + ')" href=\'javascript:void(0);\' title="Delete this Student"><i class="ace-icon fa fa-2x fas fa-trash-alt red\" aria-hidden="true"></i></a>');
            t_td.appendTo(t_tr);
            /* ==== */

            if (Result[i].IsDuplicate) {
                t_tr.addClass("red");
                t_tr.attr("Title", Result[i].AdmissionNo + " Is already exist.. So we can't allow this entry to upload");
                Result[i].IsSkipped = true;
            }

            var t_RowData = $(t_tr).html();

            t_tr.appendTo(StudentUpload.Components.Table.BodyId);
            if (!Result[i].IsSkipped) $("#tbdExecutionStudentDet").append($(StudentUpload.Components.Table.BodyId + ' tr:last').clone());
            /* ==== */
        }

    }
    catch (ex) {

        /* ==== */
        /* Exception Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */

    }
}

/* ==== */
/* Student Sort the Record */
StudentUpload.Components.Pagination.SortTableRecords = function () {

    var tbody = $(StudentUpload.Components.Table.BodyId);
    var rows = tbody.find('tr').get();

    // Sort the rows using the custom comparison function
    rows.sort(StudentUpload.Components.Pagination.CompareRows);

    // Reattach the sorted rows to the table
    $.each(rows, function (index, row) {
        tbody.append(row);
    });

    /* First Row Check Box Activiate */
    $(StudentUpload.Components.Table.BodyId + ' tr:first input[type="radio"]').prop('checked', true);
}
/* ==== */

/* ==== */
/* Student Record Comparison */
StudentUpload.Components.Pagination.CompareRows = function (a, b) {
    var dateA = new Date($(a).find('td:eq(3)').text());
    var dateB = new Date($(b).find('td:eq(3)').text());
    return dateB - dateA;
}
/* ==== */

/* ==== */
/* Student Record Delete */
StudentUpload.Components.Pagination.DeleteRecord = function (RouteId) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlDeleteConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Delete",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Delete the Student */
                    $("#" + RouteId).remove();
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */

/* ==== */
/* Student Upload Warning  */
StudentUpload.Components.Pagination.Warning = function () {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlWarningConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Warning",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {
                    StudentUpload.IsWarningConform = true;
                    $(".btn-next").click();
                    $(this).dialog("close");
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    StudentUpload.IsWarningConform = false;
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */

/* ==== */
/* Student Publish Conformation  */
StudentUpload.Components.Pagination.PublishConformation = function () {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "420";
    if (windowsize <= 480) {
        width = "95%";
    }

    $("#MdlPublishConfirm").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Confirmation",
        title_html: true,
        buttons: [
            {
                html: "Yes",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                    StudentUpload.Components.Save();
                }
            },
            {
                html: "No",
                "class": "btn btn-white btn-xs btn-round bolder",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}
/* ==== */