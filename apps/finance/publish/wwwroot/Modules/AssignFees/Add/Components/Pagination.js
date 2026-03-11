/* ==== */
/* Assign Fees Details Pagination Components Objects */
AssignFees.Components.Pagination = {};
AssignFees.Components.Table = {
    HeadId: "#tbhStudentList",
    BodyId: "#tbdStudentList"
}
/* ==== */

/* ==== */
/* Assign Fees Details Components Initialize */
AssignFees.Components.Pagination.Initialize = function () {

    /* Once Components Ready then Clean the Component Values */
    AssignFees.Components.Pagination.Cleaner();

    /* Init the Pagination Table Header */
    AssignFees.Components.Pagination.TableHead();

}
/* ==== */

/* ==== */
/* Assign Fees Components Table Clean */
AssignFees.Components.Pagination.Cleaner = function () {

    try {

        /* Clear the Pagination Table Components */
        $(AssignFees.Components.Table.BodyId).html("");

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
/* Assign Fees Details Components Pagination Table Header */
AssignFees.Components.Pagination.TableHead = function () {

    /* Declearation */
    var t_tr = null, t_th = null;

    try {

        /* Bind Table Column Details */
        t_tr = $(document.createElement("tr"));

        t_th = $(document.createElement("th"));
        t_th.text("StudentId");
        t_th.addClass("hide");
        t_th.appendTo(t_tr);

        /* ==== */
        /* Desktop Preview */
        t_th = $(document.createElement("th"));
        //t_th.append(AssignFees.Components.Pagination.CreateCheckbox({ Id: "Student_SelectAll", Status: false }));
        t_th.addClass("text-center bolder ");
        t_th.addClass("col-lg-1");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("S.No");
        t_th.addClass("text-center bolder");
        t_th.addClass("col-lg-1");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Section");
        t_th.addClass("text-left bolder hide");
        t_th.addClass("col-lg-3");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Customer Code");
        t_th.addClass("text-left bolder");
        t_th.addClass("col-lg-3");
        t_th.appendTo(t_tr);

        t_th = $(document.createElement("th"));
        t_th.text("Customer Name");
        t_th.addClass("text-left bolder");
        t_th.addClass("col-lg-8");
        t_th.appendTo(t_tr);
        /* ==== */

        t_tr.appendTo(AssignFees.Components.Table.HeadId);

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
/* Assign Fees Details Components Pagination Table Body */
AssignFees.Components.Pagination.TableBody = function (Result) {

    /* Declearation */
    var t_tr = null, t_td = null;

    try {

        // Sort students by Admission No
        Result.sort(function (a, b) {
            return parseInt(a.AdmissionNo) - parseInt(b.AdmissionNo);
        });

        /* ==== */
        /* Bind Table Column Values */
        $(AssignFees.Components.Table.BodyId).html("");
        for (var i = 0; i < Result.length; i++) {

            t_tr = $(document.createElement("tr"));
            t_tr.addClass("RN" + Result[i].StudentId);

            t_td = $(document.createElement("td"));
            t_td.text(Result[i].StudentId);
            t_td.addClass("hide");
            t_td.appendTo(t_tr);

            /* Class Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.append(AssignFees.Components.Pagination.CreateCheckbox({ Id: "Student_" + Result[i].StudentId, Status: false }));
            t_td.appendTo(t_tr);

            /* Admission No */
            t_td = $(document.createElement("td"));
            t_td.addClass("text-center");
            t_td.text((i + 1));
            t_td.appendTo(t_tr);

            /* Section */
            t_td = $(document.createElement("td"));
            t_td.addClass("hide");
            t_td.text(Result[i].Section);
            t_td.appendTo(t_tr);

            /* Admission No */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].AdmissionNo);
            t_td.appendTo(t_tr);

            /* Fees Name */
            t_td = $(document.createElement("td"));
            t_td.addClass("");
            t_td.text(Result[i].StudentName);
            t_td.appendTo(t_tr);
            /* ==== */

            t_tr.appendTo(AssignFees.Components.Table.BodyId);
        }
        /* ==== */
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
/* Assign Student Record Delete */
AssignFees.Components.Pagination.CreateCheckbox = function (Params) {

    var t_Checkbox = $(document.createElement("div"));

    var t_label = $(document.createElement("label"));
    t_label.addClass("block");

    var t_InputBox = $(document.createElement("input"));
    t_InputBox.addClass("ace input-md StudentCheckbox");
    t_InputBox.attr("Id", Params.Id);
    t_InputBox.attr("name", "form-field-checkbox");
    t_InputBox.attr("type", "checkbox");
    t_InputBox.prop('checked', Params.Status);
    t_InputBox.appendTo(t_label);

    var t_Span = $(document.createElement("span"));
    t_Span.addClass("lbl bigger-120");
    t_Span.appendTo(t_label);
    t_label.appendTo(t_Checkbox);

    return t_Checkbox;
}
/* ==== */

