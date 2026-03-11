/* ==== */
/* Init the Elearning General Object */
var GeneralFunction = {};
GeneralFunction.ContentRoot = "";
GeneralFunction.CurrencySymbol = "<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>";
/* ==== */


/* ===== */
/* Get the OrganizationDataPath */
GeneralFunction.OrganizationDataPath = function (Params) {
    return "/Content/Organization_" + Organization.OrgId;
}
/* ===== */

/* ===== */
/* Get the Elearning Random Key */
GeneralFunction.GetRandomKey = function (Params) {

    var Response_Random;
    var t_KeyLength = 16;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Key Length ==== */
    if (typeof Params !== "undefined") {
        if (typeof Params.Keylength) {
            t_KeyLength = Params.Keylength;
        }
    }

    try {
        var Elearning_Patten = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var Elearning_Result = "";
        for (var RB_i = t_KeyLength; RB_i > 0; --RB_i) {
            Elearning_Result += Elearning_Patten[Math.round(Math.random() * (Elearning_Patten.length - 1))];
        }
        Response_Random = { Status: "Success", Message: "Success", RandomKey: Elearning_Result };
    }
    catch (e) {
        Response_Random = { Status: "Failure", Message: e.message };
    }
    return Response_Random;
}
/* ===== */

/* ===== */
/* Elearning text to Upper Case format */
GeneralFunction.UpperCase = function (Params) {
    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof Params.Text !== "undefined") {
        t_InputString = Params.Text.toUpperCase();
    }
    return t_InputString;
}
/* ===== */

/* ===== */
/* Elearning text to Lower Case format */
GeneralFunction.LowerCase = function (Params) {
    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof Params.Text !== "undefined") {
        t_InputString = Params.Text.toLowerCase();
    }
    return t_InputString;
}
/* ===== */

/* ===== */
/* Elearning text to Camel Case format */
GeneralFunction.CamelCase = function (Params) {
    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof Params.Text !== "undefined") {
        t_InputString = Params.Text;
        t_InputString = t_InputString.replace(/(?:^|\s)\w/g, function (match) {
            return match.toUpperCase();
        });
    }
    return t_InputString;
}
/* ===== */

/* ===== */
/* Elearning text to Capitalize the FirstLetter */
GeneralFunction.CapitalizetheFirstLetter = function (Params) {
    if (typeof Params.Keyword !== "undefined") {          /* === Option Params === */
        return Params.Keyword.charAt(0).toUpperCase() + Params.Keyword.slice(1).toLowerCase();
    }
    return "";
}
/* ===== */

/* ===== */
/* Elearning Startwith  */
GeneralFunction.Startswith = function (Params) {
    var IsMatched = false;
    try {

        var t_InputString1 = "";
        /* ==== Mandatory Params ==== */
        /* ==== Elearning Input String1 ==== */
        if (typeof Params.String1 !== "undefined") {
            t_InputString1 = Params.String1.toUpperCase();
        }

        var t_InputString2 = "";
        /* ==== Mandatory Params ==== */
        /* ==== Elearning Input String2 ==== */
        if (typeof Params.String2 !== "undefined") {
            t_InputString2 = Params.String2.toUpperCase();
        }

        if (t_InputString1 != "" && t_InputString2 != "") {
            if (t_InputString1.startsWith(t_InputString2)) {
                IsMatched = true;
            }
        }
    }
    catch (e) {
        alert(e.Message);
    }
    return IsMatched;
}
/* ===== */

/* ===== */
/* Elearning Keyword Spliter  */
GeneralFunction.SplitKeywords = function (Params) {

    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof Params.Text !== "undefined") {
        t_InputString = Params.Text;
    }
    /* ===== */

    var t_SplitBy = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning SplitBy  ==== */
    if (typeof Params.SplitBy !== "undefined") {
        t_SplitBy = Params.SplitBy;
    }
    /* ===== */

    var t_Output;
    if (t_InputString != "") {
        t_Output = t_InputString.split(t_SplitBy);
    }
    return t_Output;
}
/* ===== */

/* ===== */
/* Elearning Remove Unwanted WhiteSpace  */
GeneralFunction.RemoveUnwantedSpace = function (Params) {

    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof Params.Text !== "undefined") {
        t_InputString = Params.Text;
        t_InputString = t_InputString.replace(/\s\s+/g, ' ');
    }
    /* ===== */
    return t_InputString;
}
/* ===== */

/* ===== */
/* Elearning Remove Unwanted WhiteSpace  */
GeneralFunction.DataClearning = function (TextValue) {

    var t_InputString = "";
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Input String ==== */
    if (typeof TextValue !== "undefined") {
        t_InputString = TextValue.trim(); // removes leading & trailing whitespace
    }
    /* ===== */
    return t_InputString;
}
/* ===== */

/* ===== */
/* Elearning Date Format */
GeneralFunction.DateTimeFormat = function (t_DateValue) {

    /* Declearation */
    var t_UploadOn = "";
    const t_DateFormat = "dd/MMM/yy HH:mm";
    const lst_Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    switch (t_DateFormat) {

        case "MMM dd, yy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = lst_Months[t_UploadOn.getMonth()] + " " + t_UploadOn.getDate() + ", " + t_UploadOn.getFullYear().toString().substring(2) + " " + (t_UploadOn.getHours().toString().length == 1 ? "0" + t_UploadOn.getHours().toString() : t_UploadOn.getHours()) + ":" + (t_UploadOn.getMinutes().toString().length == 1 ? t_UploadOn.getMinutes() + "0" : t_UploadOn.getMinutes());
            break;

        case "dd/MMM/yy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = t_UploadOn.getDate() + "-" + lst_Months[t_UploadOn.getMonth()] + "-" + t_UploadOn.getFullYear().toString().substring(2) + " " + (t_UploadOn.getHours().toString().length == 1 ? "0" + t_UploadOn.getHours().toString() : t_UploadOn.getHours()) + ":" + (t_UploadOn.getMinutes().toString().length == 1 ? t_UploadOn.getMinutes() + "0" : t_UploadOn.getMinutes());
            break;
    }

    return t_UploadOn;
}
GeneralFunction.DateFormat = function (t_DateValue, t_DateFormat = "dd-MMM-yyyy HH:mm") {

    /* Declearation */
    var t_UploadOn = "";
    const lst_Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    switch (t_DateFormat) {

        case "MMM dd, yy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = lst_Months[t_UploadOn.getMonth()] + " " + t_UploadOn.getDate() + ", " + t_UploadOn.getFullYear().toString().substring(2);
            break;

        case "dd/MMM/yy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = t_UploadOn.getDate() + "/" + lst_Months[t_UploadOn.getMonth()] + "/" + t_UploadOn.getFullYear().toString().substring(2);
            break;

        case "dd-MMM-yyyy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = t_UploadOn.getDate() + "-" + lst_Months[t_UploadOn.getMonth()] + "-" + t_UploadOn.getFullYear().toString();
            break;

        case "dd-MM-yyyy HH:mm":
            if (t_DateValue != null && t_DateValue != "" && t_DateValue != "0001-01-01T00:00:00" && t_DateValue != "1900-01-01T00:00:00") t_UploadOn = new Date(t_DateValue);
            if (t_UploadOn != "" && t_UploadOn != null) t_UploadOn = t_UploadOn.getDate() + "-" + (t_UploadOn.getMonth() + 1) + "-" + t_UploadOn.getFullYear().toString();
            break;
    }
    return t_UploadOn;
}
GeneralFunction.DateTimePickerFormat = function (t_DateValue) {

    /* Declearation */
    var t_UploadOn = "";
    const t_DateFormat = Organization.DateFormat;
    var t_ReturnDateFormat = "DD/MMM/YYYY HH:mm:ss"

    switch (t_DateFormat) {

        case "MMM dd, yy HH:mm":
            t_ReturnDateFormat = "DD/MMM/YYYY HH:mm:ss";
            break;

        case "dd/MMM/yy HH:mm":
            t_ReturnDateFormat = "DD/MMM/YYYY HH:mm:ss"
            break;
    }
    return t_ReturnDateFormat;
}
GeneralFunction.PrintDateTimeFormat = function (t_DateValue) {
    /* Declaration */
    var t_UploadOn = "";
    const t_DateFormat = "dd/MMM/yy HH:mm";
    const lst_Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (t_DateValue && t_DateValue !== "0001-01-01T00:00:00" && t_DateValue !== "1900-01-01T00:00:00") {
        const dt = new Date(t_DateValue);

        let hours = dt.getHours();
        const minutes = dt.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // convert hour '0' to '12'
        const formattedHours = hours.toString().padStart(2, '0');

        const day = dt.getDate().toString().padStart(2, '0');
        const month = lst_Months[dt.getMonth()];
        const year = dt.getFullYear();

        t_UploadOn = `${day}-${month}-${year} & ${formattedHours}:${minutes} ${ampm}`;
    }

    return t_UploadOn;
}
/* ===== */

