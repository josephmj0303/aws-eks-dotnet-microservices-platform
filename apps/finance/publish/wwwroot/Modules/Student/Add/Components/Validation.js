/* ==== */
/* Student Validation Components Objects */
Student.Components.Validation = {};
/* ==== */

/* ==== */
/* Student Components Validation */
Student.Components.Validation.Initialize = function (Params) {

    /* Student Validation */
    $('#frmStudent').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            AdmissionNo: {
                required: true
            },
            AdmissionDate: {
                required: true
            },
            AdmissionYear: {
                required: true
            },
            StudentName: {
                required: true
            },
            DOB: {
                required: true
            },
            FathersName: {
                required: true
            },
            FathersTelephoneNo: {
                required: true
            },
            MothersName: {
                required: true
            },
            MothersTelephoneNo: {
                required: true
            },
            PresentAddress: {
                required: true
            },
            PINCode: {
                required: true
            },
            StudentType : {
                required: true
            }

        },

        messages: {
            AdmissionNo: {
                required: "Customer Code is required."
            },
            AdmissionDate: {
                required: "Date No is required."
            },
            StudentName: {
                required: "Customer Name No is required."
            },
            DOB: {
                required: "Date Of Birth is required."
            },
            FathersName: {
                required: "Fathers Name is required."
            },
            FathersTelephoneNo: {
                required: "Fathers Phone No is required."
            },
            MothersName: {
                required: "Mothers Name is required."
            },
            MothersTelephoneNo: {
                required: "Mothers Phone No is required."
            },
            PresentAddress: {
                required: "Present Address is required."
            },
            PINCode: {
                required: "PIN Code is required."
            }
        },

        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },

        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error'); //.addClass('has-info');
            $(e).remove();
        }
    });

}
/* ==== */

/* ==== */
/* Student Components Validation Status */
Student.Components.Validation.Status = function (Params) {

    /* Declearation */
    var t_Boolean = true;

    try {

        switch (Params.Form) {

            case "Student":
                /* ==== */
                /* Check Student Form Validation */
                if (!$('#frmStudent').valid()) {
                    t_Boolean = false;
                }
                //else if ($(Student.Components.Table.BodyId + " tr").length == 0) {

                //    /* ==== */
                //    /* Message Box */
                //    GeneralFunction.Message({
                //        Status: "Failure",
                //        Title: "Required",
                //        Message: "Academy Information Is Needed, Please complete the Academy information before moving on."
                //    });
                //    /* ==== */
                //    t_Boolean = false;

                //}
                else if ($("#SelStudentType").val() == "Bus") {

                    if ($("#txtStage").val().trim() == "") {
                        /* ==== */
                        /* Message Box */
                        GeneralFunction.Message({
                            Status: "Failure",
                            Title: "Required",
                            Message: "Stage Is Reqired."
                        });
                        /* ==== */
                        t_Boolean = false;
                    }

                }
                /* ==== */
                break;

            case "AcademyHistory":
                /* Decleartion */
                var t_ClassId = 0, t_SecId = 0;
                var t_StartYear = 0, t_EndYear = 0;


                /* Get the Academy Year */
                var t_AcademyYear = $("#txtAcademyYear").val();
                if (t_AcademyYear == "") {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Academy Year Is Required"
                    });
                    /* ==== */
                    t_Boolean = false;

                }
                else if (t_AcademyYear.split("-").length < 2 || t_AcademyYear.split("-").length > 2) {

                    /* ==== */
                    /* Message Box */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Required",
                        Message: "Invalid Academic Format. Example 2023-2024."
                    });
                    /* ==== */

                    t_Boolean = false;
                }

                else {

                    /* Get the Class & Section Details */
                    var t_ClassSecId = Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Value;
                    if (t_ClassSecId != null && t_ClassSecId != "") {
                        t_ClassId = t_ClassSecId.split("_")[0];
                        t_SecId = t_ClassSecId.split("_")[1]
                    }

                    if (t_ClassId == 0 || t_SecId == 0) {

                        /* ==== */
                        /* Message Box */
                        GeneralFunction.Message({
                            Status: "Failure",
                            Title: "Required",
                            Message: "Class/Sec Is Required"
                        });
                        /* ==== */
                        t_Boolean = false;
                    }
                    else {
                        /* ==== */
                        /* Check Academy History Form Validation */
                        $(Student.Components.Table.BodyId + ' tr').each(function () {

                            var cellClassIdValue = $(this).find('td').eq(Student.Components.TableColumns.ClassId).text().trim();
                            var cellStartYear = $(this).find('td').eq(Student.Components.TableColumns.StartYear).text().trim();
                            var cellEndYear = $(this).find('td').eq(Student.Components.TableColumns.EndYear).text().trim();

                            var t_AcademyYear = $("#txtAcademyYear").val();
                            t_StartYear = t_AcademyYear.split("-")[0];
                            t_EndYear = t_AcademyYear.split("-")[1];

                            if (cellClassIdValue === t_ClassId && cellStartYear == t_StartYear && cellEndYear == t_EndYear) {


                                /* ==== */
                                /* Exception Message Box Show */
                                GeneralFunction.Message({
                                    Status: "Failure",
                                    Title: "Failure",
                                    Message: Dropdown.GetSelectedOption({ TargetId: ".divClassSection" }).Text + " is already found. pls check below academy list.",
                                });
                                /* ==== */

                                t_Boolean = false;
                                return false; // Exit the loop if the value is found
                            }
                        });
                        /* ==== */
                    }
                }
                break;
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
    return t_Boolean;
}
/* ==== */