/* ==== */
/* Elearning Set Cookie */
GeneralFunction.SetCookies = function (t_Name, t_Value, t_Days) {
    /* Declearation */
    var t_Expires = "";
    if (t_Days) {
        var date = new Date();
        date.setTime(date.getTime() + (t_Days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = t_Name + "=" + (t_Value || "") + t_Expires + "; path=/";
}
/* ==== */

/* ==== */
/* Elearning Get Cookie */
GeneralFunction.GetCookies = function (t_Name) {
    var nameEQ = t_Name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
/* ==== */

/* ==== */
/* Elearning Read Cookies. */
GeneralFunction.ReadCookies = function (Params) {

    var Response_Cookies;
    var t_CookieName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies ==== */
    if (typeof Params.CookieName !== "undefined") {
        t_CookieName = Params.CookieName;
        try {
            var t_Name = t_CookieName + "=";
            var t_AllCookies = document.cookie.split(';');
            var t_CookiesValue = "";
            for (var i = 0; i < t_AllCookies.length; i++) {
                var c = t_AllCookies[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(t_Name) == 0) {
                    var String = c.substring(t_Name.length, c.length);
                    t_CookiesValue = c.substring(t_Name.length, c.length);
                }
            }
            if (t_CookiesValue != "") {
                Response_Cookies = { Status: "Success", Message: "Success", CookieValue: t_CookiesValue };
            } else {
                Response_Cookies = { Status: "failed", Message: "failed", CookieValue: t_CookiesValue };
            }
        } catch (e) {
            Response_Cookies = { Status: "failed", Message: e.Message };
        }
    } else {
        Response_Cookies = { Status: "failed", Message: "Invalid Cookies Name" };
    }
    return Response_Cookies;
}
/* ==== */

/* ==== */
/* Elearning Create Cookies. */
GeneralFunction.CreateCookies = function (Params) {
    var Response_Cookies;
    var t_CurrentDate = new Date();
    var t_CookieName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies ==== */
    if (typeof Params.CookieName !== "undefined") {
        t_CookieName = Params.CookieName;
    }

    var t_CookieValue;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies Value ==== */
    if (typeof Params.Value !== "undefined") {
        t_CookieValue = Params.Value;
    }

    var t_CookieExpir;

    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies Expir Day ==== */
    if (typeof Params.Days !== "undefined") {
        t_CookieExpir = (Params.Days * 1);
        t_CurrentDate.setTime(t_CurrentDate.getTime() + (t_CookieExpir * 24 * 60 * 60 * 1000));
        t_CookieExpir = "; expires=" + t_CurrentDate.toGMTString();
    }

    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies Expir Hours ==== */
    if (typeof Params.Hours !== "undefined") {
        t_CookieExpir = (Params.Hours * 1);
        t_CurrentDate.setTime(t_CurrentDate.getTime() + (t_CookieExpir * 60 * 60 * 1000));
        t_CookieExpir = "; expires=" + t_CurrentDate.toGMTString();
    }

    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies Expir Minutes ==== */
    if (typeof Params.Minutes !== "undefined") {
        t_CookieExpir = (Params.Minutes * 1);
        t_CurrentDate.setTime(t_CurrentDate.getTime() + (t_CookieExpir * 60 * 1000));
        t_CookieExpir = "; expires=" + t_CurrentDate.toGMTString();
    }

    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies Expir Seconds ==== */
    if (typeof Params.Seconds !== "undefined") {
        t_CookieExpir = (Params.Seconds * 1);
        t_CurrentDate.setTime(t_CurrentDate.getTime() + (t_CookieExpir * 1000));
        t_CookieExpir = "; expires=" + t_CurrentDate.toGMTString();
    }

    if (t_CookieName != "" && t_CookieValue != "" && t_CookieExpir != "") {
        try {
            document.cookie = t_CookieName + "=" + t_CookieValue + t_CookieExpir + "; path=/";
            Response_Cookies = { Status: "Success", Message: "Success", CookieName: t_CookieName };
        } catch (e) {
            Response_Cookies = { Status: "failed", Message: e.Message };
        }
    } else {
        Response_Cookies = { Status: "failed", Message: "Invalid Cookies Name" };
    }
    return Response_Cookies;
}
/* ==== */

/* ==== */
/* Elearning Remove Cookies. */
GeneralFunction.RemoveCookies = function (Params) {
    var Response_Cookies;
    var t_CookieName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Cookies ==== */
    if (typeof Params.CookieName !== "undefined") {
        t_CookieName = Params.CookieName;
        document.cookie = t_CookieName + " =;path=/;expires = 1991-12-16T09:26:33.000Z";
        document.cookie = t_CookieName + " = ; path=/Sports; expires = 1991-12-16T09:26:33.000Z";
        //GeneralFunction.CreateCookies(t_CookieName, "", -1);
        Response_Cookies = { Status: "Success", Message: "Success", CookieName: t_CookieName };
    } else {
        Response_Cookies = { Status: "failed", Message: "Invalid Cookies Name" };
    }
    return Response_Cookies;
}
/* ==== */

/* ==== */
/* Elearning Read Session Storage. */
GeneralFunction.ReadSession = function (Params) {

    var Response_Session;
    var t_SessionValue = "";
    var t_SessionName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Session ==== */
    if (typeof Params.SessionName !== "undefined") {
        try {
            if (typeof (Storage) !== "undefined") {
                t_SessionName = Params.SessionName;
                t_SessionValue = sessionStorage.getItem(t_SessionName);

                if (t_SessionValue != null) {
                    Response_Session = { Status: "Success", Message: "Success", SessionValue: t_SessionValue };
                } else {
                    Response_Session = { Status: "failed", Message: "Empty", SessionValue: "" };
                }
            } else {
                Response_Session = { Status: "failed", Message: "Browser Not Support" };
            }
        }
        catch (e) {
            Response_Session = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.ReadSession", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }
    return Response_Session;
}
/* ==== */

/* ==== */
/* Elearning Create Session Storage. */
GeneralFunction.CreateSession = function (Params) {

    var Response_Session;

    var t_SessionName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Session ==== */
    if (typeof Params.SessionName !== "undefined") {
        t_SessionName = Params.SessionName;
    }

    var t_SessionValue;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Session Value ==== */
    if (typeof Params.SessionValue !== "undefined") {
        t_SessionValue = Params.SessionValue;
    }

    /* ==== Insert the Session ==== */
    if (t_SessionName != "" && t_SessionValue != "") {
        try {
            // Check browser support
            if (typeof (Storage) !== "undefined") {
                sessionStorage.setItem(t_SessionName, t_SessionValue);
                Response_Session = { Status: "Success", Message: "Success", SessionValue: t_SessionValue };
            } else {
                Response_Session = { Status: "failed", Message: "Browser Not Support" };
            }
        } catch (e) {
            Response_Session = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.CreateSession", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }
    return Response_Session;
}
/* ==== */

/* ==== */
/* Elearning Remove Session Storage. */
GeneralFunction.RemoveSession = function (Params) {

    var Response_Session;
    var t_SessionName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Session ==== */
    if (typeof Params.SessionName !== "undefined") {
        t_SessionName = Params.SessionName;
    }

    /* ==== Remove the Session ==== */
    if (t_SessionName != "") {
        try {
            // Check browser support
            if (typeof (Storage) !== "undefined") {
                sessionStorage.removeItem(t_SessionName);
                Response_Session = { Status: "Success", Message: "Success" };
            } else {
                Response_Session = { Status: "failed", Message: "Browser Not Support" };
            }
        } catch (e) {
            Response_Session = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.RemoveSession", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }
    return Response_Session;
}
/* ==== */

/* ==== */
/* Elearning Read local Storage. */
GeneralFunction.ReadlocalStorage = function (Params) {

    var Response_localStorage;
    var t_localStorageValue = "";
    var t_localStorageName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Session ==== */
    if (typeof Params.StorageName !== "undefined") {
        try {
            if (typeof (Storage) !== "undefined") {
                t_localStorageName = Params.StorageName;
                t_localStorageValue = localStorage.getItem(t_localStorageName);

                if (t_localStorageValue != null) {
                    Response_localStorage = { Status: "Success", Message: "Success", StorageValue: t_localStorageValue };
                } else {
                    Response_localStorage = { Status: "failed", Message: t_localStorageName + " is Expired..,", StorageValue: "" };
                }
            } else {
                Response_localStorage = { Status: "failed", Message: "Browser Not Support" };
            }
        }
        catch (e) {
            Response_localStorage = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.ReadlocalStorage", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }
    return Response_localStorage;
}
/* ==== */

/* ==== */
/* Elearning Create local Storage. */
GeneralFunction.CreatelocalStorage = function (Params) {

    var Response_localStorage;

    var t_localStorageName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Storage Name ==== */
    if (typeof Params.StorageName !== "undefined") {
        t_localStorageName = Params.StorageName;
    }

    var t_localStorageValue;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Storage Value ==== */
    if (typeof Params.StorageValue !== "undefined") {
        t_localStorageValue = Params.StorageValue;
    }

    /* ==== Insert the local Storage ==== */
    if (t_localStorageName != "" && t_localStorageValue != "") {
        try {
            /* ==== Check Browser Support ==== */
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem(t_localStorageName, t_localStorageValue);
                Response_localStorage = { Status: "Success", Message: "Success", StorageValue: t_localStorageValue };
            } else {
                Response_localStorage = { Status: "failed", Message: "Browser Not Support" };
            }
        } catch (e) {
            Response_localStorage = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.CreatelocalStorage", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }

    return Response_localStorage;
}
/* ==== */

/* ==== */
/* Elearning Remove local Storage. */
GeneralFunction.RemovelocalStorage = function (Params) {

    var Response_localStorage;

    var t_localStorageName;
    /* ==== Mandatory Params ==== */
    /* ==== Elearning Storage Name ==== */
    if (typeof Params.StorageName !== "undefined") {
        t_localStorageName = Params.StorageName;
    }

    /* ==== Remove the Session ==== */
    if (t_localStorageName != "") {
        try {
            // Check browser support
            if (typeof (Storage) !== "undefined") {
                localStorage.removeItem(t_SessionName);
                Response_localStorage = { Status: "Success", Message: "Success" };
            } else {
                Response_localStorage = { Status: "failed", Message: "Browser Not Support" };
            }
        } catch (e) {
            Response_localStorage = { Status: "Failure", Message: e.message };

            /* ===== */
            /* Send the Exception to Roosborad */
            // Elearning_Exception.SendMessage({ PageName: "Elearning-general-function.js", FunctionName: "GeneralFunction.RemoveSession", Params: Params, ExceptionParams: e, ExceptionMessage: e.message });
            /* ===== */
        }
    }
    return Response_localStorage;
}
/* ==== */

/* ==== */
/* Elearning Get Url Id */
GeneralFunction.GetUrlVars = function () {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        if (hash.length == 2) {
            vars.push(hash[0]);
            hash[1] = hash[1].replace("#", "");
            vars[hash[0]] = hash[1];
        }
    }
    return vars;
}
/* ==== */

/* ==== */
/* Elearning updateQueryString Paramerters without refresh page */
GeneralFunction.updateQueryStringParam = function (key, value) {

    var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {

        updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

        if (typeof value == 'undefined' || value == null || value == '') { // Remove param if value is empty

            params = urlQueryString.replace(removeRegex, "$1");
            params = params.replace(/[&;]$/, "");

        } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it

            params = urlQueryString.replace(updateRegex, "$1" + newParam);

        } else { // Otherwise, add it to end of query string

            params = urlQueryString + '&' + newParam;

        }

    }
    window.history.replaceState({}, "", baseUrl + params);
};

/* ==== */
/* Calculate Validity Cost */
GeneralFunction.DateDiff = function (t_Start, t_End, t_ReturnBy) {

    /* Declearation */
    var t_StartDate = new Date(t_Start);
    var t_EndDate = new Date(t_End);
    const DiffTime = Math.abs(t_EndDate - t_StartDate);
    var R_Output = 0;

    switch (t_ReturnBy) {

        case "Days":
            R_Output = Math.ceil(DiffTime / (1000 * 60 * 60 * 24)) + 1;
            break;
    }
    return R_Output;
}
/* ==== */

/* ==== */
/* Button Processing */
GeneralFunction.TransPreloader = function (Element, State, DataLoadingContent, IsWizardForm) {

    if (State) {

        /* ==== */
        /* Create Loading Button */
        var t_Button = $(document.createElement("button"));
        t_Button.attr("type", "button");
        if (!IsWizardForm) t_Button.addClass("btn btn-white btn-md btn-round btn-bold btn-" + Element.substring(1) + " ");
        if (IsWizardForm) t_Button.addClass("btn btn-white btn-md btn-round btn-bold btn-" + Element.substring(1));

        t_Button.html('<i class="fa fa-clock-o menu-icon faa-spin animated faa-medium" aria-hidden="true"></i>&nbsp;' + DataLoadingContent);
        /* ==== */

        /* Append the Preloader */
        $(Element).after(t_Button);
        $(Element).hide();

    }
    else {

        /* Remove the Loading Button */
        $(".btn-" + Element.substring(1)).remove();
        $(Element).show();
    }

}
/* ==== */

/* ==== */
/* Data Loading Processing */
GeneralFunction.DataProcessing = function (Element, State) {

    /* Declearation */
    var t_RootDiv = null;
    var t_LoaderDiv = null;
    var t_Icon = null;
    var t_Breaktag = $(document.createElement("br"));
    var t_Content = "";

    try {

        if (State) {

            /* ==== */
            /* Create Loading Div */
            t_RootDiv = $(document.createElement("div"));
            t_RootDiv.addClass("col-lg-12 col-md-12 col-sm-12 text-center col-xs-12 divDataLoader-" + Element.substring(1) + "");

            t_LoaderDiv = $(document.createElement("div"));
            t_LoaderDiv.attr("style", "text-align:center;margin-top:1.5em;");

            /* Loading Icon */
            t_Icon = $(document.createElement("i"));
            t_Icon.addClass("fa fa-4x fa-clock-o menu-icon faa-spin animated faa-medium");

            /* Loading Content */
            t_Content = $(document.createElement("h5"));
            t_Content.addClass("bolder background-gradient");
            t_Content.html("Loading... Please Wait");

            /* Bundle all tags */
            t_Icon.appendTo(t_LoaderDiv);
            t_Breaktag.appendTo(t_LoaderDiv);
            t_Content.appendTo(t_LoaderDiv);
            t_LoaderDiv.appendTo(t_RootDiv);
            /* ==== */

            /* Append the Preloader */
            $(Element).after(t_RootDiv);
            if (!$("#btnFilters").is(":visible")) $(Element).hide();

        }
        else {

            /* Remove the Loading Div */
            $(".divDataLoader-" + Element.substring(1)).remove();
            if (!$("#btnFilters").is(":visible")) $(Element).show();
        }
    }
    catch (e) {

    }

}
/* ==== */

/* ==== */
/* Data Scaning Processing */
GeneralFunction.Scaning = function (Element, State) {

    /* Declearation */
    var t_RootDiv = null;
    var t_LoaderDiv = null;
    var t_Icon = null;
    var t_Breaktag = $(document.createElement("br"));
    var t_Content = "";

    try {

        if (State) {

            /* ==== */
            /* Create Loading Div */
            t_RootDiv = $(document.createElement("div"));
            t_RootDiv.addClass("col-lg-12 col-md-12 col-sm-12 text-center col-xs-12 divDataLoader-" + Element.substring(1) + "");

            t_LoaderDiv = $(document.createElement("div"));
            t_LoaderDiv.attr("style", "text-align:center;margin-top:1.5em;");

            /* Loading Icon */
            t_Icon = $(document.createElement("i"));
            t_Icon.addClass("fa fa-2x fa-futbol-o black faa-spin animated");

            /* Loading Content */
            t_Content = $(document.createElement("h6"));
            t_Content.addClass("bolder");
            t_Content.html("Scaning...");

            /* Bundle all tags */
            t_Icon.appendTo(t_LoaderDiv);
            t_Breaktag.appendTo(t_LoaderDiv);
            t_Content.appendTo(t_LoaderDiv);
            t_LoaderDiv.appendTo(t_RootDiv);
            /* ==== */

            /* Append the Preloader */
            $(Element).after(t_RootDiv);
            $(Element).hide();

        }
        else {

            /* Remove the Loading Div */
            $(".divDataLoader-" + Element.substring(1)).remove();
            $(Element).show();
        }
    }
    catch (e) {

    }

}
/* ==== */

/* ==== */
/* Breadcum */
GeneralFunction.SetBreadCrumb = function (Params) {

    /* Declearation */
    var t_Parent = null;
    var t_Child = null;
    var t_Icon = null;
    var t_ActionLink = null;
    var t_TargetId = ".lstbreadcrumb";

    try {

        /* ==== */
        /* Set the Parent */
        t_Parent = $(document.createElement("li"));

        t_Icon = $(document.createElement("i"));
        t_Icon.addClass("ace-icon menu-icon fa fa-home home-icon bolder background-gradient");

        t_ActionLink = $(document.createElement("a"));
        t_ActionLink.addClass("ace-icon menu-icon bolder background-gradient");
        t_ActionLink.attr("href", "#Home");
        t_ActionLink.html("&nbsp;Home");

        t_Icon.appendTo(t_Parent);
        t_ActionLink.appendTo(t_Parent);
        t_Parent.appendTo(t_TargetId);
        /* ==== */

        if (typeof Params !== "undefined") {
            for (var i = 0; i < Params.length; i++) {
                if (typeof Params[i].Active === "undefined") Params[i].Active = false;
                if (!Params[i].Active) {

                    /* ==== */
                    /* Child Page */
                    t_Child = $(document.createElement("li"));
                    //t_Icon = $(document.createElement("i"));
                    //t_Icon.addClass("ace-icon menu-icon fa " + Params[i].Icons +" home-icon bolder");

                    t_ActionLink = $(document.createElement("a"));
                    t_ActionLink.addClass("ace-icon menu-icon bolder background-gradient");
                    t_ActionLink.attr("href", Params[i].Action);
                    t_ActionLink.html(Params[i].Title);

                    //t_Icon.appendTo(t_Child);
                    t_ActionLink.appendTo(t_Child);
                    /* ==== */

                }
                else {

                    /* ==== */
                    /* Active Page */
                    t_Child = $(document.createElement("li"));
                    t_Child.addClass("active bolder grey");
                    t_Child.html(Params[i].Title);
                    /* ==== */

                }
                t_Child.appendTo(t_TargetId);
            }
        }
    }
    catch (e) {

    }
}
GeneralFunction.ClearBreadCrumb = function (Params) {

    /* Declearation */
    var t_TargetId = ".lstbreadcrumb";

    try {
        $(t_TargetId).html("");
    }
    catch (e) {

    }
}
/* ==== */

/* ==== */
/* Preventing HTML and Script injections */
GeneralFunction.PreventScriptInjections = function (t_SourceCode) {

    /* Declearation */
    var t_VirualDiv = null;
    var t_PreventedCode = "";
    var t_ScriptTags = null;
    var t_StyleTags = null;
    var t_totTags = 0;

    try {

        /* ==== */
        /* Clean the Unwanted White Space */
        t_PreventedCode = t_SourceCode.replace(/\s+/g, ' ');
        /* ==== */

        /* ==== */
        /* Create New Virual Div Element */
        t_VirualDiv = $(document.createElement("div"));
        t_VirualDiv.html(t_PreventedCode);
        /* ==== */

        /* Clean the Unwanted Script Injection tags */
        t_ScriptTags = t_VirualDiv.getElementsByTagName('script');
        t_totTags = t_ScriptTags.length;
        while (t_totTags--) {
            /* Delete the Script Element Step By Step */
            t_ScriptTags[t_totTags].parentNode.removeChild(t_ScriptTags[t_totTags]);
        }

        /* Clean the Unwanted Style Injection tags */
        t_StyleTags = t_VirualDiv.getElementsByTagName('style');
        t_totTags = t_StyleTags.length;
        while (t_totTags--) {
            /* Delete the Style Element Step By Step */
            t_StyleTags[t_totTags].parentNode.removeChild(t_StyleTags[t_totTags]);
        }

        /* Return the Prevented Html String */
        return t_VirualDiv.html();
    }
    catch (e) {
        t_PreventedCode = t_SourceCode.replace(/\s+/g, ' ');
    }
    return t_PreventedCode;
}
/* ==== */

/* ==== */
/* Preventing Source Inspect */
GeneralFunction.PreventSourceInspect = function (Param) {
    /* Declearation */
    var t_EnableProtection = false;
    var t_Status = false;

    try {


        /* ==== Mandatory Params ==== */
        /* ==== Elearning Source Inspect Flag ==== */
        if (typeof Param.Activate !== "undefined") {
            t_EnableProtection = Param.Activate;
        }

        if (t_EnableProtection) {

            /* Activate the Event Listenner */
            document.addEventListener("contextmenu", function (e) {
                e.preventDefault();
            });

            /* Disable the Shortcut Keys */
            document.onkeydown = function (e) {
                if (event.keyCode == 123) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                    /* Inspect Source Tab */
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                    /* Inspect Element Tab */
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                    /* Inspect Console Tab */
                    return false;
                }
                if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                    /* Open Source Code In new tab */
                    return false;

                }
            }
        }
    }
    catch (e) {

    }
}
/* ==== */

/* ==== */
/* Message Box */
GeneralFunction.Message = function (Params) {

    /* Status Code */
    if (typeof Params.Status !== "undefined") {
        /* ==== */
        /* Success Toster Message */
        $.gritter.add({
            title: Params.Title,
            text: Params.Message,
            class_name: (Params.Status == "Success") ? 'gritter-success gritter-right' : 'gritter-warning  gritter-right'
        });
        /* ==== */
    }
}
/* ==== */

/* ==== */
/* Set the Button Colour */
GeneralFunction.GetRandomId = 1;
GeneralFunction.GetRandomColours = function (Param) {

    /* Set Randam Colour */
    var t_ColourClass = "";
    if (GeneralFunction.GetRandomId >= 7) GeneralFunction.GetRandomId = 1;
    switch (GeneralFunction.GetRandomId) {

        case 1:
            t_ColourClass = "purple2";
            break;

        case 2:
            t_ColourClass = "success";
            break;

        case 3:
            t_ColourClass = "danger";
            break;

        case 4:
            t_ColourClass = "primary";
            break;

        case 5:
            t_ColourClass = "inverse";
            break;

        case 6:
            t_ColourClass = "warning";
            break;

        case 7:
            t_ColourClass = "pink";
            break;
    }
    GeneralFunction.GetRandomId += 1;
    return t_ColourClass;
}
/* ==== */

/* ==== */
/* Time Format */
GeneralFunction.TimeFormat = function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
/* ==== */

/* ==== */
/* Whats app Time */
GeneralFunction.ChatbotTimeFormat = function (t_Date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var t_Date = months[t_Date.getMonth()] + " " + t_Date.getDate() + ", " + GeneralFunction.TimeFormat(t_Date);
    return t_Date;
}
/* ==== */

/* ==== */
/* Check Found */
GeneralFunction.CheckDuplicate = function (t_ElementList, t_FindId) {
    var t_IsFound = false;
    if (t_ElementList.length > 0) {
        if (t_ElementList.indexOf(t_FindId) > -1) {
            t_IsFound = true;
        } else {
            t_IsFound = false;
        }
    } else {
        t_IsFound = false;
    }
    return t_IsFound;
}
/* ==== */

/* ==== */
/* Set Deley Response */
GeneralFunction.Debounce = function (fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
/* ==== */

/* ==== */
/* Set the Discount */
GeneralFunction.CalculateDiscount = function (Params) {

    /* Declearation */
    let t_DiscountPercentage = 0;
    let t_TotalAmount = 0;
    let t_TotalDiscountAmount = 0;

    /* Discount Percentage */
    if (typeof Params.Percentage !== "undefined") {
        t_DiscountPercentage = Params.Percentage * 1;
    }

    /* Total Amount */
    if (typeof Params.TotalAmount !== "undefined") {
        t_TotalAmount = Params.TotalAmount * 1;
    }
    t_TotalDiscountAmount = parseFloat((t_DiscountPercentage * t_TotalAmount) / 100).toFixed(2);
    return t_TotalDiscountAmount;
}
/* ==== */


/* ==== */
/* Filter Condition */
GeneralFunction.Filter = function (Params) {

    switch (Params.Enable) {
        case true:
            $("#btnFilters").removeClass("hide");
            break;

        case false:
            $("#btnFilters").addClass("hide");
            break;
    }
}
/* ==== */

/* ==== */
/* Check Leap Year */
GeneralFunction.CheckLeapYear = function (Year) {
    var IsLeapYear = false;

    try {
        IsLeapYear = new Date(Year, 1, 29).getDate() === 29;
    }
    catch (ex) {
        IsLeapYear = false;
    }
    return IsLeapYear;
}
/* ==== */

/* ==== */
/* Add Days */
GeneralFunction.AddDays = function (t_Date, t_Days) {
    t_Date = new Date(t_Date);
    t_Date.setDate(t_Date.getDate() + t_Days);
    return t_Date;
}
/* ==== */

/* ==== */
/* Get Days From this Month */
GeneralFunction.GetMonthDays = function (t_Date) {

    var t_TotalDays = 0;
    var t_Month = t_Date.getMonth() + 1;

    try {
        if (t_Month == 2) {
            t_TotalDays = GeneralFunction.CheckLeapYear(t_Date.getFullYear()) ? 29 : 28;
        }
        else if (t_Month == 4 || t_Month == 6 || t_Month == 9 || t_Month == 11) {
            t_TotalDays = 30;
        }
        else {
            t_TotalDays = 31;
        }
    } catch (ex) {
        t_TotalDays = 0;
    }
    return t_TotalDays;
}
/* ==== */

/* ==== */
/* Replace Time Ago Keyword */
GeneralFunction.GetTimeAgoCustomization = function (t_TimeAgo) {
    t_TimeAgo = t_TimeAgo.replace("about", "");
    t_TimeAgo = t_TimeAgo.replace("less than", "");
    t_TimeAgo = t_TimeAgo.replace("a ", "1");
    t_TimeAgo = t_TimeAgo.replace("an ", "1");

    t_TimeAgo = t_TimeAgo.replace("hours", "Hrs");
    t_TimeAgo = t_TimeAgo.replace("hour", "Hr");
    t_TimeAgo = t_TimeAgo.replace("minutes ", " min ");
    t_TimeAgo = t_TimeAgo.replace("minute ", " min ");
    return t_TimeAgo;
}
/* ==== */

/* ==== */
/* Set the Routing */
GeneralFunction.SetRouting = function (t_RouteName, t_RouteId) {
    var t_RandomKey = GeneralFunction.GetRandomKey({ Keylength: 10 }).RandomKey;
    GeneralFunction.SetCookies(t_RandomKey, JSON.stringify({ RouteId: t_RouteId }));
    $("#hdnRouteId").val(t_RouteId);
    window.location.hash = "#" + t_RouteName + "-" + t_RandomKey;
}
/* ==== */

/* ==== */
/* Set the Search History */
GeneralFunction.GetSearchHistory = function (t_CookiesName, t_Callback) {

    /* ==== */
    /* Read the Data from Cookies */
    var ObjResponse = GeneralFunction.ReadCookies({ CookieName: t_CookiesName });
    if (ObjResponse.Status == "Success") {

        /* Set Cookies Values */
        var ObjResult = JSON.parse(ObjResponse.CookieValue);

        /* ==== */
        /* Callback to Relevent Function */
        if (t_Callback != "") return t_Callback(ObjResult);
        /* ==== */
    }
    /* ==== */

}
/* ==== */

/* ==== */
/* Get the Current Hash Value */
GeneralFunction.GetCuurentHashName = function () {
    return window.location.hash.replace("#", "")
}
/* ==== */

/* ==== */
/* Is Mobile Devices */
GeneralFunction.IsMobileMode = function () {
    var t_IsMobileDevice = false;
    if ($(".Mobile-Screen").is(":visible")) {
        t_IsMobileDevice = true;
    }
    return t_IsMobileDevice;
}
/* ==== */

/* ==== */
/* User Rights Display Flag */
GeneralFunction.ReadDisplayRights = function () {
    return $("#hdnDisplayRights").val() == "false" ? false : true;
}
/* ==== */

/* ==== */
/* User Rights Add Flag */
GeneralFunction.ReadAddRights = function () {
    return $("#hdnAddRights").val() == "false" ? false : true;
}
/* ==== */

/* ==== */
/* User Rights Edit Rights */
GeneralFunction.ReadEditRights = function () {
    return $("#hdnEditRights").val() == "false" ? false : true;
}
/* ==== */

/* ==== */
/* User Rights Delete Flag */
GeneralFunction.ReadDeleteRights = function () {
    return $("#hdnDeleteRights").val() == "false" ? false : true;
}
/* ==== */


/* ==== */
/* Print a specific element from a document using jQuery */
GeneralFunction.Print = function (t_divToPrint) {

    /* Get the Random Key */
    var t_RandomKey = GeneralFunction.GetRandomKey(16).RandomKey;


    try {

        /* ==== */
        /* Print the specific document */
        var t_popupWin = window.open('', '_blank', 'width=1000,height=800');
        t_popupWin.document.write('<html>' +
            '<head>' +
            '<title>' +
            'Print' +
            '</title>' +
            '<link rel="stylesheet" href="' + window.location.origin + '/Production/css/main.min.css?v=' + t_RandomKey + '">' +
            '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
            '</head>' +
            '<body>' +
            t_divToPrint +
            '<script>' +
            '</script>' +
            '</body>' +
            '</html>');

        setTimeout(function () {
            t_popupWin.close();
        }, 2000);
        setTimeout(function () {
            t_popupWin.print();
        }, 1000);

        /* ==== */

    }
    catch (err) {

        /* ==== */
        /* Exception Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: err.message,
        });
        /* ==== */
    }
}
/* ==== */



/* ==== */
/* Bind the State Matched Cities */
GeneralFunction.GetCities = function (StateName) {

    var optionsList;

    var AndraPradesh = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"];
    var ArunachalPradesh = ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Itanagar"];
    var Assam = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup (Rural)", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];
    var Bihar = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
    var Chhattisgarh = ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"];
    var Goa = ["North Goa", "South Goa"];
    var Gujarat = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"];
    var Haryana = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
    var HimachalPradesh = ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"];
    var JammuKashmir = ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"];
    var Jharkhand = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"];
    var Karnataka = ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Vijayapura", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"];
    var Kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];
    var MadhyaPradesh = ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];
    var Maharashtra = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
    var Manipur = ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"];
    var Meghalaya = ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"];
    var Mizoram = ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"];
    var Nagaland = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"];
    var Odisha = ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"];
    var Punjab = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"];
    var Rajasthan = ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"];
    var Sikkim = ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"];
    var TamilNadu = ["Ariyalur", "Chennai", "Chengalpattu", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];
    var Telangana = ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"];
    var Tripura = ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"];
    var UttarPradesh = ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"];
    var Uttarakhand = ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"];
    var WestBengal = ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];
    var AndamanNicobar = ["Nicobar", "North Middle Andaman", "South Andaman"];
    var Chandigarh = ["Chandigarh"];
    var DadraHaveli = ["Dadra Nagar Haveli"];
    var DamanDiu = ["Daman", "Diu"];
    var Delhi = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"];
    var Lakshadweep = ["Lakshadweep"];
    var Puducherry = ["Karaikal", "Mahe", "Puducherry", "Yanam"];

    switch (StateName) {
        case "Andra Pradesh":
            optionsList = AndraPradesh;
            break;
        case "Arunachal Pradesh":
            optionsList = ArunachalPradesh;
            break;
        case "Assam":
            optionsList = Assam;
            break;
        case "Bihar":
            optionsList = Bihar;
            break;
        case "Chhattisgarh":
            optionsList = Chhattisgarh;
            break;
        case "Goa":
            optionsList = Goa;
            break;
        case "Gujarat":
            optionsList = Gujarat;
            break;
        case "Haryana":
            optionsList = Haryana;
            break;
        case "Himachal Pradesh":
            optionsList = HimachalPradesh;
            break;
        case "Jammu and Kashmir":
            optionsList = JammuKashmir;
            break;
        case "Jharkhand":
            optionsList = Jharkhand;
            break;
        case "Karnataka":
            optionsList = Karnataka;
            break;
        case "Kerala":
            optionsList = Kerala;
            break;
        case "Madya Pradesh":
            optionsList = MadhyaPradesh;
            break;
        case "Maharashtra":
            optionsList = Maharashtra;
            break;
        case "Manipur":
            optionsList = Manipur;
            break;
        case "Meghalaya":
            optionsList = Meghalaya;
            break;
        case "Mizoram":
            optionsList = Mizoram;
            break;
        case "Nagaland":
            optionsList = Nagaland;
            break;
        case "Orissa":
            optionsList = Odisha;
            break;
        case "Punjab":
            optionsList = Punjab;
            break;
        case "Rajasthan":
            optionsList = Rajasthan;
            break;
        case "Sikkim":
            optionsList = Sikkim;
            break;
        case "Tamil Nadu":
            optionsList = TamilNadu;
            break;
        case "Telangana":
            optionsList = Telangana;
            break;
        case "Tripura":
            optionsList = Tripura;
            break;
        case "Uttaranchal":
            optionsList = Uttaranchal;
            break;
        case "Uttar Pradesh":
            optionsList = UttarPradesh;
            break;
        case "West Bengal":
            optionsList = WestBengal;
            break;
        case "Andaman and Nicobar Islands":
            optionsList = AndamanNicobar;
            break;
        case "Chandigarh":
            optionsList = Chandigarh;
            break;
        case "Dadar and Nagar Haveli":
            optionsList = DadraHaveli;
            break;
        case "Daman and Diu":
            optionsList = DamanDiu;
            break;
        case "Delhi":
            optionsList = Delhi;
            break;
        case "Lakshadeep":
            optionsList = Lakshadweep;
            break;
        case "Pondicherry":
            optionsList = Pondicherry;
            break;

        case "All":
            optionsList = [
                ...AndraPradesh, ...ArunachalPradesh, ...Assam, ...Bihar, ...Chhattisgarh,
                ...Goa, ...Gujarat, ...Haryana, ...HimachalPradesh, ...JammuKashmir,
                ...Jharkhand, ...Karnataka, ...Kerala, ...MadhyaPradesh, ...Maharashtra,
                ...Manipur, ...Meghalaya, ...Mizoram, ...Nagaland, ...Odisha, ...Punjab,
                ...Rajasthan, ...Sikkim, ...TamilNadu, ...Telangana, ...Tripura,
                ...UttarPradesh, ...WestBengal, ...AndamanNicobar, ...Chandigarh, ...DadraHaveli,
                ...DamanDiu, ...Delhi, ...Lakshadweep
            ];
            break;
    }
    return optionsList;
}

/* ==== */

/* ==== */
/* Bind the Caste */
GeneralFunction.GetCaste = function () {

    //var CasteText = '["-", "24 Manai Telugu Chettiar", "96 Kuli Maratha", "Aaru Nattu Vellala","Chettiar", "Achirapakkam Chettiar", "Ad Dharmi", "Adi Andhra", "Adi Dravida", "Adi Karnataka", "Agamudayar / Arcot / Thuluva Vellala", "Agaram Vellan Chettiar", "Agarwal", "Agnikula Kshatriya", "Agrahari", "Agri", "Aguri / Ugra Kshatriya", "Aheriya", "Ahir Shimpi", "Ahirwar", "Ahom", "Ambalavasi", "Amil Sindhi", "Amma Kodava", "Anavil Brahmin", "Anjana (Chowdary) Patel", "Arakh / Arakvanshiya", "Aramari / Gabit", "Arekatica", "Arora", "Arunthathiyar", "Arya Vysya", "Asathi", "Audichya Brahmin", "Ayira Vysya", "Ayodhyavasi", "Ayyaraka", "Badaga", "Bagdi", "Baibhand Sindhi", "Baidya", "Bairwa", "Baishnab", "Baishya", "Bajantri", "Balai", "Balija", "Balija Naidu", "Balija Reddy", "Banayat Oriya", "Banik", "Baniya", "Baniya - Bania", "Baniya - Kumuti", "Banjara", "Barai", "Barendra Brahmin", "Bari", "Baria", "Barnwal", "Barujibi", "Beri Chettiar", "Besta", "Bhandari", "Bhanusali Sindhi", "Bhatia", "Bhatia Sindhi", "Bhatraju", "Bhatt Brahmin", "Bhavasar Kshatriya", "Bhil", "Bhoi", "Bhovi", "Bhoyar", "Bhulia / Meher", "Bhumihar Brahmin", "Billava", "Bishnoi/Vishnoi", "Bondili", "Boyar", "Brahmakshtriya", "Brahmbatt", "Brahmin - All", "Brahmin - Anavil", "Brahmin - Anaviln Desai", "Brahmin - Audichya", "Brahmin - Baidhiki/Vaidhiki", "Brahmin - Bardai", "Brahmin - Barendra", "Brahmin - Bhargav", "Brahmin - Bhatt", "Brahmin - Bhumihar", "Brahmin - Dadhich", "Brahmin - Daivadnya", "Brahmin - Danua", "Brahmin - Deshastha", "Brahmin - Dhiman", "Brahmin - Dravida", "Brahmin - Embrandiri", "Brahmin - Garhwali", "Brahmin - Gaur", "Brahmin - Goswami/Gosavi", "Brahmin - Gujar Gaur", "Brahmin - Gurukkal", "Brahmin - Halua", "Brahmin - Havyaka", "Brahmin - Hoysala", "Brahmin - Iyengar", "Brahmin - Iyer", "Brahmin - Jangid", "Brahmin - Jhadua", "Brahmin - Jyotish", "Brahmin - Kanyakubj", "Brahmin - Karhade", "Brahmin - Khadayata", "Brahmin - Khandelwal", "Brahmin - Khedaval", "Brahmin - Kokanastha", "Brahmin - Kota", "Brahmin - Koteshwara / Kota (Madhwa )", "Brahmin - Kulin", "Brahmin - Kumaoni", "Brahmin - Madhwa", "Brahmin - Maithil", "Brahmin - Mevada", "Brahmin - Modh", "Brahmin - Mohyal", "Brahmin - Nagar", "Brahmin - Namboodiri", "Brahmin - Narmadiya", "Brahmin - Niyogi", "Brahmin - Others", "Brahmin - Paliwal", "Brahmin - Panda", "Brahmin - Pandit", "Brahmin - Panicker", "Brahmin - Pareek", "Brahmin - Pushkarna", "Brahmin - Rajgor", "Brahmin - Rarhi", "Brahmin - Rarhi/Radhi", "Brahmin - Rigvedi", "Brahmin - Rudraj", "Brahmin - Sakaldwipi", "Brahmin - Sanadya", "Brahmin - Sanketi", "Brahmin - Saraswat", "Brahmin - Sarua", "Brahmin - Saryuparin", "Brahmin - Shivalli (Madhva)", "Brahmin - Shivhalli", "Brahmin - Shri Gaud", "Brahmin - Shri Mali", "Brahmin - Shrimali", "Brahmin - Shukla Yajurvedi", "Brahmin - Sikhwal", "Brahmin - Smartha", "Brahmin - Sri Vaishnava", "Brahmin - Stanika", "Brahmin - Tapodhan", "Brahmin - Tyagi", "Brahmin - Vaidiki", "Brahmin - Vaikhanasa", "Brahmin - Valam", "Brahmin - Velanadu", "Brahmin - Vyas", "Brahmin - Zalora", "Brahmin Jijhotia", "Brahmin Malviya", "Brajastha Maithil", "Brajastha Maithil", "Bunt (Shetty)", "CKP", "Chakkala Nair", "Chalawadi and Holeya", "Chambhar", "Chandravanshi Kahar", "Charan", "Chasa", "Chattada Sri Vaishnava", "Chaturth", "Chaudary", "Chaurasia", "Chennadasar", "Cherakula Vellalar", "Chettiar", "Chhapru Sindhi", "Chhetri", "Chippolu (Mera)", "Choudhary", "Coorgi", "Dadu Sindhi", "Daivadnya Brahmin", "Danua Brahmin", "Darji", "Dasapalanjika / Kannada Saineegar", "Deshastha Brahmin", "Deshmukh", "Desikar", "Desikar Thanjavur", "Devadiga", "Devandra Kula Vellalar", "Devang Koshthi", "Devanga", "Devanga Chettiar", "Devar/Thevar/Mukkulathor", "Devrukhe Brahmin", "Dhanak", "Dhangar", "Dheevara", "Dhiman", "Dhiman Brahmin", "Dhoba", "Dhobi", "Dhor / Kakkayya", "Dommala", "Dosar / Dusra", "Dravida Brahmin", "Dumal", "Dusadh (Paswan)", "Ediga", "Ediga /Goud (Balija)", "Elur Chetty", "Embrandiri Brahmin", "Ezhava", "Ezhava Panicker", "Ezhava Thandan", "Ezhuthachan", "Gabit", "Gahoi", "Gajula / Kavarai", "Ganda", "Gandha Vanika", "Gandla", "Gandla / Ganiga", "Ganiga", "Garhwali", "Garhwali Brahmin", "Gatti", "Gaur Brahmin", "Gavandi", "Gavara", "Gawali", "Ghisadi", "Ghumar", "Goala", "Goan", "Gomantak", "Gond", "Gondhali", "Gopal / Gopala", "Goswami/Gosavi Brahmin", "Goud", "Gounder", "Gounder - Kongu Vellala Gounder", "Gounder - Nattu Gounder", "Gounder - Others", "Gounder - Urali Gounder", "Gounder - Vanniya Kula Kshatriyar", "Gounder - Vettuva Gounder", "Gowda", "Gowda - Kuruba Gowda", "Gramani", "Gudia", "Gujar Gaur Brahmin", "Gujjar", "Gulahre", "Gupta", "Guptan", "Gurav", "Gurjar", "Gurukkal Brahmin", "Haihaivanshi", "Halba Koshti", "Halua Brahmin", "Havyaka Brahmin", "Heggade", "Helava", "Holar", "Hoysala Brahmin", "Hugar (Jeer)", "Hyderabadi Sindhi", "Illaththu Pillai", "Intercaste", "Irani", "Isai Vellalar", "Iyengar Brahmin", "Iyer Brahmin", "Jaalari", "Jaiswal", "Jandra", "Jangam", "Jangid Brahmin", "Jangra - Brahmin", "Jat", "Jatav", "Jeer", "Jetty/Malla", "Jhadav", "Jhadua Brahmin", "Jijhotia Brahmin", "Jogi (Nath)", "Julaha", "Kachara", "Kadava Patel", "Kadia", "Kahar", "Kaibarta", "Kaikaala", "Kalal", "Kalanji", "Kalar", "Kalinga", "Kalinga Vysya", "Kalita", "Kalwar", "Kamboj", "Kamma", "Kamma Naidu", "Kanakkan Padanna", "Kandara", "Kansari", "Kansyakaar", "Kanyakubj Brahmin", "Kanykubj Bania", "Kapu", "Kapu Naidu", "Kapu Reddy", "Karakala Bhakthula", "Karana", "Karhade Brahmin", "Karkathar", "Karmakar", "Karni Bhakthula", "Karuneegar", "Kasar", "Kasaundhan", "Kashyap", "Kasukara", "Katiya", "Kavara", "Kavuthiyya/Ezhavathy", "Kayastha", "Kayastha (Bengali)", "Kerala Mudali", "Keshri (Kesarwani)", "Khandayat", "Khandelwal", "Kharwa", "Kharwar", "Khatik", "Khatri", "Kirar", "Kodava", "Kodikal Pillai", "Koiri", "Kokanastha Brahmin", "Kokanastha Maratha", "Koli", "Koli Mahadev", "Koli Patel", "Komti /Arya Vaishya", "Kongu Chettiar", "Kongu Nadar", "Kongu Vellala Gounder", "Konkani", "Korama", "Kori", "Kori/Koli", "Kosthi", "Kota Brahmin", "Krishnavaka", "Kshatriya", "Kshatriya Kurmi", "Kshatriya Raju", "Kudumbi", "Kulal", "Kulalar", "Kulin Brahmin", "Kulita", "Kumaoni Brahmin", "Kumaoni Rajput", "Kumawat", "Kumbhakar", "Kumbhar", "Kumhar", "Kummari", "Kunbi", "Kunbi Lonari", "Kunbi Maratha", "Kunbi Tirale", "Kuravan", "Kurmi", "Kurmi/Kurmi Kshatriya", "Kurni", "Kuruba", "Kuruhina Shetty", "Kuruhini Chetty", "Kurumbar", "Kuruva", "Kushwaha (Koiri)", "Kutchi", "Lad", "Lambadi", "Larai Sindhi", "Larkana Sindhi", "Laxminarayan gola", "Leva patel", "Leva patil", "Linga Balija", "Lingayath", "Lodhi Rajput", "Lohana", "Lohana Sindhi", "Lohar", "Loniya", "Lubana", "Madhesiya/Kanu/Halwai", "Madhwa Brahmin", "Madiga", "Mahajan", "Mahar", "Mahendra", "Maheshwari", "Maheshwari / Meshri", "Mahishya", "Mahor", "Mahuri", "Mair Rajput Swarnkar", "Maithil Brahmin", "Majabi", "Mala", "Mali", "Mallah", "Malviya Brahmin", "Malwani", "Mangalorean", "Manipuri", "Manjapudur Chettiar", "Mannadiyar", "Mannan / Velan / Vannan", "Mapila", "Maratha", "Maratha Kshatriya", "Maruthuvar", "Matang", "Mathur", "Mathur Vaishya", "Matia Patel", "Maurya / Shakya", "Meena", "Meenavar", "Meghwal", "Mehra", "Mera", "Meru Darji", "Mochi", "Modak", "Modh Brahmin", "Modh Ghanchi", "Modi", "Modikarlu", "Mogaveera", "Mohyal Brahmin", "Mudaliyar", "Mudiraj", "Mukkulathor", "Munnuru Kapu", "Musukama", "Muthuraja", "Naagavamsam", "Nabit", "Nadar", "Nagar Brahmin", "Nagaralu", "Nai / Nayi Brahmin", "Naicker", "Naicker - Others", "Naicker - Vanniya Kula Kshatriyar", "Naidu", "Naik", "Naika", "Nair", "Namasudra / Namassej", "Nambiar", "Namboodiri Brahmin", "Namdarlu", "Nanjil Mudali", "Nanjil Nattu Vellalar", "Nanjil Vellalar", "Nanjil pillai", "Nankudi Vellalar", "Napit", "Narmadiya Brahmin", "Nath", "Nattu Gounder", "Nattukottai Chettiar", "Nayaka", "Neeli", "Neeli Saali", "Nema", "Nepali", "Nessi", "Nhavi", "Niari", "Niyogi Brahmin", "Odan", "Ontari", "Oraon", "Oswal", "Otari", "Othuvaar", "Padmasali", "Padmashali", "Padmavati Porwal", "Pagadala", "Pal", "Pallan / Devandra Kula Vellalan", "Panan", "Panchal", "Panda Brahmin", "Pandaram", "Pandit Brahmin", "Pandiya Vellalar", "Panicker", "Pannirandam Chettiar", "Paravan / Bharatar", "Parit", "Parkavakulam / Udayar", "Parsi", "Partraj", "Parvatha Rajakulam", "Pasi", "Paswan", "Paswan / Dusadh", "Patel", "Pathare Prabhu", "Patil", "Patnaick/Sistakaranam", "Patra", "Pattinavar", "Pattusali", "Patwa", "Perika", "Perika/Puragiri Kshatriya", "Pillai", "Poddar", "Poosala", "Porwal", "Porwal / Porwar", "Poundra", "Prajapati", "Pulaya / Cheruman", "Pushkarna Brahmin", "Radhi / Niari", "Raigar", "Rajaka / Vannar", "Rajastani", "Rajbhar", "Rajbonshi", "Rajpurohit", "Rajput", "Raju / Kshatriya Raju", "Ramanandi", "Ramdasia", "Ramgariah", "Ramoshi", "Rarhi Brahmin", "Rastogi", "Rathi", "Rauniar", "Ravidasia", "Rawat", "Reddy", "Relli", "Rigvedi Brahmin", "Rohiri Sindhi", "Rohit / Chamar", "Ror", "Rudraj Brahmin", "SC", "SKP", "ST", "Sadgope", "Sadhu Chetty", "Sagara (Uppara)", "Saha", "Sahiti Sindhi", "Sahu", "Saini", "Saiva Pillai Thanjavur", "Saiva Pillai Tirunelveli", "Saiva Vellan chettiar", "Sakaldwipi Brahmin", "Sakkhar Sindhi", "Saliya", "Saliyar", "Samagar", "Sambava", "Sanadya Brahmin", "Sanketi Brahmin", "Saraswat Brahmin", "Saryuparin Brahmin", "Sathwara", "Satnami", "Savji", "Sehwani Sindhi", "Senai Thalaivar", "Senguntha Mudaliyar", "Sengunthar/Kaikolar", "Settibalija", "Setty Balija", "Shah", "Shaw / Sahu/Teli", "Shettigar", "Shetty", "Shikarpuri Sindhi", "Shilpkar", "Shimpi/Namdev", "Shivhalli Brahmin", "Shrimali Brahmin", "Sikhwal Brahmin", "Sindhi", "Sindhi-Amil", "Sindhi-Baibhand", "Sindhi-Bhanusali", "Sindhi-Bhatia", "Sindhi-Chhapru", "Sindhi-Dadu", "Sindhi-Hyderabadi", "Sindhi-Larai", "Sindhi-Larkana", "Sindhi-Lohana", "Sindhi-Rohiri", "Sindhi-Sahiti", "Sindhi-Sakkhar", "Sindhi-Sehwani", "Sindhi-Shikarpuri", "Sindhi-Thatai", "Smartha Brahmin", "Sonar", "Soni", "Sonkar", "Sourashtra", "Sozhia Chetty", "Sozhiya Vellalar", "Sri Vaishnava Brahmin", "Srisayana", "Stanika Brahmin", "Sugali (Naika)", "Sunari", "Sundhi", "Surya Balija", "Suthar", "Swakula Sali", "Swarnakar", "Tamboli", "Tammali", "Tanti", "Tantubai", "Telaga", "Teli", "Telugupatti", "Thakkar", "Thakore", "Thakur", "Thandan", "Tharakan", "Thatai Sindhi", "Thigala", "Thiyya", "Thiyya Thandan", "Thogata Veera Kshatriya", "Thogata Veerakshathriya", "Thondai Mandala Vellalar", "Thota", "Tili", "Togata", "Tonk Kshatriya", "Turupu Kapu", "Tyagi Brahmin", "Ummar / Umre / Bagaria", "Urali Gounder", "Urs", "Vada Balija", "Vadambar", "Vadar", "Vaddera", "Vadugan", "Vaidiki Brahmin", "Vaikhanasa Brahmin", "Vaish", "Vaishnav", "Vaishnav Dishaval", "Vaishnav Kapol", "Vaishnav Khadyata", "Vaishnav Lad", "Vaishnav Modh", "Vaishnav Porvad", "Vaishnav Shrimali", "Vaishnav Sorathaiya", "Vaishnav Vania", "Vaishnava", "Vaishya", "Vaishya Vani", "Valar", "Valluvan", "Valmiki", "Valsad", "Vani", "Vani / Vaishya", "Vania", "Vanika Vyshya", "Vaniya", "Vaniya Chettiar", "Vanjara", "Vanjari", "Vankar", "Vannar", "Vannia Kula Kshatriyar", "Vanyakulakshatriya", "Variar", "Varshney", "Varshney (Barahseni)", "Veera Saivam", "Veerakodi Vellala", "Velaan", "Velama", "Velanadu Brahmin", "Vellala Pillai", "Vellalar", "Vellan Chettiars", "Veluthedathu Nair", "Vettuva Gounder", "Vettuvan", "Vijayvargia", "Vilakithala Nair", "Vilakkithala Nair", "Vishwakarma", "Viswabrahmin", "Vokkaliga", "Vyas Brahmin", "Vysya", "Yadav", "Yadava Naidu", "Yellapu", "Caste no bar"]';
    //var optionsList = JSON.parse(CasteText);
    var optionsList = [
        "Adiyan",
        "Aranadan",
        "Eravallan",
        "Irular",
        "Kadar",
        "Kammara",
        "Kanikaran",
        "Kaniyan",
        "Kattunayakan",
        "Kochu Velan",
        "Konda Kapus",
        "Kondareddis",
        "Koraga",
        "Kota",
        "Kudiya",
        "Kurichchan",
        "Kurumbas",
        "Kurumans",
        "Maha Malasar",
        "Malai Arayan",
        "Malai Pandaram",
        "Malai Vedan",
        "Malakkuravan",
        "Malasar",
        "Malayali",
        "Malayakandi",
        "Mannan",
        "Mudugar",
        "Muthuvan",
        "Pallayan",
        "Palliyan",
        "Palliyar",
        "Paniyan",
        "Sholaga",
        "Toda",
        "Uraly",
        "Adi Dravida",
        "Adi Karnataka",
        "Ajila",
        "Ayyanavar",
        "Baira",
        "Bakuda",
        "Bandi",
        "Bellara",
        "Bharatar",
        "Chalavadi",
        "Chamar",
        "Chandala",
        "Cheruman",
        "Devendrakulathan",
        "Dom",
        "Domban",
        "Godagali",
        "Godda",
        "Gosargi",
        "Holeya",
        "Jaggali",
        "Jambuvulu",
        "Kadaiyan",
        "Kakkalan",
        "Kalladi",
        "Kanakkan",
        "Karimpalan",
        "Kavara",
        "Koliyan",
        "Koosa",
        "Kootan",
        "Kudumban",
        "Kuravan",
        "Maila",
        "Mala",
        "Mannan",
        "Mavilan",
        "Moger",
        "Mundala",
        "Nalakeyava",
        "Nayadi",
        "Padannan",
        "Pallan",
        "Pulluvan",
        "Pambada",
        "Panan",
        "Panchama",
        "Pannadi",
        "Panniandi",
        "Paraiyan",
        "Paravan",
        "Pathiyan",
        "Pulayan",
        "Puthirai Vannan",
        "Raneyar",
        "Samagara",
        "Samban",
        "Sapari",
        "Semman",
        "Thandan",
        "Tiruvalluvar",
        "Vallon",
        "Valluvan",
        "Vannan",
        "Vathiriyan",
        "Velan",
        "Venganur Adi-Dravidar",
        "Veppur Parayan",
        "Vetan",
        "Vettiyan",
        "Vettuvan",
        "Kulala",
        "Vanniyar",
        "SC",
        "Vanniyar",
        "Vanniya",
        "Vannia Gounder",
        "Gounder",
        "Kander",
        "Padayachi",
        "Palli",
        "Agnikula Kshatriya",
        "Meenavar",
        "Parvatharajakulam",
        "Pattanavar",
        "Sembadavar",
        "Mukkuvar",
        "Mukayar",
        "Sathani",
        "Chattadi",
        "Chattada Srivaishnava",
        "Rajakambalam",
        "Gollavar",
        "Sillavar",
        "Thockalavar",
        "Naicker",
        "Thozhuva Naicker",
        "Erragollar",
        "Salaivai Thozhilalar",
        "Agasa",
        "Madivala",
        "Ekali",
        "Rajakula",
        "Veluthadar",
        "Rajaka",
        "Kottar Chetty",
        "Elur Chetty",
        "Pathira Chetty",
        "Valayal Chetty",
        "Pudukadai Chetty",
        "Vaduga Ayar",
        "Vaduga Idaiyar",
        "Golla",
        "Asthanthra Golla",
        "Thattar",
        "Porkollar",
        "Kannar",
        "Karumar",
        "Kollar",
        "Thacher",
        "Kal Thacher",
        "Kamsala",
        "Viswabrahmin",
        "Vellala Gounder",
        "Nattu Gounder",
        "Narambukatti Gounder",
        "Tirumudi Vellalar",
        "Thondu Vellalar",
        "Pala Gounder",
        "Poosari Gounder",
        "Anuppa Vellala Gounder",
        "Padaithalai Gounder",
        "Chendalai Gounder",
        "Pavalankatti Vellala Gounder",
        "Palla Vellala Gounder",
        "Sanku Vellala Gounder",
        "Rathinagiri Gounder",
        "Surithimar",
        "Nathamar",
        "Malayamar",
        "Moopanar",
        "Nainar",
        "Perike",
        "Perike Balija",
        "Sozha Vellalar",
        "Vetrilaikarar",
        "Kodikalkarar",
        "Keeraikarar",
        "Twenty-four Manai Telugu Chetty",
        "Gandla",
        "Ganika",
        "Telikula",
        "Chekkalar",
        "Okkaligar",
        "Kappaliyar",
        "Kappiliya",
        "Okkaliga Gowda",
        "Okkaliya Gowder",
        "Okkaliya-Gowda",
        "Okkaliya Gowda",
        "Kuyavar",
        "Kumbarar"
    ];
    return optionsList;
}

/* ==== */

/* ==== */
/* Bind the Education Qualifications */
GeneralFunction.GetEducationQualifications = function () {

    var optionsList = [
        // School Level
        "SSLC", "HSC", "Diploma", "ITI",

        // Arts & Science
        "B.A - English", "B.A - History", "B.A - Economics",
        "B.Sc - Mathematics", "B.Sc - Physics", "B.Sc - Chemistry", "B.Sc - Computer Science",
        "B.Com - General", "B.Com - Accounting & Finance",

        // Engineering & Technology
        "B.E - Mechanical Engineering", "B.E - Civil Engineering", "B.E - Electrical Engineering",
        "B.E - Electronics and Communication Engineering", "B.E - Computer Science Engineering",
        "B.Tech - Information Technology", "B.Tech - Biotechnology",

        // Medical & Health
        "MBBS", "BDS - Dental", "B.Pharm - Pharmacy", "B.Sc - Nursing",
        "M.Pharm - Pharmacy", "M.Sc - Biotechnology", "M.Sc - Microbiology",

        // Management & Commerce
        "BBA - Business Administration", "MBA - Finance", "MBA - Marketing", "MBA - HR",

        // Law & Professional
        "LLB - Law", "LLM - Master of Law", "CA - Chartered Accountant", "ICWA - Cost Accountant", "CS - Company Secretary",

        // Postgraduate
        "M.A - English", "M.A - History", "M.Sc - Mathematics", "M.Sc - Computer Science",
        "M.Com - Commerce", "M.E - Structural Engineering", "M.Tech - Data Science",

        // Doctorate
        "Ph.D - Mathematics", "Ph.D - Computer Science", "Ph.D - Physics", "Ph.D - Management"
    ];
    return optionsList;
}

/* ==== */



/* ==== */
/* Create Excel Download */
GeneralFunction.CreateExcelDownload = function (Params) {

    /* Declearation */
    var ExcelData = [];
    var ExcelTitle = "";
    var ExcelFileName = "";
    var ExceDataHeaders = [];

    /* Get the Excel Information */
    if (typeof Params.Title !== "undefined") { ExcelTitle = Params.Title; }
    if (typeof Params.Data !== "undefined") { ExcelData = Params.Data; }
    if (typeof Params.FileName !== "undefined") { ExcelFileName = Params.FileName; }

    /* Set Excel First Rows As Header */
    if (ExcelData.length > 0) ExceDataHeaders = ExcelData[0];

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    /* Add the Exce Data Header */
    worksheet.addRow(ExceDataHeaders);

    /* Add the Excel Data */
    ExcelData.forEach(rowData => {
        worksheet.addRow(rowData);
    });

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' },
            };

            // Set font size and color for non-title cells
            cell.font = { size: 12, color: { argb: '000000' } };
            cell.alignment = { horizontal: 'center', vertical: 'middle' }; // Center-align content

            // Set background color for cells
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' }, // Light gray background
            };
        });
    });

    // Merge cells and set the title in the merged cell
    const numColumns = ExceDataHeaders.length;
    worksheet.mergeCells(1, 1, 1, numColumns); // Merge cells A1 to C1
    const titleCell = worksheet.getCell('A1');
    titleCell.value = ExcelTitle;
    titleCell.font = { size: 18, color: { argb: 'FF0000' }, bold: true }; // Set font size, color, and bold
    titleCell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
    };
    titleCell.alignment = { horizontal: 'center', vertical: 'middle' }; // Center-align title
    titleCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF' }, // White background for title
    };
    worksheet.getColumn(1).width = 15 * numColumns; // Adjust column width for the merged area

    /* Set Report Header background color for the entire second row */
    const secondRow = worksheet.getRow(2);
    secondRow.font = { size: 14, color: { argb: '000000' }, bold: true };
    secondRow.eachCell((cell) => {
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFF00' }, // Yellow background for title
        };
    });


    // Set column widths to auto-fit content
    for (let i = 1; i <= numColumns; i++) {
        const column = worksheet.getColumn(i);
        let maxWidth = numColumns;

        column.eachCell({ includeEmpty: true }, (cell) => {
            const cellContentLength = cell.value ? cell.value.toString().length : 0;
            maxWidth = Math.max(maxWidth, cellContentLength);
        });

        column.width = Math.min(maxWidth + 2, 30); // Set a maximum width
    }

    /* Download the Excel File */
    workbook.xlsx.writeBuffer().then(buffer => {

        /* Generate the Excel Blob File */
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        /* Download the Excel File */
        GeneralFunction.DownloadFileFromURL(URL.createObjectURL(blob), ExcelFileName);

    });
}
/* ==== */

/* ==== */
/* Download Files */
GeneralFunction.DownloadFileFromURL = async function (URL, FileName) {

    const link = document.createElement('a')
    link.setAttribute('href', URL)
    link.setAttribute('download', FileName)
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
/* ==== */

/* ==== */
/* Create PDF Download */
GeneralFunction.CreatePDFDownload = function (Params) {
    var PDFData = [];
    var PDFTitle = "";
    var PDFFileName = "";
    var PDFHeadersWidth = [];

    if (typeof Params.Title !== "undefined") { PDFTitle = Params.Title; }
    if (typeof Params.Data !== "undefined") { PDFData = Params.Data; }
    if (typeof Params.FileName !== "undefined") { PDFFileName = Params.FileName; }

    if (PDFData.length > 0) {
        for (var i = 0; i < PDFData[0].length; i++) {
            PDFHeadersWidth.push('auto');
        }
    }

    const docDefinition = {
        pageOrientation: 'portrait',
        //pageMargins: [40, 60, 40, 60], // Adjust page margins as needed
        content: [
            //{
            //    image: 'data:image/jpeg;base64,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', // Replace 'header_image_url.png' with the URL or path of your header image
            //    width: 400, // Set image width to match page width
            //    alignment: 'center'
            //},
            { text: PDFTitle, style: 'title', margin: [0, 20] },
            {
                margin: [0, 0],
                alignment: 'center',
                fontSize: 9, // Reduce font size to 12 points for body text
                table: {
                    headerRows: 1,
                    widths: PDFHeadersWidth,
                    body: PDFData,
                    header: {
                        fillColor: 'yellow',
                        color: 'green',
                        bold: true
                    },
                }
            },
        ],
        styles: {
            title: { fontSize: 16, bold: true, alignment: 'center', margin: [0, 0, 0, 0], color: 'green' },
            tableHeader: { fontSize: 14, fillColor: 'yellow', color: 'black', bold: true, alignment: 'center' },
            body: { fontSize: 10 } // Reduce body font size to 12 points
        },
        footer: function (currentPage, pageCount) {
            // Return footer content
            return {
                text: currentPage.toString() + ' of ' + pageCount,
                alignment: 'center'
            };
        
        }
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.open();
}
/* ==== */

/* Remove the White Space */
GeneralFunction.Trim = function (Value) {
    return Value.trim();
}

/* ==== */
/* Get the Current Hash Value */
GeneralFunction.GetCurrentHashName = function () {
    return window.location.hash.replace("#", "")
}
/* ==== */

/* ==== */
/* Draw Chart */
GeneralFunction.RenderChart = function (Params) {

    try {
        var t_ChartType = Params.ChartType;
        var t_Data = Params.Data;
        var t_Options = Params.options;
        var t_Plugins = Params.plugins;
        var ctx = document.getElementById(Params.TargetId).getContext('2d');
        var config = {};
        if (typeof t_Plugins === "undefined") {
            config = {
                type: t_ChartType,
                data: t_Data,
                options: t_Options
            };
        }
        else {
            config = {
                type: t_ChartType,
                data: t_Data,
                options: t_Options,
                plugins: [t_Plugins]
            };
        }
        var chart = new Chart(ctx, config);
        chart.resize(600, 600);
    }
    catch (err) {

        /* ==== */
        /* Exception Message */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: err.message,
        });
        /* ==== */
    }
}
/* ==== */

/* ==== */
/* Download Fields Selection */
GeneralFunction.CustomFieldsDownload = function (Params) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "480";
    if (windowsize <= 480) {
        width = "95%";
    }

    /* ==== */
    /* Bind the Custom Fields */
    $(".CustomFields").html("");
    if (typeof Params.Fields !== "undefined") {
        /* Merge the Column Details */
        for (var i = 0; i < Params.Fields.length; i++) {

            /* Checkbox Element */
            var t_Input = $(document.createElement("input"));
            t_Input.attr("name", Params.Fields[i].Value);
            t_Input.attr("type", "checkbox");
            t_Input.addClass("ace input-md CustomFieldsCheckbox");
            t_Input.attr("id", "chk" + Params.Fields[i].Value);

            /* Span Element */
            var t_Span = $(document.createElement("Span"));
            t_Span.addClass("lbl");
            t_Span.attr("for", "chk" + Params.Fields[i].Value);
            t_Span.html("&nbsp;" + Params.Fields[i].Text + "&nbsp;&nbsp;&nbsp;");

            var t_Label = $(document.createElement("label"));
            t_Label.addClass("col-xs-6");
            t_Input.appendTo(t_Label);
            t_Span.appendTo(t_Label);
            t_Label.appendTo(".CustomFields");

        }
    }
    /* ==== */

    /* ==== */
    /* Bind the Title */
    if (typeof Params.Title !== "undefined") {
        GeneralFunction.Title = Params.Title;
    }
    /* ==== */

    /* ==== */
    /* Bind the Download Data */
    if (typeof Params.Data !== "undefined") {
        GeneralFunction.DownloadData = Params.Data;
    }
    /* ==== */

    $("#MdlCustomFieldsDownload").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Custom Fields",
        title_html: true,
        buttons: [
            {
                html: "<i class=\"fa fa-file-pdf-o bigger-120\" aria-hidden=\"true\"></i>&nbsp;&nbsp;PDF",
                "class": "btn btn-danger btn-xs btn-round bolder",
                click: function () {

                    /* Get the Selected Field Data */
                    var lst_PDFData = GeneralFunction.GetSelectedFieldData();

                    /* Download As PDF */
                    GeneralFunction.CreatePDFDownload({
                        Title: GeneralFunction.Title + " on " + GeneralFunction.DateFormat(new Date()),
                        Data: lst_PDFData,
                        FileName: GeneralFunction.Title + "_" + GeneralFunction.DateFormat(new Date()),
                    });

                    /* Close the Form */
                    $(this).dialog("close");
                }
            },
            {
                html: "<i class=\"fa fa-file-excel-o bigger-120\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Excel",
                "class": "btn btn-success btn-xs btn-round bolder",
                click: function () {

                    /* Get the Selected Field Data */
                    var lst_ExcelData = GeneralFunction.GetSelectedFieldData();

                    /* Download As Excel */
                    GeneralFunction.CreateExcelDownload({
                        Title: GeneralFunction.Title + " on " + GeneralFunction.DateFormat(new Date()),
                        Data: lst_ExcelData,
                        FileName: GeneralFunction.Title + "_" + GeneralFunction.DateFormat(new Date()),
                    });

                    /* Close the Form */
                    $(this).dialog("close");

                }
            },
            {
                html: "Close",
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
/* Download Fields Selection */
GeneralFunction.CustomFields = function (Params, Callback) {

    var $window = $(window);
    var windowsize = $window.width();
    var width = "600";
    if (windowsize <= 480) {
        width = "95%";
    }

    /* ==== */
    /* Bind the Custom Fields */
    $(".CustomFields").html("");
    if (typeof Params.Fields !== "undefined") {
        /* Merge the Column Details */
        for (var i = 0; i < Params.Fields.length; i++) {

            /* Checkbox Element */
            var t_Input = $(document.createElement("input"));
            t_Input.attr("name", Params.Fields[i].Value);
            t_Input.attr("type", "checkbox");
            t_Input.addClass("ace input-md CustomFieldsCheckbox");
            t_Input.attr("id", "chk" + Params.Fields[i].Value);

            /* Span Element */
            var t_Span = $(document.createElement("Span"));
            t_Span.addClass("lbl");
            t_Span.attr("for", "chk" + Params.Fields[i].Value);
            t_Span.html("&nbsp;" + Params.Fields[i].Text + "&nbsp;&nbsp;&nbsp;");

            var t_Label = $(document.createElement("label"));
            t_Label.addClass("col-xs-6");
            t_Input.appendTo(t_Label);
            t_Span.appendTo(t_Label);
            t_Label.appendTo(".CustomFields");

        }
    }
    $("#chkSelectALL").prop('checked', true);
    $('.CustomFieldsCheckbox').prop('checked', true);
    /* ==== */

    /* ==== */
    /* Bind the Title */
    if (typeof Params.Title !== "undefined") {
        GeneralFunction.Title = Params.Title;
    }
    /* ==== */

    /* ==== */
    /* Bind the Download Data */
    if (typeof Params.Data !== "undefined") {
        GeneralFunction.DownloadData = Params.Data;
    }
    /* ==== */

    $("#MdlCustomFieldsDownload").removeClass('hide').dialog({
        resizable: false,
        width: width,
        modal: true,
        title: "Custom Fields",
        title_html: true,
        buttons: [
            {
                html: "Apply",
                "class": "btn btn-primary btn-xs btn-round bolder",
                click: function () {

                    /* Get the Selected Field Data */
                    var lst_PDFData = GeneralFunction.GetSelectedFieldData();

                    /* Selected Fields */
                    Callback(lst_PDFData[0]);

                    /* Close the Form */
                    $(this).dialog("close");
                }
            },
            {
                html: "Close",
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
/* Get Select Menus List */
GeneralFunction.GetSelectedFields = function () {
    var lstSelectedFields = [];
    $('.CustomFieldsCheckbox:checked').each(function () {
        /* Bind the Fields */
        lstSelectedFields.push({
            Value: $(this).attr("id").replace("chk", ""),
            Text: $(this).parent().text().trim()
        });
    });
    return lstSelectedFields;
}
/* ==== */

/* ==== */
/* Enable / Disabled Custom Fields Checkbox */
GeneralFunction.CustomFieldsSelectAll = function (Params) {
    if ($('#chkSelectALL').is(':checked')) {
        /* Check All Custom Fields Checkbox */
        $('.CustomFieldsCheckbox').prop('checked', true);
    }
    else {
        /* Check All Custom Fields Checkbox */
        $('.CustomFieldsCheckbox').prop('checked', false);
    }
}
/* ==== */

/* ==== */
/* Bind the Selected Column Value */
GeneralFunction.GetSelectedFieldData = function () {

    /* Declearation */
    var lst_Data = [];
    var lst_PDFData = [];

    try {

        /* Get the Download the Data */
        if (typeof GeneralFunction.DownloadData !== "undefined") {
            lst_Data = GeneralFunction.DownloadData;
        }

        /* ==== */
        /* Bind the Table Column Header */
        var lst_SelectedDisplay = GeneralFunction.GetSelectedFields().map(F => F.Text);
        lst_PDFData.push(lst_SelectedDisplay);
        /* ==== */

        /* ==== */
        /* Bind the Selected Fields */
        var lst_SelectedCol = GeneralFunction.GetSelectedFields().map(F => F.Value);
        for (var t_Rows = 0; t_Rows < lst_Data.length; t_Rows++) {
            var lstRows = [];
            for (var t_Col = 0; t_Col < lst_SelectedCol.length; t_Col++) {
                lstRows.push(lst_Data[t_Rows][lst_SelectedCol[t_Col]] == null ? '' : lst_Data[t_Rows][lst_SelectedCol[t_Col]]);
            }
            lst_PDFData.push(lstRows);
        }
        /* ==== */

    }
    catch (e) {

    }
    return lst_PDFData;
}
/* ==== */

/* ==== */
/* Delete All Cookies */
GeneralFunction.DeleteAllCookies = function () {

    /* Clear All Local Storage */
    window.localStorage.clear();

}
/* ===== */


/* ==== */
/* Get Admission Year */
GeneralFunction.GetDefaultAdmissionYear = function () {
    var t_Today = new Date();
    return {
        StartYear: t_Today.getFullYear(),
        EndYear: (t_Today.getFullYear() + 1)
    };
}
/* ==== */

/* ==== */
/* Amount In Words */
GeneralFunction.NumberToWords = function (number) {
    const ones = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    ];
    const teens = [
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
        "", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
        "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    const thousands = ["", "Thousand", "Million", "Billion"];

    if (number === 0) return "Zero";

    let word = "";

    function convertToWords(n, index) {
        if (n === 0) return "";
        let str = "";

        if (n > 99) {
            str += ones[Math.floor(n / 100)] + " Hundred ";
            n %= 100;
        }

        if (n > 10 && n < 20) {
            str += teens[n - 11] + " ";
        } else {
            str += tens[Math.floor(n / 10)] + " ";
            n %= 10;
            str += ones[n] + " ";
        }

        if (n > 0 || str.trim() !== "") {
            str += thousands[index] + " ";
        }

        return str.trim() + " ";
    }

    let index = 0;
    while (number > 0) {
        const chunk = number % 1000;
        if (chunk !== 0) {
            word = convertToWords(chunk, index) + word;
        }
        number = Math.floor(number / 1000);
        index++;
    }

    return word.trim();
}
/* ==== */

/* ==== */
/* Format the Horoscope Box */
GeneralFunction.FormatHoroscopeBox = function (Values) {
    try {
        return Values && Values !== ""
            ? Values.toString().replace(/,\s*/g, ", ") // Ensures proper spacing
            : "";
    }
    catch (e) {
        return Values;
    }
}
/* ==== */

/* ==== */
/* Monthly Income */
GeneralFunction.GetMonthlyIncome = function () {
    var incomeOptions = [];
    for (var i = 15000; i < 500000; i += 5000) {
        incomeOptions.push(i.toString());
    }
    return incomeOptions;
}
/* ==== */
/* ==== */
/* Convert to English to Taglish Format  */
GeneralFunction.ConvertToTaglishFormat = async function (EnglishWords) {
    if (!Array.isArray(EnglishWords) || EnglishWords.length === 0) {
        console.error("Invalid input: Please provide an array of words.");
        return [];
    }

    const transliteratedWords = await Promise.all(EnglishWords.map(async (word) => {
        const url = `https://inputtools.google.com/request?itc=ta-t-i0-und&text=${encodeURIComponent(word)}&num=1`;

        try {
            const response = await fetch(url, { method: "GET" });
            const data = await response.json();

            if (data[0] === "SUCCESS") {
                let translatedWord = data[1][0][1][0]; // Get the first transliterated word

                // Replace "லேட்டா" with "லேட்" in the **final response**
                translatedWord = translatedWord.replace(/லேட்டா/g, "லேட்");

                return translatedWord;
            } else {
                return word; // Return original word if translation fails
            }
        } catch (error) {
            console.error("Error:", error);
            return word; // Return original word on error
        }
    }));

    return transliteratedWords; // Returns the final processed array
}



/* ==== */
/* Remove Initial From Name */
GeneralFunction.RemoveInitial = function(fullName) {
    return fullName.replace(/^[A-Z]\.\s*/, ''); // Removes initial like "S. "
}
/* ==== */

/* ==== */
/* Remove Initial From Name */
GeneralFunction.GetInitialFromWord = function (fullName) {
    // Regular expression to match one uppercase letter followed by a period.
    const regex = /[A-Z]\./g;
    const matches = fullName.match(regex);
    return matches ? matches.join(" ") : "";
}
/* ==== */